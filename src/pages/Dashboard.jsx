import { useState, useEffect } from "react";
import axios from 'axios';
import { Users, Map, BarChart3 } from "lucide-react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";

const Dashboard = () => {
    // ✅ State for counts
    const [usersCount, setUsersCount] = useState(12);
    const [atlasActivity, setAtlasActivity] = useState(10);
    const [dashboardActivity, setDashboardActivity] = useState(11);

    // ✅ Temporary mock data
    const [traffic, setTraffic] = useState([
        { place: "Kalinga", count: 4 },
        { place: "Baguio City", count: 2 },
        { place: "Benguet", count: 1 },
        { place: "Apayao", count: 1 },
        { place: "Abra", count: 2 },
    ]);

    const [statusCodes, setStatusCodes] = useState([
        { name: "200", count: 1123 },
        { name: "400", count: 840 },
        { name: "301", count: 724 },
        { name: "302", count: 986 },
    ]);

    const [monthlyVisits, setMonthlyVisits] = useState([
        { name: "Jan", visits: 500 },
        { name: "Feb", visits: 800 },
        { name: "Mar", visits: 1100 },
        { name: "Apr", visits: 1050 },
        { name: "May", visits: 1200 },
        { name: "Jun", visits: 950 },
        { name: "Jul", visits: 1300 },
        { name: "Aug", visits: 1400 },
        { name: "Sep", visits: 1350 },
        { name: "Oct", visits: 1200 },
        { name: "Nov", visits: 1250 },
        { name: "Dec", visits: 1180 },
    ]);

    // Example: Uncomment when backend is ready
    /*
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    visitsRes,
                    statusRes,
                    trafficRes,
                    usersRes,
                    atlasRes,
                    dashRes,
                ] = await Promise.all([
                    axios.get("/api/monthly-visits"),
                    axios.get("/api/status-codes"),
                    axios.get("/api/traffic"),
                    axios.get("/api/users/count"),
                    axios.get("/api/atlas-activity/count"),
                    axios.get("/api/dashboard-activity/count"),
                ]);

                setMonthlyVisits(visitsRes.data);
                setStatusCodes(statusRes.data);
                setTraffic(trafficRes.data);
                setUsersCount(usersRes.data.count);
                setAtlasActivity(atlasRes.data.count);
                setDashboardActivity(dashRes.data.count);
            } catch (err) {
                console.error("❌ Error fetching dashboard data:", err);
            }
        };

        fetchData();
    }, []);
    */

    return (
        <div className="min-screen bg-gray-100 px-2 md:px-6 mt-5">
            {/* Header */}
            <div className="flex justify-between items-center md:mb-6 mb-4">
                <h1 className="text-green-700 font-bold text-2xl">Dashboard</h1>
                <p className="text-green-700 font-bold text-2xl">
                    {new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-green-700" />
                        <span className="font-medium">Users</span>
                    </div>
                    <span className="text-2xl font-bold">
                        {usersCount > 0 ? usersCount : "No data"}
                    </span>
                </div>

                <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Map className="w-8 h-8 text-green-700" />
                        <span className="font-medium">Atlas Activity</span>
                    </div>
                    <span className="text-2xl font-bold">
                        {atlasActivity > 0 ? atlasActivity : "No data"}
                    </span>
                </div>

                <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-green-700" />
                        <span className="font-medium">Dashboard Activity</span>
                    </div>
                    <span className="text-2xl font-bold">
                        {dashboardActivity > 0 ? dashboardActivity : "No data"}
                    </span>
                </div>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left column: Source of Traffic */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col h-full">
                    <h2 className="text-green-700 font-semibold mb-4">
                        Source of Traffic (By count)
                    </h2>

                    <div className="flex-grow">
                        {traffic.length > 0 ? (
                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                <table className="w-full text-left">
                                    <tbody>
                                        {traffic.map((item, idx) => (
                                            <tr
                                                key={idx}
                                                className="even:bg-gray-50 hover:bg-gray-100 transition"
                                            >
                                                <td className="px-4 py-2">
                                                    {item.place}
                                                </td>
                                                <td className="px-4 py-2 text-right">
                                                    {item.count}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center py-6">
                                No traffic data available
                            </p>
                        )}
                    </div>

                    <div className="mt-4 bg-green-50 border border-green-200 rounded-md px-4 py-3 flex justify-between items-center font-semibold text-green-800">
                        <span>Total Places</span>
                        <span>{traffic.length}</span>
                    </div>
                </div>

                {/* Right column: stacked charts */}
                <div className="flex flex-col gap-6">
                    {/* Monthly Visits */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-green-700 font-semibold mb-4">
                            Monthly Visits
                        </h2>
                        {monthlyVisits.length > 0 ? (
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={monthlyVisits}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="visits"
                                        stroke="green"
                                        dot
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        ) : (
                            <p className="text-gray-500 text-center py-6">
                                No visit data available
                            </p>
                        )}
                    </div>

                    {/* Status Codes */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-green-700 font-semibold mb-4">
                            Most Frequent Status Codes
                        </h2>
                        {statusCodes.length > 0 ? (
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={statusCodes} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count">
                                        {statusCodes.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={[
                                                    "#16a34a",
                                                    "#dc2626",
                                                    "#facc15",
                                                    "#2563eb",
                                                ][index % 4]}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <p className="text-gray-500 text-center py-6">
                                No status code data available
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
