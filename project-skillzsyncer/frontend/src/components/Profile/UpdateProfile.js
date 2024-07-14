import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function UpdateProfile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({ name: "", skills: "", bio: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/profile/${user._id}`, profile);
      alert("Profile updated");
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto my-10 p-5 shadow-lg rounded-lg"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Skills
          </label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder="Skills"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Bio"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </>
  );
}

export default UpdateProfile;
