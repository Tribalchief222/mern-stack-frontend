import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInUser } from '../../auth/authSlice';

export function UserProfile() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Role : {user.role ? user.role : "Guest User"}</h1>
            <h3 className="text-lg my-4 font-bold text-red-500">
              email address : {user.email}
            </h3>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p>Your Addresses</p>
              {user.addresses.map((address) => (
                <div
                className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
              >
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {address.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.street}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      Zip Code - {address.pinCode}
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Phone: {address.phone}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {address.city}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>
    </div>
  );
}
