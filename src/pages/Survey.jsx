import { ChevronLeft, User, Calendar, FileText, Users } from 'lucide-react';

const Survey = () => {
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
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Client Satisfaction Survey
      </h1>
      <h3 className="text-md text-gray-800 mb-6">
        Click on any row to view the complete survey response
      </h3>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800">
            <FileText className="w-7 h-7" />
            <span className="font-large font-semibold">
              {surveyResponses.length} survey responses
            </span>
          </div>
        </div>

        <div className="bg-white  rounded overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">
                  Client Name
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Email Address
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Service Availed
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Type of Client
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Date Submitted
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Date Released
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Age
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Sex
                </th>
              </tr>
            </thead>
            <tbody>
              {surveyResponses.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors duration-200"
                >
                  <td className="p-4 text-gray-600">{client.name}</td>
                  <td className="p-4 text-gray-600">{client.email}</td>
                  <td className="p-4 text-gray-600">{client.serviceAvailed}</td>
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
                      }
                    `}
                    >
                      {client.typeOfClient}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{client.dateSubmitted}</td>
                  <td className="p-4 text-gray-600">{client.dateReleased}</td>
                  <td className="p-4 text-gray-600">{client.age}</td>
                  <td className="p-4 text-gray-600">{client.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Survey;
