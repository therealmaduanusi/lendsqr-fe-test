
# Lendsqr FE Test

This is a frontend test project built with **React**, **TypeScript**, and **Vite**. It demonstrates a user management dashboard with routing, user details, and filtering functionality.

## 🚀 Features

- 🔐 User authentication mock (login screen)
- 🧭 Dashboard navigation
- 👥 User listing and detailed view
- 🔍 Filter and search users
- ⚡ Fast development with Vite
- 🛠️ Modular components and SCSS styling

## 📦 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **Axios**
- **SCSS & CSS Modules**
- **ESLint** for linting
- **date-fns** for date formatting

## 🗂️ Project Structure

```
src/
├── assets/            # Images, icons, fonts
├── components/        # Reusable React components
├── pages/             # Page-level components (Dashboard, Login)
├── styles/            # Global styles (CSS & SCSS)
├── App.tsx            # App wrapper
├── main.tsx           # Entry point
```

## 🛠️ Scripts

| Script       | Description                         |
|--------------|-------------------------------------|
| `npm run dev` | Starts the development server       |
| `npm run build` | Builds the project for production |
| `npm run preview` | Previews the production build   |
| `npm run lint` | Lints the codebase using ESLint    |

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/lendsqr-fe-test.git
cd lendsqr-fe-test
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

> The app will be available at `http://localhost:5173`.

## 🌐 Deployment

This project uses a `vercel.json` config file for deployment with [Vercel](https://vercel.com/). You can deploy directly by importing the repository to Vercel.

## 📁 Public API & Assets

- Static assets like logos and icons are located in the `public/` directory.
- Mock user data is available at: `public/api/users-api.json`

## 🧹 Linting

To ensure code quality and consistency:

```bash
npm run lint
```

## 📄 License

This project is for educational and testing purposes only.
