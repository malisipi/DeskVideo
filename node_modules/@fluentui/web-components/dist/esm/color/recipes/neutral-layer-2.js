import { neutralLayer1Index } from './neutral-layer-1';
/**
 * @internal
 */
export function neutralLayer2(palette, baseLayerLuminance, layerDelta) {
    return palette.get(neutralLayer1Index(palette, baseLayerLuminance) + layerDelta * -1);
}
