"use client"

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname,useRouter } from "next/navigation";
import {SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

function LeftSideBar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
    
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">


                {sidebarLinks.map((link) =>

                
                    // const isActive = (pathname.includes(link.route) && link.route.length > 1) ||
                    // pathname === link.route;


                // return(
                    <Link 
                    href={link.route}
                    key={link.label}
                    className = "leftsidebar_link hover:bg-primary-500"
                    // className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                    >
                        
                        <Image 
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24} 
                        />

                    <p className="text-light-1 max-lg:hidden">{link.label}</p>    
                    
                    </Link>

                // )
                )}
            // 

                

            </div>

            <div className="mt-10 px-6">
                {/* <SignedIn> */}

               
                
                    <SignOutButton 
                    // signOutCallback={()=>
                    //     router.push('/')
                    >
                        <div className="flex cursor-pointer">
                            <Image
                            src="/assets/logout.svg"
                            alt="logout"
                            width={24}
                            height={24}
                            />
                            <p className="gap-3 text-light-1 ml-3">Logout</p>
                        </div>
                    </SignOutButton>

                    {/* </SignedIn> */}
                

            </div>

        </section>
    )
    
}

export default LeftSideBar;