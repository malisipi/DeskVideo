import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { typeRampBase } from '../styles/patterns/type-ramp';
export const breadcrumbStyles = (context, definition) => css `
  ${display('inline-block')} :host {
    box-sizing: border-box;
    ${typeRampBase};
  }

  .list {
    display: flex;
  }
`;
