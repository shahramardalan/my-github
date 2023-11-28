import React from "react";

function Profile() {
  return (
    <div className="flex flex-col ">
      <div>
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/41269825?v=4"
          className="w-72 rounded-full border-2"
        ></img>
      </div>
      <div className="mt-6 text-gray-400 text-xl font-light">
        <h1>
          <span>shahramardalan</span>
        </h1>
      </div>
      <div className="mt-6 text-gray-800 text-l font-light">
        Shahram Ardalan
      </div>
      <div class="mb-3">
        <button className="py-1 font-bold text-gray-600 bg-gray-100 mt-6 w-80 border-2 rounded-md items-center">
          Edit profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
