import { DesignToken, FoundationElement } from '@microsoft/fast-foundation';
import { Swatch } from '../../../../index-rollup';
export declare enum SwatchTypes {
    fill = "fill",
    foreground = "foreground",
    outline = "outline"
}
export declare class AppSwatch extends FoundationElement {
    type: SwatchTypes;
    recipeName: string;
    foregroundRecipe?: DesignToken<Swatch>;
    foregroundRecipeChanged(): void;
    fillRecipe?: DesignToken<Swatch>;
    fillRecipeChanged(): void;
    outlineRecipe?: DesignToken<Swatch>;
    outlineRecipeChanged(): void;
    iconStyle: string;
    contrastMessage: string;
    colorValue: string;
    connectedCallback(): void;
    private updateObservables;
    private tokenCSS;
    private evaluateToken;
    private updateIconStyle;
    private formatContrast;
    private formatBackgroundContrast;
    private formatForegroundContrast;
    private updateContrastMessage;
    private updateColorValue;
}
