import { useForm } from "react-hook-form";
import { getUser } from "../../lib/LocalStorage";
import { useState } from "react";

const FindBloodForm = () => {
  const donorData = getUser();
  const [filterData, setFilterData] = useState(donorData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bloodGroup, state } = data;
    if (bloodGroup && state) {
      const filteredDonors = donorData.filter(
        (donor) => donor.bloodGroup === bloodGroup && donor.location === state
      );
      setFilterData(filteredDonors);
    } else {
      const filteredDonors = donorData;
      setFilterData(filteredDonors);
    }
  };
  console.log(filterData);
  return (
    <div className="max-w-[1440px] mx-auto my-20 rounded border shadow-sm pb-10">
      <div>
        <div className="mt-16 mb-3 ">
          <h2 className="md:text-3xl text-center">Recipient Details</h2>
        </div>
        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Blood Group */}
          <div className="flex items-center gap-3">
            <label className="text-[#646464]">Blood Group</label>
            <div>
              <select
                {...register("bloodGroup", { required: true })}
                className="rounded p-2 border border-[#DADADA]"
              >
                <option value="" disabled>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              {errors.bloodGroup && (
                <p style={{ color: "red" }}>Blood Group is required</p>
              )}
            </div>
          </div>

          {/* State */}
          <div>
            <label className="text-[#646464] px-2">State</label>
            <select
              {...register("state", { required: true })}
              className="rounded p-2 border border-[#DADADA] "
            >
              <option value="">Select Division</option>
              <option value="Barishal">Barishal</option>
              <option value="Chattogram">Chattogram </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            {errors.state && <p style={{ color: "red" }}>State is required</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-red-400 text-white p-2 font-bold rounded-md ml-2"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>

      {/* User List */}
      {filterData?.map((user, index) => (
        <div
          key={index}
          className="bg-white mx-16 my-14 py-10 px-5 flex justify-between"
        >
          <div className="md:font-bold md:text-xl flex flex-col gap-1">
            <div className="flex justify-between">
              <h2 className="text-2xl">{user.name}</h2>
            </div>
            <p className="text-[#00000099] font-normal text-md">
              {user.location},{user.country}
            </p>
            <h2 className="text-[#00000099] font-normal text-md">
              Mobile: {user.phoneNumber}
            </h2>
            <h2 className="text-[#00000099] font-normal text-md">
              Last donate: {user.lastDonationDate}
            </h2>
          </div>
          <div>
            <h1 className="bg-red-500 text-white py-2 px-3 rounded-md">
              Blood Group: {user.bloodGroup}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindBloodForm;
