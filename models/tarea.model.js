const { ObjectId } = require("mongodb");
const client = require("./database");

async function createTarea(tarea) {
  const result = await client.db("mvc").collection("tareas").insertOne({
    tarea,
  });

  return result;
}

async function getTareas() {
  const result = await client.db("mvc").collection("tareas").find().toArray();

  return result;
}

async function deleteTarea(id) {
  const result = await client
    .db("mvc")
    .collection("tareas")
    .deleteOne({
      _id: ObjectId(id),
    });

  return result;
}

async function updateTarea(id, tarea) {
  const result = await client
    .db("mvc")
    .collection("tareas")
    .updateOne(
      {
        _id: ObjectId(id),
      },
      { $set: { tarea } }
    );

  return result;
}

module.exports = {
  createTarea,
  getTareas,
  deleteTarea,
  updateTarea,
};
