const router = require('express').Router();
const { notes } = require('../../db/db.json')
const {createNewNote, deleteNote} = require('../../lib/notes')

router.get('/notes', (req, res)=> {
    let results = notes;
    res.json(results)
})

router.post('/notes', (req, res) => {
req.body.id = notes.length.toString();
if (!req.body) {
    res.status(400).send('The note is not properly formatted.')
} else {
    const note = createNewNote(req.body, notes);
    res.json(note);
}
})

router.get('/notes/:id', (req,res) => {
    const result = deleteNote(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404)
    }
})

module.exports = router