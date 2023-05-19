import { __decorate } from "tslib";
import { attr } from '@microsoft/fast-element';
import { Search as FoundationSearch } from '@microsoft/fast-foundation';
import { searchTemplate as template } from './search.template';
import { searchStyles as styles } from './search.styles';
/**
 * The Fluent search class
 * @internal
 */
export class Search extends FoundationSearch {
    constructor() {
        super(...arguments);
        /**
         * The appearance of the element.
         *
         * @public
         * @remarks
         * HTML Attribute: appearance
         */
        this.appearance = 'outline';
    }
}
__decorate([
    attr
], Search.prototype, "appearance", void 0);
/**
 * The Fluent Search Custom Element. Implements {@link @microsoft/fast-foundation#Search},
 * {@link @microsoft/fast-foundation#searchTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-search\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const fluentSearch = Search.compose({
    baseName: 'search',
    baseClass: FoundationSearch,
    template,
    styles,
    start: `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>`,
    shadowOptions: {
        delegatesFocus: true,
    },
});
export * from './search.template';
/**
 * Styles for Search
 * @public
 */
export const searchStyles = styles;
