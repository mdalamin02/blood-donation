import React from "react";
import { FaHeart, FaUsers, FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are dedicated to saving lives through blood donation. Join us in
          making a difference.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to ensure that every patient in need of blood
            receives it in a timely manner. We strive to create a community of
            regular blood donors who are committed to saving lives.
          </p>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Mission"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Vision Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            We envision a world where no one dies due to a lack of blood. We aim
            to be the leading platform connecting donors with those in need,
            making the process seamless and efficient.
          </p>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Vision"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHeart className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Compassion</h3>
            <p className="text-gray-600">
              We care deeply about the well-being of others and are driven by a
              desire to help.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
            <p className="text-gray-600">
              We believe in the power of community and the impact we can make
              together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHandsHelping className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Commitment</h3>
            <p className="text-gray-600">
              We are committed to making a difference and saving lives through
              blood donation.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
          Our Team
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our team is made up of passionate individuals who are dedicated to the
          cause of blood donation. From healthcare professionals to tech
          enthusiasts, we all work together to make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-gray-600">Chief Medical Officer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Mike Johnson
            </h3>
            <p className="text-gray-600">Head of Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
