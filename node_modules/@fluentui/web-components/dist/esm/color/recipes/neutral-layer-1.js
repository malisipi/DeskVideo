import { baseLayerLuminanceSwatch } from '../utilities/base-layer-luminance';
/**
 * @internal
 */
export function neutralLayer1Index(palette, baseLayerLuminance) {
    return palette.closestIndexOf(baseLayerLuminanceSwatch(baseLayerLuminance));
}
/**
 * @internal
 */
export function neutralLayer1(palette, baseLayerLuminance) {
    return palette.get(neutralLayer1Index(palette, baseLayerLuminance));
}
