# generate-component-set

This script generates files which composed of React component.

## Requirement
- tsx
- inquire

### tsx

```sh
npm install -D typescript tsx
```

### inquire

```sh
npm i -D inquirer
```

## Usage

## Flowchart

```mermaid
flowchart TD
    A[Run Script] --> |npm run gcs| B[Ask type<br>Component/Feature]
    B --> |getSelectedValueFromPrompt| C[Ask component name<br>and check by naming convention]
    C --> |getValidatedInputByNamingType| D[Check if directory exists]
    D --> |isExistsDirectory| E{Directory exists?}
    E --> |Yes| F[Ask to continue<br>with overwriting files]
    F --> |getBooleanFromPrompt| G[Generate files]
    E --> |No| G[Generate files]
    G --> |createFilesFromList| H[End script]
    F --> |Cancel| H[End script]
```

### Note
To see the flowchart, you need to install VSCode Extension: [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/) and [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)

To preview, type `[cmd]+k` and `v`.