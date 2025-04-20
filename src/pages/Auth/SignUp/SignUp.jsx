import GoogleSignInBtn from '../GooleSignInBtn/GoogleSignInBtn';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import { toast, Zoom } from 'react-toastify';

const SignUp = () => {
    const { createAcconut, setUser, updateUserProfile } = UseAuth()
    const handleCreate = e => {
        e.preventDefault()
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const name = firstName + ' ' + lastName;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const userData = { displayName: name, photoURL: photo }
        if (password === confirmPassword) {
            createAcconut(email, password)
                .then(result => {
                    setUser(result.user)
                    updateUserProfile(userData)
                        .then(() => {
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

                })
        }
    }
    return (
        <div className='mt-6'>
            <GoogleSignInBtn />
            <h2 className="text-4xl text-center">Create an account</h2>

            <form
                onSubmit={handleCreate}
                className="my-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 p-6 lg:p-10 border-2 border-gray-300 rounded-xl md:mx-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Photo URL
                    </label>
                    <div className="mt-2">
                        <input
                            name="photo"
                            type="url"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            name="password"
                            type="password"
                            autoComplete="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Confirm Password
                    </label>
                    <div className="mt-2">
                        <input
                            name="confirmPassword"
                            type="password"
                            autoComplete="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-6">
                    <button className='w-full cursor-pointer rounded-md px-3 py-1.5 text-white font-semibold bg-indigo-600' type='submit'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;