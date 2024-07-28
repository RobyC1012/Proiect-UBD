import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        semester: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        specializationId: {
            type: Schema.Types.ObjectId,
            ref: "Specialization",
            required: true,
        },
        teacherId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    });

export default mongoose.model("Course", courseSchema);