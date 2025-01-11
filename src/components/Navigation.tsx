import {Link} from "react-router";
import '../styles/Navigation.css'

export function Navigation() {
    return (
        <>
            <header className={''}>
                <div>
                    <h1><img className={'w-12'} src={'src/assets/Staylinked.png'}/>Smart Farming</h1>
                    <div>
                        <img src={'src/assets/dashboardImg/user (2).png'}/>
                        <h2>John Silva</h2>
                        <h3>Manager</h3>
                    </div>
                </div>

                <nav>
                    <ul>
                        <Link className={'nav-btn'} to='/'> <img src={'src/assets/dashboardImg/Dashboard Layout.png'}/>Dashboard</Link>
                        <Link className={'nav-btn'} to='/staff'><img src={'src/assets/dashboardImg/Member.png'}/>Staff</Link>
                        <Link className={'nav-btn'} to='/field'><img src={'src/assets/dashboardImg/Journey.png'}/>Field</Link>
                        <Link className={'nav-btn'} to='/crops'><img src={'src/assets/dashboardImg/Grass.png'}/>Crops</Link>
                        <Link className={'nav-btn'} to='/vehicle'><img src={'src/assets/dashboardImg/People in Car Side View.png'}/>Vehicle</Link>
                        <Link className={'nav-btn'} to='/equipment'><img src={'src/assets/dashboardImg/Engine.png'}/>Equipment</Link>
                        <Link className={'nav-btn'} to='/cropDetails'><img src={'src/assets/dashboardImg/cropdetails.png'}/>Crop Details</Link>
                        <Link className={'nav-btn'} to='/logout'><img src={'src/assets/dashboardImg/Logout.png'}/>Logout</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}