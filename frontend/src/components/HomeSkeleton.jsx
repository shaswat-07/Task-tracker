function HomeSkeleton() {

    return (

        <div className="min-h-screen bg-white animate-pulse">

            {/* Header */}

            <div className="bg-indigo-50 border-b border-gray-200 shadow-sm">

                <div className="h-10 w-64 bg-indigo-100 rounded-lg mx-auto my-6"></div>

            </div>

            {/* Columns */}

            <div className="p-4 md:p-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[calc(100vh-120px)]">

                    {/* Pending */}

                    <div className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md h-[70vh] lg:h-full overflow-hidden">

                        <div className="bg-sky-100 h-16 border-b border-gray-200"></div>

                        <div className="flex-1 p-5 space-y-5 overflow-hidden">

                            <div className="h-32 rounded-xl bg-gray-100"></div>

                            <div className="h-32 rounded-xl bg-gray-100"></div>

                            <div className="h-32 rounded-xl bg-gray-100"></div>

                        </div>

                    </div>

                    {/* Completed */}

                    <div className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md h-[70vh] lg:h-full overflow-hidden">

                        <div className="bg-green-100 h-16 border-b border-gray-200"></div>

                        <div className="flex-1 p-5 space-y-5 overflow-hidden">

                            <div className="h-32 rounded-xl bg-gray-100"></div>

                            <div className="h-32 rounded-xl bg-gray-100"></div>

                            <div className="h-32 rounded-xl bg-gray-100"></div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Floating Button */}

            <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-200"></div>

        </div>

    );

}

export default HomeSkeleton;