import fs from 'fs/promises';

// Read the JSON file
let rawdata = await fs.readFile('Tebo.Properties.json');

// Parse the JSON file into a JavaScript object
let obj = JSON.parse(rawdata);

// Function to delete properties from an object
function deleteProperties(obj) {
    if (typeof obj === 'object' && obj !== null) {
        if (obj.hasOwnProperty('_id')) {
            delete obj._id;
        }

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                deleteProperties(obj[key]);
            }
        }
    }
}

// Call the function on the object
deleteProperties(obj);

// Convert the object back to JSON
let data = JSON.stringify(obj, null, 2);

// Write the JSON back to the file
await fs.writeFile('Tebo.Properties.json', data);