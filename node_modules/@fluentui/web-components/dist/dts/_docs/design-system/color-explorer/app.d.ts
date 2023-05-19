import { FASTElement } from '@microsoft/fast-element';
import { ComponentTypes } from './component-types';
export interface SwatchInfo {
    index: number;
    color: string;
    title?: string;
}
export declare class App extends FASTElement {
    canvasElement: HTMLDivElement;
    componentType: ComponentTypes;
    neutralColor: string;
    private neutralColorChanged;
    neutralPalette: string[];
    accentColor: string;
    private accentColorChanged;
    accentPalette: string[];
    showOnlyLayerBackgrounds: boolean;
    connectedCallback(): void;
    backgrounds(): Array<SwatchInfo>;
    private layerRecipes;
    private resolveLayerRecipes;
    private get lightModeLayers();
    private get darkModeLayers();
    controlPaneHandler(e: CustomEvent): void;
}
