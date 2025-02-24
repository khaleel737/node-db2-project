exports.up = function(knex) {
    // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id').primary().unsigned();
    tbl.string('vin')
      .notNullable()
      .unique();
      tbl.string('make')
      .notNullable()
      .unique();
      tbl.string('model')
      .notNullable()
      .unique();
      tbl.float('mileage')
      .notNullable()
      .unique();
      tbl.string('title');
      tbl.string('transmission');
  });
};

exports.down = function(knex) {
    // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};

// insert into `cars` (`make`, `mileage`, `model`, `title`, `transmission`, `vin`) select 'toyota' as `make`, 250000 as `mileage`, 'prius' as `model`, 'salvage' as `title`, 'CVT' as `transmission`, '11111111111111111' as `vin` union all select 'ford' as `make`, 120000 as `mileage`, 'mustang' as `model`, 'clean' as `title`, 'manual' as `transmission`, '22222222222222222' as `vin` union all select 'honda' as `make`, 220000 as `mileage`, 'accord' as `model`, 'clean' as `title`, 'automatic' as `transmission`, '33333333333333333' as `vin` - SQLITE_ERROR: table cars has no column named mileage


// | field        | data type        | metadata                                            |
// | ------------ | ---------------- | --------------------------------------------------- |
// | id           | unsigned integer | primary key, auto-increments, generated by database |
// | vin          | string           | required, unique                                    |
// | make         | string           | required                                            |
// | model        | string           | required                                            |
// | mileage      | numeric          | required                                            |
// | title        | string           | optional                                            |
// | transmission | string           | optional           