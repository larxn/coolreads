# CoolReads 📚

Remake of [goodreads.com](https://goodreads.com/), a site where you can share your reader's journey (via **quotes**, **lists**, **reviews** and more), meet other bookworms and find those books that will change everything.

The **goals** are to:

- Explore web technologies and ideas.
- Find ways to handle increasing complexity.
- Figure out my side-project workflow.

Still at a very early stage, but you can already check the UI [design](https://www.figma.com/proto/sEZV7Vs1vYPhugnXePQoAA/CoolReads?node-id=807%3A440&scaling=min-zoom&page-id=807%3A89&starting-point-node-id=807%3A440&hide-ui=1); or you can follow the project's [board](https://trello.com/b/qAuxHdOE/coolreads), if you feel like it.

## 📚 Dev Setup

Download the repository.

```bash
git clone https://github.com/luvejo/coolreads.git
```

Create a `.env` file.

```bash
cp .env.example .env.
```

Run your development database.

```bash
npx pscale connect coolreads main --port 3309
```

And then the development server.

```bash
yarn dev
```

You should see the project running at [localhost:3000](http://localhost:3000).

## 📚 Build Setup

Download the repository.

```bash
git clone https://github.com/luvejo/coolreads.git
```

Create a `.env` file. For the build setup, you can just leave this file's default values.

```bash
cp .env.example .env
```

Install dependencies and build project.

```bash
yarn && yarn generate
```

Preview the production build.

```bash
yarn preview
```

You should see the project running at [localhost:3000](http://localhost:3000).

## 📚 Dev Tips

To quickly CRUD your data, I recommend you to use [Prisma Studio](https://www.prisma.io/studio):

```bash
npx prisma studio
```

Some recommended VS Code extensions are:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), for automatic code formatting.

- [ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env), which adds syntax highlighting support for env files.

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker).

- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma), for .prisma files syntax highlighting.

- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors), for much more readable TypeScript errors.

## Contributing

From the official Vue Style Guide, this project follows these conventions:

- [Base component names](https://vuejs.org/style-guide/rules-strongly-recommended.html#base-component-names)
- [Single-instance component names](https://vuejs.org/style-guide/rules-strongly-recommended.html#single-instance-component-names)
- [Self-closing components](https://vuejs.org/style-guide/rules-strongly-recommended.html#self-closing-components)
- [Full-word component names](https://vuejs.org/style-guide/rules-strongly-recommended.html#full-word-component-names)

## 📚 License

This project is licensed under the MIT License.
