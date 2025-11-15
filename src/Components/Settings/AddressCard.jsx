import React from 'react'

function AddressCard({data,user}) {
  return (
    <div className="border border-gray-700 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-[#111] font-medium">{data?.label}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
              </div>
            </div>
            <div className="text-gray-600 text-sm space-y-1">
              <p>{user?.name}</p>
              <p>{data?.street}</p>
              <p>{data?.city}, {data?.state} {data?.zip}</p>
              <p>Phone: {user?.phone}</p>
            </div>
          </div>
  )
}

export default AddressCard