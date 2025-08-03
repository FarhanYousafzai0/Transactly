import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({ children }) {
  const isLoggedIn = {firstName: 'John', lastName: 'Doe',email: 'john@doe.com'}
  return (
    
      <main className="w-full h-screen flex">
        <Sidebar user={isLoggedIn} />


<div className="flex size-full flex-col">

<div className="root-layout">

<Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={isLoggedIn} />
          </div>
</div>
{children}
</div>



      </main>
      
  );
}
