import { SwatchRGB } from '../swatch';
export function baseLayerLuminanceSwatch(luminance) {
    return SwatchRGB.create(luminance, luminance, luminance);
}
/**
 * Recommended values for light and dark mode for {@link @fluentui/web-components#baseLayerLuminance}.
 *
 * @public
 */
export var StandardLuminance;
(function (StandardLuminance) {
    StandardLuminance[StandardLuminance["LightMode"] = 0.98] = "LightMode";
    StandardLuminance[StandardLuminance["DarkMode"] = 0.15] = "DarkMode";
})(StandardLuminance || (StandardLuminance = {}));
