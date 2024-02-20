import { FaUserCircle } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

import './index.css'

const Header=()=>{
    return (
        <div className='header-con'>
            <div className='header-content-con'>
                <p className="header-bid-text">BId</p>
                <p>POD</p>
                <p>Vendor</p>
                <p>User</p>
                <div className="user-logo-con">
                    <FaUserCircle/>
                    <p>Freight EG</p>
                    <BiSolidDownArrow/>
                </div>
            </div>
        </div>
    )
}

export default Header