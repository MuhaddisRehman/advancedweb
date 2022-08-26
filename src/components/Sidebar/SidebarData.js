import React from 'react'
import  * as AiIcons from "react-icons/ai";
import  * as FiIcons from "react-icons/fi";
import  * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<MdIcons.MdOutlineOtherHouses/>,
        cName:'nav-text ',

    },
    {
        title: 'Products',
        path:'/Products',
        icon:<MdIcons.MdProductionQuantityLimits/>,
        cName:'nav-text',
    },
    {
        title: 'Orders',
        path:'/Orders',
        icon:<AiIcons.AiOutlineShoppingCart/>,
        cName:'nav-text',
    },
    {
        title: 'POS',
        path:'/POS',
        icon:<MdIcons.MdPointOfSale/>,
        cName:'nav-text',
    },
    {
        title: 'Settings',
        path:'/Settings',
        icon:<FiIcons.FiSettings/>,
        cName:'nav-text',
    }

]
