import React from "react";
import "../../index.css";
import Collaboration from "./Collaboration";
import GetBlood from "./GetBlood";
import Mission from "./Mission";

function Home() {
  return (
    <div className="bg-tranparent">
      <div className="w-full md:h-screen relative">
        <div
          className="bg-hero-pattern bg-no-repeat "
          style={{ height: "85%", backgroundSize: "contain" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12  px-4 py-8 md:px-[3.875rem] md:py-16">
            <div className="md:col-span-7"></div>

            <div className="md:col-span-5 flex flex-col justify-center md:mt-[13.0625rem]">
              <div className="text-center md:text-end">
                <div className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                  Save Life Donate <div>Blood</div>
                </div>
                <div className="text-sm md:text-base mb-6">
                  Every drop counts! Donating blood is one of the most selfless
                  acts you can do to save lives. Your simple gesture could help
                  accident victims, cancer patients, and those undergoing major
                  surgeries. Join us in our mission to make blood readily
                  available to those in need. Together, we can give the gift of
                  life.
                </div>

                <div className="md:mt-[4.5625rem]">
                  <a
                    href="https://your-link-here.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-black text-white px-8 py-4 rounded-lg font-black button-text">
                      Get Blood Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mission />
      <Collaboration />
      <GetBlood />
    </div>
  );
}

export default Home;
