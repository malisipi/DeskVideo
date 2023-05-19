import { Palette } from '../palette';
import { InteractiveSwatchSet } from '../recipe';
import { Swatch } from '../swatch';
/**
 * @internal
 */
export declare function gradientShadowStroke(palette: Palette, reference: Swatch, restDelta: number, hoverDelta: number, activeDelta: number, focusDelta: number, shadowDelta: number, direction?: -1 | 1, shadowPercentage?: number, blendWithReference?: boolean): InteractiveSwatchSet;
