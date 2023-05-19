import { BaseProgress, ProgressOptions } from '@microsoft/fast-foundation';
/**
 * Progress base class
 * @public
 */
export declare class Progress extends BaseProgress {
}
/**
 * The Fluent Progress Element. Implements {@link @microsoft/fast-foundation#BaseProgress},
 * {@link @microsoft/fast-foundation#progressTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-progress\>
 */
export declare const fluentProgress: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<ProgressOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<ProgressOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for Progress
 * @public
 */
export declare const progressStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: ProgressOptions) => import("@microsoft/fast-element").ElementStyles;
