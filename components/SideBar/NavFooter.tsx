import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Code, CreditCard, LogOut, User } from "lucide-react";
import AppAvatar from "../AppAvatar";

const NavFooter = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="nav-footer__trigger" asChild>
            <SidebarMenuButton size="lg">
              <div className="nav-footer__button-content">
                <AppAvatar/>
                <div>
                  <p className="nav-footer__text">Shadcn Kit</p>
                  <p>js@exemple.com</p>
                </div>
              </div>
              <Code className="nav-footer__icon" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            className="nav-footer__dropdown"
            collisionPadding={14}
          >
            <DropdownMenuLabel>
              <div className="nav-footer__dropdown-user">
                <AppAvatar/>
                <div>
                  <p className="nav-footer__text">Shadcn Kit</p>
                  <p>js@exemple.com</p>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="nav-footer__dropdown-item">
              <User />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="nav-footer__dropdown-item">
              <CreditCard />
              <span>Billing</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="nav-footer__dropdown-item--destructive">
              <LogOut />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
