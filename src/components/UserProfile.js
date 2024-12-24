import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          setUser(data.results[0]);
        }
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-20 text-lg font-semibold text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-gray-800 rounded-lg shadow-2xl flex overflow-hidden transition transform hover:scale-105">
      <div className="w-1/3 bg-gradient-to-br from-purple-600 to-blue-500">
        <img
          className="w-full h-full object-cover rounded-l-lg"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
      <div className="w-2/3 p-4 bg-gray-900">
        <div className="mb-3">
          <h1 className="text-lg font-bold text-white">
            {user.name.first} {user.name.last}
          </h1>
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-300">Gender:</span> {user.gender}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-300">Phone:</span> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
