import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
export default function SidebarNav() {
	return (
		<div className="p-4 w-full flex">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Home</NavigationMenuTrigger>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Events</NavigationMenuTrigger>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Settings</NavigationMenuTrigger>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
