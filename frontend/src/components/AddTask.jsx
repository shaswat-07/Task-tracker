import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; 

function AddTask ({ isOpen, setIsOpen, setTasks }) {

    
    const [taskContent, setTaskContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState('')

    if (!isOpen) return null;

    async function handleAdd() {
        

        if (!taskContent.trim()) {
            setError('Task cannot be empty')
            return;
        }

        try {
            
            setLoading(true);
            if(taskContent.length<3){
                setError('Task size too small')
                return;
            }

            if(taskContent.length>500){
                setError('Task size too large')
                return;
            }

            const res = await axiosInstance.post("/add", {
                taskContent
            });

            setTasks(prev => [...prev, res.data.taskDoc]);

            setTaskContent("");
            setIsOpen(false);
            setError('')

        }
        catch (error) {
            
            setError(error.response?.data?.error || error.message)
            console.log("Error adding task");

        }
        finally {

            setLoading(false);

        }

    }

    return (

        <div className="w-full h-full fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-5 md:p-6">

                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5">
                    Add New Task
                </h2>

                <textarea

                    rows={4}

                    value={taskContent}

                    onChange={(e) => setTaskContent(e.target.value)}

                    placeholder="Enter your task..."

                    className="w-full resize-none rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"

                />

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6">

                    <button

                        onClick={() => {

                            setTaskContent("");
                            setIsOpen(false);

                        }}

                        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white transition-all"

                    >
                        Cancel
                    </button>

                    <button

                        onClick={handleAdd}

                        disabled={loading}

                        className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition-all disabled:opacity-60"

                    >
                        {loading ? "Adding..." : "Add Task"}
                    </button>

                    

                </div>
                {
                error && 
                (
                    <div>
                        <p className= 'text-red-500'>{error}</p>
                    </div>
                )
                }

            </div>

        </div>

    );

}

export default AddTask;