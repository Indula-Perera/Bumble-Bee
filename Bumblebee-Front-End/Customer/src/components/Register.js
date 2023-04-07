import React from "react";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { name, address, dob, mobile, password };

    let result = await fetch("http://localhost:8080/api/v1/users/saveusers", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/home")
  }

  return (
    <div>
      <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 m-5">
        <div className="container mx-auto flex justify-around m-5">
          {/* text */}
          <div className="flex flex-col justify-center">
            {/* pretitle */}
            <div className="font-semibold flex items-center uppercase m-5 text-black">
              <div className="w-10 h-[2px] bg-black mr-3 text-black "></div>
              Create an Account
            </div>
            {/* title */}
            <h1 className="text-[45px] leading-[1.1] text-black mb-4">
            </h1>
            <div class="min-h-screen py-5">
              <div class="container mx-auto">
                <div class="flex flex-col lg:flex-row w-10/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                  <div class="w-full lg:w-2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"></div>
                  <div class="w-full lg:w-2/2 py-16 px-12">
                    <div class="grid grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        class="border text-black border-gray-400 py-1 px-2"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        class="border text-black border-gray-400 py-1 px-2"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div class="mt-5 grid grid-cols-2 gap-5">
                      <input
                        type="date"
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        class="border text-black border-gray-400 py-1 px-2 w-full"
                      />
                      <input
                        type="number"
                        placeholder="Mobile Number"
                        value={mobile}
                        class="border text-black border-gray-400 py-1 px-2 w-full"
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                    <div class="mt-5 grid grid-cols-2 gap-5">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        class="border text-black border-gray-400 py-1 px-2 w-full"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        class="border text-black border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                    <div class="mt-5"></div>
                    <div class="mt-10">
                      <button
                        class="w-full py-3 text-center border  text-black border-gray-400"
                        onClick={signUp}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
