
'use client'
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SyncLocalStorage = () => {
  const employees = useSelector((state) => state.employeeData.employees);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("emp", JSON.stringify(employees));
      console.log("Saved to localStorage:", employees);
    }
  }, [employees]);

  return null;
};

export default SyncLocalStorage;
