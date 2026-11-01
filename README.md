<p align="center">
  <img src="https://img.shields.io/badge/ATELIER-KOVNAR-384b32?style=for-the-badge" alt="Atelier Kovnar" />
  <img src="https://img.shields.io/badge/Design-Curated%20Living-8b7355?style=for-the-badge" alt="Curated living" />
</p>

<h1 align="center">Atelier Kovnar</h1>
<h3 align="center">Considered objects for thoughtful spaces</h3>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.8" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Motion-12-000000?style=flat-square" alt="Motion 12" />
</p>

---

## Overview

**Atelier Kovnar** is a design-led storefront and digital exhibition for considered furniture, lighting, and home objects. The experience pairs an editorial gallery with product details, a shopping cart, bespoke commission concepts, and studio information in a calm, minimal interface.

| Area | Experience | Highlights |
| :--- | :--- | :--- |
| **Home** | Editorial introduction to the studio | Hero, philosophy, featured objects |
| **Collection** | Browse the object catalog | Product categories, imagery, prices |
| **Product details** | Explore an individual piece | Materials, descriptions, add-to-cart |
| **Cart & checkout** | Review selected pieces | Quantity controls, order summary, checkout screen |
| **Bespoke** | Explore a custom commission | Category, material, dimensions, finish and budget controls |
| **Studio** | Learn about the practice | Materials, sustainability, contact, shipping and returns |
| **Studio tools** | Curate the product catalog | Add, edit, and remove products; browser-local persistence |

## Architecture

Kovnar is a client-side React application. Vite serves the app during development and creates the production frontend build.

```text
Browser
  └─ React + React Router
       ├─ Home, collection, product and information pages
       ├─ Cart context → cart drawer and checkout page
       └─ Admin context → product catalog in localStorage
```

The catalog starts with local sample data. Studio catalog edits are saved in the current browser's `localStorage`; the cart and checkout are frontend experiences and are not connected to a payment or order-processing backend.

## Features

- **Curated catalog:** browse seating, tables, lighting, and decor with product imagery and material details.
- **Product pages:** open an individual object and add it to the cart.
- **Cart drawer:** adjust item quantities, remove items, and review the current subtotal.
- **Bespoke commission concept:** explore object types, materials, dimensions, finishes, and a budget control.
- **Studio pages:** read about materials and sustainability, or find contact, shipping, and returns information.
- **Catalog curation:** use the studio access prompt to add, update, and remove catalog items; changes persist in browser storage.
- **Responsive, animated presentation:** React Router navigation, Tailwind CSS styling, Motion transitions, and Lucide icons.

> **Studio access note:** the current passcodes (`kovnar` and `admin`) are demo-only and are checked in client-side code. This is not secure authentication and should not be used to protect production data.

## Project Gallery

The screenshots below show the application UI:

### Landing page
<p align="center">
  <img src="./picture/landing%20page.png" width="800" alt="Atelier Kovnar landing page" />
</p>

### Collection
<p align="center">
  <img src="./picture/collection.png" width="800" alt="Atelier Kovnar product collection" />
</p>

### Bag option
<p align="center">
  <img src="./picture/bag%20option.png" width="800" alt="Atelier Kovnar bag and cart option" />
</p>

### Delivery progress
<p align="center">
  <img src="./picture/delivary%20progress.png" width="800" alt="Atelier Kovnar delivery progress view" />
</p>

### Contact
<p align="center">
  <img src="./picture/contact.png" width="800" alt="Atelier Kovnar contact page" />
</p>

### Bottom section
<p align="center">
  <img src="./picture/bottom.png" width="800" alt="Atelier Kovnar page footer and bottom section" />
</p>

## Quickstart

### Requirements

- [Node.js](https://nodejs.org/)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript check (`tsc --noEmit`) |
| `npm run clean` | Remove the local `dist/` build output |

## Repository Structure

```text
kovnar/
├── picture/                  # Screenshots used in the Project Gallery
├── src/
│   ├── components/           # Navigation, hero, product grid, cart and studio UI
│   ├── lib/                  # Product data and cart/admin state
│   ├── pages/                # Collection, product, checkout and studio pages
│   ├── App.tsx               # Routes and shared application layout
│   ├── index.css              # Global styles and Tailwind entry
│   └── main.tsx               # React application entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technology

| Layer | Technologies |
| :--- | :--- |
| **UI** | React 19, TypeScript 5.8 |
| **Build and development** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Motion |
| **Icons** | Lucide React |
| **Routing** | React Router 7 |
