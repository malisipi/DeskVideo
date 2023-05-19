import { Swatch } from '../swatch';
import { Palette } from '../palette';
/**
 * Color algorithm using a delta from the reference color.
 *
 * @param palette - The palette to operate on
 * @param reference - The reference color
 * @param delta - The offset from the reference
 *
 * @internal
 */
export declare function deltaSwatch(palette: Palette, reference: Swatch, delta: number): Swatch;
