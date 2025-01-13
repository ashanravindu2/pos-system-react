export const Error = () => {
    return (
        <div className=" flex fixed  w-screen h-screen  items-center justify-center pr-52 ">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-red-500 animate-pulse">
                    404
                </h1>
                <p className="mt-4 text-xl text-gray-700">
                    Page Not Found
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-2 text-white bg-emerald-500	 hover:bg-emerald-700 rounded"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};
