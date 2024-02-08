import User from "./../models/User.js";

const controller = {}

controller.getUsers = async (req, res) => {
    let data = await User.find()
    res.json(data)
}

controller.createUser = async (req, res) => {
    let {username} = req.body
    let record = new User({
        username
    })
    await record.save()
    res.json({message: 'User Saved'})
}

controller.getUser = async (req, res) => {
    let data = await User.findOne({_id: req.params.id})
    res.json(data)
}

controller.updateUser = async (req, res) => {
    res.json({message: 'User Update not available'})
}

controller.deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id})
    res.json({message: 'User Deleted'})
}

export default controller