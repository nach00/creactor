import { H1, H3, H4 } from "@/components/ui/typography";
import Overview from "@/pages/dashboard/overview";
import RecentOrders from "@/pages/dashboard/recent-orders";
import Image from "next/image";

export default function Home() {
	return (
		<div className="gap-12 flex flex-col">
			<H3>Good afternoon, Natcha</H3>
			<Overview />
			<RecentOrders />
		</div>
	);
}
