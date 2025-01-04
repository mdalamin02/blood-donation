import "../../../src/index.css";
function GetBlood() {
  return (
    <div className="bg-[#E5E5E5] relative min-h-[61.438rem]">
      <div className=" md:container md:mx-auto md:mt-[90px] pt-5 ">
        <div className="font-bold mission-text mt-5">How to get blood?</div>

        {/* Step -1 */}
        <div className="absolute top-52 left-1/2 -translate-x-1/2 ">
          <div className="relative w-[26.25rem] h-[23.125]">
            <div className="absolute -top-5 -left-2 bg-white border-4 border-black h-[6rem] w-[6rem] rounded-full text-center cir-text font-bold">
              1
            </div>
            <div className="bg-white border-4 h-[23.120rem] w-[23.120rem] rounded-full flex flex-col items-center justify-center absolute z-10 p-5">
              <div>
                <img
                  src={`/icon2.svg`}
                  alt="Get Blood Illustration"
                  className="h-[6.75rem] w-[6.75rem]"
                />
              </div>

              <div className="text-center step-text ">
                Access our platform by logging into your account with your
                registered credentials.
              </div>
            </div>
          </div>
        </div>

        <div className="absolute md:top-[540px] ">
          <div className="flex align-center justify-center">
            <div className="relative ">
              <div className="absolute -left-7 bg-white border-4 border-black h-[6rem] w-[6rem] rounded-full text-center cir-text font-bold ">
                2
              </div>

              <div className=" relative z-10 bg-white border-4 h-[23.120rem] w-[23.120rem] rounded-full flex flex-col items-center justify-center">
                <div>
                  <img
                    src={`/icon3.svg`}
                    alt="Get Blood Illustration"
                    className="h-[6.75rem] w-[6.75rem]"
                  />
                </div>
                <div className="text-center step-text p-6">
                  If you're new, sign up by providing your details, including
                  your location and contact information, to become part of our
                  lifesaving community.
                </div>
              </div>
            </div>

            {/* Heart Shape SVG */}
            <div className="flex justify-center items-center">
              <img
                src={`/heart.svg`}
                alt="Get Blood Illustration"
                className=""
              />
            </div>

            {/* Step -3 */}
            <div className="relative">
              <div className="absolute -left-7 bg-white border-4 border-black h-[6rem] w-[6rem] rounded-full text-center cir-text font-bold">
                3
              </div>

              <div className="relative z-10 bg-white border-4 h-[23.120rem] w-[23.120rem] rounded-full flex flex-col items-center justify-center">
                <div>
                  <img
                    src={`/icon.svg`}
                    alt="Get Blood Illustration"
                    className="h-[6.75rem] w-[6.75rem]"
                  />
                </div>
                <div className="text-center step-text p-5">
                  Search for donors or blood banks based on your required blood
                  group and location. Connect instantly to fulfill your needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetBlood;
