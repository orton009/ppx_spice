// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Spice from "./Spice.mjs";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Result from "rescript/lib/es6/belt_Result.js";

function t_encode(v) {
  if (v === "One") {
    return "하나";
  } else {
    return "둘";
  }
}

function t_decode(v) {
  if (!Array.isArray(v) && (v === null || typeof v !== "object") && typeof v !== "number" && typeof v !== "string" && typeof v !== "boolean") {
    return Spice.error(undefined, "Not a JSONString", v);
  }
  switch (typeof v) {
    case "string" :
        if ("하나" === v) {
          return {
                  TAG: "Ok",
                  _0: "One"
                };
        } else if ("둘" === v) {
          return {
                  TAG: "Ok",
                  _0: "Two"
                };
        } else {
          return Spice.error(undefined, "Not matched", v);
        }
    case "number" :
        if (하나 === v) {
          return {
                  TAG: "Ok",
                  _0: "One"
                };
        } else if (둘 === v) {
          return {
                  TAG: "Ok",
                  _0: "Two"
                };
        } else {
          return Spice.error(undefined, "Not matched", v);
        }
    default:
      return Spice.error(undefined, "Not a JSONString", v);
  }
}

function t1_encode(v) {
  if (v === "One1") {
    return ["One1"];
  } else {
    return ["Two1"];
  }
}

function t1_decode(v) {
  if (!Array.isArray(v) && (v === null || typeof v !== "object") && typeof v !== "number" && typeof v !== "string" && typeof v !== "boolean") {
    return Spice.error(undefined, "Not a variant", v);
  }
  if (!Array.isArray(v)) {
    return Spice.error(undefined, "Not a variant", v);
  }
  if (v.length === 0) {
    return Spice.error(undefined, "Expected variant, found empty array", v);
  }
  var match = Belt_Array.getExn(v, 0);
  if (!(!Array.isArray(match) && (match === null || typeof match !== "object") && typeof match !== "number" && typeof match !== "string" && typeof match !== "boolean") && typeof match === "string") {
    switch (match) {
      case "One1" :
          if (v.length !== 1) {
            return Spice.error(undefined, "Invalid number of arguments to variant constructor", v);
          } else {
            return {
                    TAG: "Ok",
                    _0: "One1"
                  };
          }
      case "Two1" :
          if (v.length !== 1) {
            return Spice.error(undefined, "Invalid number of arguments to variant constructor", v);
          } else {
            return {
                    TAG: "Ok",
                    _0: "Two1"
                  };
          }
      default:
        
    }
  }
  return Spice.error(undefined, "Invalid variant constructor", Belt_Array.getExn(v, 0));
}

function t2_encode(v) {
  return Spice.intToJson(v);
}

function t2_decode(v) {
  return Belt_Result.map(Spice.intFromJson(v), (function (v) {
                return v;
              }));
}

function t3_encode(v) {
  return Spice.intToJson(v);
}

function t3_decode(v) {
  return Belt_Result.map(Spice.intFromJson(v), (function (v) {
                return v;
              }));
}

function t4_encode(v) {
  if (v === "One") {
    return 1.0;
  } else {
    return 2.0;
  }
}

function t4_decode(v) {
  if (!Array.isArray(v) && (v === null || typeof v !== "object") && typeof v !== "number" && typeof v !== "string" && typeof v !== "boolean") {
    return Spice.error(undefined, "Not a JSONString", v);
  }
  switch (typeof v) {
    case "string" :
        if ("1.0" === v) {
          return {
                  TAG: "Ok",
                  _0: "One"
                };
        } else if ("2.0" === v) {
          return {
                  TAG: "Ok",
                  _0: "Two"
                };
        } else {
          return Spice.error(undefined, "Not matched", v);
        }
    case "number" :
        if (1.0 === v) {
          return {
                  TAG: "Ok",
                  _0: "One"
                };
        } else if (2.0 === v) {
          return {
                  TAG: "Ok",
                  _0: "Two"
                };
        } else {
          return Spice.error(undefined, "Not matched", v);
        }
    default:
      return Spice.error(undefined, "Not a JSONString", v);
  }
}

export {
  t_encode ,
  t_decode ,
  t1_encode ,
  t1_decode ,
  t2_encode ,
  t2_decode ,
  t3_encode ,
  t3_decode ,
  t4_encode ,
  t4_decode ,
}
/* No side effect */