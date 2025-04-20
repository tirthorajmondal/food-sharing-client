import { toast, ToastContainer, Zoom } from "react-toastify";
import UseAuth from "../../../hooks/UseAuth/UseAuth";

const GoogleSignInBtn = () => {
    const { googleSignIn, setUser } = UseAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                toast.success(`Welcome ${result.user?.displayName.toUpperCase()}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                });

            })
            .catch(err => console.log(err))
    }
    return (
        <div className="flex justify-center items-center mt-4">
            <button className="font-semibold rounded-sm outline  px-3 py-1 bg-gradient-to-l from-red-300 to-teal-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-teal-300 cursor-pointer transition-[background] duration-1000 ease-in-out" onClick={handleGoogleSignIn}>Google</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
        </div>
    );
};

export default GoogleSignInBtn;