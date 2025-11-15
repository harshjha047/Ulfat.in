import React, { useEffect, useState } from "react";
import { useProfile } from "../../Context/ProfileContext";
import { useOrder } from "../../Context/OrderContext";
import { useNavigate } from "react-router-dom";

function OrderInformationFormData() {
  const { getProfileData } = useProfile();
  const { addOrder } = useOrder();
  const navigate=useNavigate()

  const init = {
    name: getProfileData?.name,
    email: getProfileData?.email,
    phone: getProfileData?.phone,
    city: getProfileData?.addresses[0]?.city,
    state: getProfileData?.addresses[0]?.state,
    street: getProfileData?.addresses[0]?.street,
    postalCode: getProfileData?.addresses[0]?.zip,
  };

  const [initData, setinitData] = useState(init);

  const { name, email, phone, city, state, street, postalCode } = initData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setinitData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (getProfileData) {
      setinitData({
        name: getProfileData?.name,
        email: getProfileData?.email,
        phone: getProfileData?.phone,
        city: getProfileData?.addresses[0]?.city,
        state: getProfileData?.addresses[0]?.state,
        street: getProfileData?.addresses[0]?.street,
        postalCode: getProfileData?.addresses[0]?.zip,
      });
    }
  }, [getProfileData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addOrder(initData);
    navigate('/ordersum')
  };

  return (
    <div className="">
      <form action="" onSubmit={handleSubmit} className=" flex gap-3 flex-col">
        <div className=" flex gap-3 flex-col  p-2 my-3 rounded-md ">
          <div className="flex flex-col">
            <label htmlFor="fullname" className="text-[#979797] font-medium">
              Full name{" "}
            </label>
            <input
              type="text"
              id="fullname"
              className="w-[50vw] p-3 outline-none border-[#8f8f8f] border rounded-md"
              placeholder="Full name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#979797] font-medium">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-[50vw] p-3 outline-none border-[#8f8f8f] border rounded-md"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-[#979797] font-medium">
              Phone Number{" "}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-[50vw] p-3 outline-none border-[#8f8f8f] border rounded-md"
              value={phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-[#979797] font-medium">
              Street Address
            </label>
            <input
              type="text"
              id="address"
              className="w-[50vw] p-3 outline-none border-[#8f8f8f] border rounded-md"
              placeholder="Street Address"
              name="street"
              value={street}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 w-[50vw] justify-between flex-wrap">
            <div className="flex flex-col">
              <label htmlFor="city" className="text-[#979797] font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                className="flex-1 p-3 outline-none border-[#8f8f8f] border rounded-md"
                placeholder="City"
                name="city"
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="state" className="text-[#979797] font-medium">
                State
              </label>
              <input
                type="text"
                id="state"
                className="flex-1 p-3 outline-none border-[#8f8f8f] border rounded-md"
                placeholder="State"
                name="state"
                value={state}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pincode" className="text-[#979797] font-medium">
                PIN Code
              </label>
              <input
                type="text"
                id="pincode"
                className="flex-1 p-3 outline-none border-[#8f8f8f] border rounded-md"
                placeholder="PIN Code"
                name="postalCode"
                value={postalCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex gap-3 flex-col border p-2 my-3 rounded-md">
          <div className="text-xl font-medium">Payment Method</div>
          <label
            className="border w-[50vw] flex p-3 gap-2 rounded-md"
            htmlFor="card"
          >
            <input
              type="radio"
              value={"Card"}
              onChange={handleChange}
              name="paymode"
              id="card"
            />
            <div className="text-[#7a7a7a] font-medium"> Dabit/Cradit Card</div>
          </label>
          <label
            className="border w-[50vw] flex p-3 gap-2 rounded-md"
            htmlFor="upi"
          >
            <input
              type="radio"
              onChange={handleChange}
              value={"UPI"}
              name="paymode"
              id="upi"
            />
            <div className="text-[#7a7a7a] font-medium"> UPI</div>
          </label>
          <label
            className="border w-[50vw] flex p-3 gap-2 rounded-md"
            htmlFor="cod"
          >
            <input
              type="radio"
              value={"Cash"}
              onChange={handleChange}
              name="paymode"
              id="cod"
            />
            <div className="text-[#7a7a7a] font-medium"> COD</div>
          </label>
        </div> */}
        <button
          type="submit"
          className="w-full my-4 border p-3 rounded-md bg-[#155DFC] font-medium text-[#fff] text-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default OrderInformationFormData;
