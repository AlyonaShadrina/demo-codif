const botStatusNotEditable = (bot) => bot && bot.status && !!bot.status.code.match(/in_progress|pending|scheduled/);

export default botStatusNotEditable;
