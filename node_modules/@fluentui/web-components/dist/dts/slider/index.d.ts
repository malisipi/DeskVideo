import { Slider, SliderOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent Slider Custom Element. Implements {@link @microsoft/fast-foundation#(Slider:class)},
 * {@link @microsoft/fast-foundation#sliderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider\>
 */
export declare const fluentSlider: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<SliderOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<SliderOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for Slider
 * @public
 */
export declare const sliderStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: SliderOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * Slider base class
 * @public
 */
export { Slider };
