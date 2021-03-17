const { PREFIX } = require('../../../config/botconfig')
// Change DIR if needed

module.exports = {
    name: "kick",
    aliases: [],
    description: "",
    usage: `\`${PREFIX}\``,
    examples: `\`${PREFIX}\``,
    perms: ["KICK_MEMBERS"],
    cooldown: 0,
    devOnly: false,

    execute: async function(client, message, args) {
        let user = client.users.cache.get(args[0]) || message.mentions.users.first(); //By Mention or by ID
        if(!user) return message.channel.send('Couldn\`t catch a user!')

        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.channel.send('Invaild User!')

        let reason = args.splice(1).join(' ');
        if(!reason) reason = `No Reason Provided, Moderator: ${message.author.tag} With ID: ${message.author.id}`
        if(reason.length > 450) return message.reply('The Reason Exceeds 450 characters')
        let audit = reason + (` Moderator: ${message.author.tag} With ID: ${message.author.id}`)

        try{
        member.kick(audit)
        message.reply(`${user.username} with ID: ${user.id} has been banned.`)
        }catch(err) {
            message.reply('There has been a issue, uhh contact someone? - EmanSza#5474')
        }
    }
}