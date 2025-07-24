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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Code,
  CodeXml,
  CornerRightUp,
  CornerRightUpIcon,
  CornerUpLeft,
} from "lucide-react";

const NavHeader = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="nav-header__trigger" asChild>
            <SidebarMenuButton size="lg">
              <div className="nav-header__button">
                <div className="nav-header__icon-box">
                  <CodeXml className="size-5" />
                </div>
                <div>
                  <p className="nav-header__text-title">Shadcn Kit</p>
                  <p>Entreprise</p>
                </div>
              </div>
              <Code className="nav-header__rotate-icon" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="right"
            className="nav-header__dropdown-content"
            collisionPadding={14}
          >
            <DropdownMenuLabel>Teams</DropdownMenuLabel>
            <DropdownMenuItem className="nav-header__dropdown-item">
              <CornerRightUpIcon />
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="nav-header__dropdown-item">
              <CornerUpLeft />
              <span>Acme Corp</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="nav-header__dropdown-item">
              <CornerRightUp />
              <span>Evil Corp</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavHeader;
