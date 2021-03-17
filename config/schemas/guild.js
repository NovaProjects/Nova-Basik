
const { Schema, model } = require('mongoose');

const caseSchema = Schema({
    userID: String,
    moderator: String,
    action: String,
    reason: String,
    caseID: Number
})

const DBGuild = Schema({
    _id: String,
    totalCases: {
        type: Number,
        default: 0
    },
    case: [caseSchema]
});

module.exports = model('DBGuild', DBGuild);