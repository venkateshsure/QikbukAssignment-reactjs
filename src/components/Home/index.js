import { FaRoute,FaTrain } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { MdAssignmentInd } from "react-icons/md";


import './index.css'

const Home =()=>{
    return (
        <div className="home-head-main-con">
        <div className="home-head-con">
            <div className="fir-route-details">
                <FaRoute className="route-details-icon"/>
                <p>Route Details</p>
            </div>
        <div className='home-con'>
            <div className="home-fir-con">
                <h2 className="h2-element">Loading Point details</h2>
                <div className="fir-content-con">
                    
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" className="input-con"/>
                        <div className="fir-content-con-select-con">

                        <label htmlFor="state">State</label>
                        <select>
                            <option>Andhra Pradesh</option>
                            <option>Tamilnadu</option>
                            <option>Karnataks</option>
                            <option>Maharashtra</option>
                            <option>Kerala</option>
                        </select>
                        </div>
                    
                </div>
                <div className="fir-address-con">
                    
                    <label htmlFor="adddress">Address</label>
                    <input type="text" id="address" className="input-con"/>
                </div>
                <div className="fir-content-con">
                    <label htmlFor="pin code">Pin Code</label>
                    <input type="number" id="pin code" className="input-con"/>
                </div>
            </div>


            <div className="home-fir-con">
            < h2 className="h2-element">Unloading Point details</h2>
                <div className="fir-content-con">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" className="input-con"/>
                    <label htmlFor="state">State</label>
                    <select>
                        <option>Andhra Pradesh</option>
                        <option>Tamilnadu</option>
                        <option>Karnataks</option>
                        <option>Maharashtra</option>
                        <option>Kerala</option>
                    </select>
                </div>
                <div className="fir-address-con">
                    
                    <label htmlFor="adddress">Address</label>
                    <input type="text" id="address" className="input-con"/>
                </div>
                <div className="fir-content-con">
                    <label htmlFor="pin code">Pin Code</label>
                    <input type="number" id="pin code" className="input-con"/>
                </div>
            </div>
        </div>
        <hr className="hor-con"/>
        <div className="fir-bottom-con">
            <label id="route-distance" className="h2-element">Route Distance</label>
            <input type="text" id="route-distance" className="input-con"/>
        </div>
        </div>

        <div className="home-head-con">
                <div className="fir-route-details">
                    <FaTrain />
                    <p>Vehicle Details</p>
                </div>
                <div className="vehicle-type-con">
                    <div>
                        <label htmlFor="vehicle-type">Vehicle Type</label>
                        <select id="vehicle-type">
                            <option>vt 1</option>
                            <option>vt 2</option>
                            <option>vt 3</option>
                            <option>vt 4</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="size">Size</label>
                        <select id="size">
                            <option>vt 1</option>
                            <option>vt 2</option>
                            <option>vt 3</option>
                            <option>vt 4</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="body-type">Body Type</label>
                        <select id="body-type">
                            <option>vt 1</option>
                            <option>vt 2</option>
                            <option>vt 3</option>
                            <option>vt 4</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="quantity">Quantity</label>
                        <select id="quantity">
                            <option>vt 1</option>
                            <option>vt 2</option>
                            <option>vt 3</option>
                            <option>vt 4</option>
                        </select>
                        </div>

                </div>
                
                    <div>
                        <input type="checkbox" id="cng" className="input-con"/>
                        <label htmlFor="cng">Click here for CNG vehicles</label>
                    </div>
                
        </div>
        <div className="home-head-con">
                <div className="fir-route-details">
                    <GiMaterialsScience />
                    <p>Material Info</p>
                </div>
                <div className="material-con">
                <div className="material-con1">
                    <label htmlFor="material-type">Material Type</label>
                    <input type="text" id="material-type" className="input-con"/>
                </div>
                <div className="material-con1">
                    <label htmlFor="material-weight">Material Weight</label>
                    <input type="text" id="material-weight" className="input-con"/>
                </div>
                </div>
                

        </div>
        <div className="home-head-con">
                <div className="fir-route-details">
                    <BsFileEarmarkPlusFill />
                    <p>Additional Info</p>
                </div>
                <div className="material-con">
                <div className="material-con1">
                    <label htmlFor="vehicle-loading-type">Vehicle Loading Weight & time</label>
                    <input type="text" id="vehicle-loading-typee" className="input-con"/>
                </div>
                <div className="material-con1">
                    <label htmlFor="bid-expiry-date">BId Expiry Date</label>
                    <input type="text" id="bid-expiry-date" className="input-con"/>
                </div>
                </div>
        </div>

        <div className="home-head-con">
                <div className="fir-route-details">
                    <MdAssignmentInd />
                    <p>Additional Info</p>
                </div>
                <div className="material-con">
                <div className="material-con1">
                    <label htmlFor="name-staff">Name</label>
                    <input type="text" id="name-staff" className="input-con"/>
                </div>
                <div className="material-con1">
                    <label htmlFor="number">Number</label>
                    <input type="number" id="number" className="input-con"/>
                </div>
                </div>
        </div>
        <div className="button-con">
        <div className="button-con">
            <button className="button">
            Create
        </button>
        </div>
        </div>
    </div>
    )
}

export default Home