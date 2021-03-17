const { PREFIX } = require('../../../config/botconfig.json')
// Change DIR if needed

module.exports = {
    name: "warnings",
    aliases: [],
    description: "",
    usage: `\`${PREFIX}\``,
    examples: `\`${PREFIX}\``,
    perms: [],
    cooldown: 0,
    devOnly: false,

    execute: async function(client, message, args) {
        let user = client.users.cache.get(args[0]) || message.mentions.users.first(); //By Mention or by ID
        if(!user) return message.channel.send('Couldn\`t catch a user!')

        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.channel.send('Invaild User!')

        let warnings =  await client.DBGuild.findById(message.guild.id, { 'case': {userID: member.id} })
        message.channel.send(`${user.tag} has been warned ${warnings.case.length} times!`)
    }
}