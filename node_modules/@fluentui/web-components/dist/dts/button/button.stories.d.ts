declare const _default: {
    title: string;
    component: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof import("./index").Button>;
    argTypes: {
        appearance: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
            default: string;
        };
        disabled: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Button: any;
