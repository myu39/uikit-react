# React + TypeScript + Vite

## Naming Conventions

| Purpose | Naming Convention | Example |
| --- | --- | --- |
| functions | camelCase | `fetchData()`, `sendEmail()` |
| variables | camelCase | `userName`, `totalPrice` |
| classes | PascalCase | `User`, `ProductService` |
| types, interfaces | PascalCase | `UserInfo`, `ApiResponse` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES`, `DEFAULT_TIMEOUT` |
| Directory | kabab-case | `format-date` |
| File | camelCase | `formatDate.ts` |

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
