#!/usr/bin/env node
const { exec } = require("child_process");

exec('git add . && git commit -m "new article" && git push')

