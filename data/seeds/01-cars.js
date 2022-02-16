// // STRETCH
// const cars = [
//     { vin: 'account-01', make: 2008, model: 'M3', milage: 127000, title: 'Owned', transmission: 'manual' },
//     { vin: 'account-233', make: 2008, model: 'M5', milage: 3240, title: 'lease', transmission: 'Automatic' },
//     { vin: 'account-12512', make: 2008, model: 'E-Class', milage: 19829, title: 'lease', transmission: 'Automatic' },
//     { vin: 'account-5890', make: 2008, model: 'Camaro', milage: 192700, title: 'Owned', transmission: 'manual' },
//     { vin: 'account-123789', make: 2008, model: '458', milage: 79200, title: 'lease', transmission: 'Automatic' },
//     { vin: 'account-43982', make: 2008, model: 'F12', milage: 12738, title: 'lease', transmission: 'manual' },

//   ]
  
//   exports.cars = cars
  
//   exports.seed = function (knex, Promise) {
//     return knex('cars').truncate()
//       .then(function () {
//         return knex('cars').insert(cars);
//       });
//   };
  