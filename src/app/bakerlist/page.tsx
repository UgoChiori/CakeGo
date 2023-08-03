// Fetch data from the server

const getBaker = async (id: string) => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cake,coffee,dessert,bakers,bakery&key=AIzaSyBQtP39VcK_fjHPezApT6C1jHn2rkU3Frw`
  );
  return res.json();
};



export default async function BakerList() {
  const baker = await getBaker("1");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to the Baker List</h1>
        <p className="mt-3 text-2xl">Get started by searching for a baker</p>
        <input
        type="text"
        placeholder="Search for a baker"
        className="px-4 py-2 border rounded-md text-[black]"
      />
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {baker.results.map((baker: any) => (
            <div
              key={baker.id}
              className="p-6 m-4 text-left border w-96 rounded-xl shadow-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h2 className="text-xl font-bold">{baker.name}</h2>
              <p>Rating: {baker.rating}</p>
              <p>Business Status: {baker.business_status}</p>
              <p>Address: {baker.formatted_address}</p>
              <p>{baker.opening_hours?.open_now ? "Open" : "Closed"}</p>
              <a href={`/bakers/${baker.id}`} className="text-blue-600">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
          }

// 'use client'
// import { useState, useEffect } from 'react';

// // Fetch data from the server
// const getBaker = async (id: string) => {
//   const res = await fetch(
//     `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cake,coffee,dessert,bakers,bakery&key=AIzaSyBQtP39VcK_fjHPezApT6C1jHn2rkU3Frw`
//   );
//   const data = await res.json();
//   return data.results || [];
// };

// export default function BakerList() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [bakers, setBakers] = useState([]);

//   const handleSearch = async () => {
//     const bakerData = await getBaker(searchQuery);
//     setBakers(bakerData);
//   };

//   useEffect(() => {
//     // Fetch initial data from the server when the component mounts
//     const fetchData = async () => {
//       const initialBakers = await getBaker('');
//       setBakers(initialBakers);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//         <h1 className="text-6xl font-bold">Welcome to the Baker List</h1>
//         <p className="mt-3 text-2xl">Get started by searching for a baker</p>
//         <input
//           type="text"
//           placeholder="Search for a baker"
//           className="px-4 py-2 border rounded-md text-[black]"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button
//           className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//         <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
//           {bakers.map((baker: any) => (
//             <div
//               key={baker.id}
//               className="p-6 m-4 text-left border w-96 rounded-xl shadow-xl hover:text-blue-600 focus:text-blue-600"
//             >
//               <h2 className="text-xl font-bold">{baker.name}</h2>
//               <p>Rating: {baker.rating}</p>
//               <p>Business Status: {baker.business_status}</p>
//               <p>Address: {baker.formatted_address}</p>
//               <p>{baker.opening_hours?.open_now ? "Open" : "Closed"}</p>
//               <a href={`/bakers/${baker.id}`} className="text-blue-600">
//                 View Details
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }