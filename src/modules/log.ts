import pc from "picocolors";
import { rootPath } from "get-root-path";
import { type KuiperConfig, defaultConfig } from "./config.js";

// load user config
// const userConfigMod = await import(`${rootPath}/kuiper.config.js`)
// const userConfig: KuiperConfig = !userConfigMod.default ? defaultConfig : userConfigMod.default;

export type LogLevel = "info" | "warn" | "error";

export function log(message: string, level: LogLevel = "info"): void {
    const timestamp = new Date().toISOString();

    switch (level) {
        case "info":
            console.log(`${pc.blue(`[INFO ${timestamp}]:`)} ${message}`);
            break;
        case "warn":
            console.warn(`${pc.yellow(`[WARN ${timestamp}]:`)} ${message}`);
            break;
        case "error":
            console.error(`${pc.red(`[ERROR ${timestamp}]:`)} ${message}`);
            break;
    }
}

export function info(message: string): void {
    log(message, "info");
}

export function warn(message: string): void {
    log(message, "warn");
}

export function error(message: string): void {
    log(message, "error");
}