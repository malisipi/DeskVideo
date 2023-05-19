import { Select as FoundationSelect, SelectOptions } from '@microsoft/fast-foundation';
/**
 * Select appearances
 * @public
 */
export declare type SelectAppearance = 'filled' | 'outline' | 'stealth';
/**
 * The Fluent select class
 * @internal
 */
export declare class Select extends FoundationSelect {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: SelectAppearance;
    /**
     * @internal
     */
    appearanceChanged(oldValue: SelectAppearance, newValue: SelectAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * The Fluent select Custom Element. Implements, {@link @microsoft/fast-foundation#Select}
 * {@link @microsoft/fast-foundation#selectTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-select\>
 *
 */
export declare const fluentSelect: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<SelectOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<SelectOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for Select
 * @public
 */
export declare const selectStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: SelectOptions) => import("@microsoft/fast-element").ElementStyles;
