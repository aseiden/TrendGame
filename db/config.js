// var knex = require('./setupDatabase.js');
var db = require('knex')({
  client: 'pg',
  connection: {
    host: 'ec2-54-163-236-33.compute-1.amazonaws.com',
    user: 'xuqmjoljxsgyig',
    password: '4fea8d64593a9d82b3730454d26dd73cfadc89304e60e6a049303f4afba3fb17',
    database: 'dfqkhh2tul4ekl',
    ssl: true
  }
});

console.log(db);

db.schema.hasTable('trends').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('trends', function (trend) {
      trend.increments('id').primary();
      trend.string('name');
      trend.timestamps();
    }).then(function (table) {
      console.log('Created Table trends');
    });
  }
});
db.schema.hasTable('weeks').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('weeks', function (week) {
      week.increments('id').primary();
      week.string('startDate');
      week.integer('popularity');
      week.integer('trendId').unsigned();
      week.foreign('trendId').references('trends.id');
    }).then(function (table) {
      console.log('created Table weeks');
    });
  }
});
db.schema.hasTable('stories').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('stories', function (story) {
      story.increments('id').primary();
      story.string('articleName', 500);
      story.string('mediaUrl', 200);
      story.string('url', 500);
      story.string('previewText', 1000);
      story.integer('weeksId').unsigned();
      story.foreign('weeksId').references('weeks.id');
    }).then(function (table) {
      console.log('created Table stories');
    });
  }
});
module.exports = db;
