---
title: Install and quick start
description: Install SymfonyKD in VS Code, connect it to your Symfony workspace, and run your first Symfony command workflow.
---

SymfonyKD is currently in pre-release, with active iteration and ongoing feature updates.

## Requirements

- VS Code
- A Symfony project workspace
- PHP and Symfony CLI or console access in your project environment

For complete requirement details, see [Requirements](/reference/requirements/).

## Install SymfonyKD

1. Open the VS Code Marketplace.
2. Search for **SymfonyKD**.
3. Install the extension.
4. Open a Symfony project folder in VS Code.
5. Wait until workspace indexing completes.

## Verify your workspace is detected

After indexing, SymfonyKD shows workspace context in its sidebar and workspace status view.

- Open the SymfonyKD view in the activity bar.
- Check whether project data is available.
- If needed, refresh from the sidebar actions.

For a full feature map, see [Sidebar features](/reference/sidebar-features/).

## Run your first command

1. Open the command palette.
2. Run `Symfonykd: Execute Console Command`.
3. Pick a Symfony console command.
4. Review output in the dedicated channel.

Next, continue with [Run console commands](/guides/run-console-commands/) for command history, comparisons, and favorites.

## Configure optional chat settings

SymfonyKD also provides an `@symfony` chat participant.

- Open SymfonyKD workspace status full view.
- Configure provider and model for `@symfony`.
- Use `/status` or `/controllers` to validate project context.

See [Use @symfony chat participant](/guides/use-chat-participant/) for details.
