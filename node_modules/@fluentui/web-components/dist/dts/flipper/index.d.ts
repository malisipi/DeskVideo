import { Flipper, FlipperOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent Flipper Element. Implements {@link @microsoft/fast-foundation#Flipper},
 * {@link @microsoft/fast-foundation#flipperTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-flipper\>
 */
export declare const fluentFlipper: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<FlipperOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<FlipperOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for Flipper
 * @public
 */
export declare const flipperStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: FlipperOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * Base class for Flipper
 * @public
 */
export { Flipper };
