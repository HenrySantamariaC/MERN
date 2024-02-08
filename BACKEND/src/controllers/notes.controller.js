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
    let data = await Note.findOne({_id: req.params.id})
    res.json(data)
}

controller.updateNote = async (req, res) => {
    let {title, content, author } = req.body
    await Note.findOneAndUpdate({_id: req.params.id},{
        title,
        content,
        author
    })
    res.json({message: 'Note Updated'})
}

controller.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id})
    res.json({message: 'Note Deleted'})
}

export default controller