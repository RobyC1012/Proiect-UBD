import mongoose from "mongoose";

const { Schema } = mongoose;

const gradeSchema = new Schema(
    {
        grade: {
            type: Number,
            required: true,
        },
        courseID: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        studentID: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },

});

export default mongoose.model("Grade", gradeSchema);
        