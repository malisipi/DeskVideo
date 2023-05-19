import { TextField as FoundationTextField } from '@microsoft/fast-foundation';
/**
 * Text field appearances
 * @public
 */
export declare type TextFieldAppearance = 'filled' | 'outline';
/**
 * The Fluent text field class
 * @internal
 */
export declare class TextField extends FoundationTextField {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: TextFieldAppearance;
    /**
     * @internal
     */
    appearanceChanged(oldValue: TextFieldAppearance, newValue: TextFieldAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * The Fluent Text Field Custom Element. Implements {@link @microsoft/fast-foundation#TextField},
 * {@link @microsoft/fast-foundation#textFieldTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-field\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare const fluentTextField: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof TextField>;
/**
 * Styles for TextField
 * @public
 */
export declare const textFieldStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
