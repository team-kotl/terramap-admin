// Author @yukiroow Harry Dominguez
import gif from "../assets/cat404.gif";
import { useNavigate } from "react-router-dom";

/**
 * Fallback page for Errors in rendering and fetching.
 */
const ErrorPage = () => {
    const nav = useNavigate();
    return (
        <>
            <main>
                <section className="block m-auto w-2/5 mt-36">
                    <img src={gif} alt="Error 404" className="rounded-lg" />
                </section>
                <section>
                    <div className="block m-auto w-2/5">
                        <h1 className="text-7xl mt-5 mb-5 text-green-800 font-semibold">
                            PAGE NOT FOUND
                        </h1>
                        <p className="text-green-700 font-thin mb-2">
                            You shouldn't be here.
                        </p>
                        <p className="text-green-700 font-thin mb-2">
                            You still have time to leave.
                        </p>
                        <p className="text-green-700 font-thin mb-6">
                            ...or else. D:
                        </p>
                        <button
                            onClick={() => nav("/")}
                            className="py-2 px-5 outline outline-green-700 rounded-xl transition-all text-green-700 hover:bg-green-700 hover:text-white"
                        >
                            Go Home
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ErrorPage;
