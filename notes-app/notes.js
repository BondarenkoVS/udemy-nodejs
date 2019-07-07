const fs = require('fs');
const chalk = require('chalk');


const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log("Title: ", note.title);
        console.log("Body: ", note.body);
    })
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.whiteBright.bgGreen("New note added"));
    } else {
        console.log(chalk.whiteBright.bgRed("Note title taken!"));
    }
    saveNotes(notes)
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length !== notesToKeep.length) {
        console.log(chalk.whiteBright.bgGreen('Note removed!'));
    } else {
        console.log(chalk.whiteBright.bgRed('No note found!'));
    }
    saveNotes(notesToKeep);
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.whiteBright.bgYellow(note.title));
        console.log(chalk.whiteBright.bgCyan(note.body));
    } else {
        chalk.whiteBright.bgRed("No note found!");
    }

};
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    listNotes,
    addNote,
    removeNote,
    readNote
};