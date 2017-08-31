"use strict"
var mongoose = require('mongoose');

var eventsSchema = mongoose.Schema({
    date: String ,
    time: String ,
    venue: String,
    description: String ,
    no_of_people_involved: Number
});

var Events = mongoose.model('Events', eventsSchema);

module.exports = Events;