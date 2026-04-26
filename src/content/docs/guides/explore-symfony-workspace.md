---
title: Explore Symfony workspace
description: Use SymfonyKD sidebar and workspace views to inspect Symfony configuration, routes, dependency injection, profiler entries, and framework extensions.
---

This guide covers the workspace exploration workflows available in SymfonyKD.

## Sidebar and workspace indicator

The sidebar is the primary place to inspect project data and Symfony subsystems.

![Sidebar and workspace indicator](../../../assets/docs/sidebar-workspace-indicator.png)

From the workspace indicator, open the workspace summary to inspect high-level project information.

![Workspace summary](../../../assets/docs/workspace-summary.png)

## Configuration workflows

Use the configuration section when you need fast inspection and comparison of Symfony settings.

![Configuration view](../../../assets/docs/configuration.png)

Available workflows include:

- Refresh data
- Search in the sidebar tree
- Compare environments with Envs Diff
- Open the full configuration explorer
- Copy keys and values
- Navigate to service definitions

## Dependency Injection workflows

Inspect Symfony dependency injection details in one place.

![Dependency Injection view](../../../assets/docs/dependency-injection.png)

Use this view for:

- Environment variable values
- App parameters
- Configuration files
- Bound arguments with navigation to definitions
- Full service list with navigation support

## Routes workflows

Review route names, metadata, and controller references.

![Routes view](../../../assets/docs/routes.png)

Use route navigation to jump quickly into controller code while reviewing endpoint behavior.

## Profiler workflows

Profiler support helps you inspect captured entries from inside VS Code.

![Profiler view](../../../assets/docs/profiler.png)

Main actions:

- Start capture (manually or with debugger automation)
- Reload data
- Clear history
- Open setup help
- Open profiler pages directly from captured entries

Next: [Run console commands](/guides/run-console-commands/)
