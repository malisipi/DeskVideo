import { Swatch, SwatchRGB } from './swatch';
import { RelativeLuminance } from './utilities/relative-luminance';
/**
 * A collection of {@link Swatch} instances
 * @public
 */
export interface Palette<T extends Swatch = Swatch> {
    readonly source: T;
    readonly swatches: ReadonlyArray<T>;
    /**
     * Returns a swatch from the palette that most closely matches
     * the contrast ratio provided to a provided reference.
     */
    colorContrast(reference: Swatch, contrast: number, initialIndex?: number, direction?: 1 | -1): T;
    /**
     * Returns the index of the palette that most closely matches
     * the relativeLuminance of the provided swatch
     */
    closestIndexOf(reference: RelativeLuminance): number;
    /**
     * Gets a swatch by index. Index is clamped to the limits
     * of the palette so a Swatch will always be returned.
     */
    get(index: number): T;
}
/**
 * Options to tailor the generation of the color palette.
 * @public
 */
export interface PaletteRGBOptions {
    /**
     * The minimum amount of contrast between steps in the palette. Default 1.03.
     * Recommended increments by hundredths.
     */
    stepContrast: number;
    /**
     * Multiplier for increasing step contrast as the swatches darken. Default 0.03.
     * Recommended increments by hundredths.
     */
    stepContrastRamp: number;
    /**
     * Whether to keep the exact source color in the target palette. Default false.
     * Only recommended when the exact color is required and used in stateful interaction recipes like hover.
     * Note that custom recipes can still access the source color even if it's not in the ramp,
     * but turning this on will potentially increase the contrast between steps toward the ends of the palette.
     */
    preserveSource: boolean;
}
/** @public */
export declare type PaletteRGB = Palette<SwatchRGB>;
/**
 * Creates a PaletteRGB from input R, G, B color values.
 * @param r - Red value represented as a number between 0 and 1.
 * @param g - Green value represented as a number between 0 and 1.
 * @param b - Blue value represented as a number between 0 and 1.
 */
declare function create(r: number, g: number, b: number): PaletteRGB;
/**
 * Creates a PaletteRGB from a source SwatchRGB object.
 * @deprecated - Use PaletteRGB.from()
 */
declare function create(source: SwatchRGB): PaletteRGB;
/**
 * Creates a PaletteRGB from a source color object.
 * @param source - The source color
 */
declare function from(source: SwatchRGB, options?: Partial<PaletteRGBOptions>): PaletteRGB;
/** @public */
export declare const PaletteRGB: Readonly<{
    create: typeof create;
    from: typeof from;
}>;
export {};
