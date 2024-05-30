const mongoose = require('mongoose')

const busStopSchema = mongoose.Schema(
    {
        busStop: {
            busStopId: {
                type: String,
                required: true,
            },
            busStopName: {
                type: String,
                required: true,
            },
        },
        trip: {
            tripId: {
                type: String,
                required: true,
            },
            tripName: {
                type: String,
                required: true,
            },
            direction: {
                type: Number,
                required: true,
            },
        },
        bus: {
            busId: {
                type: String,
                required: true,
            },
            busLicensePlate: {
                type: String,
                required: true,
            },
            busVelocity: {
                type: Number,
                required: true,
            },
        },
        detection: {
            passengers: {
                type: Number,
                required: true,
            },
            driver: {
                driverId: {
                    type: String,
                    required: true,
                },
                behavior: {
                    type: String,
                    required: true,
                },
                fatigueLevel: {
                    type: String,
                    required: true,
                },
                confidence: {
                    type: Number,
                    required: true,
                }
            },
        },
        eta: {
            type: Number,
            required: true,
        },
        coord: {
            type: [Number],
            required: true,
        },
        ts: {
            type: String,
            required: true,
        }
    },
)


const BusStop = mongoose.model('BusStop', busStopSchema);

module.exports = { BusStop };