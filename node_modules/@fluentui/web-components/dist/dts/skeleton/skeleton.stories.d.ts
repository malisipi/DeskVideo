declare const _default: {
    title: string;
    component: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<import("@microsoft/fast-foundation").FoundationElementDefinition> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<import("@microsoft/fast-foundation").FoundationElementDefinition, typeof import("@microsoft/fast-foundation").Skeleton>;
    argTypes: {
        shape: {
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
        };
        shimmer: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Skeleton: any;
