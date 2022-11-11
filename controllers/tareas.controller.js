const tareaModel = require("../models/tarea.model");

async function createTarea(req, res) {
  const { tarea } = req.body;
  try {
    const result = await tareaModel.createTarea(tarea);
    res.status(200).json({
      status: 200,
      message: `Tarea was created with the _id: ${result.insertedId}`,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      status: 500,
      message: "Error creating tarea",
    });
  }
}

async function getTareas(req, res) {
  try {
    const result = await tareaModel.getTareas();

    res.status(200).json({
      status: 200,
      message: `Tareas successfully retrieved`,
      data: result,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      status: 500,
      message: "Error retrieving tareas",
    });
  }
}

async function deleteTarea(req, res) {
  const { id } = req.params;
  try {
    const result = await tareaModel.deleteTarea(id);

    res.status(200).json({
      status: 200,
      message: `Tarea successfully deleted`,
      data: result,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      status: 500,
      message: "Error deleting tarea",
    });
  }
}

async function updateTarea(req, res) {
    const { id } = req.params;
    const { tarea } = req.body;
    try {
      const result = await tareaModel.updateTarea(id, tarea);
  
      res.status(200).json({
        status: 200,
        message: `Tarea successfully updated`,
        data: result,
      });
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).json({
        status: 500,
        message: "Error updating tarea",
      });
    }
  }

module.exports = {
  createTarea,
  getTareas,
  deleteTarea,
  updateTarea
};
