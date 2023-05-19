import { Listbox as FoundationListboxElement } from '@microsoft/fast-foundation';
export declare class Listbox extends FoundationListboxElement {
}
/**
 * The Fluent listbox Custom Element. Implements, {@link @microsoft/fast-foundation#Listbox}
 * {@link @microsoft/fast-foundation#listboxTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-listbox\>
 *
 */
export declare const fluentListbox: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Listbox>;
/**
 * Styles for Listbox
 * @public
 */
export declare const listboxStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
