import { DesignToken } from '@microsoft/fast-foundation';
import { Swatch } from '../color/swatch';
/**
 * Define shadow algorithms.
 *
 * TODO: The --background-luminance will need to be derived from JavaScript. For now
 * this is hard-coded to a 1, the relative luminance of pure white.
 * https://github.com/microsoft/fast/issues/2778
 * opacity was `calc(.11 * (2 - var(--background-luminance, 1)))`
 *
 * @internal
 * @deprecated Use elevationShadow design token
 */
export declare const ambientShadow = "0 0 2px rgba(0, 0, 0, 0.14)";
/**
 * @internal
 * @deprecated Use elevationShadow design token
 */
export declare const directionalShadow = "0 calc(var(--elevation) * 0.5px) calc((var(--elevation) * 1px)) rgba(0, 0, 0, 0.2)";
/**
 * Applies the box-shadow CSS rule set to the elevation formula.
 * Control this formula with the --elevation CSS Custom Property
 * by setting --elevation to a number.
 *
 * @public
 * @deprecated Use elevationShadow design token
 */
export declare const elevation: string;
/** @public */
export interface ElevationRecipe {
    evaluate(element: HTMLElement, size: number, reference?: Swatch): string;
}
/**
 * @public
 */
export declare const elevationShadowRecipe: DesignToken<ElevationRecipe>;
/** @public */
export declare const elevationShadowCardRestSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowCardHoverSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowCardActiveSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowCardFocusSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowCardRest: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const elevationShadowCardHover: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const elevationShadowCardActive: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const elevationShadowCardFocus: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const elevationShadowTooltipSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowTooltip: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const elevationShadowFlyoutSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowFlyout: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const elevationShadowDialogSize: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const elevationShadowDialog: import("@microsoft/fast-foundation").CSSDesignToken<string>;
