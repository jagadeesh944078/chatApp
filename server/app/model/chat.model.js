var mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
var chatSchema = new mongoSchema({
    'senderUserId': { type: mongoSchema.Types.ObjectId, ref: 'user', required: [true, "Sender Id is required"] },
    'senderName': { type: String, required: [true, "Sender name is required"] },
    'recieverUserId': { type: mongoSchema.Types.ObjectId, ref: 'user', required: [true, "Reciever Id is required"] },
    'recieverName': { type: String, required: [true, "reciever name is required"] },
    'message': { type: String, required: [true, " Message is required "] }
}, {
        timestamps: true
    });

function chatModel() {

}
var chat = mongoose.model('chatInfo', chatSchema);

chatModel.prototype.addMessage = (chatData, callback) => {
    console.log('chatData model.js 20--', chatData);

    const newMsg = new chat({
        'senderUserId': chatData.senderUserId,
        'senderName': chatData.senderName,
        'recieverUserId': chatData.recieverUserId,
        'recieverName': chatData.recieverName,
        'message': chatData.message
    });
    newMsg.save((err, result) => {
        if (err) {
            console.log("Storing data failed , error occured ");
            return callback(err);
        } else {
            console.log("Chat data saved successfully ");
            return callback(null, result);
        }
    });

}

chatModel.prototype.getUserMsg = (callback) => {
    chat.find({}, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

module.exports = new chatModel();