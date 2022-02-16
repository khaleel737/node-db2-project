// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');
const MW = require('./cars-middleware')


router.get('/', async (req, res, next) => {
  try{
    const allCars = await Cars.getAll()
    res.status(200).json(allCars)
  }catch(err){
    next(err)
  }
})

router.get('/:id', MW.checkCarId, async (req, res, next) => {
    try{
      const carsID = await Cars.getById(req.params.id)
      res.json(carsID)
    }catch(err){
      next(err)
    }
  })



router.post('/', MW.checkCarPayload, MW.checkVinNumberValid, MW.checkVinNumberUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const insertCar = await Cars.create(req.body)
    res.status(201).json(insertCar)
  } catch (err) {
    next(err)
  }
  })


router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 201).json(err)
})

module.exports = router;
