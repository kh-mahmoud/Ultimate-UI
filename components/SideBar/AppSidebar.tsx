import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import NavHeader from "./NavHeader";
import NavMain from "./NavMain";
import NavHelp from "./NavHelp";
import NavPlatform from "./NavPlatform";
import NavFooter from "./NavFooter";
import NavProject from "./NavProject";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left">
      {/* Header */}
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarSeparator className="p-0 m-0" />
      {/* Content */}
      <SidebarContent>
        <NavMain />
        <NavPlatform />
        <NavProject/>
        <NavHelp />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
