interface LogoutProps {
    onClose: () => void;
}

export function Logout({ onClose }: LogoutProps) {
    return (
        <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Logout</h2>
                    <p className="text-gray-600 mb-6">
                        Are you sure you want to log out of your account?
                    </p>
                    <div className="flex justify-end gap-4">
                        <button
                            className="bg-emerald-100	 hover:bg-emerald-200	 text-gray-800 font-semibold py-2 px-4 rounded"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-emerald-500	 hover:bg-emerald-700	 text-white font-semibold py-2 px-4 rounded"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}