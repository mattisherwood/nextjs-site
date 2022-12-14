module.exports = function (plop) {
  plop.setGenerator("newComponent", {
    description: "Creates a new component",
    prompts: [
      {
        type: "list",
        name: "componentType",
        message: "What type of component would you like to create?",
        choices: [
          {
            name: "Atom",
            value: "atoms",
          },
          {
            name: "Molecule",
            value: "molecules",
          },
          {
            name: "Organism",
            value: "organisms",
          },
          {
            name: "Template",
            value: "templates",
          },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What would you like to call it? (Use CamelCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{name}}/{{name}}.tsx",
        template: componentTemplate("{{name}}"),
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.stories.tsx",
        template: storyTemplate("{{name}}", "{{componentType}}"),
      },
      {
        type: "add",
        path: "components/{{name}}/index.ts",
        template: barrelTemplate("{{name}}"),
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.module.css",
        template: cssTemplate(),
      },
      {
        type: "append",
        path: "components/index.ts",
        template: "export { {{name}} } from './{{name}}'", // TODO: Put in alphabetical order
      },
    ],
  })
}

// ComponentName.tsx
const componentTemplate = (name) => `import classes from './${name}.module.css'

type Props = {
  title: string
}

export const ${name} = ({ title }: Props) => (
  <h1 className={classes.exampleClass}>
    {title}
  </h1>
)
`

// ComponentName.story.tsx
const storyTemplate = (
  name,
  componentType
) => `import { ${name} } from './${name}'

export const Base = () => (
  <${name} title="${name} Component" />
)

export default {
  component: ${name},
  title: '${componentType}/${name}',
}
`

// index.ts
const barrelTemplate = (name) => `export { ${name} } from './${name}'
  `

// ComponentName.module.css
const cssTemplate = () => `.exampleClass {
  color: var(--primary);
}
`
