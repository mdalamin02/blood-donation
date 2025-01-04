import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { saveUser } from "../../lib/LocalStorage";

// Bangladesh divisions and districts data
const bangladeshData = {
  divisions: [
    {
      name: "Dhaka",
      districts: [
        "Dhaka",
        "Faridpur",
        "Gazipur",
        "Kishoreganj",
        "Manikganj",
        "Munshiganj",
        "Narayanganj",
        "Narsingdi",
        "Rajbari",
        "Shariatpur",
        "Tangail",
      ],
    },
    {
      name: "Chittagong",
      districts: [
        "Chittagong",
        "Bandarban",
        "Brahmanbaria",
        "Chandpur",
        "Comilla",
        "Cox's Bazar",
        "Feni",
        "Khagrachhari",
        "Lakshmipur",
        "Noakhali",
        "Rangamati",
      ],
    },
    {
      name: "Rajshahi",
      districts: [
        "Rajshahi",
        "Bogra",
        "Chapainawabganj",
        "Joypurhat",
        "Naogaon",
        "Natore",
        "Pabna",
        "Sirajganj",
      ],
    },
    {
      name: "Khulna",
      districts: [
        "Khulna",
        "Bagerhat",
        "Chuadanga",
        "Jessore",
        "Jhenaidah",
        "Kushtia",
        "Magura",
        "Meherpur",
        "Narail",
        "Satkhira",
      ],
    },
    {
      name: "Barishal",
      districts: [
        "Barishal",
        "Barguna",
        "Bhola",
        "Jhalokati",
        "Patuakhali",
        "Pirojpur",
      ],
    },
    {
      name: "Sylhet",
      districts: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
    },
    {
      name: "Rangpur",
      districts: [
        "Rangpur",
        "Dinajpur",
        "Gaibandha",
        "Kurigram",
        "Lalmonirhat",
        "Nilphamari",
        "Panchagarh",
        "Thakurgaon",
      ],
    },
    {
      name: "Mymensingh",
      districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    },
  ],
};

const DonorRegister = () => {
  const { register, handleSubmit } = useForm();
  const [districts, setDistricts] = useState([]);

  // Handle division change
  const handleDivisionChange = (e) => {
    const selectedDivision = e.target.value;
    const division = bangladeshData.divisions.find(
      (div) => div.name === selectedDivision
    );
    setDistricts(division ? division.districts : []);
  };

  // Handle form submission
  const onSubmit = (data) => {
    // Save the form data to local storage
    saveUser(data);
    // Log the form data to the console
    console.log("Form Data:", data);
    alert("Your details have been saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] py-10">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#500732] to-[#A8174E] py-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Register As Donor
        </h2>
        <p className="text-white mt-2 text-lg">
          Join us in saving lives. Your contribution matters!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-2xl rounded-lg p-6 md:p-10 max-w-4xl mx-auto mt-10 mb-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Details Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-pink-600 pb-2">
              Personal Details
            </h3>

            {/* Full Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                {...register("firstName", { required: true })}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                {...register("phoneNumber", { required: true })}
              />
            </div>
          </div>

          {/* Address and Blood Group Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-pink-600 pb-2">
              Address & Blood Group
            </h3>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                rows="4"
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                {...register("address", { required: true })}
              />
            </div>

            {/* Blood Group */}
            <div>
              <label
                htmlFor="bloodGroup"
                className="block text-gray-700 font-medium mb-2"
              >
                Blood Group
              </label>
              <select
                id="bloodGroup"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                {...register("bloodGroup", { required: true })}
              >
                <option value="">Select your blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-pink-600 pb-2">
              Location
            </h3>

            {/* Division and District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="division"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Division
                </label>
                <select
                  id="division"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  {...register("division", { required: true })}
                  onChange={handleDivisionChange}
                >
                  <option value="">Select your division</option>
                  {bangladeshData.divisions.map((division, index) => (
                    <option key={index} value={division.name}>
                      {division.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="district"
                  className="block text-gray-700 font-medium mb-2"
                >
                  District
                </label>
                <select
                  id="district"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  {...register("district", { required: true })}
                >
                  <option value="">Select your district</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Last Donation Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-pink-600 pb-2">
              Last Donation
            </h3>
            <div>
              <label
                htmlFor="lastDonationDate"
                className="block text-gray-700 font-medium mb-2"
              >
                Date of Last Donation
              </label>
              <input
                id="lastDonationDate"
                type="date"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                {...register("lastDonationDate", { required: true })}
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="mr-2 focus:ring-2 focus:ring-pink-500 rounded"
                {...register("terms", { required: true })}
              />
              I agree to the terms and conditions.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2"
            >
              Submit
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonorRegister;
