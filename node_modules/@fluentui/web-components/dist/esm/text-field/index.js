import { __decorate } from "tslib";
import { attr } from '@microsoft/fast-element';
import { TextField as FoundationTextField, textFieldTemplate as template } from '@microsoft/fast-foundation';
import { textFieldStyles as styles } from './text-field.styles';
/**
 * The Fluent text field class
 * @internal
 */
export class TextField extends FoundationTextField {
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
    }
}
__decorate([
    attr
], TextField.prototype, "appearance", void 0);
/**
 * The Fluent Text Field Custom Element. Implements {@link @microsoft/fast-foundation#TextField},
 * {@link @microsoft/fast-foundation#textFieldTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-field\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const fluentTextField = TextField.compose({
    baseName: 'text-field',
    baseClass: FoundationTextField,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});
/**
 * Styles for TextField
 * @public
 */
export const textFieldStyles = styles;
