var bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    router = express.Router();
    app = express(),
    mongoose= require("mongoose"),
    port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/appSignup');
var sign = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{ timestamps: { createdAt: 'created_at',updatedAt:'updated_at' }});
var signUp = mongoose.model('sign', sign);

// app.use(cors());
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// app.use(bodyParser.json());

// router.get("/",function(req,res){
var data = signUp({
        email:"abc@gmail.com",
        name:"ABC"
    });
    /**
     * save data in database
     * @return {successfully uploaded}
     **/
    data.save(function(error, result) {
	if (!error) {
		console.log(result);
	}
});
// });
// router.get("/update",function(req,res){
signUp.update({ email:"abc@gmail.com"}, {$set: {name:"ABC Khan"}}, {upsert: true}, function(err){
if(err){
console.log(err);
}
})
// })
/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
