# Kuiper

**This library is in early development, many features are planned.** <br>
Kuiper is a comprehensive and easy to use logging library that uses distinct log levels to make logs clear.

## Examples

### Example 1: Basic Example
Here is an example of the library in action:

```js
import kuiper from "kuiper-js";

kuiper.info("This is some information");
kuiper.warn("This is a warning");
kuiper.error("This is an error");

kuiper.log("This is some more info but with the log function", "info")
```

This is an example of what one of these functions would output: <br>
<span style="color: #0099ff;">[INFO 2026-01-01T12:00:00.123Z]:</span> This is some information

### Example 2: Using a Config
Here's another example with a custom config:

```js
import kuiper from "kuiper-js";

// in typescript you can set the type of this variable to "KuiperConfig" to get intellisense, make sure to import it properly
const kuiperConfig = {
    includeTimestamp: false,
    colorize: false
};

// if you don't specify a config it will just use the default which you can see at "kuiper.defaultConfig"
kuiper.info("This is some information", kuiperConfig);
kuiper.log("This is some more information", "info", kuiperConfig);
```
Here is an example of the output using this config: <br>
\[INFO]: This is some information <br>
\[INFO]: This is some more information

Notice that the color and timestamp is removed using this configuration.

### Example 3: Using Config to Change Timezone
Here's an example of a config that has a different timezone than UTC

```js
import kuiper from "kuiper-js";

const kuiperConfig = {
    ...kuiper.defaultConfig,
    timestamp: {
        timezone: "America/New_York"
    }
};

kuiper.info("Look at my timestamp!", kuiperConfig);
```
Output using this config: <br>
<span style="color: #0099ff;">[INFO 2026-01-01T12:00:00.123-04:00]:</span> Look at my timestamp!

## Minimum Node Version

**Summary:**
- Absolute Minimum: **v12.0.0**
- Recommended Minimum (support from here): **v16.0.0**
- Recommended Version: **Latest LTS**

Kuiper works as early as Node v12 using the --experimental-modules flag, and as early as Node v13.2 without it. <br>
In practice though, we recommend atleast Node v16 or better. Ideally you should be running the latest Node LTS version.
Versions before Node v16 will NOT receive support from us.