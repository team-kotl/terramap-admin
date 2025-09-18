import { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import bcrypt from "bcryptjs";

const Login = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed password:", hashedPassword);
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="src/assets/loginpage.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 md:bg-black/30"></div>

            {/* Desktop Layout */}
            <div className="hidden md:flex absolute inset-0">
                {/* Left Section */}
                <div className="w-3/5 flex flex-col items-center justify-center text-white px-8 text-center">
                    <img
                        src="src/assets/DENR-logo.svg"
                        alt="DENR Logo"
                        className="w-32 h-32 mb-6"
                    />
                    <h1 className="text-3xl font-bold mb-2">
                        DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES
                    </h1>
                    <p className="text-2xl mb-1">Cordillera Administrative Region</p>
                    <p className="text-2xl">Monitoring Dashboard</p>
                </div>

                {/* Right Section (Login Form) */}
                <div className="w-2/5 bg-white shadow-2xl flex flex-col items-center justify-center px-8">
                    <p className="text-3xl mb-1 text-center text-gray-800 font-bold">
                        Login to your account
                    </p>
                    <p className="text-lg mb-6 text-center text-gray-800/80">
                        Enter your username below to login to your account
                    </p>

                    {/* Form */}
                    <form
                        onSubmit={handleLogin}
                        className="w-full max-w-sm space-y-6"
                    >
                        {/* Username */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="text"
                                id="username"
                                placeholder=" "
                                required
                                className="block pl-10 pr-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent 
                                            rounded-lg border border-gray-300 focus:outline-none focus:ring-2 
                                            focus:ring-green-600 focus:border-green-600 peer"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 
                                            top-2 left-10 z-10 origin-[0] bg-white px-2
                                            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-10
                                            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-green-600"
                            >
                                Username
                            </label>
                        </div>

                        {/* Password with Eye */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder=" "
                                required
                                className="block pl-10 pr-10 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent 
                                            rounded-lg border border-gray-300 focus:outline-none focus:ring-2 
                                            focus:ring-green-600 focus:border-green-600 peer"
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 
                                            top-2 left-10 z-10 origin-[0] bg-white px-2
                                            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-10
                                            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-green-800"
                            >
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-2 text-white rounded-lg shadow-md font-medium bg-green-800 hover:bg-green-800 cursor-pointer">
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden relative h-full items-center justify-center px-6 text-center">
                <div className="w-full max-w-sm bg-white/70 rounded-lg shadow-xl p-6">
                    {/* Logo + Title */}
                    <img
                        src="src/assets/DENR-logo.svg"
                        alt="DENR Logo"
                        className="w-24 h-24 mx-auto mb-4"
                    />
                    <h1 className="text-xl font-bold text-gray-900">
                        DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES
                    </h1>
                    <p className="text-base text-gray-700">Cordillera Administrative Region</p>
                    <p className="text-base text-gray-700 mb-4">Monitoring Dashboard</p>

                    <p className="text-lg font-bold text-gray-800 text-center mb-4">
                        Login to your account
                    </p>

                    {/* Username */}
                    <div className="relative mb-4">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                        <input
                            type="text"
                            id="username-mobile"
                            placeholder="Username"
                            required
                            className="text-base block pl-10 pr-2.5 py-2 w-full text-gray-900 bg-transparent 
                                        rounded-lg border border-gray-600 focus:outline-none focus:ring-1 
                                        focus:ring-green-800 focus:border-green-800"
                        />
                    </div>

                    {/* Password with Eye */}
                    <div className="relative mb-6">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password-mobile"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="block pl-10 pr-10 py-2 w-full text-base text-gray-900 bg-transparent 
                                        rounded-lg border border-gray-600 focus:outline-none focus:ring-1
                                        focus:ring-green-800 focus:border-green-800"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="w-full py-2 text-white rounded-lg shadow-md font-medium bg-green-800 hover:bg-green-800 cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
