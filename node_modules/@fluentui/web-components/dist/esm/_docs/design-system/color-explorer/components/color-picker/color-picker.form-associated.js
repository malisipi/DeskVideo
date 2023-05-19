import { FormAssociated, FoundationElement } from '@microsoft/fast-foundation';
/* eslint-disable */
class _ColorPicker extends FoundationElement {
}
/* eslint-enable */
/**
 * A form-associated base class for the component.
 *
 * @internal
 */
export class FormAssociatedColorPicker extends FormAssociated(_ColorPicker) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}
