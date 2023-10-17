import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-row min-h-screen w-full items-center justify-center ">
      {children}
    </main>
  );
};

export default Layout;
