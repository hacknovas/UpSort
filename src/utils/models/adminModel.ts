import mongoose from "mongoose";

interface Admin extends mongoose.Document {
  email: String;
  pass: String;
}

type AdminModel = mongoose.Model<Admin>;

const struct = new mongoose.Schema<Admin, AdminModel>({
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

export const modelAdmin: AdminModel =
  mongoose.models.adminDetails ??
  mongoose.model<Admin, AdminModel>("adminDetails", struct);
