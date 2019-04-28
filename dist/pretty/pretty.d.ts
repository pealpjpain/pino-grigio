import { PrettyOptions } from './options';
export declare function prettyPrinterFactory(options: PrettyOptions): {
    (anyInput: any): string;
    channelColorMap: {};
};
