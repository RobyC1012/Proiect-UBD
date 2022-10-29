import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 64,
        },
        stud_id: {
            type: mongoose.ObjectId,
            ref: "Student",
        },
        role: {
            type: [String],
            trim: true,
            default: ["User"],
            enum: ["User", "Student", "Teacher"],
        },
    },
    { timestamps: true },
);

export default mongoose.model("Users", userSchema);