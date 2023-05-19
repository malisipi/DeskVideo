import { FASTElement } from '@microsoft/fast-element';
import { ComponentTypes } from '../component-types';
export declare class AppColorBlock extends FASTElement {
    index: number;
    component: ComponentTypes;
    color: string;
    private colorChanged;
    layerName?: string;
    private updateColor;
}
