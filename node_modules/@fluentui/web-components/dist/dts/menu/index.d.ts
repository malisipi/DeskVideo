import { Menu as FoundationMenu } from '@microsoft/fast-foundation';
/**
 * The Fluent menu class
 * @public
 */
export declare class Menu extends FoundationMenu {
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * The Fluent Menu Element. Implements {@link @microsoft/fast-foundation#Menu},
 * {@link @microsoft/fast-foundation#menuTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-menu\>
 */
export declare const fluentMenu: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Menu>;
/**
 * Styles for Menu
 * @public
 */
export declare const menuStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
