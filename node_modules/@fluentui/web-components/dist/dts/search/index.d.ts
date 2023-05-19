import { Search as FoundationSearch, SearchOptions } from '@microsoft/fast-foundation';
/**
 * Search appearances
 * @public
 */
export declare type SearchAppearance = 'filled' | 'outline';
/**
 * The Fluent search class
 * @internal
 */
export declare class Search extends FoundationSearch {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: SearchAppearance;
}
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
export declare const fluentSearch: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<SearchOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<SearchOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
export * from './search.template';
/**
 * Styles for Search
 * @public
 */
export declare const searchStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: SearchOptions) => import("@microsoft/fast-element").ElementStyles;
