#!/usr/bin/env node
var slugify = require('slugify')
const { exec } = require("child_process");

var argv = require('yargs')
    .usage('Usage: $0 --title=[String]')
    .demandOption(['title'])
    .argv;
 
let title = slugify(argv.title)

exec(`cp example.md content/${title}.md`)

