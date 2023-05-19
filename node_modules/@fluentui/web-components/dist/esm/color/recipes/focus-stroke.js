import { black, white } from '../utilities/color-constants';
import { isDark } from '../utilities/is-dark';
/**
 * @internal
 */
export function focusStrokeOuter(palette, reference) {
    return isDark(reference) ? white : black;
}
/**
 * @internal
 */
export function focusStrokeInner(palette, reference, focusColor) {
    return isDark(reference) ? black : white;
}
