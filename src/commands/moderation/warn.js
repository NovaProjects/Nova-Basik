const { PREFIX } = require('../../../config/botconfig.json')
// Change DIR if needed

module.exports = {
    name: "warn",
    aliases: [],
    description: "",
    usage: `\`${PREFIX}\``,
    examples: `\`${PREFIX}\``,
    perms: ["MANAGE_MESSAGES"],
    cooldown: 0,
    devOnly: false,

    execute: async function(client, message, args) {
        let user = client.users.cache.get(args[0]) || message.mentions.users.first(); //By Mention or by ID
        if(!user) return message.channel.send('Couldn\`t catch a user!')

        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.channel.send('Invaild User!')
        let reason = args.splice(1).join(' ');
        await client.DBGuild.findByIdAndUpdate(message.guild.id, {$inc: {totalCases: 1}})
        if(!reason) reason = `No Reason Provided, Moderator Please do ${PREFIX}reason ${DBGuild.totalCases} <message>`
        let DBGuild = await client.DBGuild.findById(message.guild.id)
        await client.DBGuild.findByIdAndUpdate(message.guild.id, {$push: { 'case': {userID: member.id, reason: reason, moderator: message.author.id, caseID: DBGuild.totalCases }} }, { new: true, upsert: true, setDefaultsOnInsert: true })


    }
}