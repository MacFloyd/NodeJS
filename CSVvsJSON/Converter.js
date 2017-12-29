const myFS = require('fs');
const myPath = require("path");
var stream = myPath.join(__dirname, "customer-data.csv");
const csv = require('csvtojson');
var buff = '';

csv().fromFile(stream)
    .on('json',
    (jsonObj) => {
        buff += JSON.stringify(jsonObj, null, 2) + "\r\n";
    })
    .on('done',
    (error) => {
        if (error) {
            console.log("An error occurred: " + error);
        }

        myFS.writeFile(myPath.join(__dirname, "customer-data.json"), buff, 'utf8',
            (err) => {
                if (err) {
                    console.log("An error occurred: " + err);
                }
            });

        console.log('finished processing file');
    });