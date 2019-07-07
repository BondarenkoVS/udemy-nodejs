const utils = require('./utils');
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
var yargs = require('yargs');


yargs
    .command({
        command: 'add',
        desc: 'add a new note',
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            notes.addNote(argv.title, argv.body);
        }
    })
    .help()
    .argv;

yargs.parse();