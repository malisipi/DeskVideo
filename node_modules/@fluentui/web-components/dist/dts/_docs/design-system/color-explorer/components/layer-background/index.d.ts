import { DesignToken, DesignTokenChangeRecord, FoundationElement } from '@microsoft/fast-foundation';
export declare class LayerBackground extends FoundationElement {
    baseLayerLuminance: number;
    private baseLayerLuminanceChanged;
    backgroundLayerRecipe: string;
    private backgroundLayerRecipeChanged;
    private updateBackgroundColor;
    handleChange(record: DesignTokenChangeRecord<DesignToken<any>>): void;
    connectedCallback(): void;
}
export declare const layerBackgroundTemplate: import("@microsoft/fast-element").ViewTemplate<any, any>;
export declare const layerBackgroundStyles: import("@microsoft/fast-element").ElementStyles;
export declare const layerBackground: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<{
    baseName: string;
    template: import("@microsoft/fast-element").ViewTemplate<any, any>;
    styles: import("@microsoft/fast-element").ElementStyles;
}> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<{
    baseName: string;
    template: import("@microsoft/fast-element").ViewTemplate<any, any>;
    styles: import("@microsoft/fast-element").ElementStyles;
}, typeof LayerBackground>;
