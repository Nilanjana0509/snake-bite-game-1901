import React, { useEffect, useState } from "react";

function Users() {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/getallusers`,
      );
      const data = await res.json();

      if (res.ok) {
        setUsers(data.data); // API formatted data
      } else {
        console.error(data.message || "Failed to fetch payments");
      }
    } catch (error) {
      console.error("Fetch payments error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        Loading payments...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Registered Users
      </h2>

      <div className="overflow-x-auto overflow-y-auto max-h-[550px] rounded-lg">
        <table className="min-w-[900px] w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Number</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Profession</th>
              <th className="px-4 py-3">Institution</th>
            </tr>
          </thead>

          <tbody>
            {Users.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              Users.map((item) => (
                <tr key={item.id} className="border-b text-sm hover:bg-gray-50">
                  <td className="px-4 py-3">{item.user_name}</td>
                  <td className="px-4 py-3">{item.user_email}</td>
                  <td className="px-4 py-3">{item.user_number}</td>
                  <td className="px-4 py-3">{item.user_address}</td>
                  <td className="px-4 py-3">{item.user_profession}</td>
                  <td className="px-4 py-3">{item.user_institution}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
