import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Tiers() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="p-6 lg:p-12 max-w-5xl w-full bg-gray-900">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12 uppercase">
            Sponsorship Tiers
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border-2 border-black table-fixed">
              <colgroup>
                <col style={{ width: '1%' }} />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-center py-0 px-2 text-lg text-white font-bold bg-[#B21F24] border-2 border-black whitespace-nowrap">
                    Our Commitment
                  </th>
                  <th className="py-3 px-4 text-lg text-white font-bold bg-[#B21F24] border-2 border-black">Bronze</th>
                  <th className="py-3 px-4 text-lg text-white font-bold bg-[#B21F24] border-2 border-black">Silver</th>
                  <th className="py-3 px-4 text-lg text-white font-bold bg-[#B21F24] border-2 border-black">Gold</th>
                  <th className="py-3 px-4 text-lg text-white font-bold bg-[#B21F24] border-2 border-black">Platinum</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Sponsorship amt.
                  </td>
                  <td className="bg-[#EE9898] text-black py-3 px-4 border-2 border-black">&gt;$100</td>
                  <td className="bg-[#FFCDCD] text-black py-3 px-4 border-2 border-black">&gt;$500</td>
                  <td className="bg-[#FFE3E3] text-black py-3 px-4 border-2 border-black">&gt;$2000</td>
                  <td className="bg-white text-black py-3 px-4 border-2 border-black">&gt;$6000</td>
                </tr>
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Logo on the Car
                  </td>
                  <td className="bg-[#EE9898] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFCDCD] py-3 px-4 text-green-600 font-bold border-2 border-black">✓<span className="text-xs text-black ml-2">(Small)</span></td>
                  <td className="bg-[#FFE3E3] py-3 px-4 text-green-600 font-bold border-2 border-black">✓<span className="text-xs text-black ml-2">(Medium)</span></td>
                  <td className="bg-white py-3 px-4 text-green-600 font-bold border-2 border-black">✓<span className="text-xs text-black ml-2">(Large)</span></td>
                </tr>
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Logo on our website
                  </td>
                  <td className="bg-[#EE9898] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-[#FFCDCD] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-[#FFE3E3] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-white py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                </tr>
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Shop visit
                  </td>
                  <td className="bg-[#EE9898] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFCDCD] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFE3E3] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-white py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                </tr>
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Redracing merchandise
                  </td>
                  <td className="bg-[#EE9898] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFCDCD] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFE3E3] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-white py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                </tr>
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Social media shoutout
                  </td>
                  <td className="bg-[#EE9898] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-[#FFCDCD] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-[#FFE3E3] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-white py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                </tr>
                <tr>
                  <td className="bg-[#B21F24] text-white font-semibold py-0 px-2 text-center border-2 border-black whitespace-nowrap">
                    Recruitment / collab
                  </td>
                  <td className="bg-[#EE9898] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFCDCD] py-3 px-4 text-red-500 font-bold border-2 border-black">✗</td>
                  <td className="bg-[#FFE3E3] py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                  <td className="bg-white py-3 px-4 text-green-600 font-bold border-2 border-black">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tiers;