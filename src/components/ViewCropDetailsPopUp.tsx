
import '../styles/Animation.css'

interface CropViewPopUpProps {
    onClose: () => void;
}


export function ViewCropDetailsPopUp({ onClose }: CropViewPopUpProps) {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Save Logs</h2>
                    <div className="grid grid-cols-2 gap-4">

                        {/* description */}
                        <div className="col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-1">Details</label>
                            <textarea
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter details"
                                rows={2}
                                disabled
                            ></textarea>
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

                        {/* image1 */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Image</label>
                            <img className="image-1" src="src/assets/farmer.png" alt=""/>
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