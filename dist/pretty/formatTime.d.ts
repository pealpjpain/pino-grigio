export declare enum TimeFormat {
    ISO = "iso",
    SHORT = "short",
    LONG = "long",
    ONLYTIME = "onlytime"
}
export declare function formatTime(time: number, format?: TimeFormat): string;
