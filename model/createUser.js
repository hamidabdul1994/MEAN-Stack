var myCreateUser= {};

myCreateUser.createUser = function(MongoClient,url,data,callback){

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
        collection.insert(data, function(err, result) {
            if (err) {
              callback({"error":err});
                console.log(err);
            } else {
              callback({"data":"success"});
                console.log('Inserted %d documents into the "signup" collection. The documents inserted with "_id" are:', result.length, result);
            }
            //Close connection
            db.close();
        });
    }
});
}
module.exports=myCreateUser;
