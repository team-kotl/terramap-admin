import { User, Lock } from "lucide-react"

const Login = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Video */}
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="src/assets/loginpage.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/30"></div>/
                <div className="absolute inset-0 flex">
                    <div className="w-3/5 flex flex-col items-center justify-center text-white px-8 text-center">
                        <img src="src/assets/DENR-logo.svg" alt="DENR Logo" className="w-32 h-32 mb-6"/>
                        <h1 className="text-2xl font-bold mb-2">
                        DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES
                        </h1>
                        <p className="text-xl mb-1">Cordillera Administrative Region</p>
                        <p className="text-lg">Monitoring Dashboard</p>
                    </div>
                <div className="w-2/5"></div>
            </div>

            {/* Login */}
            <div className="absolute right-0 top-0 h-full w-2/5 bg-white rounded-l-2xl shadow-2xl flex flex-col items-center justify-center px-8">
                <p className="text-2xl mb-1 text-center text-gray-800 font-bold">Login to your account</p>
                <p className="text-md mb-6 text-center text-gray-800/80">
                    Enter your username below to login to your account
                </p>
                <div className="w-full max-w-sm">
                    {/* Username */}
                    <div className="mr-8 ml-8 mb-4 relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18}/>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="Username"
                            className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-2 focus:ring-green-600 focus:border-green-600 block w-full p-2.5 outline-none"
                            required 
                        />
                    </div>
                    {/* Password */}
                    <div className="mr-8 ml-8 mb-6 relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18}/>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-2 focus:ring-green-600 focus:border-green-600 block w-full p-2.5 outline-none"
                            required 
                        />
                    </div>
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
