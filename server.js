//jshint esversion:6
import express, { response } from 'express';

// const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Welcome, I'm Anthony </h1>");
})

app.get("/about", function(req, res) {
    res.send("<h2>I'm Anthony, 21. I attend CU, I'm very active on Twitter.</h2>")
})

app.listen(3000, function () {
    console.log('listening on port 3000')
})