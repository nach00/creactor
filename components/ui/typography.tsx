// components/social-links.tsx

import type React from "react";

interface TypographyProps {
	children: React.ReactNode;
	className?: string;
}

export function H1({ className, children }: TypographyProps) {
	return (
		<h1
			className={`
				scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight ${className}
			`}
		>
			{children}
		</h1>
	);
}

export function H2({ className, children }: TypographyProps) {
	return (
		<h2
			className={`
				scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}
			`}
		>
			{children}
		</h2>
	);
}

export function H3({ className, children }: TypographyProps) {
	return (
		<h3
			className={`
				scroll-m-20 text-2xl font-semibold tracking-tight ${className}
			`}
		>
			{children}
		</h3>
	);
}

export function H4({ className, children }: TypographyProps) {
	return (
		<h4
			className={`
				scroll-m-20 text-md font-semibold tracking-tight ${className}
			`}
		>
			{children}
		</h4>
	);
}

export function Lead({ className, children }: TypographyProps) {
	return (
		<p
			className={`
				text-xl text-muted-foreground ${className}
			`}
		>
			{children}
		</p>
	);
}

export function P({ className, children }: TypographyProps) {
	return (
		<p
			className={`
				leading-7 [&:not(:first-child)]:mt-6 ${className}
			`}
		>
			{children}
		</p>
	);
}

export function Large({ className, children }: TypographyProps) {
	return (
		<p
			className={`
				text-lg font-semibold ${className}
			`}
		>
			{children}
		</p>
	);
}

// export function A({ className, children }: TypographyProps) {
// 	return (
// 		<a
// 			className={`
// 				font-medium text-primary underline underline-offset-4 ${className}
// 			`}
// 		>
// 			{children}
// 		</a>
// 	);
// }

export function Small({ className, children }: TypographyProps) {
	return (
		<p
			className={`
				text-sm font-medium leading-none ${className}
			`}
		>
			{children}
		</p>
	);
}

export function Muted({ className, children }: TypographyProps) {
	return (
		<p
			className={`
				text-sm text-muted-foreground ${className}
			`}
		>
			{children}
		</p>
	);
}

export function InlineCode({ className, children }: TypographyProps) {
	return (
		<code
			className={`
				relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}
			`}
		>
			{children}
		</code>
	);
}

export function List({ className, children }: TypographyProps) {
	return (
		<ul
			className={`
				my-6 ml-6 list-disc [&>li]:mt-2 ${className}
			`}
		>
			{children}
		</ul>
	);
}

export function Quote({ className, children }: TypographyProps) {
	return (
		<blockquote
			className={`
				mt-6 border-l-2 pl-6 italic text-muted-foreground ${className}
			`}
		>
			{children}
		</blockquote>
	);
}

export function Eyebrow({ className, children }: TypographyProps) {
	return (
		<span
			className={`
				border-l-2 text-muted-foreground pl-4 not-italic text-sm mb-4 text-base-9 ${className}
			`}
		>
			{children}
		</span>
	);
}
