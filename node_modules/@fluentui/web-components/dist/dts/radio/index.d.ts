import { Radio, RadioOptions } from '@microsoft/fast-foundation';
/**
 * The Fluent Radio Element. Implements {@link @microsoft/fast-foundation#Radio},
 * {@link @microsoft/fast-foundation#radioTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-radio\>
 */
export declare const fluentRadio: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<RadioOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<RadioOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
/**
 * Styles for Radio
 * @public
 */
export declare const RadioStyles: (context: import("@microsoft/fast-foundation").ElementDefinitionContext, definition: RadioOptions) => import("@microsoft/fast-element").ElementStyles;
/**
 * Radio base class
 * @public
 */
export { Radio };
