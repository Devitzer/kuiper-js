const semver = require("semver");

const current = process.version.replace(/^v/, "");

function warn(msg) {
    console.warn(`⚠️ ${msg}\n`);
}

// Hard stop first
if (semver.lt(current, "12.0.0")) {
    console.error(`❌ Kuiper does NOT work on Node <12.
You are running: v${current}
`);
    process.exit(1);
}

if (semver.lt(current, "16.0.0")) {
    warn(` Kuiper may not work as intended on Node <16.
You are running: v${current}
There is no support for Node <16, run at your own discretion.`);
}