const {getDatabase} = require('./mongo');
const mongodb = require("mongodb");

const collectionName = 'employee';

async function addEmployee(employee) {
  const database = await getDatabase();
  console.log("before adding employee");
  const {insertedId} = await database.collection(collectionName).insertOne(employee);
  console.log("after adding employee");
  return insertedId;
}

async function deleteEmployee(empId) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({_id: new mongodb.ObjectID(empId)} );    
  }

async function getEmployees() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
    addEmployee,
    getEmployees,
    deleteEmployee
};