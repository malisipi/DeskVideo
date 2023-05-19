import { __decorate } from "tslib";
import { attr } from '@microsoft/fast-element';
import { Anchor as FoundationAnchor, anchorTemplate as template } from '@microsoft/fast-foundation';
import { anchorStyles as styles } from './anchor.styles';
/**
 * The Fluent version of Anchor
 * @internal
 */
export class Anchor extends FoundationAnchor {
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
        var _a, _b;
        const slottedElements = this.defaultSlottedContent.filter(x => x.nodeType === Node.ELEMENT_NODE);
        if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
            (_a = this.control) === null || _a === void 0 ? void 0 : _a.classList.add('icon-only');
        }
        else {
            (_b = this.control) === null || _b === void 0 ? void 0 : _b.classList.remove('icon-only');
        }
    }
}
__decorate([
    attr
], Anchor.prototype, "appearance", void 0);
/**
 * Styles for Anchor
 * @public
 */
export const anchorStyles = styles;
/**
 * The Fluent Anchor Element. Implements {@link @microsoft/fast-foundation#Anchor},
 * {@link @microsoft/fast-foundation#anchorTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-anchor\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const fluentAnchor = Anchor.compose({
    baseName: 'anchor',
    baseClass: FoundationAnchor,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});
