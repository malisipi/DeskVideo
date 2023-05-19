import { Tabs } from '@microsoft/fast-foundation';
/**
 * The Fluent Tabs Custom Element. Implements {@link @microsoft/fast-foundation#Tabs},
 * {@link @microsoft/fast-foundation#tabsTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tabs\>
 */
export declare const fluentTabs: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Tabs>;
export * from './tab';
export * from './tab-panel';
/**
 * Styles for Tabs
 * @public
 */
export declare const tabsStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
/**
 * Tabs base class
 * @public
 */
export { Tabs };
