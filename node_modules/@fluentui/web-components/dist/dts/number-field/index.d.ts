import { NumberField as FoundationNumberField, NumberFieldOptions } from '@microsoft/fast-foundation';
/**
 * Number field appearances
 * @public
 */
export declare type NumberFieldAppearance = 'filled' | 'outline';
/**
 * The Fluent number field class
 * @internal
 */
export declare class NumberField extends FoundationNumberField {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: NumberFieldAppearance;
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * Styles for NumberField
 * @public
 */
export declare const numberFieldStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: NumberFieldOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * The Fluent Number Field Custom Element. Implements {@link @microsoft/fast-foundation#NumberField},
 * {@link @microsoft/fast-foundation#numberFieldTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-number-field\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare const fluentNumberField: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<NumberFieldOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<NumberFieldOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
