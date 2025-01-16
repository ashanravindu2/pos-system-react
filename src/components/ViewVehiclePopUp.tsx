interface ViewVehiclePopUpProps {
    onClose: () => void;
}

export function ViewVehiclePopUp({onClose}: ViewVehiclePopUpProps) {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Vehicle Details</h2>
                    <div className="grid grid-cols-2 gap-4">

                        {/*V id*/}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Vehicle Code</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Vehicle Code"
                                disabled
                            />
                        </div>


                        {/* License Plate No */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">License Plate No</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="License Plate No"
                                disabled
                            />
                        </div>
                        {/* Category */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Category</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Category"
                                disabled
                            />
                        </div>
                        {/* Fuel Type */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Fuel Type</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Fuel Type"
                                disabled
                            />
                        </div>

                        {/* status */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Status</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Status"
                                disabled
                            />
                        </div>

                        {/* Remark */}
                        <div className="col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-1">Remarks</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Remarks"
                                disabled
                            />
                        </div>
                        {/* Role */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Select Staff</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="staff id"
                                disabled
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

                    </div>


                </div>
            </div>
        </>
    );
}