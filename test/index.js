"use strict";

var should = require("should");
var motivation = require("../lib");

describe("data", function () {
  it("should contain valid motivations", function () {
    var m = motivation.getAll();
    for(var i = 0; i < m.length; i++){
      should.exist(m[i].text);
      should.exist(m[i].author);
    }
  });
});

describe("motivation", function () {
  it("should motivate!", function () {
    var m = motivation.get();
    should.exist(m.text);
    should.exist(m.author);
  });
});
