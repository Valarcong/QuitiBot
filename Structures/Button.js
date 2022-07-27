const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Buttons");
table.setHeading('BUTTONS', ' LOAD STATUS');

module.exports = (client) => {
    readdirSync('./Buttons/').forEach(dir => {
        const buttons = readdirSync(`./Buttons/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of buttons) {
            let pull = require(`../Buttons/${dir}/${file}`);
            if(pull.name) {
                client.buttons.set(pull.name, pull);
            } else {
                table.addRow(file, 'Button REGISTERED')
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}