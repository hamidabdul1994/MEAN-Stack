var myUpadteUser = {};

myUpadteUser.updateUser = function(MongoClient, url, data, callback) {

console.log("upda te data :: ",data);
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);
            // Get the documents collection
            var collection = db.collection('signup');

            // Insert some users
            collection.update({
                username: data.username
            }, {
                $set: {
                    password: data.password
                }
            }, function(err, numUpdated) {
                if (err) {
                    callback({
                        "error": err
                    });
                    console.log(err);
                } else if (JSON.parse(numUpdated).n>0) {
                    callback({
                        "data": numUpdated
                    });
                    console.log('Updated Successfully %d document(s).', numUpdated.nModified);
                } else {
                    callback({
                        "error": "No Data Found"
                    });
                    console.log('No document found with defined "find" criteria!'+numUpdated);
                }
                //Close connection
                db.close();
            });
        }
    });
}
module.exports = myUpadteUser;
