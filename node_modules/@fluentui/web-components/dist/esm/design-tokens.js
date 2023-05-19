import { DesignToken } from '@microsoft/fast-foundation';
import { Direction } from '@microsoft/fast-web-utilities';
import { PaletteRGB } from './color/palette';
import { foregroundOnAccentSet as foregroundOnAccentSetAlgorithm } from './color/recipes/foreground-on-accent';
import { gradientShadowStroke as gradientShadowStrokeAlgorithm } from './color/recipes/gradient-shadow-stroke';
import { underlineStroke as underlineStrokeAlgorithm } from './color/recipes/underline-stroke';
import { contrastSwatch } from './color/recipes/contrast-swatch';
import { contrastAndDeltaSwatchSet, contrastAndDeltaSwatchSetByLuminance, } from './color/recipes/contrast-and-delta-swatch-set';
import { deltaSwatch } from './color/recipes/delta-swatch';
import { deltaSwatchSet, deltaSwatchSetByLuminance } from './color/recipes/delta-swatch-set';
import { focusStrokeInner as focusStrokeInnerAlgorithm, focusStrokeOuter as focusStrokeOuterAlgorithm, } from './color/recipes/focus-stroke';
import { neutralLayerFloating as neutralLayerFloatingAlgorithm } from './color/recipes/neutral-layer-floating';
import { neutralLayer1 as neutralLayer1Algorithm } from './color/recipes/neutral-layer-1';
import { neutralLayer2 as neutralLayer2Algorithm } from './color/recipes/neutral-layer-2';
import { neutralLayer3 as neutralLayer3Algorithm } from './color/recipes/neutral-layer-3';
import { neutralLayer4 as neutralLayer4Algorithm } from './color/recipes/neutral-layer-4';
import { accentBase, middleGrey } from './color/utilities/color-constants';
import { StandardLuminance } from './color/utilities/base-layer-luminance';
import { directionByIsDark } from './color/utilities/direction-by-is-dark';
import { StandardFontWeight } from './utilities/type-ramp';
const { create } = DesignToken;
function createNonCss(name) {
    return DesignToken.create({ name, cssCustomPropertyName: null });
}
// General tokens
/** @public */
export const direction = create('direction').withDefault(Direction.ltr);
/** @public */
export const disabledOpacity = create('disabled-opacity').withDefault(0.3);
// Density tokens
/** @public */
export const baseHeightMultiplier = create('base-height-multiplier').withDefault(8);
/** @public */
export const baseHorizontalSpacingMultiplier = create('base-horizontal-spacing-multiplier').withDefault(3);
/** @public */
export const density = create('density').withDefault(0);
/** @public */
export const designUnit = create('design-unit').withDefault(4);
// Appearance tokens
/** @public */
export const controlCornerRadius = create('control-corner-radius').withDefault(4);
/** @public */
export const layerCornerRadius = create('layer-corner-radius').withDefault(8);
/** @public */
export const strokeWidth = create('stroke-width').withDefault(1);
/** @public */
export const focusStrokeWidth = create('focus-stroke-width').withDefault(2);
// Typography values
/** @public */
export const bodyFont = create('body-font').withDefault('"Segoe UI Variable", "Segoe UI", sans-serif');
/** @public */
export const fontWeight = create('font-weight').withDefault(StandardFontWeight.Normal);
function fontVariations(sizeToken) {
    return (element) => {
        const size = sizeToken.getValueFor(element);
        const weight = fontWeight.getValueFor(element);
        if (size.endsWith('px')) {
            const px = Number.parseFloat(size.replace('px', ''));
            if (px <= 12) {
                return `"wght" ${weight}, "opsz" 8`;
            }
            else if (px > 24) {
                return `"wght" ${weight}, "opsz" 36`;
            }
        }
        return `"wght" ${weight}, "opsz" 10.5`;
    };
}
/** @public */
export const typeRampBaseFontSize = create('type-ramp-base-font-size').withDefault('14px');
/** @public */
export const typeRampBaseLineHeight = create('type-ramp-base-line-height').withDefault('20px');
/** @public */
export const typeRampBaseFontVariations = create('type-ramp-base-font-variations').withDefault(fontVariations(typeRampBaseFontSize));
/** @public */
export const typeRampMinus1FontSize = create('type-ramp-minus-1-font-size').withDefault('12px');
/** @public */
export const typeRampMinus1LineHeight = create('type-ramp-minus-1-line-height').withDefault('16px');
/** @public */
export const typeRampMinus1FontVariations = create('type-ramp-minus-1-font-variations').withDefault(fontVariations(typeRampMinus1FontSize));
/** @public */
export const typeRampMinus2FontSize = create('type-ramp-minus-2-font-size').withDefault('10px');
/** @public */
export const typeRampMinus2LineHeight = create('type-ramp-minus-2-line-height').withDefault('14px');
/** @public */
export const typeRampMinus2FontVariations = create('type-ramp-minus-2-font-variations').withDefault(fontVariations(typeRampMinus2FontSize));
/** @public */
export const typeRampPlus1FontSize = create('type-ramp-plus-1-font-size').withDefault('16px');
/** @public */
export const typeRampPlus1LineHeight = create('type-ramp-plus-1-line-height').withDefault('22px');
/** @public */
export const typeRampPlus1FontVariations = create('type-ramp-plus-1-font-variations').withDefault(fontVariations(typeRampPlus1FontSize));
/** @public */
export const typeRampPlus2FontSize = create('type-ramp-plus-2-font-size').withDefault('20px');
/** @public */
export const typeRampPlus2LineHeight = create('type-ramp-plus-2-line-height').withDefault('26px');
/** @public */
export const typeRampPlus2FontVariations = create('type-ramp-plus-2-font-variations').withDefault(fontVariations(typeRampPlus2FontSize));
/** @public */
export const typeRampPlus3FontSize = create('type-ramp-plus-3-font-size').withDefault('24px');
/** @public */
export const typeRampPlus3LineHeight = create('type-ramp-plus-3-line-height').withDefault('32px');
/** @public */
export const typeRampPlus3FontVariations = create('type-ramp-plus-3-font-variations').withDefault(fontVariations(typeRampPlus3FontSize));
/** @public */
export const typeRampPlus4FontSize = create('type-ramp-plus-4-font-size').withDefault('28px');
/** @public */
export const typeRampPlus4LineHeight = create('type-ramp-plus-4-line-height').withDefault('36px');
/** @public */
export const typeRampPlus4FontVariations = create('type-ramp-plus-4-font-variations').withDefault(fontVariations(typeRampPlus4FontSize));
/** @public */
export const typeRampPlus5FontSize = create('type-ramp-plus-5-font-size').withDefault('32px');
/** @public */
export const typeRampPlus5LineHeight = create('type-ramp-plus-5-line-height').withDefault('40px');
/** @public */
export const typeRampPlus5FontVariations = create('type-ramp-plus-5-font-variations').withDefault(fontVariations(typeRampPlus5FontSize));
/** @public */
export const typeRampPlus6FontSize = create('type-ramp-plus-6-font-size').withDefault('40px');
/** @public */
export const typeRampPlus6LineHeight = create('type-ramp-plus-6-line-height').withDefault('52px');
/** @public */
export const typeRampPlus6FontVariations = create('type-ramp-plus-6-font-variations').withDefault(fontVariations(typeRampPlus6FontSize));
// Color recipe values
/** @public */
export const baseLayerLuminance = create('base-layer-luminance').withDefault(StandardLuminance.LightMode);
/** @public */
export const accentFillRestDelta = createNonCss('accent-fill-rest-delta').withDefault(0);
/** @public */
export const accentFillHoverDelta = createNonCss('accent-fill-hover-delta').withDefault(-2);
/** @public */
export const accentFillActiveDelta = createNonCss('accent-fill-active-delta').withDefault(-5);
/** @public */
export const accentFillFocusDelta = createNonCss('accent-fill-focus-delta').withDefault(0);
/** @public */
export const accentForegroundRestDelta = createNonCss('accent-foreground-rest-delta').withDefault(0);
/** @public */
export const accentForegroundHoverDelta = createNonCss('accent-foreground-hover-delta').withDefault(3);
/** @public */
export const accentForegroundActiveDelta = createNonCss('accent-foreground-active-delta').withDefault(-8);
/** @public */
export const accentForegroundFocusDelta = createNonCss('accent-foreground-focus-delta').withDefault(0);
/** @public */
export const neutralFillRestDelta = createNonCss('neutral-fill-rest-delta').withDefault(-1);
/** @public */
export const neutralFillHoverDelta = createNonCss('neutral-fill-hover-delta').withDefault(1);
/** @public */
export const neutralFillActiveDelta = createNonCss('neutral-fill-active-delta').withDefault(0);
/** @public */
export const neutralFillFocusDelta = createNonCss('neutral-fill-focus-delta').withDefault(0);
/** @public */
export const neutralFillInputRestDelta = createNonCss('neutral-fill-input-rest-delta').withDefault(-1);
/** @public */
export const neutralFillInputHoverDelta = createNonCss('neutral-fill-input-hover-delta').withDefault(1);
/** @public */
export const neutralFillInputActiveDelta = createNonCss('neutral-fill-input-active-delta').withDefault(0);
/** @public */
export const neutralFillInputFocusDelta = createNonCss('neutral-fill-input-focus-delta').withDefault(-2);
/** @public */
export const neutralFillInputAltRestDelta = createNonCss('neutral-fill-input-alt-rest-delta').withDefault(2);
/** @public */
export const neutralFillInputAltHoverDelta = createNonCss('neutral-fill-input-alt-hover-delta').withDefault(4);
/** @public */
export const neutralFillInputAltActiveDelta = createNonCss('neutral-fill-input-alt-active-delta').withDefault(6);
/** @public */
export const neutralFillInputAltFocusDelta = createNonCss('neutral-fill-input-alt-focus-delta').withDefault(2);
/** @public */
export const neutralFillLayerRestDelta = createNonCss('neutral-fill-layer-rest-delta').withDefault(-2);
/** @public */
export const neutralFillLayerHoverDelta = createNonCss('neutral-fill-layer-hover-delta').withDefault(-3);
/** @public */
export const neutralFillLayerActiveDelta = createNonCss('neutral-fill-layer-active-delta').withDefault(-3);
/** @public */
export const neutralFillLayerAltRestDelta = createNonCss('neutral-fill-layer-alt-rest-delta').withDefault(-1);
/** @public */
export const neutralFillSecondaryRestDelta = createNonCss('neutral-fill-secondary-rest-delta').withDefault(3);
/** @public */
export const neutralFillSecondaryHoverDelta = createNonCss('neutral-fill-secondary-hover-delta').withDefault(2);
/** @public */
export const neutralFillSecondaryActiveDelta = createNonCss('neutral-fill-secondary-active-delta').withDefault(1);
/** @public */
export const neutralFillSecondaryFocusDelta = createNonCss('neutral-fill-secondary-focus-delta').withDefault(3);
/** @public */
export const neutralFillStealthRestDelta = createNonCss('neutral-fill-stealth-rest-delta').withDefault(0);
/** @public */
export const neutralFillStealthHoverDelta = createNonCss('neutral-fill-stealth-hover-delta').withDefault(3);
/** @public */
export const neutralFillStealthActiveDelta = createNonCss('neutral-fill-stealth-active-delta').withDefault(2);
/** @public */
export const neutralFillStealthFocusDelta = createNonCss('neutral-fill-stealth-focus-delta').withDefault(0);
/** @public */
export const neutralFillStrongRestDelta = createNonCss('neutral-fill-strong-rest-delta').withDefault(0);
/** @public */
export const neutralFillStrongHoverDelta = createNonCss('neutral-fill-strong-hover-delta').withDefault(8);
/** @public */
export const neutralFillStrongActiveDelta = createNonCss('neutral-fill-strong-active-delta').withDefault(-5);
/** @public */
export const neutralFillStrongFocusDelta = createNonCss('neutral-fill-strong-focus-delta').withDefault(0);
/** @public */
export const neutralStrokeRestDelta = createNonCss('neutral-stroke-rest-delta').withDefault(8);
/** @public */
export const neutralStrokeHoverDelta = createNonCss('neutral-stroke-hover-delta').withDefault(12);
/** @public */
export const neutralStrokeActiveDelta = createNonCss('neutral-stroke-active-delta').withDefault(6);
/** @public */
export const neutralStrokeFocusDelta = createNonCss('neutral-stroke-focus-delta').withDefault(8);
/** @public */
export const neutralStrokeControlRestDelta = createNonCss('neutral-stroke-control-rest-delta').withDefault(3);
/** @public */
export const neutralStrokeControlHoverDelta = createNonCss('neutral-stroke-control-hover-delta').withDefault(5);
/** @public */
export const neutralStrokeControlActiveDelta = createNonCss('neutral-stroke-control-active-delta').withDefault(5);
/** @public */
export const neutralStrokeControlFocusDelta = createNonCss('neutral-stroke-control-focus-delta').withDefault(5);
/** @public */
export const neutralStrokeDividerRestDelta = createNonCss('neutral-stroke-divider-rest-delta').withDefault(4);
/** @public */
export const neutralStrokeLayerRestDelta = createNonCss('neutral-stroke-layer-rest-delta').withDefault(3);
/** @public */
export const neutralStrokeLayerHoverDelta = createNonCss('neutral-stroke-layer-hover-delta').withDefault(3);
/** @public */
export const neutralStrokeLayerActiveDelta = createNonCss('neutral-stroke-layer-active-delta').withDefault(3);
/** @public */
export const neutralStrokeStrongHoverDelta = createNonCss('neutral-stroke-strong-hover-delta').withDefault(0);
/** @public */
export const neutralStrokeStrongActiveDelta = createNonCss('neutral-stroke-strong-active-delta').withDefault(0);
/** @public */
export const neutralStrokeStrongFocusDelta = createNonCss('neutral-stroke-strong-focus-delta').withDefault(0);
// Color recipes
/** @public */
export const neutralBaseColor = create('neutral-base-color').withDefault(middleGrey);
/** @public */
export const neutralPalette = createNonCss('neutral-palette').withDefault((element) => PaletteRGB.from(neutralBaseColor.getValueFor(element)));
/** @public */
export const accentBaseColor = create('accent-base-color').withDefault(accentBase);
/** @public */
export const accentPalette = createNonCss('accent-palette').withDefault((element) => PaletteRGB.from(accentBaseColor.getValueFor(element)));
// Neutral Layer Card Container
/** @public */
export const neutralLayerCardContainerRecipe = createNonCss('neutral-layer-card-container-recipe').withDefault({
    evaluate: (element) => neutralLayer2Algorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
export const neutralLayerCardContainer = create('neutral-layer-card-container').withDefault((element) => neutralLayerCardContainerRecipe.getValueFor(element).evaluate(element));
// Neutral Layer Floating
/** @public */
export const neutralLayerFloatingRecipe = createNonCss('neutral-layer-floating-recipe').withDefault({
    evaluate: (element) => neutralLayerFloatingAlgorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
export const neutralLayerFloating = create('neutral-layer-floating').withDefault((element) => neutralLayerFloatingRecipe.getValueFor(element).evaluate(element));
// Neutral Layer 1
/** @public */
export const neutralLayer1Recipe = createNonCss('neutral-layer-1-recipe').withDefault({
    evaluate: (element) => neutralLayer1Algorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element)),
});
/** @public */
export const neutralLayer1 = create('neutral-layer-1').withDefault((element) => neutralLayer1Recipe.getValueFor(element).evaluate(element));
// Neutral Layer 2
/** @public */
export const neutralLayer2Recipe = createNonCss('neutral-layer-2-recipe').withDefault({
    evaluate: (element) => neutralLayer2Algorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
export const neutralLayer2 = create('neutral-layer-2').withDefault((element) => neutralLayer2Recipe.getValueFor(element).evaluate(element));
// Neutral Layer 3
/** @public */
export const neutralLayer3Recipe = createNonCss('neutral-layer-3-recipe').withDefault({
    evaluate: (element) => neutralLayer3Algorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
export const neutralLayer3 = create('neutral-layer-3').withDefault((element) => neutralLayer3Recipe.getValueFor(element).evaluate(element));
// Neutral Layer 4
/** @public */
export const neutralLayer4Recipe = createNonCss('neutral-layer-4-recipe').withDefault({
    evaluate: (element) => neutralLayer4Algorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element)),
});
/** @public */
export const neutralLayer4 = create('neutral-layer-4').withDefault((element) => neutralLayer4Recipe.getValueFor(element).evaluate(element));
/** @public */
export const fillColor = create('fill-color').withDefault(element => neutralLayer1.getValueFor(element));
var ContrastTarget;
(function (ContrastTarget) {
    ContrastTarget[ContrastTarget["normal"] = 4.5] = "normal";
    ContrastTarget[ContrastTarget["large"] = 3] = "large";
})(ContrastTarget || (ContrastTarget = {}));
// Accent Fill
/** @public */
export const accentFillRecipe = createNonCss('accent-fill-recipe').withDefault({
    evaluate: (element, reference) => contrastAndDeltaSwatchSetByLuminance(accentPalette.getValueFor(element), reference || fillColor.getValueFor(element), 5, accentFillRestDelta.getValueFor(element), accentFillHoverDelta.getValueFor(element), accentFillActiveDelta.getValueFor(element), accentFillFocusDelta.getValueFor(element), undefined, 8, accentFillRestDelta.getValueFor(element), accentFillHoverDelta.getValueFor(element), accentFillActiveDelta.getValueFor(element), accentFillFocusDelta.getValueFor(element), undefined),
});
/** @public */
export const accentFillRest = create('accent-fill-rest').withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).rest;
});
/** @public */
export const accentFillHover = create('accent-fill-hover').withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).hover;
});
/** @public */
export const accentFillActive = create('accent-fill-active').withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).active;
});
/** @public */
export const accentFillFocus = create('accent-fill-focus').withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).focus;
});
// Foreground On Accent
/** @public */
export const foregroundOnAccentRecipe = createNonCss('foreground-on-accent-recipe').withDefault({
    evaluate: (element) => foregroundOnAccentSetAlgorithm(accentFillRest.getValueFor(element), accentFillHover.getValueFor(element), accentFillActive.getValueFor(element), accentFillFocus.getValueFor(element), ContrastTarget.normal),
});
/** @public */
export const foregroundOnAccentRest = create('foreground-on-accent-rest').withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const foregroundOnAccentHover = create('foreground-on-accent-hover').withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const foregroundOnAccentActive = create('foreground-on-accent-active').withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const foregroundOnAccentFocus = create('foreground-on-accent-focus').withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element).focus);
// Accent Foreground
/** @public */
export const accentForegroundRecipe = createNonCss('accent-foreground-recipe').withDefault({
    evaluate: (element, reference) => contrastAndDeltaSwatchSet(accentPalette.getValueFor(element), reference || fillColor.getValueFor(element), 9.5, accentForegroundRestDelta.getValueFor(element), accentForegroundHoverDelta.getValueFor(element), accentForegroundActiveDelta.getValueFor(element), accentForegroundFocusDelta.getValueFor(element)),
});
/** @public */
export const accentForegroundRest = create('accent-foreground-rest').withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const accentForegroundHover = create('accent-foreground-hover').withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const accentForegroundActive = create('accent-foreground-active').withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const accentForegroundFocus = create('accent-foreground-focus').withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).focus);
// Accent Stroke Control
/** @public */
export const accentStrokeControlRecipe = createNonCss('accent-stroke-control-recipe').withDefault({
    evaluate: (element, reference) => {
        return gradientShadowStrokeAlgorithm(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), -3, -3, -3, -3, 10, 1, undefined, true);
    },
});
/** @public */
export const accentStrokeControlRest = create('accent-stroke-control-rest').withDefault((element) => accentStrokeControlRecipe.getValueFor(element).evaluate(element, accentFillRest.getValueFor(element)).rest);
/** @public */
export const accentStrokeControlHover = create('accent-stroke-control-hover').withDefault((element) => accentStrokeControlRecipe.getValueFor(element).evaluate(element, accentFillHover.getValueFor(element)).hover);
/** @public */
export const accentStrokeControlActive = create('accent-stroke-control-active').withDefault((element) => accentStrokeControlRecipe.getValueFor(element).evaluate(element, accentFillActive.getValueFor(element)).active);
/** @public */
export const accentStrokeControlFocus = create('accent-stroke-control-focus').withDefault((element) => accentStrokeControlRecipe.getValueFor(element).evaluate(element, accentFillFocus.getValueFor(element)).focus);
// Neutral Fill
/** @public */
export const neutralFillRecipe = createNonCss('neutral-fill-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSetByLuminance(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element), neutralFillFocusDelta.getValueFor(element), undefined, 2, 3, 1, 2, undefined),
});
/** @public */
export const neutralFillRest = create('neutral-fill-rest').withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillHover = create('neutral-fill-hover').withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillActive = create('neutral-fill-active').withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillFocus = create('neutral-fill-focus').withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Input
/** @public */
export const neutralFillInputRecipe = createNonCss('neutral-fill-input-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSetByLuminance(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillInputRestDelta.getValueFor(element), neutralFillInputHoverDelta.getValueFor(element), neutralFillInputActiveDelta.getValueFor(element), neutralFillInputFocusDelta.getValueFor(element), undefined, 2, 3, 1, 0, undefined),
});
/** @public */
export const neutralFillInputRest = create('neutral-fill-input-rest').withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillInputHover = create('neutral-fill-input-hover').withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillInputActive = create('neutral-fill-input-active').withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillInputFocus = create('neutral-fill-input-focus').withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Input Alt
/** @public */
export const neutralFillInputAltRecipe = createNonCss('neutral-fill-input-alt-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSetByLuminance(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillInputAltRestDelta.getValueFor(element), neutralFillInputAltHoverDelta.getValueFor(element), neutralFillInputAltActiveDelta.getValueFor(element), neutralFillInputAltFocusDelta.getValueFor(element), 1, neutralFillInputAltRestDelta.getValueFor(element), neutralFillInputAltRestDelta.getValueFor(element) - neutralFillInputAltHoverDelta.getValueFor(element), neutralFillInputAltRestDelta.getValueFor(element) - neutralFillInputAltActiveDelta.getValueFor(element), neutralFillInputAltFocusDelta.getValueFor(element), 1),
});
/** @public */
export const neutralFillInputAltRest = create('neutral-fill-input-alt-rest').withDefault((element) => neutralFillInputAltRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillInputAltHover = create('neutral-fill-input-alt-hover').withDefault((element) => neutralFillInputAltRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillInputAltActive = create('neutral-fill-input-alt-active').withDefault((element) => neutralFillInputAltRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillInputAltFocus = create('neutral-fill-input-alt-focus').withDefault((element) => neutralFillInputAltRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Layer
/** @public */
export const neutralFillLayerRecipe = createNonCss('neutral-fill-layer-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillLayerHoverDelta.getValueFor(element), neutralFillLayerActiveDelta.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), 1),
});
/** @public */
export const neutralFillLayerRest = create('neutral-fill-layer-rest').withDefault((element) => neutralFillLayerRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillLayerHover = create('neutral-fill-layer-hover').withDefault((element) => neutralFillLayerRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillLayerActive = create('neutral-fill-layer-active').withDefault((element) => neutralFillLayerRecipe.getValueFor(element).evaluate(element).active);
// Neutral Fill Layer Alt
/** @public */
export const neutralFillLayerAltRecipe = createNonCss('neutral-fill-layer-alt-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillLayerAltRestDelta.getValueFor(element), neutralFillLayerAltRestDelta.getValueFor(element), neutralFillLayerAltRestDelta.getValueFor(element), neutralFillLayerAltRestDelta.getValueFor(element)),
});
/** @public */
export const neutralFillLayerAltRest = create('neutral-fill-layer-alt-rest').withDefault((element) => neutralFillLayerAltRecipe.getValueFor(element).evaluate(element).rest);
// Neutral Fill Secondary
/** @public */
export const neutralFillSecondaryRecipe = createNonCss('neutral-fill-secondary-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillSecondaryRestDelta.getValueFor(element), neutralFillSecondaryHoverDelta.getValueFor(element), neutralFillSecondaryActiveDelta.getValueFor(element), neutralFillSecondaryFocusDelta.getValueFor(element)),
});
/** @public */
export const neutralFillSecondaryRest = create('neutral-fill-secondary-rest').withDefault((element) => neutralFillSecondaryRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillSecondaryHover = create('neutral-fill-secondary-hover').withDefault((element) => neutralFillSecondaryRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillSecondaryActive = create('neutral-fill-secondary-active').withDefault((element) => neutralFillSecondaryRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillSecondaryFocus = create('neutral-fill-secondary-focus').withDefault((element) => neutralFillSecondaryRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Stealth
/** @public */
export const neutralFillStealthRecipe = createNonCss('neutral-fill-stealth-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillStealthRestDelta.getValueFor(element), neutralFillStealthHoverDelta.getValueFor(element), neutralFillStealthActiveDelta.getValueFor(element), neutralFillStealthFocusDelta.getValueFor(element)),
});
/** @public */
export const neutralFillStealthRest = create('neutral-fill-stealth-rest').withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillStealthHover = create('neutral-fill-stealth-hover').withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillStealthActive = create('neutral-fill-stealth-active').withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillStealthFocus = create('neutral-fill-stealth-focus').withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Fill Strong
/** @public */
export const neutralFillStrongRecipe = createNonCss('neutral-fill-strong-recipe').withDefault({
    evaluate: (element, reference) => contrastAndDeltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), 4.5, neutralFillStrongRestDelta.getValueFor(element), neutralFillStrongHoverDelta.getValueFor(element), neutralFillStrongActiveDelta.getValueFor(element), neutralFillStrongFocusDelta.getValueFor(element)),
});
/** @public */
export const neutralFillStrongRest = create('neutral-fill-strong-rest').withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralFillStrongHover = create('neutral-fill-strong-hover').withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralFillStrongActive = create('neutral-fill-strong-active').withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillStrongFocus = create('neutral-fill-strong-focus').withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Foreground
/** @public */
export const neutralForegroundRecipe = createNonCss('neutral-foreground-recipe').withDefault({
    evaluate: (element, reference) => contrastAndDeltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), 16, 0, -19, -30, 0),
});
/** @public */
export const neutralForegroundRest = create('neutral-foreground-rest').withDefault((element) => neutralForegroundRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralForegroundHover = create('neutral-foreground-hover').withDefault((element) => neutralForegroundRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralForegroundActive = create('neutral-foreground-active').withDefault((element) => neutralForegroundRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralForegroundFocus = create('neutral-foreground-focus').withDefault((element) => neutralForegroundRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Foreground Hint
/** @public */
export const neutralForegroundHintRecipe = createNonCss('neutral-foreground-hint-recipe').withDefault({
    evaluate: (element, reference) => contrastSwatch(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), 4.5),
});
/** @public */
export const neutralForegroundHint = create('neutral-foreground-hint').withDefault((element) => neutralForegroundHintRecipe.getValueFor(element).evaluate(element));
// Neutral Stroke
/** @public */
export const neutralStrokeRecipe = createNonCss('neutral-stroke-recipe').withDefault({
    evaluate: (element, reference) => {
        return deltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeRestDelta.getValueFor(element), neutralStrokeHoverDelta.getValueFor(element), neutralStrokeActiveDelta.getValueFor(element), neutralStrokeFocusDelta.getValueFor(element));
    },
});
/** @public */
export const neutralStrokeRest = create('neutral-stroke-rest').withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralStrokeHover = create('neutral-stroke-hover').withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralStrokeActive = create('neutral-stroke-active').withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralStrokeFocus = create('neutral-stroke-focus').withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Stroke Control
/** @public */
export const neutralStrokeControlRecipe = createNonCss('neutral-stroke-control-recipe').withDefault({
    evaluate: (element, reference) => {
        return gradientShadowStrokeAlgorithm(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeControlRestDelta.getValueFor(element), neutralStrokeControlHoverDelta.getValueFor(element), neutralStrokeControlActiveDelta.getValueFor(element), neutralStrokeControlFocusDelta.getValueFor(element), 5);
    },
});
/** @public */
export const neutralStrokeControlRest = create('neutral-stroke-control-rest').withDefault((element) => neutralStrokeControlRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralStrokeControlHover = create('neutral-stroke-control-hover').withDefault((element) => neutralStrokeControlRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralStrokeControlActive = create('neutral-stroke-control-active').withDefault((element) => neutralStrokeControlRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralStrokeControlFocus = create('neutral-stroke-control-focus').withDefault((element) => neutralStrokeControlRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Stroke Divider
/** @public */
export const neutralStrokeDividerRecipe = createNonCss('neutral-stroke-divider-recipe').withDefault({
    evaluate: (element, reference) => deltaSwatch(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeDividerRestDelta.getValueFor(element)),
});
/** @public */
export const neutralStrokeDividerRest = create('neutral-stroke-divider-rest').withDefault(element => neutralStrokeDividerRecipe.getValueFor(element).evaluate(element));
// Neutral Stroke Input
/** @public */
export const neutralStrokeInputRecipe = createNonCss('neutral-stroke-input-recipe').withDefault({
    evaluate: (element, reference) => {
        return underlineStrokeAlgorithm(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeControlRestDelta.getValueFor(element), neutralStrokeControlHoverDelta.getValueFor(element), neutralStrokeControlActiveDelta.getValueFor(element), neutralStrokeControlFocusDelta.getValueFor(element), 20, strokeWidth.getValueFor(element) + 'px');
    },
});
/** @public */
export const neutralStrokeInputRest = create('neutral-stroke-input-rest').withDefault((element) => neutralStrokeInputRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralStrokeInputHover = create('neutral-stroke-input-hover').withDefault((element) => neutralStrokeInputRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralStrokeInputActive = create('neutral-stroke-input-active').withDefault((element) => neutralStrokeInputRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralStrokeInputFocus = create('neutral-stroke-input-focus').withDefault((element) => neutralStrokeInputRecipe.getValueFor(element).evaluate(element).focus);
// Neutral Stroke Layer
/** @public */
export const neutralStrokeLayerRecipe = createNonCss('neutral-stroke-layer-recipe').withDefault({
    evaluate: (element, reference) => {
        return deltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeLayerRestDelta.getValueFor(element), neutralStrokeLayerHoverDelta.getValueFor(element), neutralStrokeLayerActiveDelta.getValueFor(element), neutralStrokeLayerRestDelta.getValueFor(element));
    },
});
/** @public */
export const neutralStrokeLayerRest = create('neutral-stroke-layer-rest').withDefault((element) => neutralStrokeLayerRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralStrokeLayerHover = create('neutral-stroke-layer-hover').withDefault((element) => neutralStrokeLayerRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralStrokeLayerActive = create('neutral-stroke-layer-active').withDefault((element) => neutralStrokeLayerRecipe.getValueFor(element).evaluate(element).active);
// Neutral Stroke Strong
/** @public */
export const neutralStrokeStrongRecipe = createNonCss('neutral-stroke-strong-recipe').withDefault({
    evaluate: (element, reference) => contrastAndDeltaSwatchSet(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), 5.5, 0, neutralStrokeStrongHoverDelta.getValueFor(element), neutralStrokeStrongActiveDelta.getValueFor(element), neutralStrokeStrongFocusDelta.getValueFor(element)),
});
/** @public */
export const neutralStrokeStrongRest = create('neutral-stroke-strong-rest').withDefault((element) => neutralStrokeStrongRecipe.getValueFor(element).evaluate(element).rest);
/** @public */
export const neutralStrokeStrongHover = create('neutral-stroke-strong-hover').withDefault((element) => neutralStrokeStrongRecipe.getValueFor(element).evaluate(element).hover);
/** @public */
export const neutralStrokeStrongActive = create('neutral-stroke-strong-active').withDefault((element) => neutralStrokeStrongRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralStrokeStrongFocus = create('neutral-stroke-strong-focus').withDefault((element) => neutralStrokeStrongRecipe.getValueFor(element).evaluate(element).focus);
// Focus Stroke Outer
/** @public */
export const focusStrokeOuterRecipe = createNonCss('focus-stroke-outer-recipe').withDefault({
    evaluate: (element) => focusStrokeOuterAlgorithm(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});
/** @public */
export const focusStrokeOuter = create('focus-stroke-outer').withDefault((element) => focusStrokeOuterRecipe.getValueFor(element).evaluate(element));
// Focus Stroke Inner
/** @public */
export const focusStrokeInnerRecipe = createNonCss('focus-stroke-inner-recipe').withDefault({
    evaluate: (element) => focusStrokeInnerAlgorithm(accentPalette.getValueFor(element), fillColor.getValueFor(element), focusStrokeOuter.getValueFor(element)),
});
/** @public */
export const focusStrokeInner = create('focus-stroke-inner').withDefault((element) => focusStrokeInnerRecipe.getValueFor(element).evaluate(element));
// Deprecated tokens
// Foreground On Accent
/** @public @deprecated Not used */
export const foregroundOnAccentLargeRecipe = createNonCss('foreground-on-accent-large-recipe').withDefault({
    evaluate: (element) => foregroundOnAccentSetAlgorithm(accentFillRest.getValueFor(element), accentFillHover.getValueFor(element), accentFillActive.getValueFor(element), accentFillFocus.getValueFor(element), ContrastTarget.large),
});
/** @public @deprecated Not used */
export const foregroundOnAccentRestLarge = create('foreground-on-accent-rest-large').withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element).rest);
/** @public @deprecated Not used */
export const foregroundOnAccentHoverLarge = create('foreground-on-accent-hover-large').withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillHover.getValueFor(element)).hover);
/** @public @deprecated Not used */
export const foregroundOnAccentActiveLarge = create('foreground-on-accent-active-large').withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillActive.getValueFor(element)).active);
/** @public @deprecated Not used */
export const foregroundOnAccentFocusLarge = create('foreground-on-accent-focus-large').withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillFocus.getValueFor(element)).focus);
// Neutral Fill Inverse
/** @public @deprecated Not used */
export const neutralFillInverseRestDelta = create('neutral-fill-inverse-rest-delta').withDefault(0);
/** @public @deprecated Not used */
export const neutralFillInverseHoverDelta = create('neutral-fill-inverse-hover-delta').withDefault(-3);
/** @public @deprecated Not used */
export const neutralFillInverseActiveDelta = create('neutral-fill-inverse-active-delta').withDefault(7);
/** @public @deprecated Not used */
export const neutralFillInverseFocusDelta = create('neutral-fill-inverse-focus-delta').withDefault(0);
/** @deprecated Not used */
function neutralFillInverse(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const direction = directionByIsDark(reference);
    const accessibleIndex = palette.closestIndexOf(palette.colorContrast(reference, 14));
    const accessibleIndex2 = accessibleIndex + direction * Math.abs(restDelta - hoverDelta);
    const indexOneIsRest = direction === 1 ? restDelta < hoverDelta : direction * restDelta > direction * hoverDelta;
    let restIndex;
    let hoverIndex;
    if (indexOneIsRest) {
        restIndex = accessibleIndex;
        hoverIndex = accessibleIndex2;
    }
    else {
        restIndex = accessibleIndex2;
        hoverIndex = accessibleIndex;
    }
    return {
        rest: palette.get(restIndex),
        hover: palette.get(hoverIndex),
        active: palette.get(restIndex + direction * activeDelta),
        focus: palette.get(restIndex + direction * focusDelta),
    };
}
/** @public @deprecated Not used */
export const neutralFillInverseRecipe = createNonCss('neutral-fill-inverse-recipe').withDefault({
    evaluate: (element, reference) => neutralFillInverse(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillInverseRestDelta.getValueFor(element), neutralFillInverseHoverDelta.getValueFor(element), neutralFillInverseActiveDelta.getValueFor(element), neutralFillInverseFocusDelta.getValueFor(element)),
});
/** @public @deprecated Not used */
export const neutralFillInverseRest = create('neutral-fill-inverse-rest').withDefault((element) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).rest);
/** @public @deprecated Not used */
export const neutralFillInverseHover = create('neutral-fill-inverse-hover').withDefault((element) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).hover);
/** @public @deprecated Not used */
export const neutralFillInverseActive = create('neutral-fill-inverse-active').withDefault((element) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).active);
/** @public @deprecated Not used */
export const neutralFillInverseFocus = create('neutral-fill-inverse-focus').withDefault((element) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).focus);
/** @public @deprecated Use controlCornerRadius */
export const cornerRadius = controlCornerRadius;
/** @public @deprecated Use layerCornerRadius */
export const elevatedCornerRadius = layerCornerRadius;
/** @public @deprecated Use strokeWidth */
export const outlineWidth = strokeWidth;
/** @public @deprecated Use focusStrokeWidth */
export const focusOutlineWidth = focusStrokeWidth;
/** @public @deprecated Use neutralFillInverseRestDelta */
export const neutralContrastFillRestDelta = neutralFillInverseRestDelta;
/** @public @deprecated Use neutralFillInverseHoverDelta */
export const neutralContrastFillHoverDelta = neutralFillInverseHoverDelta;
/** @public @deprecated Use neutralFillInverseActiveDelta */
export const neutralContrastFillActiveDelta = neutralFillInverseActiveDelta;
/** @public @deprecated Use neutralFillInverseFocusDelta */
export const neutralContrastFillFocusDelta = neutralFillInverseFocusDelta;
/** @public @deprecated Use neutralFillLayerRestDelta */
export const neutralFillCardDelta = neutralFillLayerRestDelta;
/** @public @deprecated Use neutralFillStrongRestDelta */
export const neutralFillToggleRestDelta = neutralFillStrongRestDelta;
/** @public @deprecated Use neutralFillStrongHoverDelta */
export const neutralFillToggleHoverDelta = neutralFillStrongHoverDelta;
/** @public @deprecated Use neutralFillStrongActiveDelta */
export const neutralFillToggleActiveDelta = neutralFillStrongActiveDelta;
/** @public @deprecated Use neutralFillStrongFocusDelta */
export const neutralFillToggleFocusDelta = neutralFillStrongFocusDelta;
/** @public @deprecated Use neutralStrokeDividerRestDelta */
export const neutralDividerRestDelta = neutralStrokeDividerRestDelta;
/** @public @deprecated Use neutralLayer1 */
export const neutralLayerL1 = neutralLayer1;
/** @public @deprecated Use neutralLayer2 */
export const neutralLayerL2 = neutralLayer2;
/** @public @deprecated Use neutralLayer3 */
export const neutralLayerL3 = neutralLayer3;
/** @public @deprecated Use neutralLayer4 */
export const neutralLayerL4 = neutralLayer4;
/** @public @deprecated Use foregroundOnAccentRest */
export const accentForegroundCut = foregroundOnAccentRest;
/** @public @deprecated Use foregroundOnAccentRestLarge */
export const accentForegroundCutLarge = foregroundOnAccentRestLarge;
/** @public @deprecated Use neutralStrokeDividerRest */
export const neutralDivider = neutralStrokeDividerRest;
/** @public @deprecated Use neutralFillLayerRest */
export const neutralFillCard = neutralFillLayerRest;
/** @public @deprecated Use neutralFillInverseRest */
export const neutralContrastFillRest = neutralFillInverseRest;
/** @public @deprecated Use neutralFillInverseHover */
export const neutralContrastFillHover = neutralFillInverseHover;
/** @public @deprecated Use neutralFillInverseActive */
export const neutralContrastFillActive = neutralFillInverseActive;
/** @public @deprecated Use neutralFillInverseFocus */
export const neutralContrastFillFocus = neutralFillInverseFocus;
/** @public @deprecated Use neutralFillStrongRest */
export const neutralFillToggleRest = neutralFillStrongRest;
/** @public @deprecated Use neutralFillStrongHover */
export const neutralFillToggleHover = neutralFillStrongHover;
/** @public @deprecated Use neutralFillStrongActive */
export const neutralFillToggleActive = neutralFillStrongActive;
/** @public @deprecated Use neutralFillStrongFocus */
export const neutralFillToggleFocus = neutralFillStrongFocus;
/** @public @deprecated Use focusStrokeOuter */
export const neutralFocus = focusStrokeOuter;
/** @public @deprecated Use focusStrokeInner */
export const neutralFocusInnerAccent = focusStrokeInner;
/** @public @deprecated Use neutralStrokeRest */
export const neutralOutlineRest = neutralStrokeRest;
/** @public @deprecated Use neutralStrokeHover */
export const neutralOutlineHover = neutralStrokeHover;
/** @public @deprecated Use neutralStrokeActive */
export const neutralOutlineActive = neutralStrokeActive;
/** @public @deprecated Use neutralStrokeFocus */
export const neutralOutlineFocus = neutralStrokeFocus;
