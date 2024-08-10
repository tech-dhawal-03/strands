import Link from "next/link";
import Image from "next/image";
import {  OrganizationSwitcher,SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

function Topbar()
{
    const isUserLoggedIn = true;
    return(
        <nav className="topbar">
            <Link href="/" className="flex gap-1">
                <Image src="images/logo.svg" alt="logo" width={30} height={30} />
                    <p className="text-heading3-bold text-light-1 max-xs:hidden">strands</p>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
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
                
                </div>
                

            </div>

      


        </nav>

    
    )
}

export default Topbar;
