---
title: Chat commands and tools
description: Full command and tool reference for the SymfonyKD @symfony chat participant, including security policy behavior.
---

The `@symfony` participant is designed for Symfony-focused chat workflows with project context.

## Supported commands

- `/status` Show routes in the current Symfony project
- `/parameters` Show parameters in the current Symfony project
- `/bundles` Show bundles in the current Symfony project
- `/controllers` Show controllers in the current Symfony project
- `/templates` Show templates in the current Symfony project
- `/variables` Show chat prompt variables
- `/make` Create a Symfony component such as a controller, entity, or form

## Internal tools

The participant manages these tools automatically:

- `symfony_command_info`
- `symfony_list_commands`
- `symfony_execute`

## Security policy

Command execution policy is controlled via settings.

When policy requires approval, the extension prompts for user confirmation before command execution.

## Practical usage pattern

1. Start with `/status` to validate route context.
2. Use `/controllers` or `/templates` to narrow to the target area.
3. Use `/make` for scoped generation tasks.
4. Confirm execution prompts based on your command security settings.

Related: [Configuration options](/reference/configuration/)
