import { CallSite } from 'callsite';
import { MainLoggerConfig } from './main';
export declare const createChannelName: (cfg: MainLoggerConfig, cs: CallSite[]) => string[];
export declare function splitChannelName(cfg: MainLoggerConfig, fileName: string): string[];
