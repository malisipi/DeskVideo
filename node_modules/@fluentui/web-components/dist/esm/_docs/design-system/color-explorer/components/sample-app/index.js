import { __decorate } from "tslib";
import { customElement } from '@microsoft/fast-element';
import { SampleApp } from './sample-app';
import { sampleAppTemplate as template } from './sample-app.template';
import { sampleAppStyles as styles } from './sample-app.styles';
let AppSampleApp = class AppSampleApp extends SampleApp {
};
AppSampleApp = __decorate([
    customElement({
        name: 'app-sample-app',
        template,
        styles,
    })
], AppSampleApp);
export { AppSampleApp };
export * from './sample-app.template';
export * from './sample-app.styles';
export * from './sample-app';
