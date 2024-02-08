const controller = {}

controller.getUsers = (req, res) => res.json({message: 'All Users List'})
controller.createUser = (req, res) => res.json({message: 'User Saved'})

controller.getUser = (req, res) => res.json({message: 'One User'})
controller.updateUser = (req, res) => res.json({message: 'User Updated'})
controller.deleteUser = (req, res) => res.json({message: 'User Deleted'})

export default controller