import { parseColor } from '@microsoft/fast-colors';
import { html, repeat } from '@microsoft/fast-element';
import { isDark, SwatchRGB } from '../../../../../index-rollup';
function getColor(background) {
    const bg = parseColor(background);
    const darkMode = isDark(SwatchRGB.from(bg));
    return darkMode ? 'white' : 'black';
}
export const gradientTemplate = html `
  <template>
    ${repeat(x => x.colors, html `
        <a
          class="${(x, c) => c.parent.markedColor !== undefined && x.toUpperCase() === c.parent.markedColor.toUpperCase()
    ? 'marked'
    : ''}"
          style="background: ${x => x}; color: ${x => getColor(x)}"
          title="${(x, c) => c.index.toString().concat(': ', x.toUpperCase())}"
        ></a>
      `, { positioning: true })}
  </template>
`;
