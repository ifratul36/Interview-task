"use client";


import HomePage from "./main/page";



export default function Layout() {


  return (
    <>

      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <HomePage />
        </main>
      </div>
    </>
  );
}
