import { css } from '@microsoft/fast-element';
import { display, ListboxOption } from '@microsoft/fast-foundation';
import { controlCornerRadius, designUnit, neutralStrokeRest, strokeWidth, } from '../design-tokens';
import { focusTreatmentBase } from '../styles/focus';
export const listboxStyles = (context, definition) => css `
    ${display('inline-flex')} :host {
      border: calc(${strokeWidth} * 1px) solid ${neutralStrokeRest};
      border-radius: calc(${controlCornerRadius} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${designUnit} * 1px) 0;
    }

    ::slotted(${context.tagFor(ListboxOption)}) {
      margin: 0 calc(${designUnit} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${focusTreatmentBase}
    }
  `;
