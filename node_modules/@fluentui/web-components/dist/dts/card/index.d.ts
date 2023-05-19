import { Card as FoundationCard } from '@microsoft/fast-foundation';
/**
 * @public
 */
export declare class Card extends FoundationCard {
    /**
     * Fill color for the card component. Sets context for the design system.
     *
     * Updates the neutral palette and sets the card to the source color. For tinting use neutral-palette-source instead.
     * @public
     * @remarks
     * HTML Attribute: card-fill-color
     */
    cardFillColor: string;
    private cardFillColorChanged;
    /**
     * Neutral palette source color for the card component. Sets context for the design system.
     *
     * This allows for tinting the card while maintaining the light or dark context. For a fixed color use card-fill-color instead.
     * @public
     * @remarks
     * HTML Attribute: neutral-palette-source
     */
    neutralPaletteSource: string;
    private neutralPaletteSourceChanged;
    /**
     * @internal
     */
    handleChange(source: any, propertyName: string): void;
    connectedCallback(): void;
}
/**
 * The Fluent Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-card\>
 */
export declare const fluentCard: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Card>;
/**
 * Styles for Card
 * @public
 */
export declare const cardStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
