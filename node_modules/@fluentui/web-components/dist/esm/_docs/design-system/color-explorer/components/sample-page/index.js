import { __decorate } from "tslib";
import { customElement } from '@microsoft/fast-element';
import { SamplePage } from './sample-page';
import { samplePageStyles as styles } from './sample-page.styles';
import { samplePageTemplate as template } from './sample-page.template';
let AppSamplePage = class AppSamplePage extends SamplePage {
};
AppSamplePage = __decorate([
    customElement({
        name: 'app-sample-page',
        template,
        styles,
    })
], AppSamplePage);
export { AppSamplePage };
export * from './sample-page.template';
export * from './sample-page.styles';
export * from './sample-page';
