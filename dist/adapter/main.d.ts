import { Logger, LoggerOptions } from 'pino';
export interface MainLoggerConfig extends LoggerOptions {
    projectRoot: string;
}
export declare function initLogging(cfg?: MainLoggerConfig): void;
export declare function createLogger(channelName?: string | string[]): Logger;
