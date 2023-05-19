import { __decorate } from "tslib";
import { attr } from '@microsoft/fast-element';
import { Select as FoundationSelect, selectTemplate as template } from '@microsoft/fast-foundation';
import { fillColor, neutralLayerFloating } from '../design-tokens';
import { selectStyles as styles } from './select.styles';
/**
 * The Fluent select class
 * @internal
 */
export class Select extends FoundationSelect {
    /**
     * @internal
     */
    appearanceChanged(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.classList.add(newValue);
            this.classList.remove(oldValue);
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (!this.appearance) {
            this.appearance = 'outline';
        }
        if (this.listbox) {
            fillColor.setValueFor(this.listbox, neutralLayerFloating);
        }
    }
}
__decorate([
    attr({ mode: 'fromView' })
], Select.prototype, "appearance", void 0);
/**
 * The Fluent select Custom Element. Implements, {@link @microsoft/fast-foundation#Select}
 * {@link @microsoft/fast-foundation#selectTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-select\>
 *
 */
export const fluentSelect = Select.compose({
    baseName: 'select',
    baseClass: FoundationSelect,
    template,
    styles,
    indicator: `
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,
});
/**
 * Styles for Select
 * @public
 */
export const selectStyles = styles;
