interface CropUpdatePopUpProps {
    onClose: () => void;
}

export function CropUpdatePopUp({ onClose }: CropUpdatePopUpProps) {

    function onSave() {
        return () => {
            console.log("Update Crop");
        }
    }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Add New Crop</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* crop Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Crop Common Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Crop Common Name"
                            />
                        </div>
                        {/* crop Scientific */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Crop Scientific Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Crop Scientific Name"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Crop Type</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Crop Type"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Crop Season</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Crop Season"
                            />
                        </div>

                        {/*staffmember comb*/}

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Field</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="N/A" selected>None</option>
                                <option value="1"> Fields 1</option>

                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <label className="text-sm font-semibold mb-1">Image</label>
                            <img className={'image1'} src={''} alt={''}/>
                        </div>


                        {/* Save Button */}
                        <div className="flex flex-col ml-12 gap-6">
                            <button
                                className="bg-emerald-100	 hover:bg-emerald-200	 text-gray-800 font-semibold py-2 px-6 rounded w-40 "
                                onClick={onClose}>
                                Cancel
                            </button>

                            <button
                                className="bg-emerald-500	 hover:bg-emerald-700	 text-white font-semibold py-2 px-6 rounded w-40"
                                onClick={onSave()}
                            >
                                Update Crop
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}