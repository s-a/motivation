#!/usr/bin/env node

"use strict";

var motivation = require("../lib");
var m = motivation.get();


console.log("\x1b[36m%s\x1b[0m", m.text);
console.log("\x1b[33m%s\x1b[0m", "(" + m.author.trim() + ")");