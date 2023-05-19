import { AccentButtonStyles, baseButtonStyles, HypertextStyles, LightweightButtonStyles, NeutralButtonStyles, OutlineButtonStyles, StealthButtonStyles, } from '../styles/';
import { appearanceBehavior } from '../utilities/behaviors';
const interactivitySelector = '[href]';
export const anchorStyles = (context, definition) => baseButtonStyles(context, definition, interactivitySelector)
    .withBehaviors(appearanceBehavior('neutral', NeutralButtonStyles(context, definition, interactivitySelector)), appearanceBehavior('accent', AccentButtonStyles(context, definition, interactivitySelector)), appearanceBehavior('hypertext', HypertextStyles(context, definition, interactivitySelector)), appearanceBehavior('lightweight', LightweightButtonStyles(context, definition, interactivitySelector)), appearanceBehavior('outline', OutlineButtonStyles(context, definition, interactivitySelector)), appearanceBehavior('stealth', StealthButtonStyles(context, definition, interactivitySelector)));
