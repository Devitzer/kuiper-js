import pc from "picocolors";
import { rootPath } from "get-root-path";
import { type KuiperConfig, defaultConfig } from "./config.js";

// load user config as a file
// const userConfigMod = await import(`${rootPath}/kuiper.config.js`)
// const userConfig: KuiperConfig = !userConfigMod.default ? defaultConfig : userConfigMod.default;

export type LogLevel = "info" | "warn" | "error";

export function log(message: string, level: LogLevel = "info", config: KuiperConfig = defaultConfig): void {
    const timestamp = new Date().toISOString();

    // construct the prefix here
    let prefix: string = "";

    switch (level) {
        case "info":
            prefix += "[INFO";
            break;
        case "warn":
            prefix += "[WARN";
            break;
        case "error":
            prefix += "[ERROR";
            break;
        }

        if (config.includeTimestamp) {
            // TODO: in the future when you can customize the timestamp format, edit this section
            prefix += ` ${timestamp}`;
        }

    prefix += "]:";

    const colorMap = {
        info: pc.blue,
        warn: pc.yellow,
        error: pc.red
    };

    if (config.colorize) {
        const colorFn = colorMap[level];
        prefix = colorFn(prefix);
    }

    switch (level) {
        case "info":
            console.log(`${prefix} ${message}`);
            break;
        case "warn":
            console.warn(`${prefix} ${message}`);
            break;
        case "error":
            console.error(`${prefix} ${message}`);
    }
}

export function info(message: string, config: KuiperConfig = defaultConfig): void {
    log(message, "info", config);
}

export function warn(message: string, config: KuiperConfig = defaultConfig): void {
    log(message, "warn", config);
}

export function error(message: string, config: KuiperConfig = defaultConfig): void {
    log(message, "error", config);
}