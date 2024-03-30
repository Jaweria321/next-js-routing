import React from "react";

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-xl font-black mt-5">This is Home Page</h1>
      <a
        href="/aboutUsPage"
        className="bg-black text-white p-2 m-auto inline-block mt-5"
      >
        About Us
      </a>
    </div>
  );
}

export default HomePage;
