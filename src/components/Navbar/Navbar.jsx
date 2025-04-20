import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import { toast, Zoom } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = UseAuth()
    const handleLogout = e => {
        // e.preventDefault()
        logout()
            .then(() => {
                toast.success(`Logout Successfull`, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                });
            })

    }
    const links = <>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu gap-3 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Food Sharing</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-3 menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end" >
                {user ? <div className="dropdown dropdown-end" title={user?.displayName}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                referrerPolicy='no-referrer'
                                alt={user?.displayName}
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div> : <Link to='/login' className='px-3 py-1 outline rounded-sm hover:bg-slate-200'>Login</Link>
                }
            </div>
        </div>

    );
};

export default Navbar;