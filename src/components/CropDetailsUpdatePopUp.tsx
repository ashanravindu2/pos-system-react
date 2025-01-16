interface CropDetailsUpdatePopUpProps {
    onClose: () => void;
}

export function CropDetailsUpdatePopUp({ onClose }: CropDetailsUpdatePopUpProps) {

    function onSave() {
        return () => {
            console.log("update crop details");
        }
    }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Update Logs</h2>
                    <div className="grid grid-cols-2 gap-4">

                        {/* description */}
                        <div className="col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-1">Details</label>
                            <textarea
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Address"
                                rows={2}
                            ></textarea>
                        </div>

                        {/* image1 */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Select Image</label>
                            <input
                                type="file"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Designation"
                            />
                        </div>

                    </div>
                    {/* Save Button */}
                    <div className="text-center mt-6 space-x-40 ">
                        <button
                            className="bg-emerald-100	 hover:bg-emerald-200	 text-gray-800 font-semibold py-2 px-6 rounded w-40"
                            onClick={onClose}>
                            Cancel
                        </button>

                        <button
                            className="bg-emerald-500	 hover:bg-emerald-700	 text-white font-semibold py-2 px-6 rounded w-40"
                            onClick={onSave()}
                        >
                            Update logs
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}