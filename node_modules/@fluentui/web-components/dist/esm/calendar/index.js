import { __decorate } from "tslib";
import { attr, booleanConverter } from '@microsoft/fast-element';
import { CalendarTitleTemplate, Calendar as FoundationCalendar, calendarTemplate as template, } from '@microsoft/fast-foundation';
import { calendarStyles as styles } from './calendar.styles';
/**
 * Updated Calendar class that is readonly by default
 */
export class Calendar extends FoundationCalendar {
    constructor() {
        super(...arguments);
        this.readonly = true;
    }
}
__decorate([
    attr({ converter: booleanConverter })
], Calendar.prototype, "readonly", void 0);
/**
 * The Fluent Calendar Element. Implements {@link @microsoft/fast-foundation#Calendar},
 * {@link @microsoft/fast-foundation#calendarTemplate}
 *
 * @public
 * @remarks
 * HTML Element \<fluent-calendar\>
 */
export const fluentCalendar = Calendar.compose({
    baseName: 'calendar',
    template,
    styles,
    title: CalendarTitleTemplate,
});
export { styles as calendarStyles };
