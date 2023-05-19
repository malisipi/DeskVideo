import { __decorate } from "tslib";
import { contrastRatio, parseColor } from '@microsoft/fast-colors';
import { attr, css, customElement, html, observable } from '@microsoft/fast-element';
import { FoundationElement } from '@microsoft/fast-foundation';
import { elevation, fillColor, neutralForegroundHint } from '../../../../index-rollup';
export var SwatchTypes;
(function (SwatchTypes) {
    SwatchTypes["fill"] = "fill";
    SwatchTypes["foreground"] = "foreground";
    SwatchTypes["outline"] = "outline";
})(SwatchTypes || (SwatchTypes = {}));
const template = html `
  <template class="${x => x.type}">
    <div class="icon" style="${x => x.iconStyle}" title="${x => x.contrastMessage}"></div>
    <code class="recipe-name"> ${x => x.recipeName} </code>
    <code class="hex-code"> ${x => x.colorValue} </code>
  </template>
`;
const styles = css `
  :host {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    align-items: center;
    width: 100%;
    padding: 4px 0;
    box-sizing: border-box;
    color: ${neutralForegroundHint};
    font-size: 12px;
    grid-column-gap: 16px;
    justify-items: start;
  }
  :host(.foreground) .icon {
    border: 1px solid black;
  }
  :host(.foreground) .icon::before {
    font-size: 13px;
    content: 'A';
    font-weight: 400;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    box-sizing: border-box;
    --elevation: 4;
    ${elevation}
  }
  .recipe-name {
    grid-column: 2;
    grid-row: 1;
  }
  .hex-code {
    grid-column: 3;
    grid-row: 1;
  }
`;
let AppSwatch = class AppSwatch extends FoundationElement {
    foregroundRecipeChanged() {
        this.updateObservables();
    }
    fillRecipeChanged() {
        this.updateObservables();
    }
    outlineRecipeChanged() {
        this.updateObservables();
    }
    connectedCallback() {
        super.connectedCallback();
        const fillColorChangeHandler = () => {
            this.updateObservables();
        };
        fillColor.subscribe({
            handleChange: fillColorChangeHandler,
        }, this);
        this.updateObservables();
    }
    updateObservables() {
        this.updateIconStyle();
        this.updateContrastMessage();
        this.updateColorValue();
    }
    tokenCSS(token) {
        return token && typeof token.createCSS === 'function' ? token.createCSS() : '';
    }
    evaluateToken(token) {
        return (token === null || token === void 0 ? void 0 : token.getValueFor(this).toColorString()) || '';
    }
    updateIconStyle() {
        const background = `background-color: ${this.tokenCSS(this.fillRecipe)}`;
        this.iconStyle =
            this.type === SwatchTypes.outline
                ? `border: 4px solid ${this.tokenCSS(this.outlineRecipe)}; ${background}`
                : this.type === SwatchTypes.foreground
                    ? `color: ${this.tokenCSS(this.foregroundRecipe)}; ${background}`
                    : background;
    }
    formatContrast(a, b) {
        return a && b
            ? contrastRatio(parseColor(this.evaluateToken(a)), parseColor(this.evaluateToken(b))).toFixed(2)
            : '';
    }
    formatBackgroundContrast(a, b) {
        return `BG contrast: ${this.formatContrast(a, b)} : 1`;
    }
    formatForegroundContrast(a, b) {
        return `Text contrast: ${this.formatContrast(a, b)} : 1`;
    }
    updateContrastMessage() {
        const backgroundContrastMessage = this.formatBackgroundContrast(this.type === SwatchTypes.foreground
            ? this.foregroundRecipe
            : this.type === SwatchTypes.outline
                ? this.outlineRecipe
                : this.fillRecipe, this.type === SwatchTypes.foreground || this.type === SwatchTypes.outline ? this.fillRecipe : fillColor);
        this.contrastMessage =
            this.type === SwatchTypes.fill
                ? backgroundContrastMessage.concat('\n', this.formatForegroundContrast(this.fillRecipe, this.foregroundRecipe))
                : backgroundContrastMessage;
    }
    updateColorValue() {
        const recipe = this.type === SwatchTypes.outline
            ? this.outlineRecipe
            : this.type === SwatchTypes.foreground
                ? this.foregroundRecipe
                : this.fillRecipe;
        this.colorValue = this.evaluateToken(recipe).toUpperCase();
    }
};
__decorate([
    attr
], AppSwatch.prototype, "type", void 0);
__decorate([
    attr({ attribute: 'recipe-name' })
], AppSwatch.prototype, "recipeName", void 0);
__decorate([
    observable
], AppSwatch.prototype, "foregroundRecipe", void 0);
__decorate([
    observable
], AppSwatch.prototype, "fillRecipe", void 0);
__decorate([
    observable
], AppSwatch.prototype, "outlineRecipe", void 0);
__decorate([
    observable
], AppSwatch.prototype, "iconStyle", void 0);
__decorate([
    observable
], AppSwatch.prototype, "contrastMessage", void 0);
__decorate([
    observable
], AppSwatch.prototype, "colorValue", void 0);
AppSwatch = __decorate([
    customElement({
        name: 'app-swatch',
        template,
        styles,
    })
], AppSwatch);
export { AppSwatch };
