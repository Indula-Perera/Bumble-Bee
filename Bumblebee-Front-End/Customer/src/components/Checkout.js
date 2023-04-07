import React from "react";
import { useState, useEffect } from "react";
// import cart context
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { total } = useContext(CartContext);

  const [setTotal] = useState(0);
  const [dividedAmount, setDividedAmount] = useState(0);
  const [age, setAge] = useState(null);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  async function Payment() {
    let item = { name, address, mobile, note, dividedAmount, total };

    let result = await fetch(
      "http://localhost:8080/api/v1/payment/savepayment",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/home");
  }

  async function PaymentSuccess() {
    navigate("/home");
  }

  useEffect(() => {
    const divided = total / 3;
    setDividedAmount(divided);
  }, [total]);

  const handleAmountChange = (e) => {
    const amount = parseInt(e.target.value);
    setTotal(amount);
  };

  const handleBirthdayChange = (e) => {
    const birthday = new Date(e.target.value);
    const today = new Date();
    const diff = today.getTime() - birthday.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    setAge(age);
  };

  return (
    <div>
      <div>
        <section className="h-[1000px] bg-hero bg-no-repeat bg-cover bg-center py-24 m-5">
          <div className="container mx-auto flex justify-around m-5">
            {/* text */}
            <div className="flex flex-col justify-center">
              {/* pretitle */}
              <div className="font-semibold flex items-center uppercase m-5 text-black">
                <div className="w-10 h-[2px] bg-black mr-3 text-black "></div>
                Check Out
              </div>
              {/* title */}
              <h1 className="text-[45px] leading-[1.1] text-black mb-4">
                <br />
                <span className="font-semibold text-black mb-1">
                </span>
              </h1>

              <div class="min-h-screen py-1">
                <div class="container mx-auto">
                  <div class="flex flex-col lg:flex-row w-10/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div class="w-full lg:w-2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"></div>

                    <div class="w-full lg:w-2/2 py-16 px-12">
                      <h1 class="text-black text-[20px] uppercase font-semibold mb-5">
                        Add Shipping Address
                      </h1>
                      <div class="grid grid-cols-2 gap-5">
                        <input
                          type="text"
                          placeholder="Name"
                          class="border text-black  text-black border-gray-400 py-1 px-2"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Address"
                          class="border text-black border-gray-400 py-1 px-2"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div class="mt-5 grid grid-cols-2 gap-5">
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          class="border text-black border-gray-400 py-1 px-2"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                        <input
                          type="date"
                          placeholder="Birthday"
                          class="border text-black border-gray-400 py-1 px-2"
                          onChange={handleBirthdayChange}
                          required
                        />
                      </div>
                      <div class="mt-5 grid grid-cols-1 gap-5">
                        <input
                          type="text"
                          placeholder="Shipping Note"
                          class="border text-black border-gray-400 py-1 px-2"
                          required
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        />
                      </div>

                      <div class="mt-5 grid grid-cols-1 gap-5"></div>

                      {age !== null && age >= 18 ? (
                        <div>
                          <div class="grid grid-cols-1 gap-5">
                            <h1 class="text-black text-[20px] uppercase font-semibold mb-1 mt-1">
                              Your Sub-Total
                            </h1>
                            <input
                              type="text"
                              placeholder="Card Name"
                              class="border  text-black text-center border-gray-400 py-1 px-2"
                              readOnly
                              value={parseFloat(total).toFixed(2)+"lkr"}
                              onChange={handleAmountChange}
                              max="15000"
                            />

                            <input
                              type="hidden"
                              placeholder="Card Name"
                              class="border text-black text-center border-gray-400 py-1 px-2"
                              readOnly
                              value={parseFloat(total).toFixed(2)}
                              onChange={(e) => setTotal(e.target.value)}
                              max="15000"
                            />
                          </div>
                          <h1 class="text-black text-[20px] uppercase font-semibold mb-5 mt-5">
                            Installment Plan
                          </h1>
                          <div class="mt-5 grid grid-cols-3 gap-5">
                            <input
                              class="border text-black text-center border-gray-400 py-1 px-2"
                              type="text"
                              value={
                                parseFloat(dividedAmount).toFixed(2)
                              }
                              onChange={(e) => setDividedAmount(e.target.value)}
                            />
                            <input
                              class="border text-black text-center border-gray-400 py-1 px-2"
                              type="text"
                              readOnly
                              value={parseFloat(dividedAmount).toFixed(2)}
                            />
                            <input
                              class="border text-black text-center border-gray-400 py-1 px-2"
                              type="text"
                              value={parseFloat(dividedAmount).toFixed(2)}
                            />
                          </div>
                          <div class="mt-5">
                            <button
                              class="w-full  py-3 text-center border  text-black border-gray-400 uppercase font-semibold"
                              onClick={Payment}
                            >
                              Pay First Installment
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div class="grid grid-cols-1 gap-5">
                            <input
                              type="text"
                              placeholder="Card Name"
                              class="border text-black border-gray-400 py-1 px-2"
                              readOnly
                              value={parseFloat(total).toFixed(2)}
                              onChange={(e) => setTotal(e.target.value)}
                            />
                          </div>
                          <div class="mt-5">
                            <button
                              class="w-full py-3 text-center border text-black border-gray-400 uppercase font-semibold"
                              onClick={PaymentSuccess}
                            >
                              Pay now
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
