// WIP

export interface KuiperConfig {
    // timestampFormat: string;
    // includeFilename: boolean;
    includeTimestamp: boolean;
    colorize: boolean;
};

export const defaultConfig: KuiperConfig = {
    // timestampFormat: "YYYY-MM-DD HH:mm:ss.ms",
    // includeFilename: true,
    includeTimestamp: true,
    colorize: true
};