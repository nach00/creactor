import type { Metadata } from "next";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	title: "Reactor",
	description: "Clone of Tailwind UI's Catalyst template",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased flex flex-row h-screen bg-app-bg">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Sidebar />
					<div className="w-full flex justify-center bg-subtle-bg border border-base-3 m-2 rounded-xl">
						<div className="w-[1152px] p-10">{children}</div>
					</div>

					<div className="absolute top-4 right-4">
						<ModeToggle />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
