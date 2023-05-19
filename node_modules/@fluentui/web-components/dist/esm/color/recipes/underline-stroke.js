import { directionByIsDark } from '../utilities/direction-by-is-dark';
import { GradientSwatchRGB } from './gradient-swatch';
/**
 * @internal
 */
export function underlineStroke(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta, shadowDelta, width) {
    const referenceIndex = palette.closestIndexOf(reference);
    const direction = directionByIsDark(reference);
    const restIndex = referenceIndex + direction * restDelta;
    const hoverIndex = restIndex + direction * (hoverDelta - restDelta);
    const activeIndex = restIndex + direction * (activeDelta - restDelta);
    const focusIndex = restIndex + direction * (focusDelta - restDelta);
    const midPosition = `calc(100% - ${width})`;
    function gradientHelper(index, applyShadow) {
        const color = palette.get(index);
        if (applyShadow) {
            const underlineColor = palette.get(index + direction * shadowDelta);
            const g = `linear-gradient(${color.toColorString()} ${midPosition}, ${underlineColor.toColorString()} ${midPosition}, ${underlineColor.toColorString()})`;
            return GradientSwatchRGB.fromObject(color, g);
        }
        else {
            return color;
        }
    }
    return {
        rest: gradientHelper(restIndex, true),
        hover: gradientHelper(hoverIndex, true),
        active: gradientHelper(activeIndex, false),
        focus: gradientHelper(focusIndex, true),
    };
}
