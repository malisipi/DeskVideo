import { __decorate } from "tslib";
import { attr } from '@microsoft/fast-element';
import { TextArea as FoundationTextArea, textAreaTemplate as template } from '@microsoft/fast-foundation';
import { textAreaStyles as styles } from './text-area.styles';
/**
 * The Fluent TextArea class
 * @internal
 */
export class TextArea extends FoundationTextArea {
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
], TextArea.prototype, "appearance", void 0);
/**
 * The Fluent Text Area Custom Element. Implements {@link @microsoft/fast-foundation#TextArea},
 * {@link @microsoft/fast-foundation#textAreaTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-area\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const fluentTextArea = TextArea.compose({
    baseName: 'text-area',
    baseClass: FoundationTextArea,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});
/**
 * Styles for TextArea
 * @public
 */
export const textAreaStyles = styles;
