"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const cliPath = path.resolve(__dirname, "..", "skills", "nanobanana-cli", "scripts", "nanobanana-cli.js");

test("cli help exits successfully and prints usage", () => {
  const result = spawnSync(process.execPath, [cliPath, "--help"], {
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Nano Banana Gemini Image CLI/);
  assert.match(result.stdout, /Usage:/);
  assert.match(result.stdout, /nanobanana \[options\]/);
});

test("cli prefers package-specific API key env var in errors and help text", () => {
  const helpResult = spawnSync(process.execPath, [cliPath, "--help"], {
    encoding: "utf8",
  });

  assert.equal(helpResult.status, 0, helpResult.stderr);
  assert.match(helpResult.stdout, /NANOBANANA_GEMINI_API_KEY/);
  assert.match(helpResult.stdout, /NANOBANANA_MODEL/);

  const errorResult = spawnSync(process.execPath, [cliPath, "--prompt", "test"], {
    encoding: "utf8",
    env: {
      ...process.env,
      NANOBANANA_GEMINI_API_KEY: "",
      GEMINI_API_KEY: "",
      NANOBANANA_MODEL: "",
    },
  });

  assert.equal(errorResult.status, 1);
  assert.match(errorResult.stderr, /NANOBANANA_GEMINI_API_KEY, GEMINI_API_KEY, or pass --api-key/);
});
