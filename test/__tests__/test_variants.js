// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/rescript-jest/src/jest.js");
var Variants = require("../src/Variants.js");

Jest.describe("variants with @spice.as", (function () {
        Jest.test("encode 하나", (function () {
                var variantEncoded = Variants.t_encode("One");
                return Jest.Expect.toEqual(Jest.Expect.expect(variantEncoded), "하나");
              }));
        Jest.test("encode 둘", (function () {
                var variantEncoded = Variants.t_encode("Two");
                return Jest.Expect.toEqual(Jest.Expect.expect(variantEncoded), "둘");
              }));
        Jest.test("decode 하나", (function () {
                var variantDecoded = Variants.t_decode("하나");
                return Jest.Expect.toEqual(Jest.Expect.expect(variantDecoded), {
                            TAG: "Ok",
                            _0: "One"
                          });
              }));
        Jest.test("decode 둘", (function () {
                var variantDecoded = Variants.t_decode("둘");
                return Jest.Expect.toEqual(Jest.Expect.expect(variantDecoded), {
                            TAG: "Ok",
                            _0: "Two"
                          });
              }));
      }));

Jest.describe("variants without @spice.as", (function () {
        Jest.test("encode One1", (function () {
                var variantEncoded = Variants.t1_encode("One1");
                return Jest.Expect.toEqual(Jest.Expect.expect(variantEncoded), ["One1"]);
              }));
        Jest.test("encode Two1", (function () {
                var variantEncoded = Variants.t1_encode("Two1");
                return Jest.Expect.toEqual(Jest.Expect.expect(variantEncoded), ["Two1"]);
              }));
        Jest.test("decode [\"One1\"]", (function () {
                var variantDecoded = Variants.t1_decode(["One1"]);
                return Jest.Expect.toEqual(Jest.Expect.expect(variantDecoded), {
                            TAG: "Ok",
                            _0: "One1"
                          });
              }));
        Jest.test("decode [\"Two1\"]", (function () {
                var variantDecoded = Variants.t1_decode(["Two1"]);
                return Jest.Expect.toEqual(Jest.Expect.expect(variantDecoded), {
                            TAG: "Ok",
                            _0: "Two1"
                          });
              }));
      }));

Jest.describe("unboxed variants with @spice.as", (function () {
        Jest.test("encode 하나", (function () {
                var variantEncoded = Variants.t2_encode(0);
                return Jest.Expect.toEqual(Jest.Expect.expect(variantEncoded), 0.0);
              }));
        Jest.test("decode 하나", (function () {
                var variantDecoded = Variants.t2_decode(0.0);
                return Jest.Expect.toEqual(Jest.Expect.expect(variantDecoded), {
                            TAG: "Ok",
                            _0: 0
                          });
              }));
      }));

Jest.describe("unboxed variants without @spice.as", (function () {
        Jest.test("encode One3(0)", (function () {
                var variantEncoded = Variants.t3_encode(0);
                return Jest.Expect.toEqual(Jest.Expect.expect(variantEncoded), 0.0);
              }));
        Jest.test("decode 0", (function () {
                var variantDecoded = Variants.t3_decode(0.0);
                return Jest.Expect.toEqual(Jest.Expect.expect(variantDecoded), {
                            TAG: "Ok",
                            _0: 0
                          });
              }));
      }));

/*  Not a pure module */
