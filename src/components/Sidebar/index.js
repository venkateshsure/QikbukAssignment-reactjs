import './index.css'

const Sidebar=()=>{
    return (
        <div className='sidebar-con'>
            <div className='sidebar-head-con'>
                <p className='sidebar-head-logo-con'>v</p>
                <p>LOGO</p>
            </div>
            <div className='sidebar-option-head-con'>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>BID</p>
            </div>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>POD</p>
            </div>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>Vendor</p>
            </div>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>User</p>
            </div>
            </div>
            <div className='sidebar-bottom-con'>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>Settings</p>
            </div>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>Profile</p>
            </div>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>Contact Us</p>
            </div>
            <div className='sidebar-option-con'>
                <p>v</p>
                <p>Logout</p>
            </div>
            </div>
        </div>
    )
}

export default Sidebar