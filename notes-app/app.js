const utils = require('./utils');
const notes = require('./notes');
const validator = require('validator');
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
yargs
    .command({
        command: 'remove',
        desc: 'remove a note',
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            notes.removeNote(argv.title);
        }
    })
    .help()
    .argv;

yargs.parse();