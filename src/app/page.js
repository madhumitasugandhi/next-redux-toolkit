'use client'

import AddEmployees from "@/components/AddEmployees";
import ShowEmployees from "@/components/ShowEmployees";
import SyncLocalStorage from "@/components/SyncLocalStorage";


export default function Home() {
  return (
      <>
          <AddEmployees/>
          <br/><br/>
          <ShowEmployees/>
          <SyncLocalStorage/>
      </>
  );
}
