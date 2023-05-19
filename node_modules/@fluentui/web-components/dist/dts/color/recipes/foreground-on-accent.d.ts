import { Swatch } from '../swatch';
/**
 * @internal
 */
export declare function foregroundOnAccent(reference: Swatch, contrastTarget: number): import("../swatch").SwatchRGB;
export declare function foregroundOnAccentSet(restFill: Swatch, hoverFill: Swatch, activeFill: Swatch, focusFill: Swatch, contrastTarget: number): {
    rest: import("../swatch").SwatchRGB;
    hover: import("../swatch").SwatchRGB;
    active: import("../swatch").SwatchRGB;
    focus: import("../swatch").SwatchRGB;
};
