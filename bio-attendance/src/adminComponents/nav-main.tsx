"use client"

import {
        // Rocket,
         type LucideIcon } from "lucide-react"
import {HomeIcon,SquarePlus,Edit2Icon,UserCircle,
        // Users,HandCoins,SquareStack,Newspaper,User
} from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/adminComponents/ui/sidebar"
import Link from "next/link";
import { FcApproval } from "react-icons/fc";


export function NavMain() {
        const items = [
                {
                        title: "Home & Sessions",
                        icon: HomeIcon as LucideIcon,
                        link:"/admin/sessions",
                },
                
              
                // {
                //         title: "Sessions",
                //         icon: PlusCircleIcon as LucideIcon,
                //         link:"/admin/sessions",
                // },
             
                 {
                        title: "Enrole Students",
                        icon: SquarePlus   as LucideIcon,
                        link:"/admin/students/new",
                },
                
                {
                        title: "Enrolled Students",
                        icon: FcApproval    as LucideIcon,
                        link:"/admin/students",
                },
                
                
                // {
                //         title: "Boost ",
                //         icon: Rocket   as LucideIcon,
                //         link:"/admin/boost",
                // },
                {
                        title: "Attendance Module",
                        icon: Edit2Icon      as LucideIcon,
                        link:"/admin/attendance",
                },
                {
                        title: "My Profile",
                        icon: UserCircle as LucideIcon,
                        link:"/admin/profile",
                },
                
                
        ]
  return (
    <SidebarGroup  >
      <SidebarGroupContent className="flex flex-col gap-2 ">
<SidebarMenu className="font-semibold gap-2  ">
          {items.map((item) => (
                 <Link key={item.title} href={item.link} className="w-full mx-auto hover:bg-black   border hover:border-blue-400 rounded-2xl">
            <SidebarMenuItem  className="flex items-center gap-2 p-2  rounded-2xl hover:bg-blue-400 transition-colors duration-500 hover:cursor-pointer " >
                <SidebarMenuButton tooltip={item.title} className="gap-4 w-full h-full bg-transparent hover:bg-transparent hover:cursor-pointer " >
                {item.icon && <item.icon className="text-gray-500 w-full " />}
                <span className="text-blue flex " >{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
