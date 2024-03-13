import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-lvh bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard/myDonationReq'>My Donation Request</Link></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
            <div className="grow">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;