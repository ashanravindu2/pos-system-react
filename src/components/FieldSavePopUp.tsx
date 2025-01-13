interface FieldSavePopUpProps {
    onClose: () => void;
}

export function FieldSavePopUp( { onClose }: FieldSavePopUpProps) {
    function onSave() {
        return () => {
            console.log("Save Field");
        }
    }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Add New Field</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Field Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Field Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Field Name"
                            />
                        </div>
                        {/* Field size */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Field Size</label>
                            <input
                                type="number"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Field Size"
                            />
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
                        {/* image2 */}
                        <div className="flex flex-col ">
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
                            Save Field
                        </button>
                    </div>


                </div>
            </div>

        </>
    );
}