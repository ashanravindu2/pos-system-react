interface StaffUpdatePopUpProps {
    onClose: () => void;
}

export function ViewStaffPopUp( { onClose }: StaffUpdatePopUpProps) {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">View Staff member</h2>

                    {/* Staff Id */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1">Staff ID</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded px-3 py-2 mb-3"
                            placeholder="Staff ID"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">First Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder=" First Name"
                                disabled
                            />
                        </div>
                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Last Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder=" Last Name"
                                disabled
                            />
                        </div>
                        {/* Designation */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Designation</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder=" Designation"
                                disabled
                            />
                        </div>
                        {/* Join Date */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Join Date</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-3 py-2"
                                disabled
                            />
                        </div>
                        {/* Date of Birth */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Date of Birth</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-3 py-2"
                                disabled
                            />
                        </div>
                        {/* Gender */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Gender</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Role"
                                disabled
                            />
                        </div>
                        {/* Address */}
                        <div className="col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-1">Address</label>
                            <textarea
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder=" Address"
                                rows={2}
                                disabled
                            ></textarea>
                        </div>
                        {/* Contact No */}
                        <div className="flex flex-col" >
                            <label className="text-sm font-semibold mb-1">Contact No.</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder=" Contact Number"
                                disabled
                            />
                        </div>
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Email Address"
                                disabled
                            />
                        </div>
                        {/* Role */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Role</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Role"
                                disabled
                            />
                        </div>
                    </div>
                    {/* Save Button */}
                    <div className="text-center mt-6  ">
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