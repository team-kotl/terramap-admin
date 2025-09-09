import { User, Lock } from "lucide-react"
import BgRight from "../assets/BG-Left.png"   // adjust relative path if needed

const Login = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 relative"
            style={{ 
                backgroundImage: `url(${BgRight})`,
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}
        >
            <img src="src/assets/DENR-logo.svg" alt="DENR Logo" className="w-32 h-32 mb-6"/>
            <h1 className="text-xl font-bold mb-2 text-center">DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES</h1>
            <p className="text-lg mb-1 text-center">Cordillera Administrative Region</p>
            <p className="text-lg mb-2 text-center">Monitoring Dashboard</p>

            <div className="w-full max-w-sm p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                {/* Username */}
                <div className="mb-4 relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18}/>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Username"
                        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                    focus:ring-primary focus:border-primary block w-full p-2.5"
                        required 
                    />
                </div>
                {/* Password */}
                <div className="mb-6 relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18}/>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                    focus:ring-primary focus:border-primary block w-full p-2.5"
                        required 
                    />
                </div>
                <div className="flex justify-center">
                    <button 
                        className="px-6 py-2 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 font-medium"
                        style={{ backgroundColor: "#234A6E" }}>
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login
