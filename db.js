const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017",
                    { useUnifiedTopology: true})
            .then(connection=> {
                global.connection = connection.db("aula2");
                console.log("Connected");
            })
            .catch(error => console.log(error));
                
function findCustomers(){
    return global.connection
                 .collection("customers")
                 .find({})
                 .toArray();
}

module.exports = { findCustomers }