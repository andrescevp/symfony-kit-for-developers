---
title: Language server capabilities
description: Reference for SymfonyKD language server features, including codelens, completions, definitions, diagnostics, refactors, and twig intelligence.
---

SymfonyKD language support includes Symfony-specific features across PHP, YAML, and Twig workflows.

## Symfony features

### Twig codelens

- PHP, extended: Nelmio alias support
- YAML, vanilla: params and envs
- YAML, vanilla: bundle configuration full view

### Twig completions

- PHP, extended: Doctrine ORM mapping convention
- PHP, extended: Doctrine ORM query completion
- PHP, extended: form options and constraints

### Definition navigation

- YAML, vanilla: services navigation for FQCN, `@` alias, and service IDs
- PHP, extended: Doctrine mapping column reference navigation
- PHP, extended: OpenAPI navigation from `#/components/...` to named alias definition
- YAML, extended: OpenAPI alias class navigation to class file

### Diagnostics

- PHP, extended: Doctrine diagnostics for QueryBuilder and DQL semantics
- PHP, extended: migration drift checks
- PHP, extended: API doc consistency checks against route definitions
- PHP, extended: form field and entity or DTO mismatch diagnostics

### Implementations

- PHP, extended: form type to `getBlockPrefix` twig block navigation

### Refactors

- PHP, extended: Doctrine entity fields rename across usages and references
- PHP, extended: PHP class rename
- PHP, extended: service ID rename
- YAML, extended: Nelmio named entity alias rename

### References

- PHP, extended: Nelmio API Doc alias references

## Twig features

### Codelens

- Block inheritance
- Controller references showing where templates are used

### Completions

- Controllers
- Route names
- Template paths
- Twig components
- General Twig completions, including filters and functions

### Definitions

- Assets
- Components
- Controllers
- Environment variables
- Form blocks
- Form theme
- Parameters
- Routes
- Services
- Template paths

### Gutters

- Block inheritance navigation hover
- Controller navigation

### Hovers

- Twig components
- General Twig symbols and variables
