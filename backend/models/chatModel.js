const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        chatName:{type: String, trim: true},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        latestMessage: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;