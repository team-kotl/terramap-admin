import { User, Lock } from "lucide-react"

const Login = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Video */}
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="src/assets/loginpage.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Left Section */}
            <div className="absolute inset-0 flex">
                <div className="w-3/5 flex flex-col items-center justify-center text-white px-8 text-center">
                    <img src="src/assets/DENR-logo.svg" alt="DENR Logo" className="w-32 h-32 mb-6"/>
                    <h1 className="text-3xl font-bold mb-2">
                        DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES
                    </h1>
                    <p className="text-2xl mb-1">Cordillera Administrative Region</p>
                    <p className="text-2xl">Monitoring Dashboard</p>
                </div>
                <div className="w-2/5"></div>
            </div>

            {/* Login Section */}
            <div className="absolute right-0 top-0 h-full w-2/5 bg-white shadow-2xl flex flex-col items-center justify-center px-8">
                <p className="text-3xl mb-1 text-center text-gray-800 font-bold">Login to your account</p>
                <p className="text-lg mb-6 text-center text-gray-800/80">
                    Enter your username below to login to your account
                </p>

                <div className="w-full max-w-sm space-y-6">
                    {/* Username */}
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18}/>
                        <input
                            type="text"
                            id="username"
                            className="block pl-10 pr-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="username"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-10 z-10 origin-[0] bg-white px-2
                            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-10
                            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-green-600">
                            Username
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18}/>
                        <input
                            type="password"
                            id="password"
                            className="block pl-10 pr-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-10 z-10 origin-[0] bg-white px-2
                            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-10
                            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-green-600">
                            Password
                        </label>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <button className="px-6 py-2 text-white rounded-lg shadow-lg cursor-pointer hover:bg-green-700 font-medium bg-green-600">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
