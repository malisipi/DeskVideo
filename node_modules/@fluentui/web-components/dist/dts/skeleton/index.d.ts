import { Skeleton } from '@microsoft/fast-foundation';
/**
 * The Fluent Skeleton Element. Implements {@link @microsoft/fast-foundation#Skeleton},
 * {@link @microsoft/fast-foundation#skeletonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-skeleton\>
 */
export declare const fluentSkeleton: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Skeleton>;
/**
 * Styles for Skeleton
 * @public
 */
export declare const skeletonStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
/**
 * Skeleton base class
 * @public
 */
export { Skeleton };
