// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
