# 🛍️ MyShop — React Product Store

MyShop is a responsive product browsing application built with **React**, using the **DummyJSON API** to fetch and display products.

The project demonstrates API integration, global state management, reusable components, category filtering, and pagination.

## 🚀 Features

- **Product Catalog** — Browse products with images, titles, prices, ratings, and descriptions.
- **Category Filtering** — Filter products by category.
- **Pagination** — Navigate through products with 10 items per page.
- **Product Details** — Expand or collapse product descriptions using Read More / Read Less.
- **Loading Indicators** — Display progress indicators while fetching data.
- **Error Handling** — Display error messages when API requests fail.
- **Responsive Design** — Optimized layouts for desktop and mobile devices.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- Vite
- Axios
- React Context API
- Material UI (MUI)
- Tailwind CSS
- DummyJSON REST API

## 📁 Project Structure

```text
MyShop/
├── Components/
│   ├── CategoryFilter.jsx
│   ├── Header.jsx
│   ├── Pagination.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── public/
├── src/
│   ├── App.jsx
│   ├── ShopContext.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone https://github.com/vanda090-spec/MyShop.git
```

Navigate to the project directory:

```bash
cd MyShop
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## 🌐 API

Product data is provided by [DummyJSON](https://dummyjson.com/).

The application uses API endpoints for product retrieval, category filtering, and paginated results.

## 🧠 What I Learned

Through this project, I practiced:

- Managing shared state with React Context.
- Fetching asynchronous data using Axios.
- Passing data between components using props.
- Managing component state with React hooks.
- Implementing dynamic pagination and category filtering.
- Handling loading and error states.
- Building responsive interfaces with Tailwind CSS and Material UI.
- Using Git and GitHub for version control.

## 👨‍💻 Project Purpose

This project was developed as part of my Full Stack Development studies to strengthen my React development skills and practice working with external REST APIs.
