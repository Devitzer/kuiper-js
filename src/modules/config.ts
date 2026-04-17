// WIP

type KuiperTimestampFormat = "ISO" // more to come, mainly a custom one

interface KuiperTimestampConfig {
    format: KuiperTimestampFormat;
    timezone: string; // verified at runtime (may change in the future for typescript users), any valid IANA timezone
}

export interface KuiperConfig {
    // timestampFormat: string;
    // includeFilename: boolean;
    timestamp: KuiperTimestampConfig;
    includeTimestamp: boolean;
    colorize: boolean;
};

export const defaultConfig: KuiperConfig = {
    // timestampFormat: "YYYY-MM-DD HH:mm:ss.ms",
    // includeFilename: true,
    timestamp: {
        format: "ISO",
        timezone: "UTC"
    },

    includeTimestamp: true,
    colorize: true
};