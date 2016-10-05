"use strict";

var path = require("path");

function Motivation(){
    this.quotes = require(path.join(__dirname, "quotes.js"));
    return this;
}

Motivation.prototype.get = function(){
    var i = Math.floor((Math.random() * this.quotes.length - 1) + 0);
    var result = this.quotes[i];
    return result;
};

Motivation.prototype.getAll = function(){
    return this.quotes;
};

module.exports = new Motivation();
