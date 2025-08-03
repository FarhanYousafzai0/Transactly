import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  const isLoggedIn = {firstName: 'John', lastName: 'Doe'}
  return (
    
      <main className="w-full h-screen flex">
        <Sidebar user={isLoggedIn} />
{children}
      </main>
      
  );
}
