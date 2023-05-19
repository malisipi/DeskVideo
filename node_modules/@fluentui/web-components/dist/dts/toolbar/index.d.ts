import { Toolbar as FoundationToolbar } from '@microsoft/fast-foundation';
/**
 * The Fluent toolbar class
 * @internal
 */
export declare class Toolbar extends FoundationToolbar {
}
/**
 * The Fluent Toolbar Custom Element. Implements {@link @microsoft/fast-foundation#Toolbar},
 * {@link @microsoft/fast-foundation#toolbarTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-toolbar\>
 */
export declare const fluentToolbar: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Toolbar>;
