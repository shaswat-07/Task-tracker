import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance.js"; 

function NoteCard({ taskId, content, isCompleted, setTasks, tasks }) {

    
    const [isEditing, setIsEditing] = useState(false);
    const [taskContent, setTaskContent] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTaskContent(content);
        setCompleted(isCompleted);
    }, [content, isCompleted]);

    async function handleDelete() {
        try {
            
            await axiosInstance.delete(`/delete/${taskId}`);

            setTasks(prev =>
                prev.filter(task => task._id !== taskId)
            );

        }
        catch (error) {
            
            console.log('Error deleting task');
        }
    }

    async function handleEdit() {
        try {
            
            const res = await axiosInstance.put(`/update/${taskId}`, {
                taskContent
            });

            setTasks(prev =>
                prev.map(task =>
                    task._id === taskId
                        ? res.data.taskDoc
                        : task
                )
            );

            setTaskContent(res.data.taskDoc.taskContent);

        }
        catch (error) {
            
            console.log('Error in editing task');
        }
        finally {
            setIsEditing(false);
        }
    }

    async function handleCompletion() {
        try {

            
            const res = await axiosInstance.put(`/isCompleted/${taskId}`, {
                isCompleted: !completed
            });

            const updatedTask = res.data.taskDoc;

            setTasks(prev =>
                prev.map(task =>
                    task._id === taskId
                        ? updatedTask
                        : task
                )
            );

            setCompleted(updatedTask.isCompleted);

        }
        catch (error) {
            
            console.log('Error updating task');
        }
    }

    return (

        <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-5 transition-shadow duration-200 hover:shadow-md">

            {/* Task Content */}

            <div className="flex-1">

                {
                    isEditing ? (

                        <input
                            type="text"
                            value={taskContent}
                            onChange={(e) => setTaskContent(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    ) : (

                        <p className="text-gray-800 text-base leading-7 break-words">
                            {taskContent}
                        </p>

                    )
                }

            </div>

            {/* Actions */}

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">

                {/* Complete */}

                <button
                    onClick={handleCompletion}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        completed
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-gray-400 hover:bg-gray-100"
                    }`}
                >

                    {completed && (
                        <span className="text-sm font-semibold">✓</span>
                    )}

                </button>

                <div className="flex gap-3">

                    {

                        isEditing ? (

                            <button
                                onClick={handleEdit}
                                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white"
                            >
                                Save
                            </button>

                        ) : (

                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white"
                            >
                                Edit
                            </button>

                        )

                    }

                    <button
                        onClick={handleDelete}
                        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );
}

export default NoteCard;