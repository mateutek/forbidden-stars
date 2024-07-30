import fs from 'fs';

// Load the original JSON data
let originalData = JSON.parse(fs.readFileSync('import.json', 'utf8'));

let factionName = 'adeptus_mechanicus';

// Create a new object to hold the converted data
let convertedData = {
  [factionName]: {
    "combat": [],
    "orders": [],
    "events": []
  }
};

// Loop through each combat card in the original data
originalData.combatText.title.forEach((title, index) => {
  let combatCard = {
    id: title.replace(/ /g, '_').toUpperCase(),
    title: title,
    general: originalData.combatText.general[index],
    unit: originalData.combatText.unit[index]
  };
  convertedData.adeptus_mechanicus.combat.push(combatCard);
});

// Loop through each order in the original data
originalData.ordersText.title.forEach((title, index) => {
  let order = {
    id: title.replace(/ /g, '_').toUpperCase(),
    title: title,
    general: originalData.ordersText.general[index]
  };
  convertedData.adeptus_mechanicus.orders.push(order);
});

// Loop through each event in the original data
originalData.eventsText.title.forEach((title, index) => {
  let event = {
    id: title.replace(/ /g, '_').toUpperCase(),
    title: title,
    general: originalData.eventsText.general[index],
    type: originalData.eventsText.type[index]
  };
  convertedData.adeptus_mechanicus.events.push(event);
});

// Write the converted data to a new JSON file
fs.writeFileSync('export.json', JSON.stringify(convertedData, null, 2));
