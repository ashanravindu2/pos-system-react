
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export function showNotification(message: string, type: "success" | "error") {

    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: "right",
            y: "top",
        },
        types: [
            {
                type: "",
                background: "",
                icon: {
                    className: "",
                    tagName: "i",
                    text: "",
                },

            },
        ],


    });
    notyf.open({
        type: type,
        message: message,

    });
}

// npm install notyf