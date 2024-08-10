import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image"

function Bottombar() {
    return (
        <section className="bottombar">
            <div className="bottombar_container">
                {sidebarLinks.map((link) =>

       
                    <Link
                        href={link.route}
                        key={link.label}
                        className="bottombar_link hover:bg-primary-500 flex-items-center"
                    // className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                    >

                        <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                        />

                        <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>

                    </Link>

                    // )
                )}
//



            </div>






        
       </section >

    )
}

export default Bottombar;