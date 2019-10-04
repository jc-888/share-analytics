import mongoose from "mongoose";

const linkSchema = mongoose.Schema({
  userId: String,
  redirectId: String,
  redirectURL: String,
  link: String,
  title: String,
  date: String,
  data: []
})


export const Link = mongoose.model(
  "Link", 
  linkSchema
);
