import { Accordion } from '@microsoft/fast-foundation';
export * from './accordion-item/index';
/**
 * The Fluent Accordion Element. Implements {@link @microsoft/fast-foundation#Accordion},
 * {@link @microsoft/fast-foundation#accordionTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-accordion\>
 */
export declare const fluentAccordion: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Accordion>;
/**
 * Styles for Accordion
 * @public
 */
export declare const accordionStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
/**
 * Base class for Accordion
 * @public
 */
export { Accordion };
