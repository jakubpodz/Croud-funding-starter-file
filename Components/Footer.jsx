import React from "react";

const Footer = () => {
  const productList = ["Market", "Ethereum token", "Donation"];
  const contactList = ["Contact Us", "Support", "Privacy Policy"];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul>
              {productList.map((product, index) => (
                <li key={index} className="mb-2">
                  <a
                    href="/"
                    className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul>
              {contactList.map((contact, index) => (
                <li key={index} className="mb-2">
                  <a
                    href="/"
                    className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul>
              <li className="mb-2">
                <a
                  href="/"
                  className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/"
                  className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/"
                  className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BizzBlock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
