import { clamp, ColorHSL, ColorLAB, ColorRGBA64, hslToRGB, interpolateRGB, labToRGB, rgbToHSL, rgbToLAB, roundToPrecisionSmall, } from '@microsoft/fast-colors';
import { isSwatchRGB, SwatchRGB } from './swatch';
import { binarySearch } from './utilities/binary-search';
import { directionByIsDark } from './utilities/direction-by-is-dark';
import { contrast } from './utilities/relative-luminance';
const defaultPaletteRGBOptions = {
    stepContrast: 1.03,
    stepContrastRamp: 0.03,
    preserveSource: false,
};
function create(rOrSource, g, b) {
    if (typeof rOrSource === 'number') {
        return PaletteRGB.from(SwatchRGB.create(rOrSource, g, b));
    }
    else {
        return PaletteRGB.from(rOrSource);
    }
}
function from(source, options) {
    return isSwatchRGB(source)
        ? PaletteRGBImpl.from(source, options)
        : PaletteRGBImpl.from(SwatchRGB.create(source.r, source.g, source.b), options);
}
/** @public */
export const PaletteRGB = Object.freeze({
    create,
    from,
});
/**
 * A {@link Palette} representing RGB swatch values.
 * @public
 */
class PaletteRGBImpl {
    /**
     *
     * @param source - The source color for the palette
     * @param swatches - All swatches in the palette
     */
    constructor(source, swatches) {
        this.closestIndexCache = new Map();
        this.source = source;
        this.swatches = swatches;
        this.reversedSwatches = Object.freeze([...this.swatches].reverse());
        this.lastIndex = this.swatches.length - 1;
    }
    /**
     * {@inheritdoc Palette.colorContrast}
     */
    colorContrast(reference, contrastTarget, initialSearchIndex, direction) {
        if (initialSearchIndex === undefined) {
            initialSearchIndex = this.closestIndexOf(reference);
        }
        let source = this.swatches;
        const endSearchIndex = this.lastIndex;
        let startSearchIndex = initialSearchIndex;
        if (direction === undefined) {
            direction = directionByIsDark(reference);
        }
        const condition = (value) => contrast(reference, value) >= contrastTarget;
        if (direction === -1) {
            source = this.reversedSwatches;
            startSearchIndex = endSearchIndex - startSearchIndex;
        }
        return binarySearch(source, condition, startSearchIndex, endSearchIndex);
    }
    /**
     * {@inheritdoc Palette.get}
     */
    get(index) {
        return this.swatches[index] || this.swatches[clamp(index, 0, this.lastIndex)];
    }
    /**
     * {@inheritdoc Palette.closestIndexOf}
     */
    closestIndexOf(reference) {
        if (this.closestIndexCache.has(reference.relativeLuminance)) {
            return this.closestIndexCache.get(reference.relativeLuminance);
        }
        let index = this.swatches.indexOf(reference);
        if (index !== -1) {
            this.closestIndexCache.set(reference.relativeLuminance, index);
            return index;
        }
        const closest = this.swatches.reduce((previous, next) => Math.abs(next.relativeLuminance - reference.relativeLuminance) <
            Math.abs(previous.relativeLuminance - reference.relativeLuminance)
            ? next
            : previous);
        index = this.swatches.indexOf(closest);
        this.closestIndexCache.set(reference.relativeLuminance, index);
        return index;
    }
    /**
     * Bump the saturation if it falls below the reference color saturation.
     * @param reference Color with target saturation
     * @param color Color to check and bump if below target saturation
     * @returns Original or adjusted color
     */
    static saturationBump(reference, color) {
        const hslReference = rgbToHSL(reference);
        const saturationTarget = hslReference.s;
        const hslColor = rgbToHSL(color);
        if (hslColor.s < saturationTarget) {
            const hslNew = new ColorHSL(hslColor.h, saturationTarget, hslColor.l);
            return hslToRGB(hslNew);
        }
        return color;
    }
    /**
     * Scales input from 0 to 100 to 0 to 0.5.
     * @param l Input number, 0 to 100
     * @returns Output number, 0 to 0.5
     */
    static ramp(l) {
        const inputval = l / 100;
        if (inputval > 0.5)
            return (inputval - 0.5) / 0.5; //from 0.500001in = 0.00000001out to 1.0in = 1.0out
        return 2 * inputval; //from 0in = 0out to 0.5in = 1.0out
    }
    /**
     * Create a palette following the desired curve and many steps to build a smaller palette from.
     * @param source The source swatch to create a palette from
     * @returns The palette
     */
    static createHighResolutionPalette(source) {
        const swatches = [];
        const labSource = rgbToLAB(ColorRGBA64.fromObject(source).roundToPrecision(4));
        const lab0 = labToRGB(new ColorLAB(0, labSource.a, labSource.b)).clamp().roundToPrecision(4);
        const lab50 = labToRGB(new ColorLAB(50, labSource.a, labSource.b)).clamp().roundToPrecision(4);
        const lab100 = labToRGB(new ColorLAB(100, labSource.a, labSource.b)).clamp().roundToPrecision(4);
        const rgbMin = new ColorRGBA64(0, 0, 0);
        const rgbMax = new ColorRGBA64(1, 1, 1);
        const lAbove = lab100.equalValue(rgbMax) ? 0 : 14;
        const lBelow = lab0.equalValue(rgbMin) ? 0 : 14;
        // 257 levels max, depending on whether lab0 or lab100 are black or white respectively.
        for (let l = 100 + lAbove; l >= 0 - lBelow; l -= 0.5) {
            let rgb;
            if (l < 0) {
                // For L less than 0, scale from black to L=0
                const percentFromRgbMinToLab0 = l / lBelow + 1;
                rgb = interpolateRGB(percentFromRgbMinToLab0, rgbMin, lab0);
            }
            else if (l <= 50) {
                // For L less than 50, we scale from L=0 to the base color
                rgb = interpolateRGB(PaletteRGBImpl.ramp(l), lab0, lab50);
            }
            else if (l <= 100) {
                // For L less than 100, scale from the base color to L=100
                rgb = interpolateRGB(PaletteRGBImpl.ramp(l), lab50, lab100);
            }
            else {
                // For L greater than 100, scale from L=100 to white
                const percentFromLab100ToRgbMax = (l - 100.0) / lAbove;
                rgb = interpolateRGB(percentFromLab100ToRgbMax, lab100, rgbMax);
            }
            rgb = PaletteRGBImpl.saturationBump(lab50, rgb).roundToPrecision(4);
            swatches.push(SwatchRGB.from(rgb));
        }
        return new PaletteRGBImpl(source, swatches);
    }
    /**
     * Adjust one end of the contrast-based palette so it doesn't abruptly fall to black (or white).
     * @param swatchContrast Function to get the target contrast for the next swatch
     * @param referencePalette The high resolution palette
     * @param targetPalette The contrast-based palette to adjust
     * @param direction The end to adjust
     */
    static adjustEnd(swatchContrast, referencePalette, targetPalette, direction) {
        // Careful with the use of referencePalette as only the refSwatches is reversed.
        const refSwatches = direction === -1 ? referencePalette.swatches : referencePalette.reversedSwatches;
        const refIndex = (swatch) => {
            const index = referencePalette.closestIndexOf(swatch);
            return direction === 1 ? referencePalette.lastIndex - index : index;
        };
        // Only operates on the 'end' end of the array, so flip if we're adjusting the 'beginning'
        if (direction === 1) {
            targetPalette.reverse();
        }
        const targetContrast = swatchContrast(targetPalette[targetPalette.length - 2]);
        const actualContrast = roundToPrecisionSmall(contrast(targetPalette[targetPalette.length - 1], targetPalette[targetPalette.length - 2]), 2);
        if (actualContrast < targetContrast) {
            // Remove last swatch if not sufficient contrast
            targetPalette.pop();
            // Distribute to the last swatch
            const safeSecondSwatch = referencePalette.colorContrast(refSwatches[referencePalette.lastIndex], targetContrast, undefined, direction);
            const safeSecondRefIndex = refIndex(safeSecondSwatch);
            const targetSwatchCurrentRefIndex = refIndex(targetPalette[targetPalette.length - 2]);
            const swatchesToSpace = safeSecondRefIndex - targetSwatchCurrentRefIndex;
            let space = 1;
            for (let i = targetPalette.length - swatchesToSpace - 1; i < targetPalette.length; i++) {
                const currentRefIndex = refIndex(targetPalette[i]);
                const nextRefIndex = i === targetPalette.length - 1 ? referencePalette.lastIndex : currentRefIndex + space;
                targetPalette[i] = refSwatches[nextRefIndex];
                space++;
            }
        }
        if (direction === 1) {
            targetPalette.reverse();
        }
    }
    /**
     * Generate a palette with consistent minimum contrast between swatches.
     * @param source The source color
     * @param options Palette generation options
     * @returns A palette meeting the requested contrast between swatches.
     */
    static createColorPaletteByContrast(source, options) {
        const referencePalette = PaletteRGBImpl.createHighResolutionPalette(source);
        // Ramp function to increase contrast as the swatches get darker
        const nextContrast = (swatch) => {
            const c = options.stepContrast + options.stepContrast * (1 - swatch.relativeLuminance) * options.stepContrastRamp;
            return roundToPrecisionSmall(c, 2);
        };
        const swatches = [];
        // Start with the source color or the light end color
        let ref = options.preserveSource ? source : referencePalette.swatches[0];
        swatches.push(ref);
        // Add swatches with contrast toward dark
        do {
            const targetContrast = nextContrast(ref);
            ref = referencePalette.colorContrast(ref, targetContrast, undefined, 1);
            swatches.push(ref);
        } while (ref.relativeLuminance > 0);
        // Add swatches with contrast toward light
        if (options.preserveSource) {
            ref = source;
            do {
                // This is off from the dark direction because `ref` here is the darker swatch, probably subtle
                const targetContrast = nextContrast(ref);
                ref = referencePalette.colorContrast(ref, targetContrast, undefined, -1);
                swatches.unshift(ref);
            } while (ref.relativeLuminance < 1);
        }
        // Validate dark end
        this.adjustEnd(nextContrast, referencePalette, swatches, -1);
        // Validate light end
        if (options.preserveSource) {
            this.adjustEnd(nextContrast, referencePalette, swatches, 1);
        }
        return swatches;
    }
    /**
     * Create a color palette from a provided swatch
     * @param source - The source swatch to create a palette from
     * @returns
     */
    static from(source, options) {
        const opts = options === void 0 || null ? defaultPaletteRGBOptions : Object.assign(Object.assign({}, defaultPaletteRGBOptions), options);
        return new PaletteRGBImpl(source, Object.freeze(PaletteRGBImpl.createColorPaletteByContrast(source, opts)));
    }
}
