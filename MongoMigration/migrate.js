const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const Async = require('async')

const fs = require('fs');
const Path = require('path');

// connection URI
const url = 'mongodb://localhost:27017'

const insertDocuments =
    (row2Insert, db, callback) => {
        // Get reference to edx-course-docs collection
        const Mycollection = db.collection('edx-course-ClientData')
        //insert 3 documents
        Mycollection.insert(
            [
                row2Insert
            ], (error, result) => {
                if (error) {
                    return process.exit(1)
                }
                console.log(`Inserted ${result.result.n} documents into the edx-course-ClientData collection`)
                callback(result)
            })
    }


//merges properties of two objects
function MergeJSON(target) {
    //gets the right argument, which is the second JSON
    var RigthJSON = [].slice.call(arguments, 1);
    //Loops each property in the right JSON
    RigthJSON.forEach(function (source) {
        for (var prop in source) {
            //Adds each property from Right JSON into the left JSON
            target[prop] = source[prop];
        }
    });
    //Returns modified left JSON
    return target;
}

//use connect method to connect to the server
MongoClient.connect(url,
    (err, client) => {
        if (err) {
            return process.exit(1)
        }

        //reads all file into memory
        var CustInfo = JSON.parse(fs.readFileSync(Path.join(__dirname, "m3-customer-data.json"), 'utf8'))
        var CustAddr = JSON.parse(fs.readFileSync(Path.join(__dirname, "m3-customer-address-data.json"), 'utf8'))

        var db = client.db('edx-course-db')
        console.log('Kudos. Connected successfully to server')

        let Queries = process.argv[2]
        var tasks = [];
        let total_runs = 1000 / Queries;
        let currRow = 0;

        for (let y = 0; y < total_runs; y++) {
            tasks.push(() => {
                let top = (currRow - 0) + (Queries - 0)

                for (let x = currRow; x < top; x++) {
                    insertDocuments(MergeJSON(CustInfo[x], CustAddr[x]), db, () => {
                        client.close()
                    })
                }
                currRow += (Queries - 0)
            })
        }

        Async.parallel(tasks,
            (error, results) => {
                if (error) {
                    console.error(error)
                }
            })
    })