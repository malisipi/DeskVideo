import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { designUnit, neutralForegroundRest } from '../design-tokens';
import { typeRampBase } from '../styles/patterns/type-ramp';
export const accordionStyles = (context, definition) => css `
    ${display('flex')} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${typeRampBase}
      color: ${neutralForegroundRest};
      gap: calc(${designUnit} * 1px);
    }
  `;
