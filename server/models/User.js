const mongoose = require('mongoose')
const { CgPassword } = require('react-icons/cg')


const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password:String
})


const UserModel = mongoose.model("client", UserSchema)
module.exports = UserModel