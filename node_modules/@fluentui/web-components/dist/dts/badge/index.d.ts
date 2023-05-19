import { Badge as FoundationBadge } from '@microsoft/fast-foundation';
/**
 * Badge appearance options.
 * @public
 */
export declare type BadgeAppearance = 'accent' | 'lightweight' | 'neutral' | string;
/**
 * The Fluent Badge class
 * @internal
 */
export declare class Badge extends FoundationBadge {
    appearance: BadgeAppearance;
    private appearanceChanged;
}
/**
 * The Fluent Badge Element. Implements {@link @microsoft/fast-foundation#Badge},
 * {@link @microsoft/fast-foundation#badgeTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-badge\>
 */
export declare const fluentBadge: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Badge>;
/**
 * Styles for Badge
 * @public
 */
export declare const badgeStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
