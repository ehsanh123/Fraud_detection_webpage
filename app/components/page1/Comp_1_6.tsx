<<<<<<< HEAD
// components/page1/Comp_1_6.js
import React from 'react';
import Link from 'next/link';

const BlueMenu: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          Ehsan Hosiny Nezhad
        </div>

        {/* Menu Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-200 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/pages/model_2" className="text-white hover:text-blue-200 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/pages/fraud_detect" className="text-white hover:text-blue-200 transition duration-300">
              Model test
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-blue-200 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Optional: Call-to-Action Button */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default BlueMenu;

  {/* <div className="text-4xl md:text-xl ">
      Component 1.60
=======
// components/page1/Comp_1_6.js
// components/BlueMenu.js
import React from 'react';
import Link from 'next/link';

const BlueMenu: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          MyApp
        </div>

        {/* Menu Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-200 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-blue-200 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-blue-200 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Optional: Call-to-Action Button */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default BlueMenu;

  {/* <div className="text-4xl md:text-xl ">
      Component 1.60
>>>>>>> 0209a41b3f2755e7f7b441203ce12f1759f23ec6
      </div> */}