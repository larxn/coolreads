# CoolReads 📚

Remake of [goodreads.com](https://goodreads.com/), a site where you can share your reader's journey (via **quotes**, **lists**, **reviews** and more), meet other bookworms and find those books that will change everything.

The **goals** are to:

- Explore web technologies and ideas.
- Find ways to handle increasing complexity.
- Figure out my side-project workflow.

Still at a very early stage, but you can already check the UI [design](https://www.figma.com/proto/sEZV7Vs1vYPhugnXePQoAA/CoolReads?node-id=807%3A440&scaling=min-zoom&page-id=807%3A89&starting-point-node-id=807%3A440&hide-ui=1); or you can follow the project's [board](https://trello.com/b/qAuxHdOE/coolreads), if you feel like it.

## 📚 Dev Setup

```bash
# Download the repo.
git clone https://github.com/luvejo/coolreads.git

# Run your development database.
npx pscale connect coolreads main --port 3309

# And then the development server.
yarn dev
```

To quickly CRUD your data, I recommend you to use Prisma Studio:

```bash
npx prisma studio
```

## 📚 Build Setup

```bash
# Download the repo.
git clone https://github.com/luvejo/coolreads.git

# Install dependencies and build project.
$ yarn && yarn generate

# Serve.
$ yarn preview
```

You should see the project running at [localhost:3000](http://localhost:3000).

## 📚 License

This project is licensed under the MIT License.
