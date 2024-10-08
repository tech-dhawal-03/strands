import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/shared/LeftSideBar";
import Bottombar from "@/components/shared/BottomBar";
import RightSidebar from "@/components/shared/RightSideBar";
import RightBar from "@/components/shared/RightBar";
import Topbar from "@/components/shared/Topbar";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata =
{
  title: "strands",
  description: "Generated by create next app",
  
  
};


export default function RootLayout
  ({
    children,

  }: {
    children: React.ReactNode;
  }) {

  return (
    <ClerkProvider>
    <html lang="en">
     
      
      <body className={inter.className}>



        
        <Topbar />
        
        <main className="flex flex-row">

          <LeftSideBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>


          {/* <RightSidebar /> */}
          <RightBar />
        </main>
        <Bottombar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
