import React from "react";
const mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost";


MongoClient.connect(url, (err, client) => {
    if (err) throw err;

    var db = client.db('students-db');

    db.collection('customers').findOne({}, function (findErr, result) {
        if (findErr) throw findErr;
        console.log(result.name);
        client.close();
    });
});


const studentsSchema = mongoose.Schema({
    id: Number,
    name: String,
    averageGrade: Number,
    educationTiming: String,
    doubt: String,
    group: String
});

const students = mongoose.model('studentsSchema', studentsSchema);

export const TestMongo = () => {
    return (
        <div>
             {students}
        </div>
    );
}
