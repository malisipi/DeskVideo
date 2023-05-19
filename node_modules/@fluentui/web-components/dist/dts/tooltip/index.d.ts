import { Tooltip as FoundationTooltip } from '@microsoft/fast-foundation';
/**
 * The Fluent tooltip class
 * @internal
 */
export declare class Tooltip extends FoundationTooltip {
    /**
     * @internal
     */
    connectedCallback(): void;
}
/**
 * The Fluent Tooltip Custom Element. Implements {@link @microsoft/fast-foundation#Tooltip},
 * {@link @microsoft/fast-foundation#tooltipTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tooltip\>
 */
export declare const fluentTooltip: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Tooltip>;
