import { ColorRGBA64, rgbToRelativeLuminance } from '@microsoft/fast-colors';
import { contrast } from './utilities/relative-luminance';
/** @public */
export const SwatchRGB = Object.freeze({
    create(r, g, b) {
        return new SwatchRGBImpl(r, g, b);
    },
    from(obj) {
        return new SwatchRGBImpl(obj.r, obj.g, obj.b);
    },
});
/**
 * Runtime test for an objects conformance with the SwatchRGB interface.
 * @internal
 */
export function isSwatchRGB(value) {
    const test = {
        r: 0,
        g: 0,
        b: 0,
        toColorString: () => '',
        contrast: () => 0,
        relativeLuminance: 0,
    };
    for (const key in test) {
        if (typeof test[key] !== typeof value[key]) {
            return false;
        }
    }
    return true;
}
/**
 * An RGB implementation of {@link Swatch}
 * @internal
 */
class SwatchRGBImpl extends ColorRGBA64 {
    /**
     *
     * @param red - Red channel expressed as a number between 0 and 1
     * @param green - Green channel expressed as a number between 0 and 1
     * @param blue - Blue channel expressed as a number between 0 and 1
     */
    constructor(red, green, blue) {
        super(red, green, blue, 1);
        this.toColorString = this.toStringHexRGB;
        this.contrast = contrast.bind(null, this);
        this.createCSS = this.toColorString;
        this.relativeLuminance = rgbToRelativeLuminance(this);
    }
    static fromObject(obj) {
        return new SwatchRGBImpl(obj.r, obj.g, obj.b);
    }
}
