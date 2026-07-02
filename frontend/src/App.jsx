import { useEffect, useState } from "react";
import axiosInstance from "./utils/axiosInstance.js";


import TaskColumn from "./components/TaskColumn.jsx";
import AddTask from "./components/AddTask.jsx";
import HomeSkeleton from "./components/HomeSkeleton.jsx";

function App() {

    const [tasks, setTasks] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {

        fetchTasks();

    }, []);

    
    async function fetchTasks() {

        try {

            setLoading(true);

            const res = await axiosInstance.get("/get");

            setTasks(res.data);
            

        }
        catch (error) {

            console.log("Error fetching tasks");

        }
        finally {

            setLoading(false);

        }

    }

    const pendingTasks = tasks.filter(task => !task.isCompleted);

    const completedTasks = tasks.filter(task => task.isCompleted);

    if (loading) {

        return (

            <HomeSkeleton/>
        );

    }

    return (

        <div className="h-screen w-screen bg-white flex flex-col">

            {/* Header */}

            <div className="bg-indigo-50 border-b border-gray-200 shadow-sm">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-5 md:py-6 text-gray-800">

                    Task Tracker

                </h1>

            </div>

            {/* Columns */}

            {/* <div className="flex-1 p-4 md:p-6 h-full w-full overflow-hidden"> */}
            <div className="flex-1 p-4 md:p-6 box-border overflow-hidden">

                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[calc(100vh-120px)]">


                    <TaskColumn

                        title="Pending Tasks"

                        bgColor="bg-sky-100"

                        tasks={pendingTasks}

                        setTasks={setTasks}

                    />

                    <TaskColumn

                        title="Completed Tasks"

                        bgColor="bg-green-100"

                        tasks={completedTasks}

                        setTasks={setTasks}

                    />

                </div>

            </div>

            {/* Floating Add Button */}

            <button

                onClick={() => setShowAddModal(true)}

                className="fixed bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500 hover:bg-blue-700 text-white text-3xl md:text-4xl shadow-lg transition-all duration-200 hover:scale-105">

                +

            </button>

            <AddTask

                isOpen={showAddModal}

                setIsOpen={setShowAddModal}

                setTasks={setTasks}

            />

        </div>

    );

}

export default App;