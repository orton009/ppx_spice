// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Spice = require("./Spice.js");
var Js_json = require("rescript/lib/js/js_json.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Belt_Result = require("rescript/lib/js/belt_Result.js");

function t_encode(v) {
  if (v) {
    return "둘";
  } else {
    return "하나";
  }
}

function t_decode(v) {
  var str = Js_json.classify(v);
  if (typeof str === "number") {
    return Spice.error(undefined, "Not a JSONString", v);
  }
  if (str.TAG !== /* JSONString */0) {
    return Spice.error(undefined, "Not a JSONString", v);
  }
  var str$1 = str._0;
  if ("하나" === str$1) {
    return {
            TAG: /* Ok */0,
            _0: /* One */0
          };
  } else if ("둘" === str$1) {
    return {
            TAG: /* Ok */0,
            _0: /* Two */1
          };
  } else {
    return Spice.error(undefined, "Not matched", v);
  }
}

function t1_encode(v) {
  if (v) {
    return ["Two1"];
  } else {
    return ["One1"];
  }
}

function t1_decode(v) {
  var json_arr = Js_json.classify(v);
  if (typeof json_arr === "number") {
    return Spice.error(undefined, "Not a variant", v);
  }
  if (json_arr.TAG !== /* JSONArray */3) {
    return Spice.error(undefined, "Not a variant", v);
  }
  var json_arr$1 = json_arr._0;
  if (json_arr$1.length === 0) {
    return Spice.error(undefined, "Expected variant, found empty array", v);
  }
  var tagged = json_arr$1.map(Js_json.classify);
  var match = Belt_Array.getExn(tagged, 0);
  if (typeof match !== "number" && match.TAG === /* JSONString */0) {
    switch (match._0) {
      case "One1" :
          if (tagged.length !== 1) {
            return Spice.error(undefined, "Invalid number of arguments to variant constructor", v);
          } else {
            return {
                    TAG: /* Ok */0,
                    _0: /* One1 */0
                  };
          }
      case "Two1" :
          if (tagged.length !== 1) {
            return Spice.error(undefined, "Invalid number of arguments to variant constructor", v);
          } else {
            return {
                    TAG: /* Ok */0,
                    _0: /* Two1 */1
                  };
          }
      default:
        
    }
  }
  return Spice.error(undefined, "Invalid variant constructor", Belt_Array.getExn(json_arr$1, 0));
}

var t2_encode = Spice.intToJson;

function t2_decode(v) {
  return Belt_Result.map(Spice.intFromJson(v), (function (v) {
                return v;
              }));
}

var t3_encode = Spice.intToJson;

function t3_decode(v) {
  return Belt_Result.map(Spice.intFromJson(v), (function (v) {
                return v;
              }));
}

exports.t_encode = t_encode;
exports.t_decode = t_decode;
exports.t1_encode = t1_encode;
exports.t1_decode = t1_decode;
exports.t2_encode = t2_encode;
exports.t2_decode = t2_decode;
exports.t3_encode = t3_encode;
exports.t3_decode = t3_decode;
/* No side effect */