import {Navigation} from "./Navigation";
import {Outlet} from "react-router-dom";


export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>

            <Outlet></Outlet>
        </>
    );
}