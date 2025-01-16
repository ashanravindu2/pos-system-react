interface CropDetailsSavePopUpProps {
    onClose: () => void;
}

export function CropDetailsSavePopUp({ onClose }: CropDetailsSavePopUpProps) {
    function onSave() {
        return () => {
            console.log("Save details crop");
        }
    }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Save Logs</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/*select field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Select a Field</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="N/A">None</option>
                                <option value="">F2233</option>
                                <option value="">F2WWWDWD</option>
                            </select>
                        </div>
                        {/* select crop */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Select a Crop</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="N/A">None</option>
                                <option value="">CWDWD</option>
                                <option value="">CDED</option>
                            </select>
                        </div>
                        {/* select staff */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Select a Staff</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="N/A">None</option>
                                <option value="">STDEFFEF</option>
                                <option value="">STDVDVFE</option>
                            </select>
                        </div>

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

                        <div className="select-field-set text-emerald-800	 ">
                            <h1>ededededed</h1>
                        </div>
                        <div className="select-staff-set text-yellow-800	">
                            <h1>ededededed</h1>
                        </div>
                        <div className="select-crop-set text-zinc-700	">
                            <h1>ededededed</h1>
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
                            Save logs
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}