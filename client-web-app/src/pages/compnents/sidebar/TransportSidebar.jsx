import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from "../../../partials/SidebarLinkGroup";


const TransportSidebar = ({
    sidebarOpen,
    setSidebarOpen
}) => {

    const location = useLocation();
    const {
        pathname
    } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const companyType = localStorage.getItem('companyType');
    const companyname = localStorage.getItem('companyName');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    // close on click outside
    useEffect(() => {
        const clickHandler = ({
            target
        }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({
            keyCode
        }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <>
            <SidebarLinkGroup activecondition={pathname.includes('employee')}>
                {(handleClick, open) => {
                    return (
                        <React.Fragment>
                            <a
                                href="#0"
                                className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('community') && 'hover:text-slate-200'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                            <path
                                                className={`fill-current text-slate-600 ${pathname.includes('community') && 'text-indigo-500'}`}
                                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                                            />
                                            <path
                                                className={`fill-current text-slate-400 ${pathname.includes('community') && 'text-indigo-300'}`}
                                                d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                                            />
                                        </svg>
                                        <span
                                            className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Employee
                                        </span>
                                    </div>
                                    {/* Icon */}
                                    <div className="flex shrink-0 ml-2">
                                        <svg
                                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                    <li className="mb-1 last:mb-0">
                                        <NavLink
                                            end
                                            to="/employees"
                                            className={({ isActive }) =>
                                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                                            }
                                        >
                                            <span
                                                className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Employees - List
                                            </span>
                                        </NavLink>
                                    </li>

                                    <li className="mb-1 last:mb-0">
                                        <NavLink
                                            end
                                            to="/employees/add"
                                            className={({ isActive }) =>
                                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                                            }
                                        >
                                            <span
                                                className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Employees - Add
                                            </span>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </React.Fragment>
                    );
                }}
            </SidebarLinkGroup>

            {/*<SidebarLinkGroup activecondition={pathname.includes('companies')}>*/}
            {/*    {(handleClick, open) => {*/}
            {/*        return (*/}
            {/*            <React.Fragment>*/}
            {/*                <a*/}
            {/*                    href="#0"*/}
            {/*                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${*/}
            {/*                        pathname.includes('community') && 'hover:text-slate-200'*/}
            {/*                    }`}*/}
            {/*                    onClick={(e) => {*/}
            {/*                        e.preventDefault();*/}
            {/*                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    <div className="flex items-center justify-between">*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">*/}
            {/*                                <path*/}
            {/*                                    className={`fill-current text-slate-600 ${pathname.includes('community') && 'text-indigo-500'}`}*/}
            {/*                                    d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"*/}
            {/*                                />*/}
            {/*                                <path*/}
            {/*                                    className={`fill-current text-slate-400 ${pathname.includes('community') && 'text-indigo-300'}`}*/}
            {/*                                    d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                            <span*/}
            {/*                                className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*  Companies*/}
            {/*</span>*/}
            {/*                        </div>*/}
            {/*                        /!* Icon *!/*/}
            {/*                        <div className="flex shrink-0 ml-2">*/}
            {/*                            <svg*/}
            {/*                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}*/}
            {/*                                viewBox="0 0 12 12"*/}
            {/*                            >*/}
            {/*                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">*/}
            {/*                    <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>*/}
            {/*                        <li className="mb-1 last:mb-0">*/}
            {/*                            <NavLink*/}
            {/*                                end*/}
            {/*                                to="/companies"*/}
            {/*                                className={({isActive}) =>*/}
            {/*                                    'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')*/}
            {/*                                }*/}
            {/*                            >*/}
            {/*  <span*/}
            {/*      className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*    Companies - List*/}
            {/*  </span>*/}
            {/*                            </NavLink>*/}
            {/*                        </li>*/}

            {/*                        <li className="mb-1 last:mb-0">*/}
            {/*                            <NavLink*/}
            {/*                                end*/}
            {/*                                to="/employees/add"*/}
            {/*                                className={({isActive}) =>*/}
            {/*                                    'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')*/}
            {/*                                }*/}
            {/*                            >*/}
            {/*  <span*/}
            {/*      className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*    Companies - Employees*/}
            {/*  </span>*/}
            {/*                            </NavLink>*/}
            {/*                        </li>*/}

            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </React.Fragment>*/}
            {/*        );*/}
            {/*    }}*/}
            {/*</SidebarLinkGroup>*/}

            <SidebarLinkGroup activecondition={pathname.includes('stickers')}>
                {(handleClick, open) => {
                    return (
                        <React.Fragment>
                            <a
                                href="#0"
                                className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('community') && 'hover:text-slate-200'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                            <path
                                                className={`fill-current text-slate-600 ${pathname.includes('community') && 'text-indigo-500'}`}
                                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                                            />
                                            <path
                                                className={`fill-current text-slate-400 ${pathname.includes('community') && 'text-indigo-300'}`}
                                                d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                                            />
                                        </svg>
                                        <span
                                            className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Stickers
                                        </span>
                                    </div>
                                    {/* Icon */}
                                    <div className="flex shrink-0 ml-2">
                                        <svg
                                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                    <li className="mb-1 last:mb-0">
                                        <NavLink
                                            end
                                            to="/insurancestickers"
                                            className={({ isActive }) =>
                                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                                            }
                                        >
                                            <span
                                                className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Insurance Stickers
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1 last:mb-0">
                                        <NavLink
                                            end
                                            to="/bolostickers"
                                            className={({ isActive }) =>
                                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                                            }
                                        >
                                            <span
                                                className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Bolo Stickers
                                            </span>
                                        </NavLink>
                                    </li>


                                </ul>
                            </div>
                        </React.Fragment>
                    );
                }}
            </SidebarLinkGroup>

            <SidebarLinkGroup activecondition={pathname.includes('inspectiontests')}>
                {(handleClick, open) => {
                    return (
                        <React.Fragment>
                            <a
                                href="#0"
                                className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('vehicles') && 'hover:text-slate-200'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                            <path
                                                className={`fill-current text-slate-600 ${pathname.includes('inspectiontests') && 'text-indigo-500'}`}
                                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                                            />
                                            <path
                                                className={`fill-current text-slate-400 ${pathname.includes('inspectiontests') && 'text-indigo-300'}`}
                                                d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                                            />
                                        </svg>
                                        <span
                                            className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            Inspection Test
                                        </span>
                                    </div>
                                    {/* Icon */}
                                    <div className="flex shrink-0 ml-2">
                                        <svg
                                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                    <li className="mb-1 last:mb-0">
                                        <NavLink
                                            end
                                            to="/inspectiontests"
                                            className={({ isActive }) =>
                                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                                            }
                                        >
                                            <span
                                                className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Inspection Test - List
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1 last:mb-0">
                                        <NavLink
                                            end
                                            to="/inspectiontests/add"
                                            className={({ isActive }) =>
                                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                                            }
                                        >
                                            <span
                                                className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                Inspection Test - Add
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </React.Fragment>
                    );
                }}
            </SidebarLinkGroup>

            {/*<SidebarLinkGroup activecondition={pathname.includes('vehicles')}>*/}
            {/*    {(handleClick, open) => {*/}
            {/*        return (*/}
            {/*            <React.Fragment>*/}
            {/*                <a*/}
            {/*                    href="#0"*/}
            {/*                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${*/}
            {/*                        pathname.includes('vehicles') && 'hover:text-slate-200'*/}
            {/*                    }`}*/}
            {/*                    onClick={(e) => {*/}
            {/*                        e.preventDefault();*/}
            {/*                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    <div className="flex items-center justify-between">*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">*/}
            {/*                                <path*/}
            {/*                                    className={`fill-current text-slate-600 ${pathname.includes('vehicles') && 'text-indigo-500'}`}*/}
            {/*                                    d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"*/}
            {/*                                />*/}
            {/*                                <path*/}
            {/*                                    className={`fill-current text-slate-400 ${pathname.includes('vehicles') && 'text-indigo-300'}`}*/}
            {/*                                    d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                            <span*/}
            {/*                                className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*                              Vehicles*/}
            {/*                            </span>*/}
            {/*                        </div>*/}
            {/*                        /!* Icon *!/*/}
            {/*                        <div className="flex shrink-0 ml-2">*/}
            {/*                            <svg*/}
            {/*                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}*/}
            {/*                                viewBox="0 0 12 12"*/}
            {/*                            >*/}
            {/*                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">*/}
            {/*                    <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>*/}
            {/*                        <li className="mb-1 last:mb-0">*/}
            {/*                            <NavLink*/}
            {/*                                end*/}
            {/*                                to="/vehicles"*/}
            {/*                                className={({isActive}) =>*/}
            {/*                                    'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')*/}
            {/*                                }*/}
            {/*                            >*/}
            {/*                          <span*/}
            {/*                              className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*                            Vehicles - List*/}
            {/*                          </span>*/}
            {/*                            </NavLink>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-1 last:mb-0">*/}
            {/*                            <NavLink*/}
            {/*                                end*/}
            {/*                                to="/vehicles/add"*/}
            {/*                                className={({isActive}) =>*/}
            {/*                                    'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')*/}
            {/*                                }*/}
            {/*                            >*/}
            {/*                          <span*/}
            {/*                              className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*                            Vehicles - Add*/}
            {/*                          </span>*/}
            {/*                            </NavLink>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </React.Fragment>*/}
            {/*        );*/}
            {/*    }}*/}
            {/*</SidebarLinkGroup>*/}

            {/*<SidebarLinkGroup activecondition={pathname.includes('accidents')}>*/}
            {/*    {(handleClick, open) => {*/}
            {/*        return (*/}
            {/*            <React.Fragment>*/}
            {/*                <a*/}
            {/*                    href="#0"*/}
            {/*                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${*/}
            {/*                        pathname.includes('accidents') && 'hover:text-slate-200'*/}
            {/*                    }`}*/}
            {/*                    onClick={(e) => {*/}
            {/*                        e.preventDefault();*/}
            {/*                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    <div className="flex items-center justify-between">*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">*/}
            {/*                                <path*/}
            {/*                                    className={`fill-current text-slate-600 ${pathname.includes('accidents') && 'text-indigo-500'}`}*/}
            {/*                                    d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"*/}
            {/*                                />*/}
            {/*                                <path*/}
            {/*                                    className={`fill-current text-slate-400 ${pathname.includes('accidents') && 'text-indigo-300'}`}*/}
            {/*                                    d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"*/}
            {/*                                />*/}
            {/*                            </svg>*/}
            {/*                            <span*/}
            {/*                                className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*                              Accidents*/}
            {/*                            </span>*/}
            {/*                        </div>*/}
            {/*                        /!* Icon *!/*/}
            {/*                        <div className="flex shrink-0 ml-2">*/}
            {/*                            <svg*/}
            {/*                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}*/}
            {/*                                viewBox="0 0 12 12"*/}
            {/*                            >*/}
            {/*                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </a>*/}

            {/*                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">*/}
            {/*                    <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>*/}
            {/*                        <li className="mb-1 last:mb-0">*/}
            {/*                            <NavLink*/}
            {/*                                end*/}
            {/*                                to="/accidents"*/}
            {/*                                className={({isActive}) =>*/}
            {/*                                    'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')*/}
            {/*                                }*/}
            {/*                            >*/}
            {/*                          <span*/}
            {/*                              className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*                            Accidents - List*/}
            {/*                          </span>*/}
            {/*                            </NavLink>*/}
            {/*                        </li>*/}
            {/*                        <li className="mb-1 last:mb-0">*/}
            {/*                            <NavLink*/}
            {/*                                end*/}
            {/*                                to="/accidents/add"*/}
            {/*                                className={({isActive}) =>*/}
            {/*                                    'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')*/}
            {/*                                }*/}
            {/*                            >*/}
            {/*                          <span*/}
            {/*                              className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">*/}
            {/*                            Accident - Add*/}
            {/*                          </span>*/}
            {/*                            </NavLink>*/}
            {/*                        </li>*/}


            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </React.Fragment>*/}
            {/*        );*/}
            {/*    }}*/}
            {/*</SidebarLinkGroup>*/}

        </>)
}

export default TransportSidebar;