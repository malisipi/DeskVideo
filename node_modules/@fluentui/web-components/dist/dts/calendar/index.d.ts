import { CalendarOptions, Calendar as FoundationCalendar } from '@microsoft/fast-foundation';
import { calendarStyles as styles } from './calendar.styles';
/**
 * Updated Calendar class that is readonly by default
 */
export declare class Calendar extends FoundationCalendar {
    readonly: boolean;
}
/**
 * The Fluent Calendar Element. Implements {@link @microsoft/fast-foundation#Calendar},
 * {@link @microsoft/fast-foundation#calendarTemplate}
 *
 * @public
 * @remarks
 * HTML Element \<fluent-calendar\>
 */
export declare const fluentCalendar: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<CalendarOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<CalendarOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
export { styles as calendarStyles };
