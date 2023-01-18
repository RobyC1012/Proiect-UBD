import mongoose from "mongoose";

const { Schema } = mongoose;

const facultySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },

    },
    { timestamps: true },
);

export default mongoose.model("Faculty", facultySchema);