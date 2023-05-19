import { ElementStyles } from '@microsoft/fast-element';
import { ElementDefinitionContext, SelectOptions } from '@microsoft/fast-foundation';
/**
 * The base styles for a select and combobox, without `appearance` visual differences.
 *
 * @internal
 */
export declare const baseSelectStyles: (context: ElementDefinitionContext, definition: SelectOptions) => ElementStyles;
/**
 * @internal
 */
export declare const baseSelectForcedColorStyles: (context: ElementDefinitionContext, definition: SelectOptions) => ElementStyles;
export declare const selectStyles: (context: ElementDefinitionContext, definition: SelectOptions) => ElementStyles;
