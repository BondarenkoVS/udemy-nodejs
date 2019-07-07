const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {

};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    });

    if (duplicateNotes.length === 0) {
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
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length !== notesToKeep.length) {
        console.log(chalk.whiteBright.bgGreen('Note removed!'));
    } else {
        console.log(chalk.whiteBright.bgRed('No note found!'));
    }
    saveNotes(notesToKeep);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    getNotes,
    addNote,
    removeNote
};