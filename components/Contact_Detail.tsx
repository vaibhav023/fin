"use client";
import React, { useState, FormEvent } from "react";
import styles from "./Contact.module.css";
import { updateUserDetails } from "@/lib/actions/user.action";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  pan: string;
  aadhar: string;
  dob: string;
  account_type: string;
  holder_name: string;
  accountNo: string;
  ifsc: string;
  entity: string;
  company_name: string;
  display: string;
  category: string;
  sub_category: string;
  turnover: string;
  org_pan: string;
  gstin: string;
  website_url: string;
  app_url: string;
  registered_address: string;
  state: string;
  city: string;
  pincode: string;
  operating_address: string;
  state2: string;
  city2: string;
  pincode2: string;
  description: string;
}
interface Props {
  clerkId: string;
}

function MyForm() {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    pan: "",
    aadhar: "",
    dob: "",
    account_type: "",
    holder_name: "",
    accountNo: "",
    ifsc: "",
    entity: "",
    company_name: "",
    display: "",
    category: "",
    sub_category: "",
    turnover: "",
    gstin: "",
    org_pan: "",
    website_url: "",
    app_url: "",
    registered_address: "",
    state: "",
    city: "",
    pincode: "",
    operating_address: "",
    state2: "",
    city2: "",
    pincode2: "",
    description: "",
  });
  const { user } = useUser();
  const clerk_Id = user?.id;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    
    e.preventDefault();

    if (isSubmitting) return;
    console.log('Submitting the form...');
    setIsSubmitting(true);

    var params = {
      clerkId: clerk_Id!,
      details: true,
      pan: formData.pan,
      aadhar: formData.aadhar,
      dob: formData.dob,
      account_type: formData.account_type,
      holder_name: formData.holder_name,
      accountNo: formData.accountNo,
      ifsc: formData.ifsc,
      entity: formData.entity,
      company_name: formData.company_name,
      display: formData.display,
      category: formData.category,
      sub_category: formData.sub_category,
      turnover: formData.turnover,
      gstin: formData.gstin,
      org_pan: formData.org_pan,
      website_url: formData.website_url,
      app_url: formData.app_url,
      registered_address: formData.registered_address,
      state: formData.state,
      city: formData.city,
      pincode: formData.pincode,
      operating_address: formData.operating_address,
      state2: formData.state2,
      city2: formData.city2,
      pincode2: formData.pincode2,
      description: formData.description
    };
    

    const res = await updateUserDetails(params);
    console.log(res);
    alert("Details submitted successfully")
    router.push('/base_details')
    setIsSubmitting(false);
  };

  return (
    <div className="w-full mx-auto p-4 justify-center items-center flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex w-[800px] flex-wrap mr-10 ">
          <div className="w-1/2 p-2 mb-4 px-8 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name (As per Pan card)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Full Name (As per Pan card)"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 px-8 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pan"
            >
              Signatory PAN No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pan"
              name="pan"
              type="text"
              placeholder="Authorized Signatory PAN No."
              value={formData.pan}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aadhar"
            >
              Aadhar No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="aadhar"
              name="aadhar"
              type="text"
              placeholder="Your 16 digita Aadhar Number"
              value={formData.aadhar}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              DOB
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              name="dob"
              type="dob"
              placeholder="dd/mm/yy"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="account_type"
            >
              Account Type
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="account_type"
              name="account_type"
              type="text"
              placeholder="Please select account type"
              value={formData.account_type}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="holder_name"
            >
              Account Holder Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="holder_name"
              name="holder_name"
              type="text"
              placeholder="Account Holder Name"
              value={formData.holder_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="accountNo"
            >
              Account No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="accountNo"
              name="accountNo"
              type="text"
              placeholder="Account Number"
              value={formData.accountNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ifsc"
            >
              IFSC Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ifsc"
              name="ifsc"
              type="text"
              placeholder="Enter IFSC Code"
              value={formData.ifsc}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="entity"
            >
              Business Entity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="entity"
              name="entity"
              type="text"
              placeholder="Please select business entity"
              value={formData.entity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company_name"
            >
              Business/Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company_name"
              name="company_name"
              type="text"
              placeholder="Enter your registered business name"
              value={formData.company_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="display"
            >
              Display/Brand Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="display"
              name="display"
              type="text"
              placeholder="Display/Brand Name"
              value={formData.display}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Business Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              name="category"
              type="text"
              placeholder="Please select business category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sub_category"
            >
              Business Sub-Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sub_category"
              name="sub_category"
              type="text"
              placeholder="Please select business sub-category"
              value={formData.sub_category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="turnover"
            >
              Annual Turnover
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="turnover"
              name="turnover"
              type="text"
              placeholder="Please select annual turnover"
              value={formData.turnover}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="org_pan"
            >
              Organisation PAN
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="org_pan"
              name="org_pan"
              type="text"
              placeholder="Your Organisation PAN"
              value={formData.org_pan}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gstin"
            >
              GSTIN No.(If Any)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gstin"
              name="gstin"
              type="text"
              placeholder="GST Number"
              value={formData.gstin}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="website_url"
            >
              Website URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="website_url"
              name="website_url"
              type="text"
              placeholder="Website URL"
              value={formData.website_url}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/2 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="app_url"
            >
              App URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="app_url"
              name="app_url"
              type="text"
              placeholder="App URL"
              value={formData.app_url}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="registered_address"
            >
              Registerd Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registered_address"
              name="registered_address"
              type="text"
              placeholder="Registered Address"
              value={formData.registered_address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              name="state"
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pincode"
            >
              Pincode
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pincode"
              name="pincode"
              type="text"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="registered_address"
            >
              Operating Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="operating_address"
              name="operating_address"
              type="text"
              placeholder="Operating Address"
              value={formData.operating_address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state2"
            >
              State
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state2"
              name="state2"
              type="text"
              placeholder="State"
              value={formData.state2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city2"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city2"
              name="city2"
              type="text"
              placeholder="City"
              value={formData.city2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pincode2"
            >
              Pincode
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pincode2"
              name="pincode2"
              type="text"
              placeholder="Pincode"
              value={formData.pincode2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full p-2 mb-4 px-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Business Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="text"
              placeholder="Business Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Add more rows as needed */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
