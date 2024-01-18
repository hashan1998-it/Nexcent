import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../constants";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../stores/index";
import PropTypes from "prop-types";


function Navbar() {
    const dispatch = useDispatch();

    const handleMobileMenuClick = () => {
        dispatch(sidebarActions.toggleSidebar());
    }


    return (
        <div className="h-16 px-4 w-full fixed shadow-sm max-w-7xl mx-auto z-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between bg-white">
            {/* Logo */}
            <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl sm:text texttext-3xl">Nexcent</h1>

            {/* Mobile menu */}
            <button className="block p-4 md:hidden" onClick={handleMobileMenuClick}>
                <GiHamburgerMenu className="text-gray-800 " size={30} />
            </button>


            <div className="items-center hidden gap-6 list-none md:flex">
                {/* Navs */}
                <nav className="items-center hidden md:flex  md:gap-4 lg:gap-6 text-neutral-600">
                    {
                        navLinks.map(({ id, name }) => {
                            if (id === "register") {
                                {/* Register Button */ }
                                return (<button key={id} className="items-center hidden px-4 py-2 font-semibold text-white bg-green-500 md:flex rounded-lg">{name}</button>);
                            }
                            
                            else if (id === "login") {
                                {/* Login Button */ }
                                return (<button key={id} className="text-sm font-medium text-gray-600 sm:text-base ml-8 border-2 text-center px-4 py-2 rounded-lg border-green-500">{name}</button>);
                            }

                            {/* Nav Links */ }
                            return (<a href="" key={id}>
                                <li key={id} className="text-sm font-medium text-gray-600 sm:text-base">{name}</li>
                            </a>)
                        })
                    }
                </nav>


            </div>

        </div>
    )
}

Navbar.propTypes = {
    mobileBreadCrumbRefProp: PropTypes.object
}

export default Navbar