import { __decorate } from "tslib";
import { composedParent, Card as FoundationCard, cardTemplate as template } from '@microsoft/fast-foundation';
import { attr, Observable } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { fillColor, neutralFillLayerRecipe, neutralPalette } from '../design-tokens';
import { SwatchRGB } from '../color/swatch';
import { PaletteRGB } from '../color/palette';
import { cardStyles as styles } from './card.styles';
/**
 * @public
 */
export class Card extends FoundationCard {
    cardFillColorChanged(prev, next) {
        if (next) {
            const parsedColor = parseColorHexRGB(next);
            if (parsedColor !== null) {
                this.neutralPaletteSource = next;
                fillColor.setValueFor(this, SwatchRGB.create(parsedColor.r, parsedColor.g, parsedColor.b));
            }
        }
    }
    neutralPaletteSourceChanged(prev, next) {
        if (next) {
            const color = parseColorHexRGB(next);
            const swatch = SwatchRGB.create(color.r, color.g, color.b);
            neutralPalette.setValueFor(this, PaletteRGB.create(swatch));
        }
    }
    /**
     * @internal
     */
    handleChange(source, propertyName) {
        if (!this.cardFillColor) {
            fillColor.setValueFor(this, (target) => neutralFillLayerRecipe.getValueFor(target).evaluate(target, fillColor.getValueFor(source)).rest);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        const parent = composedParent(this);
        if (parent) {
            const parentNotifier = Observable.getNotifier(parent);
            parentNotifier.subscribe(this, 'fillColor');
            parentNotifier.subscribe(this, 'neutralPalette');
            this.handleChange(parent, 'fillColor');
        }
    }
}
__decorate([
    attr({
        attribute: 'card-fill-color',
        mode: 'fromView',
    })
], Card.prototype, "cardFillColor", void 0);
__decorate([
    attr({
        attribute: 'neutral-palette-source',
        mode: 'fromView',
    })
], Card.prototype, "neutralPaletteSource", void 0);
/**
 * The Fluent Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-card\>
 */
export const fluentCard = Card.compose({
    baseName: 'card',
    baseClass: FoundationCard,
    template,
    styles,
});
/**
 * Styles for Card
 * @public
 */
export const cardStyles = styles;
