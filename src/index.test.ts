import { describe, it, expect } from "vitest";
import { Ride } from "./index";
import { fixtures } from "./fixtures";

describe("sri-xml-2-json", () => {
  describe("BILLS", () => {
    it("should be return error when input no is valid ride", async () => {
      const ride = new Ride(`<hola>hola</hola>`);
      await expect(ride.convertToJson()).rejects.toThrow(
        "Error converting xml to json"
      );
    });
    it("should be retun a json response", async () => {
      const ride = new Ride(fixtures.BILL_MULTIPLE_ITEMS);
      const result = await ride.convertToJson();
      expect(typeof result).toBe("string");
      const responseParsed = JSON.parse(result);
      // expect(responseParsed).toEqual(
      //   expect.objectContaining({
      //     ambiente: expect.any(String),
      //     infoAdicional: expect.any(Array),
      //     infoDocumento: expect.any(Object),
      //   })
      // );
      expect(responseParsed).toHaveProperty("infoTributaria");
      console.log(responseParsed);
    });
    it("should be return a json when bill contain one product", async () => {
      const ride = new Ride(fixtures.BILL_ONE_PRODUCT);
      const result = await ride.convertToJson();
      expect(typeof result).toBe("string");
    });
    it("should be return json with infoAditional when infoAdicional input is an object ", async () => {
      const ride = new Ride(fixtures.BILL_ADITIONAL_FIELDS);
      const result = await ride.convertToJson();
      const responseParsed = JSON.parse(result);

      expect(responseParsed).toHaveProperty("infoAdicional");
      expect(responseParsed.infoAdicional).toEqual([
        {
          nombre: "CORREO 1",
          valor: "kfc@kfc.com.ec",
        },
      ]);

      expect(typeof result).toBe("string");
    });
    it("should be return json without infoAditional when infoAdicional input isn't present ", async () => {
      const ride = new Ride(fixtures.BILL_ADITIONAL_FIELDS_2);
      const result = await ride.convertToJson();
      const responseParsed = JSON.parse(result);

      expect(responseParsed).not.toHaveProperty("infoAdicional");

      expect(typeof result).toBe("string");
    });
  });
  describe("CREDITS NOTES", () => {
    it("should convert credit note document", async () => {
      const ride = new Ride(fixtures.CREDIT_NOTE);

      const result = await ride.convertToJson();
      const responseParsed = JSON.parse(result);
      expect(responseParsed).not.toHaveProperty("infoAdicional");
      expect(responseParsed).toHaveProperty("infoTributaria");
      expect(responseParsed).toHaveProperty("infoDocumento");
      expect(responseParsed).toHaveProperty("productos");
    });
  });
});
