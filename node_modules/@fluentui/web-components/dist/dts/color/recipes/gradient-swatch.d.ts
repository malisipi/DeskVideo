import { SwatchRGB } from '../swatch';
/**
 * An implementation of {@link Swatch} that produces a gradient.
 * This assumes a subtle gradient such that `relativeLuminance` is still meaningful,
 * either with consistent luminance across the steps or a small edge of larger change.
 * @internal
 */
export declare class GradientSwatchRGB implements SwatchRGB {
    private color;
    private cssGradient;
    readonly relativeLuminance: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    /**
     *
     * @param red Red channel expressed as a number between 0 and 1
     * @param green Green channel expressed as a number between 0 and 1
     * @param blue Blue channel expressed as a number between 0 and 1
     */
    constructor(red: number, green: number, blue: number, cssGradient: string);
    toColorString: () => string;
    contrast: any;
    createCSS: () => string;
    /**
     * Creates a GradientSwatch from a base color and gradient definition
     * @param obj The base color object, used for relative luminance
     * @param cssGradient The actual gradient to be rendered
     * @returns New GradientSwatch object
     */
    static fromObject(obj: {
        r: number;
        g: number;
        b: number;
    }, cssGradient: string): GradientSwatchRGB;
}
