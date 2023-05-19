import { ElementStyles } from '@microsoft/fast-element';
import { ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
/**
 * The base styles for input controls, without `appearance` visual differences.
 *
 * @internal
 */
export declare const baseInputStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition, logicalControlSelector: string) => ElementStyles;
/**
 * The styles for active and focus interactions for input controls.
 *
 * @internal
 */
export declare const inputStateStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition, logicalControlSelector: string) => ElementStyles;
/**
 * The visual styles for inputs with `appearance='outline'`.
 *
 * @internal
 */
export declare const inputOutlineStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition, logicalControlSelector: string, interactivitySelector?: string) => ElementStyles;
/**
 * The visual styles for inputs with `appearance='filled'`.
 *
 * @internal
 */
export declare const inputFilledStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition, logicalControlSelector: string, interactivitySelector?: string) => ElementStyles;
/**
 * @internal
 */
export declare const inputForcedColorStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition, logicalControlSelector: string, interactivitySelector?: string) => ElementStyles;
