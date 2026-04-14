import { log, info, warn, error } from "./modules/log.js";
import { type KuiperConfig, defaultConfig } from "./modules/config.js";

const kuiper = {
    log,
    info,
    warn,
    error,
    defaultConfig,
};

export default kuiper;
export type { KuiperConfig };