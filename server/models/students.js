import mongoose from "mongoose"

const { Schema } = mongoose

const studentSchema = new Schema(
    {
        pi: {
            type: String,
            trim: true,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        educationForm: {
            type: String,
            trim: true,
            required: true,
        },
        address: {
            type: String,
            trim: true, 
            required: true,
        },
        phone: {
            type: String,
            trim: true,
            required: true,
        },

    },
    { timestamps: true },
);

export default mongoose.model("Student", studentSchema);