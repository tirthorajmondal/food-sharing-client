# 🍽️ Community Food Sharing & Surplus Reduction Platform

A full-stack web application that helps reduce food waste by allowing individuals to donate and request surplus food. Built using modern technologies like **React**, **Firebase**, **Node.js**, **Express.js** and **MongoDB**, the platform ensures a secure, responsive, and user-friendly experience.

---

## 🌐 Live Site

🔗 [Click here to visit the live site](https://your-live-site-link.com)

---

## 📁 Repositories

- 🔧 [Client Repo](https://github.com/tirthorajmondal/food-sharing-client)
- ⚙️ [Server Repo](https://github.com/tirthorajmondal/food-sharing-server)

---

## 🚀 Features

- ✅ Email/Password & Google authentication (Firebase)
- ✅ Fully responsive on mobile, tablet, and desktop
- ✅ Add, view, update, delete (CRUD) foods
- ✅ Search and sort foods by expiry date
- ✅ Request foods with proper validation and modal
- ✅ Manage user-added foods (update/delete with confirmation)
- ✅ Manage requested foods
- ✅ JWT authentication with secure private routes
- ✅ Toggle between 2-column and 3-column layouts
- ✅ TanStack Query for fetching and mutation
- ✅ Smooth and modern UI using TailwindCSS
- ✅ Animations using Framer Motion *(optional)*
- ✅ Custom Axios hook for secure API calls *(optional)*

---

## 🧪 Pages & Routes

| Page | Description |
|------|-------------|
| `/` | Home page with banner, featured foods, and extra sections |
| `/available-foods` | List of all available foods with search, sort, and layout toggle |
| `/add-food` | Form to add new food (Private) |
| `/manage-my-foods` | Manage your added foods with edit/delete (Private) |
| `/my-food-request` | View all foods you’ve requested (Private) |
| `/login` | Login page with email/password or Google auth |
| `/register` | Register page with validations and redirection |
| `/food/:id` | Detailed food info with food request modal (Private) |

---

## 🔐 Security

- Firebase keys & MongoDB credentials are secured using `.env` files
- JWT token is created on login and verified on protected routes
- User cannot access private routes without login
- Firebase domain authorization is handled for Netlify/Surge

---

## 📦 NPM Packages Used

```bash
react-router-dom
firebase
axios
jwt-decode
sweetalert2
framer-motion
@tanstack/react-query
react-hook-form
tailwindcss
daisyui / shadcn (optional UI lib)
