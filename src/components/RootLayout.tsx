import {Navigation} from "./Navigation";
import {Outlet} from "react-router-dom";




export function RootLayout() {
    return (
        <>
            <div className={' grid-cols-2 flex'}>

                    <Navigation/>

                <div className={'ml-56  flex'}>
                        <Outlet/>
                </div>


            </div>


        </>
    );
}