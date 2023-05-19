import { Button as FoundationButton } from '@microsoft/fast-foundation';
/**
 * Types of button appearance.
 * @public
 */
export declare type ButtonAppearance = 'accent' | 'lightweight' | 'neutral' | 'outline' | 'stealth';
/**
 * The Fluent button class
 * @internal
 */
export declare class Button extends FoundationButton {
    /**
     * The appearance the button should have.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: ButtonAppearance;
    appearanceChanged(oldValue: ButtonAppearance, newValue: ButtonAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
    /**
     * Applies 'icon-only' class when there is only an SVG in the default slot
     *
     * @internal
     */
    defaultSlottedContentChanged(): void;
}
/**
 * The Fluent Button Element. Implements {@link @microsoft/fast-foundation#Button},
 * {@link @microsoft/fast-foundation#buttonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-button\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare const fluentButton: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Button>;
/**
 * Styles for Button
 * @public
 */
export declare const buttonStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
