const { BusStop } = require("../models/busStopModel");

const busStopController = {
    base: (req, res) => {
        res.send('')
    },
    getBusStop: async(req, res) =>{
        try {
            const busStop = await BusStop.find().sort({ $natural: -1 }).limit(1)
            res.status(200).json(busStop);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    getAllBusStops: async(req, res) => {
        try {
            const busStops = await BusStop.find({});
            res.status(200).json(busStops);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    addBusStop: async(req, res) => {
        try {
            const busStop = await BusStop.create(req.body)
            res.status(200).json(busStop);
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }
    },
    updateBusStop: async(req, res) => {
        try {
            const {id} = req.params;
            console.log(id)
            const busStop = await BusStop.findByIdAndUpdate(id, req.body);
            // we cannot find any busStop in database
            if(!busStop){
                return res.status(404).json({message: `Cannot find any busStop with ID ${id}`})
            }
            const updatedBusStop = await BusStop.findById(id);
            res.status(200).json(updatedBusStop);
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    deleteBusStop: async(req, res) =>{
        try {
            const {id} = req.params;
            const busStop = await BusStop.findByIdAndDelete(id);
            if(!busStop){
                return res.status(404).json({message: `Cannot find any busStop with ID ${id}`})
            }
            res.status(200).json(busStop);
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
}

module.exports = busStopController;