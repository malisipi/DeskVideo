import { MenuItem, MenuItemOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent Menu Item Element. Implements {@link @microsoft/fast-foundation#MenuItem},
 * {@link @microsoft/fast-foundation#menuItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-menu-item\>
 */
export declare const fluentMenuItem: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<MenuItemOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<MenuItemOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for MenuItem
 * @public
 */
export declare const menuItemStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: MenuItemOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * Menu item base class
 * @public
 */
export { MenuItem };
