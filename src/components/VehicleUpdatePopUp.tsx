interface VehicleUpdatePopUpProps {
    onClose: () => void;
}

export function VehicleUpdatePopUp({onClose} : VehicleUpdatePopUpProps) {
    function onSave() {
        return () => {
            console.log("Update Vehicle");
        }
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Update Vehicle</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* License Plate No */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">License Plate No</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="License Plate No"
                            />
                        </div>
                        {/* Category */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Category</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Category"
                            />
                        </div>
                        {/* Fuel Type */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Fuel Type</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Fuel Type"
                            />
                        </div>

                        {/* status */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Status</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="">Select Status</option>
                                <option className={'text-emerald-500'} value="available">Available</option>
                                <option className={'text-rose-600'} value="not">Not Available</option>
                            </select>
                        </div>

                        {/* Remark */}
                        <div className="col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-1">Remarks</label>
                            <textarea
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Description"
                                rows={2}
                            ></textarea>
                        </div>
                        {/* staff */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Select Staff</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="N/A">None</option>
                                <option value="">STdfef</option>
                                <option value="">STefef</option>
                            </select>
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
                            Save Staff
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}