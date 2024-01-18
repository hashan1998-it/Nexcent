import { useDispatch, useSelector } from "react-redux"
import { navLinks } from "../constants"
import { IoMdClose } from "react-icons/io"
import { twMerge } from "tailwind-merge"
import { sidebarActions } from "../stores/index"
import { useEffect, useRef } from "react"

function Sidebar() {
    const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)
    const dispatch = useDispatch();
    const sidebarRef = useRef();

    const handleCloseMenuClick = () => {
        dispatch(sidebarActions.toggleSidebar());
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && !sidebarRef.current.contains(event.target)) {
                dispatch(sidebarActions.toggleSidebar());
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch, isSidebarOpen]);


    return (
        // Overlay
        <div className={twMerge("w-full h-svh fixed top-16 left-0 z-30 -my-16 transition-all", isSidebarOpen === false ? "-left-full" : "block")}>
            {/* Sidebar */}
            <nav className={"max-w-[300px] w-full h-full bg-green-50 relative transition-all shadow-2xl"} ref={sidebarRef}>
                {/* Logo */}
                <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl sm:text texttext-3xl p-4">Nexcent</h1>

                {/* Close Button */}
                <button className="absolute top-4 right-4" onClick={handleCloseMenuClick}>
                    <IoMdClose className="text-gray-800 " size={30} />
                </button>

                {/* Navs */}
                <ul>
                    {navLinks.map(link => {
                        return (<a href="#" key={link.id}>
                            <li className="text-lg font-medium text-gray-600 p-4">{link.name}</li>
                        </a>)
                    })}
                </ul>


            </nav>
        </div>
    )
}

export default Sidebar