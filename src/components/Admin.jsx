import React from "react";
import incharges from '../assets/incharges.json'

function Admin() {
  return (
    <div className="bg-[#0E1111] text-white min-h-screen flex flex-col">
     
      <header className="p-4 bg-gray-800">
        <h1 className="text-2xl font-bold">Tech36 Admin Dashboard</h1>
      </header>

     
      <main className="flex-grow container mx-auto p-4">
       
        <section className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Coordinators</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Add Coordinator
            </button>
          </div>
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <table className="min-w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="text-left text-sm font-semibold">
                  <th className="p-2">Name</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
               {incharges.map((incharge)=>(

                <tr className="text-sm border-b border-gray-700 " key={incharge.id}>
                  <td className="p-2">{incharge.name}</td>
                  <td className="p-2">{incharge.role}</td>
                  <td className="p-2">
                    <button className="text-yellow-400 hover:text-yellow-500">Edit</button>
                    <button className="text-red-500 hover:text-red-600 ml-2">Delete</button>
                  </td>
                </tr>
               ))}
              </tbody>
            </table>
          </div>
        </section>

        
        
      </main>

      
      <footer className="p-4 bg-gray-800 text-center">
        <p>© 2024 Tech36 | Admin Panel</p>
      </footer>
    </div>
  );
}

export default Admin;
