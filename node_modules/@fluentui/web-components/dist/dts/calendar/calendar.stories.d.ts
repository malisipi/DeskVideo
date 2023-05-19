import './index';
declare const _default: {
    title: string;
    component: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").CalendarOptions> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").CalendarOptions, import("@microsoft/fast-element").Constructable<import("@microsoft/fast-foundation").FoundationElement>>;
    argTypes: {
        month: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
            default: string;
        };
        year: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
            default: string;
        };
        locale: {
            control: {
                type: string;
            };
            options: string[];
            default: string;
            description: string;
        };
        dayFormat: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            default: string;
        };
        weekdayFormat: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            default: string;
        };
        monthFormat: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            default: string;
        };
        yearFormat: {
            description: string;
            options: string[];
            control: {
                type: string;
            };
            default: string;
        };
        disabledDates: {
            description: string;
            options: any;
            control: {
                type: string;
            };
        };
        selectedDates: {
            description: string;
            options: any;
            control: {
                type: string;
            };
        };
        readonly: {
            description: string;
            control: {
                type: string;
            };
            default: boolean;
        };
    };
};
export default _default;
export declare const Calendar: any;
