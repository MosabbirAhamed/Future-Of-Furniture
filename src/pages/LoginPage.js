import { FcGoogle } from 'react-icons/fc'
import { auth } from '../utils/firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/authSlice'
import { useState } from 'react'

function LoginPage() {

    const user = useSelector(selectUser)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

   const continueWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message));
    }

    const logOut = () => {
        auth.signOut()
            .catch(err => alert(err.massage))
    }

    const emailLogin = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .catch(err => alert(err.message));
    }
    return (
        <div className="bg-[#cee9ff70] relative flex flex-col justify-center min-h-screen overflow-hidden">
            {user ? (
                <div className="w-full  p-6 m-auto bg-white rounded-md shadow-xl md:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-[#079AF7] uppercase">{user.displayName}</h1>
                    <div className="flex mt-4 gap-x-2">
                        <button onClick={logOut} type="button" className="bg-[#079bf71e]  flex items-center gap-4 justify-center w-full p-2 border border-gray-400 rounded-md" >
                            <span className="font-semibold text-gray-800">Log Out</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="w-full  p-6 m-auto bg-white rounded-md shadow-xl md:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-[#079AF7] uppercase">
                        Sign up
                    </h1>

                    <form className="mt-6">
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800" >Email</label>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-[#079AF7] bg-white border rounded-md focus:border-[#079bf7ca] focus:ring-[#cee9ff70] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">Password</label>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-[#079AF7] bg-white border rounded-md focus:border-[#079bf7ca] focus:ring-[#cee9ff70] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <a href="!#" className="text-xs text-[#079AF7] hover:underline" >Forget Password?</a>

                        <div className="mt-6">
                            <button onSubmit={emailLogin} className="w-full px-4 py-2 tracking-wide font-semibold text-white transition-colors duration-200 transform bg-[#079AF7] rounded-md hover:bg-[#079AF7] focus:outline-none focus:bg-[#079AF7]">
                                Sign Up
                            </button>
                        </div>

                    </form>

                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                        <div className="absolute px-5 bg-white">Or</div>
                    </div>

                    <div className="flex mt-4 gap-x-2">
                        <button onClick={continueWithGoogle} type="button" className="bg-[#079bf71e]  flex items-center gap-4 justify-center w-full p-2 border border-gray-400 rounded-md" >
                            <span><FcGoogle size={26} /> </span>   <span className="font-semibold text-gray-800">Continue with Google</span>
                        </button>
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a href="!#" className="font-medium text-[#079AF7] hover:underline"  > Sign up  </a>
                    </p>

                </div>
            )}
        </div>
    )
}

export default LoginPage