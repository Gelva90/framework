#!/usr/bin/env node

var Program = require('commander');
var Assistant = require('./../lib/assistant');

var assistant = new Assistant();

Program
    .command('watch')
    .description('Watch for changes and then synchronize')
    .option('-b, --baseDir [baseDir]', 'Base directory to watch', process.cwd())
    .option('-s, --subDir [subDir]', 'Subdirectory to watch', '')
    .action(function(info) {
        var baseDir = info.baseDir;
        var subDir = info.subDir || '';
        assistant.watchDirectory(baseDir, subDir);
    });

Program
    .command('sync')
    .description('Synchronize the given module with Ecosystem')
    .option('-b, --baseDir [baseDir]', 'Base directory to watch', process.cwd())
    .option('-s, --subDir [subDir]', 'Subdirectory to watch', '')
    .action(function(info) {
        var baseDir = info.baseDir;
        var subDir = info.subDir || '';
        assistant.syncAll(baseDir, subDir);
    });

Program.parse(process.argv);
