import { Calendar, 
    Home, 
    Inbox, 
    Search, 
    Settings,
    Add,
    MessageCircleMore, 
    Earth } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar"

import {Logo} from "@/components/ui/logo"
// Menu items.
const items = [
  {
    title: "Chat",
    url: "#",
    icon: MessageCircleMore,
  },
  {
    title:"Discover",
    url:"#",
    icon:Earth 
  },
 
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            
          <SidebarGroupContent>

            <SidebarMenu className="m-4">
              {items.map((item) => (
                <SidebarMenuItem  key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="p-4" href={item.url}>
                      <item.icon s/>
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
    </Sidebar>
  )
}
