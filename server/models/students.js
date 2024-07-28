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
        address: {
            type: String,
            trim: true, 
            required: true,
        },
        city: {
            type: String,
            trim: true,
            required: true,
        },
        county: {
            type: String,
            trim: true,
            required: true,
        },
        postalCode: {
            type: Number,
            required: true,
        },
        phone: {
            type: String,
            trim: true,
            required: true,
        },
        statut: {
            type: String,
            trim: true,
            default:"Budget"
        },
        courses: {
            type: [Schema.Types.ObjectId],
            trim: true
        },
        specialization: {
            type: String,
        }

    },
    { timestamps: true },
);

export default mongoose.model("Student", studentSchema);