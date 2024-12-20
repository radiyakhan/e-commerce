"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add payment processing logic here
    alert("Payment details submitted");
  };

  return (
    <div className="mt-12">
      <div className="text-center ">
        <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
          <strong>Payment</strong>
        </h1>
        <div className="flex mt-3 mb-10 justify-center">
          <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex" />
        </div>
      </div>
      <div className="max-w-lg mx-auto p-8  mb-10">
        <form onSubmit={handleSubmit}>
          {/* name */}
          <label className="block mb-2 text-sm font-medium text-mycolorblue">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-mycolorblue border-mycolorblue focus:border-text-mycolorblue"
            placeholder="Enter Your Name"
            required
          />
          <label className="block mb-2 text-sm font-medium text-mycolorblue">
            Eamil
          </label>
          <input
            type="email"
            className="w-full p-2 mb-4 rounded border text-mycolorblue border-mycolorblue focus:border-mycolorblue"
            placeholder="Enter Your Email Address"
            required
          />
          {/* Payment Method */}
          <label className="block mb-2 text-sm font-medium text-mycolorblue">
            Payment Method
          </label>
          <select
            className="w-full p-2 mb-4 rounded border border-mycolorblue focus:border-mycolorblue text-mycolorblue/30"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Payment Method
            </option>
            <option className="text-mycolorblue2" value="credit">
              Credit Card
            </option>
            <option className="text-mycolorblue2" value="debit">
              Debit Card
            </option>
          </select>

          {/* Card Number */}
          <label className="block mb-2 text-sm font-medium text-mycolorblue">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-mycolorblue border-mycolorblue focus:border-mycolorblue"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          {/* CVV */}
          <label className="block mb-2 text-sm font-medium text-mycolorblue">
            CVV
          </label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded border text-mycolorblue border-mycolorblue focus:border-mycolorblue "
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />

          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-mycolorblue"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded border  border-mycolorblue focus:border-mycolorblue text-mycolorblue h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                placeholder="Enter your message here!"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="flex ml-3 mx-auto text-white group w-[120px] bg-mycolorblue2/85 border-0 focus:outline-none hover:bg-mycolorblue rounded"
          >
            Submit Payment
          </Button>
        </form>
      </div>
    </div>
  );
}
