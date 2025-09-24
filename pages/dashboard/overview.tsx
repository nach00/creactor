import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

import { Button, buttonVariants } from "@/components/ui/button";
import { H2, H3, H4, Large, Muted, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import React from "react";

interface CardItemProps {
	title: string;
	description?: string;
	content: string;
	footer?: string;
	delta?: number;
}

const CardItem = ({ title, description, content, footer }) => (
	<Card className="w-full flex flex-col">
		<CardHeader>
			<CardTitle>
				<Small>{title}</Small>
			</CardTitle>
			{/*<CardDescription>{description}</CardDescription>*/}
		</CardHeader>
		<CardContent>
			<H3>{content}</H3>
		</CardContent>
		{/*<CardFooter>*/}
		{/*	<p>{footer}</p>*/}
		{/*</CardFooter>*/}

		<div className="flex flex-row gap-1 items-center">
			<Badge variant="constructive" className="w-min">
				+3.5%
			</Badge>
			<Muted className="text-solid">from last week</Muted>
		</div>
	</Card>
);

const cardData = [
	{
		title: "Total Revenue",
		description: "Description 1",
		content: "$2.6M",
		footer: "Footer 1",
	},
	{
		title: "Average order value",
		description: "Description 2",
		content: "$455",
		footer: "Footer 2",
	},
	{
		title: "Tickets sold",
		description: "Description 3",
		content: "5,888",
		footer: "Footer 3",
	},
	{
		title: "Pageviews",
		description: "Description 4",
		content: "823,067",
		footer: "Footer 4",
	},
];

export default function Overview() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between">
				<Large>Overview</Large>
				<DropdownMenu>
					<DropdownMenuTrigger
						className={cn(
							buttonVariants({ variant: "outline", size: "sm" }),
							"flex flex-row w-[150px] justify-between",
						)}
					>
						Last week
						<ChevronsUpDown size="16px" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="flex w-full gap-8">
				{cardData.map((card, index) => (
					<div key={cardData.title} className="flex flex-col w-full">
						<CardItem {...card} />
					</div>
				))}
			</div>
		</div>
	);
}
