import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "lucide-react";

// ✅ Helper function to format timestamp (date + time with space only)
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

const Download = () => {
    const [downloads, setDownloads] = useState([]);
    const [search, setSearch] = useState("");

    // ✅ Fetch data (currently using mock data until backend API is ready)
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Uncomment when backend is ready:
                // const res = await axios.get("http://your-backend-url/download");
                // setDownloads(res.data);

                // Temporary Mock Data
                const mockData = [
                    {
                        reqId: 1,
                        aoi: "Kalinga",
                        email: "juan@example.com",
                        name: "Juan Dela Cruz",
                        address: "Baguio City",
                        affiliation: "UP Baguio",
                        purpose: "Research on land use",
                        timestamp: "2025-09-13T08:15:00",
                    },
                    {
                        reqId: 2,
                        aoi: "Benguet",
                        email: "maria@example.com",
                        name: "Maria Clara",
                        address: "La Trinidad",
                        affiliation: "BSU",
                        purpose: "Academic Project",
                        timestamp: "2025-09-13T09:30:00",
                    },
                    {
                        reqId: 3,
                        aoi: "Abra",
                        email: "pedro@example.com",
                        name: "Pedro Santos",
                        address: "Bangued",
                        affiliation: "LGU Abra",
                        purpose: "Planning",
                        timestamp: "2025-09-13T10:45:00",
                    },
                ];
                setDownloads(mockData);
            } catch (err) {
                console.error("Error fetching downloads:", err);
            }
        };

        fetchData();
    }, []);

    // ✅ Filter search (checks all fields)
    const filteredDownloads = downloads.filter((d) =>
        Object.values(d).some(
            (val) =>
                typeof val === "string" &&
                val.toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <div className="relative bg-gray-100 min-screen">
            <div className="p-1 md:p-5 md:mt-0">
                {/* Title + Search Bar in the same row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-green-800">
                        Download Requests
                    </h1>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search Downloads"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-2 py-2 rounded-md text-base w-full border border-gray-400 
                                        focus:outline-none focus:ring-1 focus:ring-green-800"
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
                                    Req ID
                                </th>
                                <th className="px-4 py-3 min-w-[120px]">AOI</th>
                                <th className="px-4 py-3 min-w-[180px]">
                                    Name
                                </th>
                                <th className="px-4 py-3 min-w-[220px]">
                                    Email
                                </th>
                                <th className="px-4 py-3 min-w-[180px]">
                                    Address
                                </th>
                                <th className="px-4 py-3 min-w-[160px]">
                                    Affiliation
                                </th>
                                <th className="px-4 py-3 min-w-[220px]">
                                    Purpose
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDownloads.map((item, index) => (
                                <tr
                                    key={item.reqId}
                                    className={`border-b border-gray-200 text-sm md:text-base ${
                                        index % 2 === 0
                                            ? "bg-gray-100"
                                            : "bg-white"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="px-4 py-3">
                                        {formatTimestamp(item.timestamp)}
                                    </td>
                                    <td className="px-4 py-3">{item.reqId}</td>
                                    <td className="px-4 py-3">{item.aoi}</td>
                                    <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">{item.email}</td>
                                    <td className="px-4 py-3">
                                        {item.address}
                                    </td>
                                    <td className="px-4 py-3">
                                        {item.affiliation}
                                    </td>
                                    <td className="px-4 py-3">
                                        {item.purpose}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredDownloads.length === 0 && (
                        <p className="p-4 text-gray-500 text-center">
                            No records found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Download;
