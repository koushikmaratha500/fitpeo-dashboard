import { lazy } from 'react'

export const SidebarNavs = [
    {
        path: "/dashboard",
        icon: lazy(() =>
            import("react-icons/fa").then((module) => ({
                default: module.FaHome,
            })),
        ),
    },
    {
        path: "/reports",
        icon: lazy(() =>
            import("react-icons/hi").then((module) => ({
                default: module.HiOutlineChartSquareBar,
            })),
        ),
    },
    {
        path: "/todolist",
        icon: lazy(() =>
            import("react-icons/ri").then((module) => ({
                default: module.RiTodoLine,
            })),
        ),
    },
    {
        path: "/wallet",
        icon: lazy(() =>
            import("react-icons/ri").then((module) => ({
                default: module.RiWallet3Line,
            })),
        ),
    },
    {
        path: "/orders",
        icon: lazy(() =>
            import("react-icons/tb").then((module) => ({
                default: module.TbShoppingBagCheck,
            })),
        ),
    },
]