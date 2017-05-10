//set up the database if not exist
const pg = require('pg');
const knex = require('knex');

const db = require('./config');
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
