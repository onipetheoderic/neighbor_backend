import { object, string } from "yup";

const payload = {
  body: object({
    name: string().required("Name is required"),
    date: string().required("date is required"),
    location: string()
      .required("location is required")
      .min(20, "location is too short - should be 20 chars minimum."),
    expectedWeather: string().required("expected Weather is required"),
  }),
};

const updatePayload = {
  body: object({
    name: string(),
    date: string(),
    location: string(),
  }),
};

const params = {
  params: object({
    eventId: string().required("eventId is required"),
  }),
};

export const createEventSchema = object({
  ...payload,
});

export const updateEventSchema = object({
  ...params,
  ...updatePayload,
});

export const deleteEventSchema = object({
  ...params,
});
