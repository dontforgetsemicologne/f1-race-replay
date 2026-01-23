import * as v from "valibot";

const event = v.object({
  RoundNumber: v.number("RoundNumber should be a number"),
  Country: v.string("Country should be a string"),
  Location: v.string("Location should be a string"),
  OfficialEventName: v.string("OfficialEventName should be a string"),
  EventDate: v.string("EventDate should be a string"),
  EventName: v.string("EventName should be a string"),
  EventFormat: v.string("EventFormat should be a string"),
  Session1: v.string("Session1 should be a string"),
  Session1Date: v.string("Session1Date should be a string"),
  Session1DateUtc: v.string("Session1DateUtc should be a string"),
  Session2: v.string("Session2 should be a string"),
  Session2Date: v.string("Session2Date should be a string"),
  Session2DateUtc: v.string("Session2DateUtc should be a string"),
  Session3: v.string("Session3 should be a string"),
  Session3Date: v.string("Session3Date should be a string"),
  Session3DateUtc: v.string("Session3DateUtc should be a string"),
  Session4: v.string("Session4 should be a string"),
  Session4Date: v.string("Session4Date should be a string"),
  Session4DateUtc: v.string("Session4DateUtc should be a string"),
  Session5: v.string("Session5 should be a string"),
  Session5Date: v.string("Session5Date should be a string"),
  Session5DateUtc: v.string("Session5DateUtc should be a string"),
  F1ApiSupport: v.boolean("F1ApiSupport should be a boolean")
});

const events = v.array(event, "Events should be an array");

type Event = v.InferInput<typeof event>;
type Events = v.InferInput<typeof events>;

export { event, events };
export type { Event, Events };
