const Sequelize = require('sequelize');

// get the current environment whether it is in the production or in the development by default it is development
const env = process.env.NODE_ENV || 'development';
// taking the configuration setting from the configuration by getting the env from the env and taken the configuration from the config.json file
const config = require(__dirname+'../../config.json')[env];
// and those config are applied to the Sequalize
const sequelize = new Sequelize(config);

const db = {};