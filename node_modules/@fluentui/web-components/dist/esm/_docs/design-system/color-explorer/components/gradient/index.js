import { __decorate } from "tslib";
import { customElement } from '@microsoft/fast-element';
import { Gradient } from './gradient';
import { gradientTemplate as template } from './gradient.template';
import { gradientStyles as styles } from './gradient.styles';
let AppGradient = class AppGradient extends Gradient {
};
AppGradient = __decorate([
    customElement({
        name: 'app-gradient',
        template,
        styles,
    })
], AppGradient);
export { AppGradient };
export * from './gradient.template';
export * from './gradient.styles';
export * from './gradient';
