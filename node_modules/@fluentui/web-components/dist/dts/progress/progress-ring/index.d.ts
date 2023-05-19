import { BaseProgress, ProgressRingOptions } from '@microsoft/fast-foundation';
/**
 * Progress Ring base class
 * @public
 */
export declare class ProgressRing extends BaseProgress {
}
/**
 * The Fluent Progress Ring Element. Implements {@link @microsoft/fast-foundation#BaseProgress},
 * {@link @microsoft/fast-foundation#progressRingTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-progress-ring\>
 */
export declare const fluentProgressRing: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<ProgressRingOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<ProgressRingOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for ProgressRing
 * @public
 */
export declare const progressRingStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: ProgressRingOptions) => import("@microsoft/fast-element").ElementStyles;
