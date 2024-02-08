import Note from "./../models/Note.js";

const controller = {}

controller.getNotes = async (req, res) => {
    let data = await Note.find()
    res.json(data)
}

controller.createNote = async (req, res) => {
    let {title, content, author, date } = req.body
    let record = new Note({
        title,
        content,
        author,
        date
    })
    await record.save()
    res.json({message: 'Notes Saved'})
}

controller.getNote = async (req, res) => {
    let data = await Note.findOne({_id: req.params.id}).exec()
    res.json(data)
}

controller.updateNote = (req, res) => {

    res.json({message: 'Note Updated'})
}

controller.deleteNote = async (req, res) => {
    await Note.findOneAndDelete()
    res.json({message: 'Note Deleted'})
}

export default controller