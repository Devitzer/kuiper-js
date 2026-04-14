const current = process.version.replace(/^v/, "");

function warn(msg) {
    console.warn(`⚠️ ${msg}\n`);
}

function isLessThan(version, target) {
  const vParts = version.split(".").map(Number);
  const tParts = target.split(".").map(Number);

  for (let i = 0; i < Math.max(vParts.length, tParts.length); i++) {
    const v = vParts[i] || 0;
    const t = tParts[i] || 0;

    if (v < t) return true;
    if (v > t) return false;
  }

  return false; // equal
}


// Hard stop first
if (isLessThan(current, "12.0.0")) {
    console.error(`❌ Kuiper does NOT work on Node <12.
You are running: v${current}
`);
    process.exit(1);
}

if (isLessThan(current, "16.0.0")) {
    warn(` Kuiper may not work as intended on Node <16.
You are running: v${current}
There is no support for Node <16, run at your own discretion.`);
}