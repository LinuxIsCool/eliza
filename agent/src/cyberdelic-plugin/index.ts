import { sampleProvider } from "./providers";
import { sampleEvaluator } from "./evaluators";
import { Plugin } from "@elizaos/core";

export const samplePlugin: Plugin = {
    name: "sample",
    description: "Enables creation and management of generic resources",
    actions: [],
    providers: [sampleProvider],
    evaluators: [sampleEvaluator],
    services: [],
    clients: [],
};
