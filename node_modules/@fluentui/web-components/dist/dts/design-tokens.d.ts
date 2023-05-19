import { DesignToken } from '@microsoft/fast-foundation';
import { Direction } from '@microsoft/fast-web-utilities';
import { Palette } from './color/palette';
import { Swatch } from './color/swatch';
import { InteractiveSwatchSet } from './color/recipe';
/** @public @deprecated Use ColorRecipe instead */
export interface Recipe<T> {
    evaluate(element: HTMLElement, reference?: Swatch): T;
}
/** @public */
export interface ColorRecipe {
    evaluate(element: HTMLElement, reference?: Swatch): Swatch;
}
/** @public */
export interface InteractiveColorRecipe {
    evaluate(element: HTMLElement, reference?: Swatch): InteractiveSwatchSet;
}
/** @public */
export declare const direction: import("@microsoft/fast-foundation").CSSDesignToken<Direction>;
/** @public */
export declare const disabledOpacity: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const baseHeightMultiplier: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const baseHorizontalSpacingMultiplier: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const density: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const designUnit: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const controlCornerRadius: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const layerCornerRadius: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const strokeWidth: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const focusStrokeWidth: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const bodyFont: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const fontWeight: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const typeRampBaseFontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampBaseLineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampBaseFontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampMinus1FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampMinus1LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampMinus1FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampMinus2FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampMinus2LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampMinus2FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus1FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus1LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus1FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus2FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus2LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus2FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus3FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus3LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus3FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus4FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus4LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus4FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus5FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus5LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus5FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus6FontSize: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus6LineHeight: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const typeRampPlus6FontVariations: import("@microsoft/fast-foundation").CSSDesignToken<string>;
/** @public */
export declare const baseLayerLuminance: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public */
export declare const accentFillRestDelta: DesignToken<number>;
/** @public */
export declare const accentFillHoverDelta: DesignToken<number>;
/** @public */
export declare const accentFillActiveDelta: DesignToken<number>;
/** @public */
export declare const accentFillFocusDelta: DesignToken<number>;
/** @public */
export declare const accentForegroundRestDelta: DesignToken<number>;
/** @public */
export declare const accentForegroundHoverDelta: DesignToken<number>;
/** @public */
export declare const accentForegroundActiveDelta: DesignToken<number>;
/** @public */
export declare const accentForegroundFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralFillRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputAltRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputAltHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputAltActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillInputAltFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralFillLayerRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillLayerHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillLayerActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillLayerAltRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillSecondaryRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillSecondaryHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillSecondaryActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillSecondaryFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStealthRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStealthHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStealthActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStealthFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStrongRestDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStrongHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStrongActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralFillStrongFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeRestDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeControlRestDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeControlHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeControlActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeControlFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeDividerRestDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeLayerRestDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeLayerHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeLayerActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeStrongHoverDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeStrongActiveDelta: DesignToken<number>;
/** @public */
export declare const neutralStrokeStrongFocusDelta: DesignToken<number>;
/** @public */
export declare const neutralBaseColor: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralPalette: DesignToken<Palette<Swatch>>;
/** @public */
export declare const accentBaseColor: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentPalette: DesignToken<Palette<Swatch>>;
/** @public */
export declare const neutralLayerCardContainerRecipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralLayerCardContainer: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralLayerFloatingRecipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralLayerFloating: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralLayer1Recipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralLayer1: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralLayer2Recipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralLayer2: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralLayer3Recipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralLayer3: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralLayer4Recipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralLayer4: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const fillColor: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentFillRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const accentFillRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentFillHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentFillActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentFillFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const foregroundOnAccentRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const foregroundOnAccentRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const foregroundOnAccentHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const foregroundOnAccentActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const foregroundOnAccentFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentForegroundRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const accentForegroundRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentForegroundHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentForegroundActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentForegroundFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentStrokeControlRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const accentStrokeControlRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentStrokeControlHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentStrokeControlActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const accentStrokeControlFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillInputRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputAltRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillInputAltRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputAltHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputAltActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillInputAltFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillLayerRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillLayerRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillLayerHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillLayerActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillLayerAltRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillLayerAltRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillSecondaryRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillSecondaryRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillSecondaryHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillSecondaryActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillSecondaryFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStealthRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillStealthRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStealthHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStealthActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStealthFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStrongRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralFillStrongRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStrongHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStrongActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralFillStrongFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralForegroundRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralForegroundRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralForegroundHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralForegroundActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralForegroundFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralForegroundHintRecipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralForegroundHint: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralStrokeRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeControlRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralStrokeControlRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeControlHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeControlActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeControlFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeDividerRecipe: DesignToken<ColorRecipe>;
/** @public */
export declare const neutralStrokeDividerRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeInputRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralStrokeInputRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeInputHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeInputActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeInputFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeLayerRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralStrokeLayerRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeLayerHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeLayerActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeStrongRecipe: DesignToken<InteractiveColorRecipe>;
/** @public */
export declare const neutralStrokeStrongRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeStrongHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeStrongActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const neutralStrokeStrongFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const focusStrokeOuterRecipe: DesignToken<ColorRecipe>;
/** @public */
export declare const focusStrokeOuter: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public */
export declare const focusStrokeInnerRecipe: DesignToken<ColorRecipe>;
/** @public */
export declare const focusStrokeInner: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const foregroundOnAccentLargeRecipe: DesignToken<InteractiveColorRecipe>;
/** @public @deprecated Not used */
export declare const foregroundOnAccentRestLarge: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const foregroundOnAccentHoverLarge: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const foregroundOnAccentActiveLarge: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const foregroundOnAccentFocusLarge: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const neutralFillInverseRestDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Not used */
export declare const neutralFillInverseHoverDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Not used */
export declare const neutralFillInverseActiveDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Not used */
export declare const neutralFillInverseFocusDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Not used */
export declare const neutralFillInverseRecipe: DesignToken<InteractiveColorRecipe>;
/** @public @deprecated Not used */
export declare const neutralFillInverseRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const neutralFillInverseHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const neutralFillInverseActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Not used */
export declare const neutralFillInverseFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use controlCornerRadius */
export declare const cornerRadius: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use layerCornerRadius */
export declare const elevatedCornerRadius: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use strokeWidth */
export declare const outlineWidth: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use focusStrokeWidth */
export declare const focusOutlineWidth: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use neutralFillInverseRestDelta */
export declare const neutralContrastFillRestDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use neutralFillInverseHoverDelta */
export declare const neutralContrastFillHoverDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use neutralFillInverseActiveDelta */
export declare const neutralContrastFillActiveDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use neutralFillInverseFocusDelta */
export declare const neutralContrastFillFocusDelta: import("@microsoft/fast-foundation").CSSDesignToken<number>;
/** @public @deprecated Use neutralFillLayerRestDelta */
export declare const neutralFillCardDelta: DesignToken<number>;
/** @public @deprecated Use neutralFillStrongRestDelta */
export declare const neutralFillToggleRestDelta: DesignToken<number>;
/** @public @deprecated Use neutralFillStrongHoverDelta */
export declare const neutralFillToggleHoverDelta: DesignToken<number>;
/** @public @deprecated Use neutralFillStrongActiveDelta */
export declare const neutralFillToggleActiveDelta: DesignToken<number>;
/** @public @deprecated Use neutralFillStrongFocusDelta */
export declare const neutralFillToggleFocusDelta: DesignToken<number>;
/** @public @deprecated Use neutralStrokeDividerRestDelta */
export declare const neutralDividerRestDelta: DesignToken<number>;
/** @public @deprecated Use neutralLayer1 */
export declare const neutralLayerL1: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralLayer2 */
export declare const neutralLayerL2: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralLayer3 */
export declare const neutralLayerL3: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralLayer4 */
export declare const neutralLayerL4: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use foregroundOnAccentRest */
export declare const accentForegroundCut: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use foregroundOnAccentRestLarge */
export declare const accentForegroundCutLarge: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralStrokeDividerRest */
export declare const neutralDivider: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillLayerRest */
export declare const neutralFillCard: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillInverseRest */
export declare const neutralContrastFillRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillInverseHover */
export declare const neutralContrastFillHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillInverseActive */
export declare const neutralContrastFillActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillInverseFocus */
export declare const neutralContrastFillFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillStrongRest */
export declare const neutralFillToggleRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillStrongHover */
export declare const neutralFillToggleHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillStrongActive */
export declare const neutralFillToggleActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralFillStrongFocus */
export declare const neutralFillToggleFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use focusStrokeOuter */
export declare const neutralFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use focusStrokeInner */
export declare const neutralFocusInnerAccent: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralStrokeRest */
export declare const neutralOutlineRest: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralStrokeHover */
export declare const neutralOutlineHover: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralStrokeActive */
export declare const neutralOutlineActive: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
/** @public @deprecated Use neutralStrokeFocus */
export declare const neutralOutlineFocus: import("@microsoft/fast-foundation").CSSDesignToken<Swatch>;
