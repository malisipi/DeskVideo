import { __decorate } from "tslib";
import { observable } from '@microsoft/fast-element';
import { FoundationElement } from '@microsoft/fast-foundation';
export class ControlPane extends FoundationElement {
    constructor() {
        super(...arguments);
        this.showOnlyLayerBackgrounds = true;
    }
    updateFormValue(field, value) {
        this.$emit('formvaluechange', { field: field, value: value });
    }
}
__decorate([
    observable
], ControlPane.prototype, "componentType", void 0);
__decorate([
    observable
], ControlPane.prototype, "accentColor", void 0);
__decorate([
    observable
], ControlPane.prototype, "neutralColor", void 0);
__decorate([
    observable
], ControlPane.prototype, "showOnlyLayerBackgrounds", void 0);
