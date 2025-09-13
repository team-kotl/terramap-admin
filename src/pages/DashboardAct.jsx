import { Search } from "lucide-react";

const DashboardActivity = () => {

  const logs = [
    {
      id: "DA001",
      ipv4: "10.25.89.123",
      agent: "Chrome",
      timestamp: "2023-10-05T08:02:15",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 200,
      region: "CAR",
      city: "Baguio City",
      isp: "Socatel",
    },
    {
      id: "DA002",
      ipv4: "172.16.254.15",
      agent: "Edge",
      timestamp: "2023-10-05T09:45:30",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 403,
      region: "CAR",
      city: "La Trinidad",
      isp: "PLDT",
    },
    {
      id: "DA003",
      ipv4: "192.168.0.42",
      agent: "Edge",
      timestamp: "2023-10-05T10:12:05",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 403,
      region: "CAR",
      city: "La Trinidad",
      isp: "Smart",
    },
    {
      id: "DA004",
      ipv4: "203.0.113.25",
      agent: "Firefox",
      timestamp: "2023-10-05T11:30:22",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 404,
      region: "CAR",
      city: "Baguio City",
      isp: "Globe",
    },
    {
      id: "DA005",
      ipv4: "169.254.1.100",
      agent: "Chrome",
      timestamp: "2023-10-05T12:55:18",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 500,
      region: "CAR",
      city: "La Trinidad",
      isp: "Converge",
    },
    {
      id: "DA006",
      ipv4: "100.64.200.3",
      agent: "Edge",
      timestamp: "2023-10-05T14:01:47",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 200,
      region: "CAR",
      city: "La Trinidad",
      isp: "Smart",
    },
    {
      id: "DA007",
      ipv4: "198.51.100.77",
      agent: "Firefox",
      timestamp: "2023-10-05T15:20:33Z",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 200,
      region: "CAR",
      city: "Baguio City",
      isp: "Globe",
    },
    {
      id: "DA008",
      ipv4: "192.0.2.55",
      agent: "Chrome",
      timestamp: "2023-10-05T16:00:59",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 301,
      region: "CAR",
      city: "La Trinidad",
      isp: "Smart",
    },
    {
      id: "DA009",
      ipv4: "172.30.99.201",
      agent: "Firefox",
      timestamp: "2023-10-05T17:10:12",
      url: "https://example.com",
      refUrl: "https://example.com",
      status: 200,
      region: "CAR",
      city: "Baguio City",
      isp: "Globe",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center bg-white shadow p-2 rounded mb-6">
        <div className="relative flex-1 mr-10">
          <Search className="absolute left-2 top-2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search Logs"
            className="pl-10 pr-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-0"
          />
        </div>
        <div className="w-px h-6 bg-gray-400 mr-6"></div>
        <span className="text-gray-600 font-medium mr-5">superadmin</span>
      </div>
      <h1 className="text-3xl font-bold text-green-800 mb-6">Dashboard Activity</h1>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white text-left">
              <th className="pl-6 py-3">ID</th>
              <th className="px-4 py-3">IPv4</th>
              <th className="px-4 py-3">User Agent</th>
              <th className="px-4 py-3">Timestamp</th>
              <th className="px-4 py-3">URL Accessed</th>
              <th className="px-4 py-3">Reference URL</th>
              <th className="px-4 py-3">Status Code</th>
              <th className="px-4 py-3">Region</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">ISP</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="pl-6 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.ipv4}</td>
                <td className="px-4 py-3">{item.agent}</td>
                <td className="px-4 py-3">{item.timestamp}</td>
                <td className="px-4 py-3 text-blue-600 underline">
                  {item.url}
                </td>
                <td className="px-4 py-3 text-blue-600 underline">
                  {item.refUrl}
                </td>
                <td className="px-4 py-3">{item.status}</td>
                <td className="px-4 py-3">{item.region}</td>
                <td className="px-4 py-3">{item.city}</td>
                <td className="px-4 py-3">{item.isp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardActivity
