// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const MediaType = {
  LINK: "LINK",
  PDF: "PDF",
  VIDEO: "VIDEO",
};

const { Course, Media, DynamoDBUser } = initSchema(schema);

export { Course, Media, DynamoDBUser, MediaType };
