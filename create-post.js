#!/usr/bin/env node
var slug = require('slug')
const { exec } = require("child_process");

var argv = require('yargs')
    .usage('Usage: $0 --title=[String]')
    .demandOption(['title'])
    .argv;
 
let title = slug(argv.title)

exec(`cp example.md content/${title}.md`)

