---
title: Sidebar features
description: Complete reference for SymfonyKD sidebar capabilities across configuration, commands, dependency injection, routes, profiler, forms, twig, and doctrine.
---

This page lists SymfonyKD sidebar capabilities by feature area.

## Workspace view

The workspace indicator opens a workspace summary with core project information.

## Configuration

![Configuration view](../../../assets/docs/configuration.png)

Actions:

- Refresh
- Search in sidebar tree
- Envs Diff for comparing two environments
- Full configuration explorer

Tree support:

- Copy keys and values
- Navigate to service definitions

## Console commands

![Console command workflows](../../../assets/docs/commands.png)

Capabilities:

- History support
- Quick commands in editor workflow
- Execute command via command palette
- Compare command output
- Clear history
- Favorite commands
- Recent command reruns
- Running task output access
- Recent outputs access

## Dependency Injection

![Dependency Injection view](../../../assets/docs/dependency-injection.png)

Capabilities:

- Environment variable values tree
- App parameters list
- Configuration files list
- Bound arguments with definition navigation
- Services list with definition navigation

## Routes

![Routes view](../../../assets/docs/routes.png)

Capabilities:

- Route listing with related metadata
- Navigation to controller references

## Profiler

![Profiler view](../../../assets/docs/profiler.png)

Actions:

- Clear history
- Help for profiler setup and CORS guidance
- Reload
- Start capture

Additional behavior:

- Optional debugger integration with `symfonykd.profiler.autoStartWithDebugger`
- Captured entries open profiler pages in VS Code

## Symfony extended support

### Forms

![Forms view](../../../assets/docs/forms.png)

- Built-in form types from installed libraries
- Service form types with navigation
- Type extensions with navigation
- Type guessers with navigation

### Twig

![Twig view](../../../assets/docs/twig.png)

- Components list with class navigation
- Template lists grouped by bundles

### Doctrine

![Doctrine view](../../../assets/docs/doctrine.png)

- Entity tree with metadata and fields
- Diagram action for visual entity relationships

![Doctrine diagram](../../../assets/docs/doctrine-diagram.png)

Next: [Language server capabilities](/reference/language-server/)
