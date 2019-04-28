export declare type LogObject = {
    time?: number;
    level?: number;
    msg?: string;
    pid?: number;
    hostname?: string;
    channel: string[];
};
export declare type LogThis = {
    input: LogObject;
    doLog: true;
} | {
    input: string;
    doLog: false;
};
export declare function transformInput(input: any, eol: string): LogThis;
