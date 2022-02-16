const VINValidator = require('vin-validator')
const db = require('../../data/db-config')
const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
  // const {id} = req.params;
  const cars = await Cars.getById(req.params.id)

  if(!cars) {
    res.status(404).json({ message: `car with id ${cars} is not found` })
  } else {
    req.cars = cars;
    next()
  }
} catch (err) {
  next(err)
}
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const err = {status: 400}
  const vin = req.body.vin
  const make = req.body.make
  const model = req.body.model
  const mileage = req.body.mileage

  if(vin === undefined){
    res.status(400).json({message: "vin is missing"})
  }else if (make === undefined) {
    res.status(400).json({ message: "make is missing" }); 
  } else if (model === undefined) {
    res.status(400).json({ message: "model is missing" });
  }else if (mileage === undefined) {
    res.status(400).json({ message: "mileage is missing" });
  } else if(err.message){
    next(err)
  }else{
    req.body.make = make.trim()
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC

  const vin = req.body.vin;

  if(VINValidator.validate(vin) === false){
    res.status(400).json({message: "vin abc is invalid"})
  
} else {
  next()
}
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const vinUnique = await db('cars').where('vin', req.body.vin)
    .first();

    if(vinUnique){
      res.status(400).json({message: `vin ${req.body.vin} already exists`})
    }else{
      next()
    }

  }catch(err){
    next(err)
  }
}


module.exports = {
  checkCarId, 
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

// - `checkCarId` returns a status 404 with a `{ message: "car with id <car id> is not found" }` if the id in `req.params` does not exist in the database.

// - `checkCarPayload` returns a status 400 with a `{ message: "<field name> is missing" }` if any required field is missing.

// - `checkVinNumberValid` returns a status 400 with a `{ message: "vin <vin number> is invalid" }` if the vin number is [invalid](https://www.npmjs.com/package/vin-validator).

// - `checkVinNumberUnique` returns a status 400 with a `{ message: "vin <vin number> already exists" }` if the vin number already exists in the database.