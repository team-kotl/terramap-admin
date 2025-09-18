import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const formatTimestamp = (ts) => {
    const date = new Date(ts).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const time = new Date(ts).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return `${date} ${time}`;
};

const SiteActivity = () => {
    const [logs, setLogs] = useState([]);
    const [search, setSearch] = useState("");
    
    // ✅ Mock data (temporary)
    useEffect(() => {
        const mockLogs = [
            {
                logId: 1,
                action: "Open Site",
                timestamp: "2023-10-05T08:02:15",
                statusCode: 200,
                userAgent: "Chrome",
                region: "CAR",
                city: "Baguio City",
            },
            {
                logId: 2,
                action: "Request Download",
                timestamp: "2023-10-05T09:45:30",
                statusCode: 403,
                userAgent: "Edge",
                region: "CAR",
                city: "La Trinidad",
            },
            {
                logId: 3,
                action: "Open Site",
                timestamp: "2023-10-05T11:30:22",
                statusCode: 404,
                userAgent: "Firefox",
                region: "CAR",
                city: "Baguio City",
            },
        ];
        setLogs(mockLogs);
    }, []);

    const filteredLogs = logs.filter((log) =>
        Object.values(log).some(
            (val) =>
                typeof val === "string" &&
                val.toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <div className="relative bg-gray-100 min-screen">
            <div className="p-1 md:p-5 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-green-800">
                        Site Activity
                    </h1>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80 bg-white rounded-md">
                        <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500 active:text-green-500" />
                        <input
                            type="text"
                            placeholder="Search Logs"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-2 py-2 rounded-md text-base w-full border border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow rounded overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className="bg-green-800 text-white text-left text-sm md:text-base">
                                <th className="px-4 py-3 min-w-[180px]">
                                    Timestamp
                                </th>
                                <th className="px-4 py-3 min-w-[80px]">
                                    Log ID
                                </th>
                                <th className="px-4 py-3 min-w-[220px]">
                                    Action
                                </th>
                                <th className="px-4 py-3 min-w-[120px]">
                                    Status Code
                                </th>
                                <th className="px-4 py-3 min-w-[160px]">
                                    User Agent
                                </th>
                                <th className="px-4 py-3 min-w-[120px]">
                                    Region
                                </th>
                                <th className="px-4 py-3 min-w-[150px]">
                                    City
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLogs.map((item, index) => (
                                <tr
                                    key={item.logId}
                                    className={`border-b border-gray-200 text-sm md:text-base ${
                                        index % 2 === 0
                                            ? "bg-gray-100"
                                            : "bg-white"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="px-4 py-3">
                                        {formatTimestamp(item.timestamp)}
                                    </td>
                                    <td className="px-4 py-3">{item.logId}</td>
                                    <td className="px-4 py-3">{item.action}</td>
                                    <td className="px-4 py-3">
                                        {item.statusCode}
                                    </td>
                                    <td className="px-4 py-3">
                                        {item.userAgent}
                                    </td>
                                    <td className="px-4 py-3">{item.region}</td>
                                    <td className="px-4 py-3">{item.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredLogs.length === 0 && (
                        <p className="p-4 text-gray-500 text-center">
                            No matching logs found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SiteActivity;
