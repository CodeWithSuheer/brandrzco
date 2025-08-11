"use client";
import React, { useState, useEffect } from "react";
import "./Components.css";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader-overlay">
      <div className="loader-center">
        <img
          src="/brandrzCo1.gif"
          alt="Loading..."
          className="loader-gif h-24 w-24"
        />
        <h2 className="loader-title">Loading...</h2>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
