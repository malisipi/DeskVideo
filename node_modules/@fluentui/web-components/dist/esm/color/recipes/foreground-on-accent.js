import { black, white } from '../utilities/color-constants';
/**
 * @internal
 */
export function foregroundOnAccent(reference, contrastTarget) {
    return reference.contrast(white) >= contrastTarget ? white : black;
}
export function foregroundOnAccentSet(restFill, hoverFill, activeFill, focusFill, contrastTarget) {
    const defaultRule = fill => (fill.contrast(white) >= contrastTarget ? white : black);
    const restForeground = defaultRule(restFill);
    const hoverForeground = defaultRule(hoverFill);
    // Active doe not have contrast requirements, so if rest and hover use the same color, use that for active even if it would not have passed the contrast check.
    const activeForeground = restForeground.relativeLuminance === hoverForeground.relativeLuminance ? restForeground : defaultRule(activeFill);
    const focusForeground = defaultRule(focusFill);
    return {
        rest: restForeground,
        hover: hoverForeground,
        active: activeForeground,
        focus: focusForeground,
    };
}
