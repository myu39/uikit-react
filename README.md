# React + TypeScript + Vite

## Usage Guidelines

This repository is intended to be used in web applications or websites by importing its components, functions, styles (SASS), hooks, and other utilities.

To avoid unintended overwrites (e.g., style regressions) when updating the repository via `git pull`, **do not update this repository after cloning it into a project**. Treat it as a static source unless otherwise instructed.

> ⚠️ In the future, this repository may be published as a GitHub Package or an npm module.

### Customizing Styles

If you wish to override the styles of components under `src/components` or `src/features`, **do not modify the original files directly**. Instead, wrap the component in your own and pass a `pjClass` (project class) prop or use the pure class but the CSS Modules class which the component has to apply your custom styles. These styles should live inside your own project's source tree.

Here is an example of how to wrap and style a component:

```tsx
import { SimpleTitle } from "../../src/components/SimpleTitle";

const CustomSimpleTitle = () => {
  return (
    <div className="custom-simple-title">
      <SimpleTitle title="UI kit title" pjClass="my-custom-simple-title" />
    </div>
  );
};
```

## Directory Structure

## scripts

| Directory | Description |
| --- | --- |
| `features` | Entrypoints grouped by feature or domain (e.g., gcs) |
| `shared`| Reusable modules shared across features |
| `shared/core` | Core business logic that is not related to UI or prompts |
| `shared/prompts` | Common prompt-related modules (e.g., user input via CLI) |
| `shared/utils` | Utility functions and helpers used across the app |

## Naming Conventions

| Purpose | Naming Convention | Example |
| --- | --- | --- |
| functions | camelCase | `fetchData()`, `sendEmail()` |
| variables | camelCase | `userName`, `totalPrice` |
| classes | PascalCase | `User`, `ProductService` |
| types, interfaces | PascalCase | `UserInfo`, `ApiResponse` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES`, `DEFAULT_TIMEOUT` |
| Directory | kabab-case | `format-date` |
| File for Function | camelCase | `formatDate.ts` |
| File for Class/Component/Interface | PascalCase | `User`, `ProductService` |

## Git Commit Message

| Prefix | Description |
| --- | --- |
| feat | A new feature |
| fix | A bug fix |
| docs | Documentation only changes |
| style | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| refactor |  A code change that neither fixes a bug nor adds a feature |
| perf | A code change that improves performance |
| test |  Adding missing or correcting existing tests |
| chore | Changes to the build process or auxiliary tools and libraries such as documentation generation |

## Comment Annotation

| Annotaion | Purpose | Example |
| --- | --- | --- |
| TODO | Unfinished Task | `# TODO: ~~~~~` |
| NOTE | Addition Information, Explanation, and so on | `# NOTE: ~~~~` |
| FIXME | There is a bug or the code doesn't work as expected | `# FIXME: ~~~~~` |
| XXX | Needs to pay attention on using | `# XXX: This function possibly runs slowly with a massive dataset` |
| HACK | Patched the code temporarily or added a temporary hack | `A temporary solution to bypass a bug that makes the API return an empty list` |
