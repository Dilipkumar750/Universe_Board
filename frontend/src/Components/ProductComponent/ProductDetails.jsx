import React from "react";

function ProductDetails() {
  return (
    <>
      <center>
        <h1 className=" text-3xl font-bold text-white mb-4 ">product name</h1>
      </center>
      <div className=" grid md:grid-cols-3 ">
        <div>
          <img src="" alt="" />
        </div>
        <div className="max-w-2xl shadow overflow-hidden md:col-span-2 ">
          <dl>
            <div className=" p-2 grid grid-cols-3 gap-4 px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="text-sm text-gray-300 mt-0 col-span-2">
                Mickael Poulaz
              </dd>
            </div>
            <div className="p-2 grid grid-cols-3 gap-4 px-6">
              <dt className="text-sm font-medium text-gray-500">Best techno</dt>
              <dd className="text-sm text-gray-300 mt-0 col-span-2">React JS</dd>
            </div>
            <div className=" p-2 grid grid-cols-3 gap-4 px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="text-sm text-gray-300 mt-0 col-span-2">
                m.poul@example.com
              </dd>
            </div>
            <div className="p-2 grid grid-cols-3 gap-4 px-6">
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="text-sm text-gray-300 mt-0 col-span-2">$10,000</dd>
            </div>
            <div className=" p-2 grid grid-cols-3 gap-4 px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="text-sm text-gray-300 mt-0 col-span-2">
                To get social media testimonials like these, keep your customers
                engaged with your social media accounts by posting regularly
                yourself
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className=" text-gray-300 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus
          rem assumenda architecto voluptas optio, iste amet? Minus animi illo
          maxime cupiditate provident, perspiciatis tempore, odit voluptatem,
          similique inventore odio!
        </p>
      </div>
      <div className="flex justify-center">
        <button className=" bg-slate-700 text-slate-300 py-2 px-3 rounded-md ">
          Contact
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
