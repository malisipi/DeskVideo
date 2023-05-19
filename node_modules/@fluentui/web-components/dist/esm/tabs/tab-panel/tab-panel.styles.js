import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { density, designUnit } from '../../design-tokens';
import { typeRampBase } from '../../styles/patterns/type-ramp';
export const tabPanelStyles = (context, definition) => css `
  ${display('block')} :host {
    box-sizing: border-box;
    ${typeRampBase}
    padding: 0 calc((6 + (${designUnit} * 2 * ${density})) * 1px);
  }
`;
