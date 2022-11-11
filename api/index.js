const express = require("express");
const { createTarea, getTareas, deleteTarea, updateTarea } = require("../controllers/tareas.controller");
const router = express.Router();

router.post("/tareas", createTarea);
router.get("/tareas", getTareas);
router.delete("/tareas/:id", deleteTarea);
router.put("/tareas/:id", updateTarea);

module.exports = router;
