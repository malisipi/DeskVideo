import { __decorate } from "tslib";
import { attr, css, html, nullableNumberConverter } from '@microsoft/fast-element';
import { display, FoundationElement } from '@microsoft/fast-foundation';
import { baseLayerLuminance, fillColor, neutralForegroundRest, neutralLayer1, neutralLayer2, neutralLayer3, neutralLayer4, neutralPalette, } from '../../../../../index-rollup';
export class LayerBackground extends FoundationElement {
    constructor() {
        super(...arguments);
        this.backgroundLayerRecipe = 'L1';
    }
    baseLayerLuminanceChanged(prev, next) {
        baseLayerLuminance.setValueFor(this, this.baseLayerLuminance);
        this.updateBackgroundColor();
    }
    backgroundLayerRecipeChanged(prev, next) {
        this.updateBackgroundColor();
    }
    updateBackgroundColor() {
        if (!this.$fastController.isConnected) {
            return;
        }
        if (this.backgroundLayerRecipe !== undefined) {
            let swatch = null;
            switch (this.backgroundLayerRecipe) {
                case 'L1':
                    swatch = neutralLayer1.getValueFor(this);
                    break;
                case 'L2':
                    swatch = neutralLayer2.getValueFor(this);
                    break;
                case 'L3':
                    swatch = neutralLayer3.getValueFor(this);
                    break;
                case 'L4':
                    swatch = neutralLayer4.getValueFor(this);
                    break;
            }
            if (swatch !== null) {
                fillColor.setValueFor(this, swatch);
            }
        }
    }
    handleChange(record) {
        if (record.token === neutralPalette) {
            this.updateBackgroundColor();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        neutralPalette.subscribe(this);
        this.updateBackgroundColor();
    }
}
__decorate([
    attr({ attribute: 'base-layer-luminance', converter: nullableNumberConverter })
], LayerBackground.prototype, "baseLayerLuminance", void 0);
__decorate([
    attr({ attribute: 'background-layer-recipe' })
], LayerBackground.prototype, "backgroundLayerRecipe", void 0);
export const layerBackgroundTemplate = html ` <slot></slot> `;
export const layerBackgroundStyles = css `
  ${display('block')} :host {
    background: ${fillColor};
    color: ${neutralForegroundRest};
  }
`;
export const layerBackground = LayerBackground.compose({
    baseName: 'layer-background',
    template: layerBackgroundTemplate,
    styles: layerBackgroundStyles,
});
