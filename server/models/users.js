import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
    
        name: {
            type: String,
            trim: true,
            required: true,
        },
        lastName: {
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
        role: {
            type: [String],
            trim: true,
            default: ["User"],
            enum: ["User", "Student", "Teacher", "Admin"],
        },
        studId: {
            type: Schema.Types.ObjectId,
            ref: "Student",
        },  
    },
    { timestamps: true },
);

export default mongoose.model("Users", userSchema);