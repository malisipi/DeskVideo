import { TextArea as FoundationTextArea } from '@microsoft/fast-foundation';
/**
 * Text area appearances
 * @public
 */
export declare type TextAreaAppearance = 'filled' | 'outline';
/**
 * The Fluent TextArea class
 * @internal
 */
export declare class TextArea extends FoundationTextArea {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: TextAreaAppearance;
    /**
     * @internal
     */
    appearanceChanged(oldValue: TextAreaAppearance, newValue: TextAreaAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * The Fluent Text Area Custom Element. Implements {@link @microsoft/fast-foundation#TextArea},
 * {@link @microsoft/fast-foundation#textAreaTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-area\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare const fluentTextArea: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof TextArea>;
/**
 * Styles for TextArea
 * @public
 */
export declare const textAreaStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
