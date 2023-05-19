import { FoundationElement } from '@microsoft/fast-foundation';
export declare class ControlPane extends FoundationElement {
    componentType: string;
    accentColor: string;
    neutralColor: string;
    showOnlyLayerBackgrounds: boolean;
    updateFormValue(field: string, value: any): void;
}
