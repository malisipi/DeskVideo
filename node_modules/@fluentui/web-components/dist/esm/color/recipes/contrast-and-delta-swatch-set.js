import { directionByIsDark } from '../utilities/direction-by-is-dark';
import { isDark } from '../utilities/is-dark';
/**
 * @internal
 */
export function contrastAndDeltaSwatchSet(palette, reference, baseContrast, restDelta, hoverDelta, activeDelta, focusDelta, direction) {
    if (direction === null || direction === void 0) {
        direction = directionByIsDark(reference);
    }
    const baseIndex = palette.closestIndexOf(palette.colorContrast(reference, baseContrast));
    return {
        rest: palette.get(baseIndex + direction * restDelta),
        hover: palette.get(baseIndex + direction * hoverDelta),
        active: palette.get(baseIndex + direction * activeDelta),
        focus: palette.get(baseIndex + direction * focusDelta),
    };
}
/**
 * @internal
 */
export function contrastAndDeltaSwatchSetByLuminance(palette, reference, lightBaseContrast, lightRestDelta, lightHoverDelta, lightActiveDelta, lightFocusDelta, lightDirection = undefined, darkBaseContrast, darkRestDelta, darkHoverDelta, darkActiveDelta, darkFocusDelta, darkDirection = undefined) {
    if (isDark(reference)) {
        return contrastAndDeltaSwatchSet(palette, reference, darkBaseContrast, darkRestDelta, darkHoverDelta, darkActiveDelta, darkFocusDelta, darkDirection);
    }
    else {
        return contrastAndDeltaSwatchSet(palette, reference, lightBaseContrast, lightRestDelta, lightHoverDelta, lightActiveDelta, lightFocusDelta, lightDirection);
    }
}
