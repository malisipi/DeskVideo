import { ColorRGBA64, rgbToRelativeLuminance } from '@microsoft/fast-colors';
import { contrast } from '../utilities/relative-luminance';
/**
 * An implementation of {@link Swatch} that produces a gradient.
 * This assumes a subtle gradient such that `relativeLuminance` is still meaningful,
 * either with consistent luminance across the steps or a small edge of larger change.
 * @internal
 */
export class GradientSwatchRGB {
    /**
     *
     * @param red Red channel expressed as a number between 0 and 1
     * @param green Green channel expressed as a number between 0 and 1
     * @param blue Blue channel expressed as a number between 0 and 1
     */
    constructor(red, green, blue, cssGradient) {
        this.toColorString = () => this.cssGradient;
        this.contrast = contrast.bind(null, this);
        this.createCSS = this.toColorString;
        this.color = new ColorRGBA64(red, green, blue);
        this.cssGradient = cssGradient;
        this.relativeLuminance = rgbToRelativeLuminance(this.color);
        this.r = red;
        this.g = green;
        this.b = blue;
    }
    /**
     * Creates a GradientSwatch from a base color and gradient definition
     * @param obj The base color object, used for relative luminance
     * @param cssGradient The actual gradient to be rendered
     * @returns New GradientSwatch object
     */
    static fromObject(obj, cssGradient) {
        return new GradientSwatchRGB(obj.r, obj.g, obj.b, cssGradient);
    }
}
