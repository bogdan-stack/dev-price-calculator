"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

function Nav() {
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if(window.scrollY >= 20){
            setHeader(true);
        }
        else{
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.removeEventListener('scroll', scrollHeader)
        }
    }, []);

    return (
        <div className="relative">
        <div className={header ? " fixed top-0 w-[100%] bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950 border" : "bg-[transparent]"}>
        <div className="header relative flex w-[80%] justify-between m-auto py-[15px]">
        <Image
            className="relative"
            src="/logobhwb.svg"
            alt="logo"
            width={46}
            height={46}
          />
            <div className="flex items-center">
                <Link href="/">
                    <MenuIcon className="cursor-pointer text-white" size={32} />
                </Link>
            </div>
            </div>
            </div>
            </div>
        )
}
export default Nav;