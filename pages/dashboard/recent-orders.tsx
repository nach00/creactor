"use client";
import { InlineCode, Large } from "@/components/ui/typography";
import React from "react";

import { Checkbox } from "@/components/ui/checkbox";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const orders = [
	{
		order: "INV001",
		purchaseDate: "May 9, 2922",
		totalAmount: "$250.00",
		customer: "Bob",
		event: "Concert",
	},
	{
		order: "INV002",
		purchaseDate: "May 7, 2922",
		totalAmount: "$150.00",
		customer: "Bob",
		event: "Concert",
	},
	{
		order: "INV003",
		purchaseDate: "May 6, 2922",
		totalAmount: "$350.00",
		customer: "Bob",
		event: "Concert",
	},
	{
		order: "INV004",
		purchaseDate: "May 11, 2922",
		totalAmount: "$450.00",
		customer: "Bob",
		event: "Concert",
	},
	{
		order: "INV005",
		purchaseDate: "May 7, 2922",
		totalAmount: "$550.00",
		customer: "Bob",
		event: "Concert",
	},
	{
		order: "INV006",
		purchaseDate: "May 11, 2922",
		totalAmount: "$200.00",
		customer: "Bob",
		event: "Concert",
	},
	{
		order: "INV007",
		purchaseDate: "May 13, 2922",
		totalAmount: "$300.00",
		customer: "Bob",
		event: "Concert",
	},
];

export default function RecentOrders() {
	return (
		<div>
			<Large>Recent orders</Large>

			<Table>
				<TableCaption>A list of your recent orders.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="pl-0">
							<Checkbox className="border-border-subtle" id="terms" />
						</TableHead>
						<TableHead className="w-[140px]">Order number</TableHead>
						<TableHead>Purchase Date</TableHead>
						<TableHead>Customer</TableHead>
						<TableHead>Event</TableHead>
						<TableHead className="text-right pr-0">Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order) => (
						<TableRow key={order.order}>
							<TableCell className="pl-0">
								<Checkbox className="border-border" id="terms" />
							</TableCell>
							<TableCell className="font-medium">{order.order}</TableCell>
							<TableCell className="text-solid">{order.purchaseDate}</TableCell>
							<TableCell>{order.customer}</TableCell>
							<TableCell className="flex flex-row gap-2">
								<Avatar className="w-5 h-5">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								{order.event}
							</TableCell>
							<TableCell className="text-right pr-0">
								<InlineCode>{order.totalAmount}</InlineCode>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell className="pl-0" colSpan={5}>
							Total
						</TableCell>
						<TableCell className="text-right pr-0">
							<InlineCode>$2,500.00</InlineCode>
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
}
