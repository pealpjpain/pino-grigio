import * as pino from 'pino';
export interface MainLoggerConfig {
    projectRoot: string;
}
export declare function initLogging(cfg?: MainLoggerConfig): void;
export declare const createLogger: (channelName?: string[]) => pino.Logger;
