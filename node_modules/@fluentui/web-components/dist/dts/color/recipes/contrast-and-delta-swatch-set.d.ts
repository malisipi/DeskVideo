import { Palette } from '../palette';
import { InteractiveSwatchSet } from '../recipe';
import { Swatch } from '../swatch';
/**
 * @internal
 */
export declare function contrastAndDeltaSwatchSet(palette: Palette, reference: Swatch, baseContrast: number, restDelta: number, hoverDelta: number, activeDelta: number, focusDelta: number, direction?: -1 | 1 | null): InteractiveSwatchSet;
/**
 * @internal
 */
export declare function contrastAndDeltaSwatchSetByLuminance(palette: Palette, reference: Swatch, lightBaseContrast: number, lightRestDelta: number, lightHoverDelta: number, lightActiveDelta: number, lightFocusDelta: number, lightDirection: 1 | -1 | null | undefined, darkBaseContrast: number, darkRestDelta: number, darkHoverDelta: number, darkActiveDelta: number, darkFocusDelta: number, darkDirection?: -1 | 1 | undefined | null): InteractiveSwatchSet;
