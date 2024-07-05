import { useEffect, useState } from "react";
import Logo from "./logo";
import Nav from "./nav";

export default function TopHeader(){
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {scrollHandler(window.scrollY)}, [])

    const scrollHandler = (scroll:number) => {
        scroll > 0 ? setIsScrolling(true) : setIsScrolling(false)
    }

    window.addEventListener('scroll', () => scrollHandler(window.scrollY))
    return(
        <header className={`w-full z-10 ${isScrolling ? "bg-gray-500 backdrop-blur-md bg-opacity-10" : ""} fixed top-0 left-0  h-custom-h-top-header flex justify-evenly items-center`}>
            <Logo/>
            <Nav/>
        </header>
    )
}