import { AccordionItem, AccordionItemOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent Accordion Item Element. Implements {@link @microsoft/fast-foundation#AccordionItem},
 * {@link @microsoft/fast-foundation#accordionItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-accordion-item\>
 */
export declare const fluentAccordionItem: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<AccordionItemOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<AccordionItemOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for AccordionItem
 * @public
 */
export declare const accordionItemStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: AccordionItemOptions) => import("@microsoft/fast-element").ElementStyles;
export { AccordionItem };
