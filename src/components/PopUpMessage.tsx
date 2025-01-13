import Swal from "sweetalert2";

export const handleDeleteData = async (staffId : string , message :string) => {
    const deleteData = async (staffId) => {
        // Simulating a staff deletion API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Success");
            }, 1000);
        });
    };

    const loadTable = () => {
        // Refresh the table or state after deletion
        console.log("Table reloaded!");
    };

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this " + message + "?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            deleteData(staffId)
                .then(() => {
                    loadTable(); // Reload data or update state
                    Swal.fire("Deleted!",  message+" has been deleted.", "success");
                })
                .catch((error) => {
                    console.error(error);
                    Swal.fire("Error", "There was an issue deleting the "+message+ " .", "error");
                });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelled", "Your item is safe.", "info");
        }
    });
};
