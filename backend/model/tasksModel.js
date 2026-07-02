import mongoose from 'mongoose'

const tasksSchema= new mongoose.Schema(
    {
        taskContent:{
            type: String,
            minlength: 5,
            maxlength: 500,
            required: true
        },
        isCompleted:{
            type: Boolean,
            default: false,
            required: true
        },
        
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Tasks", tasksSchema)