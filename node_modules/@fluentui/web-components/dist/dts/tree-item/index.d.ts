import { TreeItem, TreeItemOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent tree item Custom Element. Implements, {@link @microsoft/fast-foundation#TreeItem}
 * {@link @microsoft/fast-foundation#treeItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tree-item\>
 *
 */
export declare const fluentTreeItem: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<TreeItemOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<TreeItemOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for TreeItem
 * @public
 */
export declare const treeItemStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: TreeItemOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * Tree item base class
 * @public
 */
export { TreeItem };
