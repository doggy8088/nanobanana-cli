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
