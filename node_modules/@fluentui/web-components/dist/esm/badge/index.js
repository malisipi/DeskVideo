import { __decorate } from "tslib";
import { attr, DOM } from '@microsoft/fast-element';
import { Badge as FoundationBadge, badgeTemplate as template } from '@microsoft/fast-foundation';
import { badgeStyles as styles } from './badge.styles';
/**
 * The Fluent Badge class
 * @internal
 */
export class Badge extends FoundationBadge {
    constructor() {
        super(...arguments);
        this.appearance = 'lightweight';
    }
    appearanceChanged(oldValue, newValue) {
        if (oldValue !== newValue) {
            DOM.queueUpdate(() => {
                this.classList.add(newValue);
                this.classList.remove(oldValue);
            });
        }
    }
}
__decorate([
    attr({ mode: 'fromView' })
], Badge.prototype, "appearance", void 0);
/**
 * The Fluent Badge Element. Implements {@link @microsoft/fast-foundation#Badge},
 * {@link @microsoft/fast-foundation#badgeTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-badge\>
 */
export const fluentBadge = Badge.compose({
    baseName: 'badge',
    baseClass: FoundationBadge,
    template,
    styles,
});
/**
 * Styles for Badge
 * @public
 */
export const badgeStyles = styles;
