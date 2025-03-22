"use client";
import { useState } from "react";
import ProductTable from "./ProductTable";

// const ProductSpecifications = () => {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   // MS Flat Data
//   const msFlatData = [
//     { sl: 1, size: "21 x 6", weightFt: 0.3, weightMtr: 1.0 },
//     { sl: 2, size: "28 x 6", weightFt: 0.4, weightMtr: 1.3 },
//     { sl: 3, size: "30 x 3", weightFt: 0.2, weightMtr: 0.7 },
//     { sl: 4, size: "30 x 5", weightFt: 0.4, weightMtr: 1.2 },
//     { sl: 5, size: "30 x 6", weightFt: 0.4, weightMtr: 1.4 },
//   ];

//   // MS Round Data
//   const msRoundData = [
//     { sl: 1, size: "10", weightFt: 0.19, weightMtr: 0.62 },
//     { sl: 2, size: "12", weightFt: 0.3, weightMtr: 0.9 },
//     { sl: 3, size: "16", weightFt: 0.5, weightMtr: 1.6 },
//     { sl: 4, size: "18", weightFt: 0.6, weightMtr: 2.0 },
//     { sl: 5, size: "20", weightFt: 0.8, weightMtr: 2.5 },
//   ];

//   return (
//     <div className="w-full mx-auto my-0 p-6 bg-white shadow-lg">
//       {/* Page Title */}
//       <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
//         Product Specifications
//       </h2>

//       {/* MS Flat Section */}
//       <div className="mb-4">
//         <button
//           onClick={() => toggleSection("flat")}
//           className="w-full flex justify-between items-center p-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md">
//           MS Flat Products
//           <span>{openSection === "flat" ? "▲" : "▼"}</span>
//         </button>
//         {openSection === "flat" && (
//           <div className="overflow-x-auto mt-2">
//             <table className="w-full border-collapse border border-blue-300">
//               <thead>
//                 <tr className="bg-blue-200 text-blue-900">
//                   <th className="border border-blue-300 p-2">SL No</th>
//                   <th className="border border-blue-300 p-2">Size (mm)</th>
//                   <th className="border border-blue-300 p-2">Weight (kg/ft)</th>
//                   <th className="border border-blue-300 p-2">
//                     Weight (Kg/mtr)
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {msFlatData.map((item) => (
//                   <tr
//                     key={item.sl}
//                     className="text-center border-b border-blue-300 text-blue-700">
//                     <td className="border border-blue-300 p-2">{item.sl}</td>
//                     <td className="border border-blue-300 p-2">{item.size}</td>
//                     <td className="border border-blue-300 p-2">
//                       {item.weightFt}
//                     </td>
//                     <td className="border border-blue-300 p-2">
//                       {item.weightMtr}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* MS Round Section */}
//       <div>
//         <button
//           onClick={() => toggleSection("round")}
//           className="w-full flex justify-between items-center p-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md">
//           MS Round Products
//           <span>{openSection === "round" ? "▲" : "▼"}</span>
//         </button>
//         {openSection === "round" && (
//           <div className="overflow-x-auto mt-2">
//             <table className="w-full border-collapse border border-blue-300">
//               <thead>
//                 <tr className="bg-blue-200 text-blue-900">
//                   <th className="border border-blue-300 p-2">SL No</th>
//                   <th className="border border-blue-300 p-2">Size (mm)</th>
//                   <th className="border border-blue-300 p-2">Weight (kg/ft)</th>
//                   <th className="border border-blue-300 p-2">
//                     Weight (Kg/mtr)
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {msRoundData.map((item) => (
//                   <tr
//                     key={item.sl}
//                     className="text-center border-b border-blue-300 text-blue-700">
//                     <td className="border border-blue-300 p-2">{item.sl}</td>
//                     <td className="border border-blue-300 p-2">{item.size}</td>
//                     <td className="border border-blue-300 p-2">
//                       {item.weightFt}
//                     </td>
//                     <td className="border border-blue-300 p-2">
//                       {item.weightMtr}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

const msFlatData = [
  { sl_no: 1, size: "21 x 6", weight_kg_ft: 0.3, weight_kg_mtr: 1.0 },
  { sl_no: 2, size: "28 x 6", weight_kg_ft: 0.4, weight_kg_mtr: 1.3 },
  { sl_no: 3, size: "30 x 3", weight_kg_ft: 0.2, weight_kg_mtr: 0.7 },
  { sl_no: 4, size: "30 x 5", weight_kg_ft: 0.4, weight_kg_mtr: 1.2 },
  { sl_no: 5, size: "30 x 6", weight_kg_ft: 0.4, weight_kg_mtr: 1.4 },
  { sl_no: 6, size: "38 x 3", weight_kg_ft: 0.4, weight_kg_mtr: 1.4 },
  { sl_no: 7, size: "38 x 5", weight_kg_ft: 0.5, weight_kg_mtr: 1.5 },
  { sl_no: 8, size: "38 x 12", weight_kg_ft: 1.1, weight_kg_mtr: 3.6 },
  { sl_no: 9, size: "45 x 12", weight_kg_ft: 1.3, weight_kg_mtr: 4.2 },
  { sl_no: 10, size: "50 x 4", weight_kg_ft: 2.0, weight_kg_mtr: 1.6 },
  { sl_no: 11, size: "60 x 6", weight_kg_ft: 0.9, weight_kg_mtr: 2.8 },
  { sl_no: 12, size: "65 x 8", weight_kg_ft: 1.2, weight_kg_mtr: 4.1 },
  { sl_no: 13, size: "65 x 10", weight_kg_ft: 1.6, weight_kg_mtr: 5.1 },
  { sl_no: 14, size: "65 x 12", weight_kg_ft: 1.9, weight_kg_mtr: 6.1 },
  { sl_no: 15, size: "65 x 16", weight_kg_ft: 2.5, weight_kg_mtr: 8.2 },
  { sl_no: 16, size: "65 x 20", weight_kg_ft: 3.1, weight_kg_mtr: 10.2 },
  { sl_no: 17, size: "65 x 25", weight_kg_ft: 3.9, weight_kg_mtr: 12.8 },
  { sl_no: 18, size: "75 x 32", weight_kg_ft: 4.5, weight_kg_mtr: 18.9 },
  { sl_no: 19, size: "200 x 6", weight_kg_ft: 2.9, weight_kg_mtr: 9.4 },
  { sl_no: 20, size: "200 x 8", weight_kg_ft: 3.8, weight_kg_mtr: 12.6 },
  { sl_no: 21, size: "200 x 10", weight_kg_ft: 4.8, weight_kg_mtr: 15.7 },
  { sl_no: 22, size: "200 x 12", weight_kg_ft: 5.7, weight_kg_mtr: 18.8 },
  { sl_no: 23, size: "200 x 16", weight_kg_ft: 7.7, weight_kg_mtr: 25.1 },
  { sl_no: 24, size: "200 x 20", weight_kg_ft: 9.6, weight_kg_mtr: 31.4 },
  { sl_no: 25, size: "200 x 25", weight_kg_ft: 12.0, weight_kg_mtr: 39.2 },
];

const msRoundData = [
  { sl_no: 1, size: 10, weight_kg_ft: 0.19, weight_kg_mtr: 0.62 },
  { sl_no: 2, size: 12, weight_kg_ft: 0.3, weight_kg_mtr: 0.9 },
  { sl_no: 3, size: 16, weight_kg_ft: 0.5, weight_kg_mtr: 1.6 },
  { sl_no: 4, size: 18, weight_kg_ft: 0.6, weight_kg_mtr: 2.0 },
  { sl_no: 5, size: 20, weight_kg_ft: 0.8, weight_kg_mtr: 2.5 },
  { sl_no: 6, size: 22, weight_kg_ft: 0.9, weight_kg_mtr: 3.0 },
  { sl_no: 7, size: 25, weight_kg_ft: 1.2, weight_kg_mtr: 3.9 },
  { sl_no: 8, size: 28, weight_kg_ft: 1.5, weight_kg_mtr: 4.8 },
  { sl_no: 9, size: 32, weight_kg_ft: 1.9, weight_kg_mtr: 6.3 },
  { sl_no: 10, size: 34, weight_kg_ft: 2.16, weight_kg_mtr: 7.14 },
  { sl_no: 11, size: 36, weight_kg_ft: 2.42, weight_kg_mtr: 8.0 },
  { sl_no: 12, size: 40, weight_kg_ft: 3.0, weight_kg_mtr: 9.9 },
  { sl_no: 13, size: 45, weight_kg_ft: 3.79, weight_kg_mtr: 12.5 },
  { sl_no: 14, size: 50, weight_kg_ft: 4.7, weight_kg_mtr: 15.4 },
  { sl_no: 15, size: 56, weight_kg_ft: 5.87, weight_kg_mtr: 19.36 },
  { sl_no: 16, size: 60, weight_kg_ft: 6.8, weight_kg_mtr: 22.2 },
  { sl_no: 17, size: 63.5, weight_kg_ft: 7.55, weight_kg_mtr: 24.5 },
  { sl_no: 18, size: 65, weight_kg_ft: 7.9, weight_kg_mtr: 26.08 },
  { sl_no: 19, size: 70, weight_kg_ft: 9.2, weight_kg_mtr: 30.2 },
  { sl_no: 20, size: 80, weight_kg_ft: 12.0, weight_kg_mtr: 39.5 },
  { sl_no: 21, size: 85, weight_kg_ft: 13.51, weight_kg_mtr: 44.6 },
  { sl_no: 22, size: 90, weight_kg_ft: 15.2, weight_kg_mtr: 50.0 },
  { sl_no: 23, size: 95, weight_kg_ft: 16.88, weight_kg_mtr: 55.71 },
  { sl_no: 24, size: 100, weight_kg_ft: 18.8, weight_kg_mtr: 61.5 },
  { sl_no: 25, size: 105, weight_kg_ft: 20.62, weight_kg_mtr: 68.06 },
  { sl_no: 26, size: 110, weight_kg_ft: 22.75, weight_kg_mtr: 74.6 },
  { sl_no: 27, size: 115, weight_kg_ft: 24.74, weight_kg_mtr: 81.64 },
  { sl_no: 28, size: 125, weight_kg_ft: 29.23, weight_kg_mtr: 96.45 },
];

const railPole = [
  { sl_no: 1, size: "RAIL COMMERCIAL RAIL 52KGS", weight_kg_mtr: 52 },
  { sl_no: 2, size: "RAIL COMMERCIAL RAIL 60KGS", weight_kg_mtr: 60 },
];

const msSquareBar = [
  { sl_no: 1, size: "5x5", weight_kg_ft: 0.059, weight_kg_mtr: 0.196 },
  { sl_no: 2, size: "6x6", weight_kg_ft: 0.085, weight_kg_mtr: 0.283 },
  { sl_no: 3, size: "8x8", weight_kg_ft: 0.153, weight_kg_mtr: 0.502 },
  { sl_no: 4, size: "10x10", weight_kg_ft: 0.239, weight_kg_mtr: 0.785 },
  { sl_no: 5, size: "12x12", weight_kg_ft: 0.344, weight_kg_mtr: 1.13 },
  { sl_no: 6, size: "14x14", weight_kg_ft: 0.469, weight_kg_mtr: 1.544 },
  { sl_no: 7, size: "16x16", weight_kg_ft: 0.613, weight_kg_mtr: 2.02 },
  { sl_no: 8, size: "18x18", weight_kg_ft: 0.776, weight_kg_mtr: 2.56 },
  { sl_no: 9, size: "20x20", weight_kg_ft: 0.959, weight_kg_mtr: 3.15 },
  { sl_no: 10, size: "22x22", weight_kg_ft: 1.161, weight_kg_mtr: 3.82 },
  { sl_no: 11, size: "25x25", weight_kg_ft: 1.497, weight_kg_mtr: 4.91 },
  { sl_no: 12, size: "28x28", weight_kg_ft: 1.886, weight_kg_mtr: 6.19 },
  { sl_no: 13, size: "30x30", weight_kg_ft: 2.151, weight_kg_mtr: 7.06 },
  { sl_no: 14, size: "32x32", weight_kg_ft: 2.437, weight_kg_mtr: 8.0 },
  { sl_no: 15, size: "36x36", weight_kg_ft: 3.067, weight_kg_mtr: 10.07 },
  { sl_no: 16, size: "40x40", weight_kg_ft: 3.835, weight_kg_mtr: 12.58 },
  { sl_no: 17, size: "45x45", weight_kg_ft: 4.844, weight_kg_mtr: 15.91 },
  { sl_no: 18, size: "50x50", weight_kg_ft: 5.993, weight_kg_mtr: 19.64 },
  { sl_no: 19, size: "53x53", weight_kg_ft: 6.742, weight_kg_mtr: 22.08 },
  { sl_no: 20, size: "56x56", weight_kg_ft: 7.547, weight_kg_mtr: 24.73 },
  { sl_no: 21, size: "60x60", weight_kg_ft: 8.645, weight_kg_mtr: 28.31 },
  { sl_no: 22, size: "63x63", weight_kg_ft: 9.469, weight_kg_mtr: 31.02 },
  { sl_no: 23, size: "65x65", weight_kg_ft: 10.152, weight_kg_mtr: 33.25 },
  { sl_no: 24, size: "70x70", weight_kg_ft: 11.74, weight_kg_mtr: 38.47 },
  { sl_no: 25, size: "75x75", weight_kg_ft: 13.468, weight_kg_mtr: 44.16 },
  { sl_no: 26, size: "80x80", weight_kg_ft: 15.335, weight_kg_mtr: 50.31 },
  { sl_no: 27, size: "90x90", weight_kg_ft: 19.368, weight_kg_mtr: 63.57 },
  { sl_no: 28, size: "100x100", weight_kg_ft: 24.028, weight_kg_mtr: 78.89 },
  { sl_no: 29, size: "110x110", weight_kg_ft: 29.324, weight_kg_mtr: 96.35 },
  { sl_no: 30, size: "125x125", weight_kg_ft: 37.547, weight_kg_mtr: 123.28 },
  { sl_no: 31, size: "150x150", weight_kg_ft: 54.064, weight_kg_mtr: 177.41 },
  { sl_no: 32, size: "200x200", weight_kg_ft: 96.112, weight_kg_mtr: 315.32 },
  { sl_no: 33, size: "225x225", weight_kg_ft: 121.728, weight_kg_mtr: 399.24 },
  { sl_no: 34, size: "250x250", weight_kg_ft: 150.175, weight_kg_mtr: 492.66 },
  { sl_no: 35, size: "280x280", weight_kg_ft: 189.968, weight_kg_mtr: 623.11 },
  { sl_no: 36, size: "300x300", weight_kg_ft: 216.252, weight_kg_mtr: 709.28 },
  { sl_no: 37, size: "315x315", weight_kg_ft: 238.668, weight_kg_mtr: 783.32 },
  { sl_no: 38, size: "335x335", weight_kg_ft: 268.936, weight_kg_mtr: 882.36 },
  { sl_no: 39, size: "350x350", weight_kg_ft: 292.952, weight_kg_mtr: 962.02 },
  { sl_no: 40, size: "400x400", weight_kg_ft: 384.448, weight_kg_mtr: 1263.36 },
  { sl_no: 41, size: "450x450", weight_kg_ft: 486.972, weight_kg_mtr: 1599.72 },
  { sl_no: 42, size: "500x500", weight_kg_ft: 600.524, weight_kg_mtr: 1971.1 },
  { sl_no: 43, size: "560x560", weight_kg_ft: 754.956, weight_kg_mtr: 2478.99 },
  { sl_no: 44, size: "600x600", weight_kg_ft: 865.008, weight_kg_mtr: 2841.92 },
  { sl_no: 45, size: "630x630", weight_kg_ft: 953.544, weight_kg_mtr: 3131.29 },
  {
    sl_no: 46,
    size: "670x670",
    weight_kg_ft: 1082.428,
    weight_kg_mtr: 3554.47,
  },
  {
    sl_no: 47,
    size: "700x700",
    weight_kg_ft: 1195.508,
    weight_kg_mtr: 3927.88,
  },
  {
    sl_no: 48,
    size: "750x750",
    weight_kg_ft: 1362.876,
    weight_kg_mtr: 4475.64,
  },
  {
    sl_no: 49,
    size: "800x800",
    weight_kg_ft: 1539.392,
    weight_kg_mtr: 5052.07,
  },
  {
    sl_no: 50,
    size: "850x850",
    weight_kg_ft: 1725.056,
    weight_kg_mtr: 5667.15,
  },
  {
    sl_no: 51,
    size: "900x900",
    weight_kg_ft: 1920.868,
    weight_kg_mtr: 6310.88,
  },
  {
    sl_no: 52,
    size: "950x950",
    weight_kg_ft: 2125.828,
    weight_kg_mtr: 6983.26,
  },
  {
    sl_no: 53,
    size: "1000x1000",
    weight_kg_ft: 2340.936,
    weight_kg_mtr: 7684.29,
  },
];

const tmtBarsData = [
  {
    sl_no: 1,
    diameter: "6",
    weight_kg_m: "0.222",
    plant: "ISP",
    mill: "WRM",
  },
  {
    sl_no: 2,
    diameter: "8",
    weight_kg_m: "0.395",
    plant: "BSP/ISP",
    mill: "WRM & BRM / WRM & BM",
  },
  {
    sl_no: 3,
    diameter: "10",
    weight_kg_m: "0.617",
    plant: "BSP/ISP",
    mill: "WRM & BRM / WRM & BM",
  },
  {
    sl_no: 4,
    diameter: "12",
    weight_kg_m: "0.888",
    plant: "BSP/ISP",
    mill: "WRM & BRM / BM",
  },
  {
    sl_no: 5,
    diameter: "16",
    weight_kg_m: "1.58",
    plant: "BSP/ISP",
    mill: "BRM / BM",
  },
  {
    sl_no: 6,
    diameter: "20",
    weight_kg_m: "2.47",
    plant: "BSP/ISP/DSP",
    mill: "BRM / BM / MM",
  },
  {
    sl_no: 7,
    diameter: "22",
    weight_kg_m: "2.98",
    plant: "ISP/DSP",
    mill: "BM / MM",
  },
  {
    sl_no: 8,
    diameter: "25",
    weight_kg_m: "3.85",
    plant: "BSP/ISP/DSP",
    mill: "BRM & MM / BM / MM",
  },
  {
    sl_no: 9,
    diameter: "28",
    weight_kg_m: "4.83",
    plant: "BSP/ISP",
    mill: "BRM & MM / BM",
  },
  {
    sl_no: 10,
    diameter: "32",
    weight_kg_m: "6.31",
    plant: "BSP/ISP",
    mill: "BRM & MM / BM",
  },
  {
    sl_no: 11,
    diameter: "36",
    weight_kg_m: "7.99",
    plant: "BSP/ISP",
    mill: "BRM & MM / BM",
  },
  {
    sl_no: 12,
    diameter: "40",
    weight_kg_m: "9.85",
    plant: "BSP/ISP",
    mill: "BRM & MM / BM",
  },
];

const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 opacity-100">
      <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <div className="h-1 w-20 bg-blue-900 mx-auto transition-all duration-700 delay-200 opacity-100"></div>
  </div>
);

const ProductSpecifications = () => {
  return (
    <div className="w-full p-6 bg-white">
      {/* <h1 className="text-3xl font-bold text-blue-900 text-center">
        Product Specifications
      </h1> */}
      <SectionTitle title="Product Specifications" />

      <ProductTable
        title="MS Flat"
        data={msFlatData}
      />
      <ProductTable
        title="MS Round"
        data={msRoundData}
      />
      <ProductTable
        title="Rail Pole"
        data={railPole}
      />
      <ProductTable
        title="MS Square Bar"
        data={msSquareBar}
      />
      <ProductTable
        title="TMT Reinforcement Bars"
        data={tmtBarsData}
      />
    </div>
  );
};
export default ProductSpecifications;
