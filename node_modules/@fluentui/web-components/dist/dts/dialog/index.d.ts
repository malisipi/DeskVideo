import { Dialog } from '@microsoft/fast-foundation';
/**
 * The Fluent Dialog Element. Implements {@link @microsoft/fast-foundation#Dialog},
 * {@link @microsoft/fast-foundation#dialogTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-dialog\>
 */
export declare const fluentDialog: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof Dialog>;
/**
 * Styles for Dialog
 * @public
 */
export declare const dialogStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: import("@microsoft/fast-foundation").FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
/**
 * Base Dialog Class
 * @public
 */
export { Dialog };
