import { Switch, SwitchOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent Switch Custom Element. Implements {@link @microsoft/fast-foundation#Switch},
 * {@link @microsoft/fast-foundation#SwitchTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-switch\>
 */
export declare const fluentSwitch: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<SwitchOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<SwitchOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for Switch
 * @public
 */
export declare const switchStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: SwitchOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * Switch Base class
 * @public
 */
export { Switch };
