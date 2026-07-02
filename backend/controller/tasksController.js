import tasks from '../model/tasksModel.js'

export const addTask = async(req,res)=>{

    const {taskContent}= req.body
    try{

        if (!taskContent || !taskContent.trim()) {
            return res.status(400).json({
                error: "Task is required"
            });
        }
        const taskDoc= await tasks.create({taskContent: taskContent})
        return res.status(201).json({message: 'task added successfully', taskDoc})

    }
    catch(error){
       
        return res.status(400).json({error: error.message})

    }
}


export const getTask = async(req,res)=>{

    try{

        
        const allTasks = await tasks.find().sort({ createdAt: -1 });
        return res.status(200).json(allTasks)

    }

    catch(error){
        
        return res.status(400).json({error: error.message})

    }
}


export const deleteTask = async(req,res)=>{

    const taskId= req.params.id

    try{

        
        const taskDoc = await tasks.findById(taskId)
        if(!taskDoc){

            return res.status(404).json({error: 'task not found'})

        }
        await taskDoc.deleteOne()
        return res.status(200).json({message: 'task deleted successfully'})

    }
    catch(error){

        
        return res.status(400).json({error: error.message})

    }
}


export const updateTask =async(req,res)=>{

    const taskId= req.params.id

    try{

        
        const taskDoc= await tasks.findById(taskId)
        if(!taskDoc){

            return res.status(404).json({error: 'task not found'})

        }
        const {taskContent}= req.body
        if (!taskContent || !taskContent.trim()) {
            return res.status(400).json({
                error: "Task is required"
            });
        }
        taskDoc.taskContent= taskContent
        await taskDoc.save();
        return res.status(200).json({message: 'tasks updated successfully', taskDoc})

    }
    catch(error){

        
        return res.status(400).json({error: error.message})

    }
}


export const isCompleted= async(req,res)=>{

    const taskId= req.params.id
    try{

        
        const taskDoc= await tasks.findById(taskId)
        if(!taskDoc){

            return res.status(404).json({error: 'task not found'})

        }
        const { isCompleted } = req.body;

        if (typeof isCompleted !== "boolean") {
            return res.status(400).json({
                error: "isCompleted must be either true or false"
            });
        }
        taskDoc.isCompleted= isCompleted
        await taskDoc.save()
        return res.status(200).json({message: 'task completion state changed successfully', taskDoc})
    }
    catch(error){

        
        return res.status(400).json({error: error.message})

    }
}