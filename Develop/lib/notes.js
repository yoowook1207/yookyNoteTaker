const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}

function deleteNote(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result
}

module.exports = {
    createNewNote,
    deleteNote
}