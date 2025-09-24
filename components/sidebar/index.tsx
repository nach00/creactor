import SidebarHeader from "@/components/sidebar/header";
import SidebarNav from "@/components/sidebar/nav";

import { ModeToggle } from "@/components/mode-toggle";
import SidebarEvents from "@/components/sidebar/events";
import SidebarFooter from "@/components/sidebar/footer";
import Spacer from "@/components/sidebar/spacer";
import React from "react";

export default function Sidebar() {
	return (
		<div className="flex flex-col min-w-[256px]">
			<SidebarHeader />
			<SidebarNav />
			<SidebarEvents />
			<Spacer />
			{/*<ModeToggle />*/}
			<SidebarFooter />
		</div>
	);
}
