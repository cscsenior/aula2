const OjectID = require("mongodb").ObjectID;
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

function insertCustomer(customer){
    return global.connection
                  .collection("customers")
                  .isertOne(customer);

function updatetCustomer(id, customer){
    const objectId = new ObjectID(id);
    return global.connection
                  .collection("customers")
                  .updateOne({_id: objectId}, {$set: customer});
  
function deleteCustomer(id){
    const objectId = new ObjectID(id);
    return global.connection
                  .collection("customers")
                  .deleteOne({_id: objectId});

module.exports = { findCustomers, insertCustomer, updateCustomer, deleteCustomer }
