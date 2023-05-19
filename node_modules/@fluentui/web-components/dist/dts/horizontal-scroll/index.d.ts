import { HorizontalScroll as FoundationHorizontalScroll, HorizontalScrollOptions } from '@microsoft/fast-foundation';
/**
 * @internal
 */
export declare class HorizontalScroll extends FoundationHorizontalScroll {
    /**
     * @public
     */
    connectedCallback(): void;
}
/**
 * The Fluent HorizontalScroll Element. Implements {@link @microsoft/fast-foundation#HorizontalScroll},
 * {@link @microsoft/fast-foundation#horizontalScrollTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-horizontal-scroll\>
 */
export declare const fluentHorizontalScroll: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<HorizontalScrollOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<HorizontalScrollOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for horizontal scroll
 * @public
 */
export declare const horizontalScrollStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: HorizontalScrollOptions) => import("@microsoft/fast-element").ElementStyles;
