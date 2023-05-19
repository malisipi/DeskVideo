import { neutralLayer1Index } from './neutral-layer-1';
/**
 * @internal
 */
export function neutralLayer3(palette, baseLayerLuminance, layerDelta) {
    return palette.get(neutralLayer1Index(palette, baseLayerLuminance) + layerDelta * -1 * 2);
}
