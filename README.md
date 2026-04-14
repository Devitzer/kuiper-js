# Kuiper

**This library is in early development, many features are planned.** <br>
Kuiper is a comprehensive and easy to use logging library that uses distinct log levels to make logs clear.

## Example

Here is an example of the library in action:

```js
import kuiper from "kuiper";

kuiper.info("This is some information");
kuiper.warn("This is a warning");
kuiper.error("This is an error");

kuiper.log("This is some more info but with the log function", "info")
```

This is an example of what one of these functions would output: <br>
``[INFO 2026-01-01-T12:00:00.123Z]: This is some information``

## Minimum Node Version

Summary:
- Absolute Minimum: **v12.0.0**
- Recommended Minimum (support from here): **v16.0.0**
- Recommended Version: **Latest LTS**

Kuiper works as early as Node v12 using the --experimental-modules flag, and as early as Node v13.2 without it. <br>
In practice though, we recommend atleast Node v16 or better. Ideally you should be running the latest Node LTS version.
Versions before Node v16 will NOT receive support from us.