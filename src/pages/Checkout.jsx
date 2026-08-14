import React, { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    country: '',
    states: '',
    zipCode: '',
    email: '',
    phone: '',
    shipDifferentAddress: false,
    orderNotes: '',
    paymentMethod: 'Cash on Delivery',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing/selecting
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!formData.country || formData.country === 'Select') newErrors.country = 'Please select a country';
    if (!formData.states || formData.states === 'Selects') newErrors.states = 'Please select a state';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to top or first error if needed
    } else {
      setErrors({});
      setSubmitted(true);
      // Handle successful order placement here (e.g., API call)
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {submitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-center font-medium">
            Order placed successfully! Thank you for your purchase.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12" noValidate>
          
          {/* Left Side: Billing Information & Additional Info */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Billing Information Section */}
            <div>
              <h2 className="text-[24px] text-[#1A1A1A] font-medium font-pop mb-6">Billing Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {/* First Name */}
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">First name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name" 
                    className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400 ${
                      errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                
                {/* Last Name */}
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Last name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name" 
                    className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400 ${
                      errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">
                    Company Name <span className="text-gray-400">(optional)</span>
                  </label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company name" 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div className="mb-4">
                <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Street Address</label>
                <input 
                  type="text" 
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="Street Address" 
                  className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400 ${
                    errors.streetAddress ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                  }`}
                />
                {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
              </div>

              {/* Country, States, Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {/* Country / Region */}
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Country / Region</label>
                  <div className="relative">
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm bg-white ${
                        errors.country ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                      } ${!formData.country || formData.country === 'Select' ? 'text-gray-400' : 'text-gray-800'}`}
                    >
                      <option value="Select">Select</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>

                {/* States */}
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">States</label>
                  <div className="relative">
                    <select 
                      name="states"
                      value={formData.states}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm bg-white ${
                        errors.states ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                      } ${!formData.states || formData.states === 'Selects' ? 'text-gray-400' : 'text-gray-800'}`}
                    >
                      <option value="Selects">Selects</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="California">California</option>
                      <option value="London">London</option>
                    </select>
                  </div>
                  {errors.states && <p className="text-red-500 text-xs mt-1">{errors.states}</p>}
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Zip Code</label>
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip Code" 
                    className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400 ${
                      errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                    }`}
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Phone</label>
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number" 
                    className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder:text-gray-400 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gray-400'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center mt-4">
                <input 
                  type="checkbox" 
                  id="ship-address" 
                  name="shipDifferentAddress"
                  checked={formData.shipDifferentAddress}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="ship-address" className="ml-2 text-[14px] font-pop text-[#4D4D4D] cursor-pointer">
                  Ship to a different address
                </label>
              </div>
            </div>

            {/* Divider Line */}
            <hr className="border-gray-200" />

            {/* Additional Info Section */}
            <div>
              <h2 className="text-[24px] font-pop text-[#1A1A1A] mb-4">Additional Info</h2>
              <div>
                <label className="block text-[14px] font-pop text-[#1A1A1A] mb-1">Order Notes (Optional)</label>
                <textarea 
                  rows="4"
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleChange}
                  placeholder="Notes about your order, e.g. special notes for delivery" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-400 text-sm resize-none"
                ></textarea>
              </div>
            </div>

          </div>

          {/* Right Side: Order Summary & Payment Method */}
          <div className="lg:col-span-5">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">

              <h3 className=" text-[#1A1A1A] font-medium text-[20px] font-pop mb-6">Order Summary</h3>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {/* Item 1 */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className=" bg-gray-50 flex items-center justify-center rounded">
                      <img 
                        src="https://res.cloudinary.com/m3raib7v/image/upload/v1783705560/products/wxwswtz1hwdnk0dhzndy.png" 

                        alt="Green Capsicum" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Green Capsicum x5</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$70.00</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className=" bg-gray-50 flex items-center justify-center rounded">
                      <img 
                        src="https://res.cloudinary.com/m3raib7v/image/upload/v1783717086/products/gjtttp37chfa3jvuujto.png" 
                        alt="Red Capsicum" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Red Capsicum x1</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$14.00</span>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 pb-6  text-sm">
                <div className="flex justify-between border-b border-gray-200 text-[#4d4d4d] text-[16px] font-pop">
                  <span >Subtotal:</span>
                  <span className="font-medium  text-[#1A1A1A] text-[16px] font-pop">$84.00</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 text-[#4d4d4d] text-[16px] font-pop">
                  <span>Shipping:</span>
                  <span className="font-medium  text-[#1A1A1A] text-[16px] font-pop">Free</span>
                </div>
                <div className="flex justify-between text-[#4d4d4d] text-[16px] font-pop  pt-1">
                  <span>Total:</span>
                  <span className="text-[#1A1A1A] text-[18px] font-pop ">$84.00</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="my-6">
                <h4 className="text-[20px] font-pop text-[#1A1A1A] mb-4">Payment Method</h4>

                <div className="space-y-3">
                  {['Cash on Delivery', 'Paypal', 'Amazon Pay'].map((method) => (
                    <label key={method} className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="radio"  size={20}
                        name="paymentMethod" 
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={handleChange}
                        className="w-5 h-5 accent-green-600 cursor-pointer"
                      />
                      <span className="text-[14px] font-pop text-[#4D4D4D]">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Place Order Button */}
              <button 
                type="submit"
                className="w-full bg-[#00B207] hover:bg-[#009b06] text-white font-medium py-3.5 px-4 rounded-full transition-colors duration-200 text-center shadow-sm cursor-pointer"
              >
                Place Order
              </button>

            </div>
          </div>

        </form>
      </div>
    </div>
  );
}