const busStopController = require("../controllers/busStopController");

const router = require("express").Router();

//GET BUS STOP INFO
router.get("/getBusStopInfo", busStopController.getBusStop);

//GET ALL BUS STOPS INFO
router.get("/getBusStopsInfo", busStopController.getAllBusStops);

//PUBLISH BUS STOP INFO
router.post("/publishBusStopInfo", busStopController.addBusStop);

//UPDATE BUS STOP INFO
router.put("/updateBusStopInfo/:id", busStopController.updateBusStop);

//DELETE BUS STOP INFO
router.delete("/deleteBusStopInfo/:id", busStopController.deleteBusStop);

module.exports = router;