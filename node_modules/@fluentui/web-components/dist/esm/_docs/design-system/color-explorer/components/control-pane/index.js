import { __decorate } from "tslib";
import { customElement } from '@microsoft/fast-element';
import { ControlPane } from './control-pane';
import { controlPaneTemplate as template } from './control-pane.template';
import { controlPaneStyles as styles } from './control-pane.styles';
let AppControlPane = class AppControlPane extends ControlPane {
};
AppControlPane = __decorate([
    customElement({
        name: 'app-control-pane',
        template,
        styles,
    })
], AppControlPane);
export { AppControlPane };
export * from './control-pane.template';
export * from './control-pane.styles';
export * from './control-pane';
