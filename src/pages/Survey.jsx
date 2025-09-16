import { FileText, ChevronLeft, User, Star } from "lucide-react";
import { useState } from "react";

const Survey = () => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [activeTab, setActiveTab] = useState("rating");
    const tabs = ["rating", "comments"];
    const surveyResponses = [
        {
        id: 1,
        name: "Maria Santos",
        serviceAvailed: "Land Cover Report Document",
        email: "maria.santos@example.com",
        typeOfClient: "Citizen/Representative",
        dateSubmitted: "2024-03-15",
        dateReleased: "2024-03-20",
        age: 32,
        sex: "Female",
        q1rating: 2,
        q2rating: 4,
        q3rating: 1,
        q4rating: 3,
        q5rating: 3,
        q6rating: 5,
        comments: "The service was excellent and the staff were very helpful."
        },
        {
        id: 2,
        name: "Juan Dela Cruz",
        serviceAvailed: "Land Cover Report Document",
        email: "juan.delacruz@example.com",
        typeOfClient: "Business",
        dateSubmitted: "2024-03-14",
        dateReleased: "2024-03-19",
        age: 45,
        sex: "Male",
        q1rating: 1,
        q2rating: 3,
        q3rating: 5,
        q4rating: 4,
        q5rating: 3,
        q6rating: 2,
        comments: "I had to wait longer than expected, but overall it was a good experience."
        },
        {
        id: 3,
        name: "Ana Rodriguez",
        serviceAvailed: "Land Cover Report Document",
        email: "ana.rodriguez@example.com",
        typeOfClient: "Government",
        dateSubmitted: "2024-03-13",
        dateReleased: "2024-03-18",
        age: 28,
        sex: "Female",
        q1rating: 3,
        q2rating: 5,
        q3rating: 3,
        q4rating: 2,
        q5rating: 1,
        q6rating: 4,
        comments: "The process was smooth and the staff were courteous."
        },
    ];

    const RowClick = (client) => {
        setSelectedClient(client);
    };

    const BackToList = () => {
        setSelectedClient(null);
    };

    const renderStars = (rating) => {
        return (
        <div className="flex items-center gap-1 justify-center">
            {Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
            />
            ))}
        </div>
        );
    };

if (selectedClient) {
    return (
        <div className=" md:pr-6 md:pl-6 md:pt-0 pt-10 pr-0 pl-0">
            <div className="md:justify-between md:items-center p-2 mb-6 gap-3 mt-5">
                <button
                    onClick={BackToList}
                    className="flex items-center gap-2 mb-6 text-green-600 hover:text-green-800 transition-colors cursor-pointer">
                    <ChevronLeft className="w-8 h-8" />
                    Back to Survey Response List
                </button>

                <div className="bg-white rounded-lg shadow-lg p-8 md:max-h-[90vh] md:overflow-y-auto">
                    <div className="border-b pb-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <User className="w-7 h-7 text-gray-600" />
                        {selectedClient.name}
                        </h2>
                    </div>

                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 mb-5">
                        {tabs.map((tab) => (
                        <li key={tab} className="me-2">
                            <button
                            onClick={() => setActiveTab(tab)}
                            className={`inline-block px-4 py-2 rounded-lg cursor-pointer ${
                                activeTab === tab
                                ? "text-white bg-green-700 font-semibold"
                                : "hover:text-gray-900 hover:bg-gray-100"
                            }`}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        </li>))}
                    </ul>

                    {activeTab === "rating" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col">
                                <h1 className="font-bold underline">Communication</h1>
                                <h2 className="font-bold">
                                    I easily found the information about 
                                    my transaction from the office or its website.
                                </h2>
                                <p className="mb-2">
                                    (Mabilis at madali akong nakahanap ng 
                                    impormasyon tungkol sa aking transakyon mula 
                                    sa opisina o sa website nito.)
                                </p>
                            </div>
                            {renderStars(selectedClient.q1rating)}
                            <div className="flex flex-col">
                                <h1 className="font-bold underline">Cost</h1>
                                <h2 className="font-bold">
                                    I paid a reasonable amount of fees for my transaction.
                                </h2>
                                <p className="mb-2">
                                    (Nagbayad ako ng makatwirang halaga para sa aking transakyon.)
                                </p>
                            </div>
                            {renderStars(selectedClient.q2rating)}
                            <div className="flex flex-col">
                                <h1 className="font-bold underline">Integrity</h1>
                                <h2 className="font-bold">
                                    I feel the office was fair to everyont, or 
                                    “walang palakasan”, during my transaction.
                                </h2>
                                <p className="mb-2">
                                    (Pakiramdam ko ay patas ang opisina sa lahat o 
                                    “walang palakasan”, sa aking transakyon.)
                                </p>
                            </div>
                            {renderStars(selectedClient.q3rating)}
                            <div className="flex flex-col">
                                <h1 className="font-bold underline">Assurance</h1>
                                <h2 className="font-bold">
                                    I was trated courteuosly by the staff, and 
                                    (if asked help) the staff was helpful.
                                </h2>
                                <p className="mb-2">
                                    (Magalang akong trinato ng mga tauhan, at 
                                    (kung sakali ako ay humingi ng tulong) alam ko 
                                    na sila ay handang tumulong sa akin.)
                                </p>
                            </div>
                            {renderStars(selectedClient.q4rating)}
                            <div className="flex flex-col">
                                <h1 className="font-bold underline">Outcome</h1>
                                <h2 className="font-bold">
                                    I got what I needed from the government office, 
                                    or (if denied) denial of request was sufficiently 
                                    explained to me.
                                </h2>
                                <p className="mb-2">
                                    (Nakuha ko ang kinakailangan ko mula sa tanggapan 
                                    ng gobyerno, kung tinanggihan man, ito ay sapat 
                                    na ipaliwanag sa akin.)
                                </p>
                            </div>
                            {renderStars(selectedClient.q5rating)}
                            <div className="flex flex-col">
                                <h2 className="font-bold">
                                    I am satisfied with the service that I availed.
                                </h2>
                                <p className="mb-2">
                                    (Nasisiyahan ako sa serbisyo na aking natanggap 
                                    sa napuntahan na tanggapan.)
                                </p>
                            </div>
                            {renderStars(selectedClient.q6rating)}
                        </div>
                    )}

                    {activeTab === "comments" && (
                        <div className="mt-6">
                            <p className="text-gray-700">
                                {selectedClient.comments || "No comments provided."}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

    return (
    <div className="p-1 md:p-5 mt-15 md:mt-0 bg-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-1">
        Client Satisfaction Survey
        </h1>
        <h3 className="text-md md:text-lg text-gray-800 mb-6">
        Click on any row to view the complete survey response
        </h3>

            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-800">
                    <FileText className="w-7 h-7" />
                    <span className="font-large font-medium md:font-semibold">
                    {surveyResponses.length} survey responses
                    </span>
                </div>
            </div>

            <div className="bg-white rounded overflow-x-auto">
            <table className="table-auto w-full border-collapse min-w-[600px]">
                <thead>
                    <tr className="bg-green-800 text-white text-left text-sm md:text-base">
                        <th className="pl-4 md:pl-6 py-2 md:py-3 whitespace-nowrap">Client Name</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Email Address</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Service Availed</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Type of Client</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Date Submitted</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Date Released</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Age</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Sex</th>
                    </tr>
                </thead>
                    <tbody>
                        {surveyResponses.map((client, index) => (
                            <tr
                            key={client.id}
                            onClick={() => RowClick(client)}
                            className={`border-b border-gray-200 text-sm md:text-base cursor-pointer ${
                                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                        } hover:bg-blue-50`}>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.name}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.email}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.serviceAvailed}</td>
                            <td className="p-4">
                                <span
                                className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                    client.typeOfClient === "Citizen/Representative"
                                    ? "bg-green-100 text-green-800"
                                    : client.typeOfClient === "Business"
                                    ? "bg-blue-100 text-blue-800"
                                    : client.typeOfClient === "Organization"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : client.typeOfClient === "Government"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                                >
                                {client.typeOfClient}
                                </span>
                            </td>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.dateSubmitted}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.dateReleased}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.age}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3">{client.sex}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        
    </div>
    );
};

export default Survey;
