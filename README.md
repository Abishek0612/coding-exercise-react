# Comments Explorer

Hey there! 👋 Welcome to the Comments Explorer project. This is a small but mighty React + TypeScript application designed to showcase best practices in modern web development. It fetches data from a public API, displays it in a responsive, beautifully styled grid/table, and includes everything you'd expect from a production-ready app like search, pagination, loading states, error handling, and even a dark mode!

I built this with a focus on writing clean, senior-level code, utilizing custom hooks, modular components, and strict TypeScript types.

## 🚀 Getting Started

To get this project up and running on your local machine, follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. I used version 18+, but any recent LTS version should work just fine.

### 1. Installation

First, clone the project (if you haven't already) and navigate into the root directory. Then, install all the dependencies:

```bash
npm install
```

### 2. Running the Development Server

Once the installation is done, you can fire up the local development server:

```bash
npm run dev
```

The app should now be running on `http://localhost:5173`. Open that link in your browser, and you can play around with the UI, search for comments, and test out the dark mode!

---

## 🧪 Running Tests

I've added some unit tests for our core reusable components (`Search` and `Pagination`) using Vitest and React Testing Library. To run the test suite, just use:

```bash
npm run test
```

If you want to run the tests with a UI or in watch mode, you can explore the standard Vitest CLI options, but `npm run test` will do the trick for a quick verification.

---

## 🐳 Docker Setup

If you prefer to run things in Docker, I've got you covered. The project includes a multi-stage `Dockerfile` and a `docker-compose.yml` file to make spinning up a production-like build super easy.

To build and run the app in a Docker container:

```bash
docker-compose up --build
```

Once it's done building, the app will be served via Nginx and available on `http://localhost:8080`.


