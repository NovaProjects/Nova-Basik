const { PREFIX } = require('../../../config/botconfig.json')
// Change DIR if needed

module.exports = {
    name: "reason",
    aliases: [],
    description: "",
    usage: `\`${PREFIX}\``,
    examples: `\`${PREFIX}\``,
    perms: ['MANAGE_MESSAGES'],
    cooldown: 0,
    devOnly: false,

    execute: async function(client, message, args) {
        let caseid = parseInt(args[0])
        // if(typeof caseid != "number") return message.reply('Please give me a number!')
        if(isNaN(caseid)) return message.reply('Please give me a number!')
        console.log(caseid)
        let reason = args.splice(1).join(' ');
        if(!reason) return message.reply('Please give me a reason!')

        let cock =  await client.DBGuild.findById(message.guild.id, { 'case': {caseID: caseid}})
       console.log(cock)
    }
}