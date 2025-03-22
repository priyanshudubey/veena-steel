// import { useState } from "react";

// const ITEMS_PER_PAGE = 10;

// const ProductTable = ({ title, data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   // Get data for the current page
//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="bg-gray-100 w-full shadow-md shadow-blue-900 rounded-lg p-6 my-6">
//       {/* Collapsible Header */}
//       <button
//         onClick={toggleCollapse}
//         className="w-full text-left text-lg font-bold text-blue-900 flex justify-between items-center py-2">
//         {title}
//         <span className="text-blue-700 text-lg">{isCollapsed ? "▼" : "▲"}</span>
//       </button>

//       {!isCollapsed && (
//         <>
//           <div className="overflow-x-auto mt-4">
//             <table className="w-full border border-blue-300">
//               <thead>
//                 <tr className="bg-blue-200 text-blue-900">
//                   <th className="py-2 px-4 border">S. No</th>
//                   <th className="py-2 px-4 border">Size</th>
//                   <th className="py-2 px-4 border">Weight (kg/ft)</th>
//                   <th className="py-2 px-4 border">Weight (kg/mtr)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentData.map((item, index) => (
//                   <tr
//                     key={index}
//                     className="text-center border hover:bg-blue-50">
//                     <td className="py-2 px-4 border text-black">
//                       {item.sl_no}
//                     </td>
//                     <td className="py-2 px-4 border text-black">{item.size}</td>
//                     <td className="py-2 px-4 border text-black">
//                       {item.weight_kg_ft}
//                     </td>
//                     <td className="py-2 px-4 border text-black">
//                       {item.weight_kg_mtr}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Buttons */}
//           <div className="flex justify-center mt-4 space-x-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded-md font-medium ${
//                 currentPage === 1
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-blue-700 text-white hover:bg-blue-900"
//               }`}>
//               Previous
//             </button>

//             <span className="text-blue-900 font-semibold">
//               Page {currentPage} of {totalPages}
//             </span>

//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded-md font-medium ${
//                 currentPage === totalPages
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-blue-700 text-white hover:bg-blue-900"
//               }`}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductTable;
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

const ProductTable = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Get data for the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Determine column structure based on the table title
  const isTMTTable = title === "TMT Reinforcement Bars";

  // Function to render the appropriate table headers
  const renderTableHeaders = () => {
    if (isTMTTable) {
      return (
        <tr className="bg-blue-200 text-blue-900">
          <th className="py-2 px-4 border">S. No</th>
          <th className="py-2 px-4 border">Nominal Diameter (mm)</th>
          <th className="py-2 px-4 border">Weight (kg/m)</th>
          <th className="py-2 px-4 border">Plant</th>
          <th className="py-2 px-4 border">Mill</th>
        </tr>
      );
    } else {
      return (
        <tr className="bg-blue-200 text-blue-900">
          <th className="py-2 px-4 border">S. No</th>
          <th className="py-2 px-4 border">Size</th>
          <th className="py-2 px-4 border">Weight (kg/ft)</th>
          <th className="py-2 px-4 border">Weight (kg/mtr)</th>
        </tr>
      );
    }
  };

  // Function to render table rows based on data structure
  const renderTableRows = () => {
    return currentData.map((item, index) => {
      if (isTMTTable) {
        return (
          <tr
            key={index}
            className="text-center border hover:bg-blue-50">
            <td className="py-2 px-4 border text-black">{item.sl_no}</td>
            <td className="py-2 px-4 border text-black">{item.diameter}</td>
            <td className="py-2 px-4 border text-black">{item.weight_kg_m}</td>
            <td className="py-2 px-4 border text-black">{item.plant}</td>
            <td className="py-2 px-4 border text-black">{item.mill}</td>
          </tr>
        );
      } else {
        return (
          <tr
            key={index}
            className="text-center border hover:bg-blue-50">
            <td className="py-2 px-4 border text-black">{item.sl_no}</td>
            <td className="py-2 px-4 border text-black">{item.size}</td>
            <td className="py-2 px-4 border text-black">
              {item.weight_kg_ft || "-"}
            </td>
            <td className="py-2 px-4 border text-black">
              {item.weight_kg_mtr || "-"}
            </td>
          </tr>
        );
      }
    });
  };

  return (
    <div
      id="product Specifications"
      className="bg-gray-100 w-full shadow-md shadow-blue-900 rounded-lg p-6 my-6">
      {/* Collapsible Header */}
      <button
        onClick={toggleCollapse}
        className="w-full text-left text-lg font-bold text-blue-900 flex justify-between items-center py-2">
        {title}
        <span className="text-blue-700 text-lg">{isCollapsed ? "▼" : "▲"}</span>
      </button>

      {!isCollapsed && (
        <>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-blue-300">
              <thead>{renderTableHeaders()}</thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md font-medium ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-700 text-white hover:bg-blue-900"
              }`}>
              Previous
            </button>

            <span className="text-blue-900 font-semibold">
              Page {currentPage} of {totalPages || 1}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-4 py-2 rounded-md font-medium ${
                currentPage === totalPages || totalPages === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-700 text-white hover:bg-blue-900"
              }`}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductTable;
