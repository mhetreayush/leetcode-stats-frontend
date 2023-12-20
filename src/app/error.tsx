"use client";

const Error = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Error fetching data.</h1>
      <li>The virtual machine for backend is turned off to save credits.</li>
    </div>
  );
};

export default Error;
