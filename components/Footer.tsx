import {
	GithubIcon,
	Grid2X2Plus,
	LinkedinIcon,
	TwitterIcon,
} from 'lucide-react';

export function Footer() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'About Us',
			href: '#',
		},
		{
			title: 'Careers',
			href: '#',
		},
		{
			title: 'Brand assets',
			href: '#',
		},
		{
			title: 'Privacy Policy',
			href: '#',
		},
		{
			title: 'Terms of Service',
			href: '#',
		},
	];

	const resources = [
		{
			title: 'Blog',
			href: '#',
		},
		{
			title: 'Help Center',
			href: '#',
		},
		{
			title: 'Contact Support',
			href: '#',
		},
		{
			title: 'Community',
			href: '#',
		},
		{
			title: 'Security',
			href: '#',
		},
	];

	const socialLinks = [
		{
			icon: <GithubIcon className="size-4" />,
			link: '#',
		},
		{
			icon: <TwitterIcon className="size-4" />,
			link: '#',
		},
		{
			icon: <LinkedinIcon className="size-4" />,
			link: '#',
		},
	];
	return (
		<footer className="dark bg-background text-foreground relative w-full border-t border-border/40">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-6 gap-6 p-8 md:py-12">
					<div className="col-span-6 flex flex-col gap-5 md:col-span-4">
						<a href="#" className="w-max opacity-80 flex items-center gap-2">
							<Grid2X2Plus className="size-8 text-primary" />
							<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Synapse AI</span>
						</a>
						<p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
							The ultimate platform for AI-powered coding, sandbox execution, and technical assessments.
						</p>
						<div className="flex gap-2">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="hover:bg-accent hover:text-accent-foreground text-muted-foreground rounded-md border p-1.5 transition-colors"
									target="_blank"
									href={item.link}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-muted-foreground mb-2 block text-xs font-semibold uppercase tracking-wider">
							Resources
						</span>
						<div className="flex flex-col gap-2">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max text-sm text-muted-foreground duration-200 hover:text-foreground hover:underline`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-muted-foreground mb-2 block text-xs font-semibold uppercase tracking-wider">Company</span>
						<div className="flex flex-col gap-2">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max text-sm text-muted-foreground duration-200 hover:text-foreground hover:underline`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="bg-border h-px w-full" />
				<div className="flex flex-col items-center justify-between gap-2 pt-6 pb-8 px-8 md:flex-row">
					<p className="text-muted-foreground text-center font-thin text-sm">
						© {year} Synapse AI. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
