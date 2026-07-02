import NoteCard from "./NoteCard";  

function TaskColumn({ title, bgColor, tasks, setTasks }) {
    
    return (

        <div className="flex flex-col bg-white rounded-2xl shadow-md border border-gray-200 h-[70vh] lg:h-full overflow-hidden">

            {/* Heading */}

            <div
                className={`${bgColor} px-6 py-4 border-b border-gray-200`}
            >
                <h2 className="text-xl font-semibold text-gray-800">
                    {title}
                </h2>
            </div>

            {/* Tasks */}

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 flex flex-col gap-5">

                {
                    tasks.length === 0 ? (

                        <div className="flex justify-center items-center h-full">

                            <p className="text-gray-400 text-center">
                                No tasks here.
                            </p>

                        </div>

                    ) : (

                        tasks.map(task => (

                            <NoteCard

                                key={task._id}

                                taskId={task._id}

                                content={task.taskContent}

                                isCompleted={task.isCompleted}

                                setTasks={setTasks}

                                
                                tasks={tasks}

                            />

                        ))

                    )
                }

            </div>

        </div>

    );

}

export default TaskColumn;