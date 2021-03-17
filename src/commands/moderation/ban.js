const { PREFIX } = require('../../../config/botconfig.json')
// Change DIR if needed

module.exports = {
    name: "ban",
    aliases: [],
    description: "",
    usage: `\`${PREFIX}\`ban <user> <days> <reason>`,
    examples: `\`${PREFIX}\`ban EmanSza#5474 7 Breaking Rule 4`,
    perms: ["BAN_MEMBERS"],
    cooldown: 0,
    devOnly: false,

    execute: async function(client, message, args) {
        let user = client.users.cache.get(args[0]) || message.mentions.users.first(); //By Mention or by ID
        if(!user) return message.channel.send('Couldn\`t catch a user!')

        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.channel.send('Invaild User!')

        let days = parseInt(args[1])
        if(isNaN(days)) return message.reply('Please give me a number!')
        if(days < 0 || days > 7) return message.reply('You can only delete messages from a maximum of 7 days ago!')

        let reason = args.splice(2).join(' ');
        if(!reason) reason = `No Reason Provided`
        if(reason.length > 450) return message.reply('The Reason Exceeds 450 characters')
        let audit = reason + (` Moderator: ${message.author.tag} With ID: ${message.author.id}`)

        try{
        member.ban({ days: days, reason: audit })
        message.reply(`${user.username} with ID: ${user.id} has been banned.`)
        }catch(err) {
            message.reply('There has been a issue, uhh contact someone? - EmanSza#5474')
        }
    }
}