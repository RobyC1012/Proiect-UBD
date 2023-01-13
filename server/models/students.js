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
        country: {
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
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    },
    { timestamps: true },
);

export default mongoose.model("Student", studentSchema);