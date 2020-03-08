const router = require("express").Router();
const Workout = require("../models/workout")

router.get("/api/workouts", (req, res) => {
    Workout.find().then(workoutsData => {
        res.json(workoutsData)
    }).catch(err => {
        res.json(err)
    })
})
router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7).then(workoutsData => {
        res.json(workoutsData)
    }).catch(err => {
        res.json(err)
    })
})
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(workoutsData => {
        res.json(workoutsData)
    }).catch(err => {
        res.json(err)
    })
})
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {excercises: req.body}}, {new: true}).then(workoutsData => {
        res.json(workoutsData)
    }).catch(err => {
        res.json(err)
    })
})
router.delete("/api/workouts/:id", (req, res) => {
    Workout.create({}).then(workoutsData => {
        res.json(workoutsData)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;