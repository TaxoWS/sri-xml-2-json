import { Ride } from ".";
import { fixtures } from "./fixtures";

const run = async () => {
  console.log('Running example...');
  const ride = new Ride(fixtures.EXAMPLE_06_2025_3);
  const result = await ride.convertToJson();
  const responseParsed = JSON.parse(result);

  console.dir(responseParsed, { depth: null });
};

run();