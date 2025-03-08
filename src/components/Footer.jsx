import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700 py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* ✅ Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <svg className="h-10 w-10 text-indigo-600" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
            </svg>
            <h2 className="text-2xl font-extrabold text-indigo-700 tracking-wide">Sentinel AI</h2>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Providing reliable AI-driven misinformation detection since 2025.
          </p>
        </div>

        {/* ✅ Navigation Links */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold text-indigo-700 mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-500 transition">Home</a>
            </li>
            <li>
              <a href="/scan" className="hover:text-indigo-500 transition">TruthScan</a>
            </li>
            <li>
              <a href="/game" className="hover:text-indigo-500 transition">TruthQuest</a>
            </li>
            <li>
              <a href="/truthAcademy" className="hover:text-indigo-500 transition">TruthAcademy</a>
            </li>
          </ul>
        </div>

        {/* ✅ Social Media Links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-indigo-700 mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full hover:bg-indigo-100 transition">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.735 8.033 4.11 6.072 1.682 3.093c-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04C2.179 21.397 4.768 22.212 7.548 22.212c9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full hover:bg-red-100 transition">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full hover:bg-blue-100 transition">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Divider */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sentinel AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
