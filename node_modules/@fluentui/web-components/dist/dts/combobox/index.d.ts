import { ComboboxOptions, Combobox as FoundationCombobox } from '@microsoft/fast-foundation';
/**
 * Combobox appearances
 * @public
 */
export declare type ComboboxAppearance = 'filled' | 'outline';
/**
 * The Fluent combobox class
 * @internal
 */
export declare class Combobox extends FoundationCombobox {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: ComboboxAppearance;
    /**
     * @internal
     */
    appearanceChanged(oldValue: ComboboxAppearance, newValue: ComboboxAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * The Fluent Combobox Custom Element. Implements {@link @microsoft/fast-foundation#Combobox},
 * {@link @microsoft/fast-foundation#comboboxTemplate}
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-combobox\>
 *
 */
export declare const fluentCombobox: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<ComboboxOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<ComboboxOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for combobox
 * @public
 */
export declare const comboboxStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: ComboboxOptions) => import("@microsoft/fast-element").ElementStyles;
