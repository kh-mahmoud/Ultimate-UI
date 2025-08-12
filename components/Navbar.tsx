import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switcher } from "./Switcher";
import { SidebarTrigger } from "./ui/sidebar";
import AppAvatar from "./AppAvatar";

const Navbar = () => {
  //controle the sidebar
  // const {toggleSidebar} = useSidebar()
  return (
    <nav className="nav-bar">
      <SidebarTrigger className="cursor-pointer" />
      {/* <Button onClick={toggleSidebar}  >Trigger Button</Button> */}

      <div className="navbar-links">
        <Link className="navbar-link" href={"/"}>
          Dashboard
        </Link>


        <Link className="navbar-link" href={"/profile"}>
          Profile
        </Link>
      </div>

      <div className="navbar-side-items">
        <Switcher />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <AppAvatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent collisionPadding={14}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User />
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" className="cursor-pointer">
              <LogOut />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
