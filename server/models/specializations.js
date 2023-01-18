import mongoose from "mongoose"

const { Schema } = mongoose

const specializationSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        years: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        facultyID: {
            type: Schema.Types.ObjectId,
            ref: "Faculty",
            required: true,
        }

    },
    { timestamps: true },
);

export default mongoose.model("Specialization", specializationSchema);