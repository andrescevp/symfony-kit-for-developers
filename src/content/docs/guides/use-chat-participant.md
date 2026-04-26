---
title: Use @symfony chat participant
description: Configure and use the Symfony-focused @symfony chat participant, including commands, tool behavior, and command security policy.
---

SymfonyKD provides an `@symfony` chat participant with Symfony project context and tool access.

## Configure provider and model

Before using `@symfony`, configure provider and model settings in the workspace status full view.

## Available slash commands

`@symfony` supports the following commands:

- `/status` show routes in the current Symfony project
- `/parameters` show parameters in the current Symfony project
- `/bundles` show bundles in the current Symfony project
- `/controllers` show controllers in the current Symfony project
- `/templates` show templates in the current Symfony project
- `/variables` show chat prompt variables
- `/make` create a Symfony component such as a controller, entity, or form

## Tooling behavior

The participant can use internal tools managed by the extension:

- `symfony_command_info`
- `symfony_list_commands`
- `symfony_execute`

## Command execution security policy

Command security policy is managed in settings.

When command execution is restricted, SymfonyKD asks for user confirmation before running commands.

## Best practices

- Start with read-only commands such as `/status` and `/controllers`.
- Confirm your project environment before running any mutating command.
- Keep command policy strict in shared environments.

For full command and tool details, see [Chat commands and tools](/reference/chat-commands-and-tools/).
