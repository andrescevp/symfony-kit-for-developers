// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repositoryOwner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? repositoryOwner;
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = isGithubActions && repository ? `/${repository}` : '/';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
				title: 'Symfony Kit For Developers',
				social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/andrescevp/symfony-kit-for-developers' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
							{ label: 'Install and quick start', link: '/guides/install-and-quick-start/' },
							{ label: 'Explore Symfony workspace', link: '/guides/explore-symfony-workspace/' },
							{ label: 'Run console commands', link: '/guides/run-console-commands/' },
							{ label: 'Use @symfony chat participant', link: '/guides/use-chat-participant/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
