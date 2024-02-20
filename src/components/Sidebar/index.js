import { LuActivitySquare } from "react-icons/lu";

import './index.css'

const Sidebar=()=>{
    return (
        <div className='sidebar-con'>
            <div className='sidebar-head-con'>
                <p className='sidebar-head-logo-con'>v</p>
                <p>LOGO</p>
            </div>
            <div className='sidebar-option-head-con'>
            <div className='sidebar-option1-con'>
                <LuActivitySquare/>
                <p className='bid-text'>BID</p>
            </div>
            <div className='sidebar-option-con'>
            <LuActivitySquare/>
                <p>POD</p>
            </div>
            <div className='sidebar-option-con'>
            <LuActivitySquare/>
                <p>Vendor</p>
            </div>
            <div className='sidebar-option-con'>
                <LuActivitySquare/>
                <p>User</p>
            </div>
            </div>
            <div className='sidebar-bottom-con'>
            <div className='sidebar-option-con'>
            <LuActivitySquare/>
                <p>Settings</p>
            </div>
            <div className='sidebar-option-con'>
            <LuActivitySquare/>
                <p>Profile</p>
            </div>
            <div className='sidebar-option-con'>
            <LuActivitySquare/>
                <p>Contact Us</p>
            </div>
            <div className='sidebar-option-con'>
            <LuActivitySquare/>
                <p>Logout</p>
            </div>
            </div>
        </div>
    )
}

export default Sidebar