var myMethod = {};

myMethod.getUser = function(MongoClient, url, data, callback) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('signup');
            // Retrieve some users
            collection.find(data).toArray(function(err, result) {
                if (err) {
                    callback({
                        "error": err
                    });
                    console.log(err);
                } else if (result.length) {
                    callback({
                        "data": result
                    });
                    console.log('Found:', result);
                } else {
                    callback({
                        "error": "No Data Available"
                    })
                    console.log('No document(s) found with defined "find" criteria!');
                }
                //Close connection
                db.close();
            });
        }
    });
}
module.exports = myMethod;
