interface StaffUpdatePopUpProps {
    onClose: () => void;
}

export function ViewFieldPopUp({ onClose }: StaffUpdatePopUpProps) {

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="h-[800px]  bg-white rounded-lg shadow-lg p-8 w-[600px] overflow-x-scroll ">
                    <h2 className="text-xl font-bold mb-4 text-center">View Field</h2>
                    <div className="grid grid-cols-2 gap-4">

                        {/*FieldId*/}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">FieldID</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Field Name"
                                disabled
                            />
                        </div>

                        {/* Field Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Field Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Field Name"
                                disabled
                            />
                        </div>
                        {/* Field size */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Field Size</label>
                            <input
                                type="number"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Field Size"
                                disabled
                            />
                        </div>

                        {/*staffmembers list*/}
                        <div className="table border border-black">
                            {/* Table Head */}
                            <div className="table-header w-full grid grid-cols-2 border-b border-black">
                                <div className="p-2">Staff Id</div>
                                <div className="p-2 border-l border-black">Staff Name</div>
                            </div>

                            {/* Table Body */}
                            <div className="table-body overflow-y-scroll h-32">
                                <div className="grid grid-cols-2 border-b border-black">
                                    <div className="p-2">1</div>
                                    <div className="p-2 border-l border-black">John Doe</div>
                                </div>


                            </div>
                        </div>


                        {/*image*/}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Image 1</label>
                            <img className="image-1" src="src/assets/farmer.png" alt=""/>
                            <label className="text-sm font-semibold mb-1">Image 2</label>
                            <img className="image-2" src="src/assets/farmer.png" alt=""/>
                        </div>


                    </div>
                    {/* Save Button */}
                    <div className="text-center  space-x-40 ">
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