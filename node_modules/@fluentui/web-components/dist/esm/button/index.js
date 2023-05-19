import { __decorate } from "tslib";
import { attr } from '@microsoft/fast-element';
import { Button as FoundationButton, buttonTemplate as template } from '@microsoft/fast-foundation';
import { buttonStyles as styles } from './button.styles';
/**
 * The Fluent button class
 * @internal
 */
export class Button extends FoundationButton {
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
            this.appearance = 'neutral';
        }
    }
    /**
     * Applies 'icon-only' class when there is only an SVG in the default slot
     *
     * @internal
     */
    defaultSlottedContentChanged() {
        const slottedElements = this.defaultSlottedContent.filter(x => x.nodeType === Node.ELEMENT_NODE);
        if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
            this.control.classList.add('icon-only');
        }
        else {
            this.control.classList.remove('icon-only');
        }
    }
}
__decorate([
    attr
], Button.prototype, "appearance", void 0);
/**
 * The Fluent Button Element. Implements {@link @microsoft/fast-foundation#Button},
 * {@link @microsoft/fast-foundation#buttonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-button\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const fluentButton = Button.compose({
    baseName: 'button',
    baseClass: FoundationButton,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});
/**
 * Styles for Button
 * @public
 */
export const buttonStyles = styles;
