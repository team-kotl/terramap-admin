const Users = () => {
  const users = [
    { staffId: "ST001", username: "janedoe" },
    { staffId: "ST002", username: "justincabuena" },
    { staffId: "ST003", username: "andrewigs" },
    { staffId: "ST004", username: "bryce" },
    { staffId: "ST005", username: "stephdrew" },
    { staffId: "ST006", username: "morrows" },
    { staffId: "ST007", username: "petergrf" },
    { staffId: "ST008", username: "mgnfox" },
    { staffId: "ST009", username: "lee" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center bg-white shadow p-3 rounded mb-6">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 rounded-md text-sm"
        />
        <span className="text-gray-600 font-medium mr-5">superadmin</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Users</h1>
        <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-md">
          Add New User
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white text-left">
              <th className="pl-12 py-3 text-left w-1/6">Staff ID</th>
              <th className="px-4 py-3 w-1/6">Username</th>
              <th className="px-2 py-3 w-1/8">Role</th>
              <th className="px-4 py-3 w-1/10">Branch</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.staffId}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="pl-12 py-3">{user.staffId}</td>
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-2 py-3">{user.role}</td>
                <td className="px-4 py-3">{user.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;