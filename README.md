<!-- KISANCONNECT README -->

<div align="center">
  
# 🌾 **KisanConnect**
### *Empowering Farmers. Connecting Consumers.*

> A digital bridge between **farmers and consumers** — KisanConnect enables direct trade, knowledge sharing, and donations.  
> It brings together e-commerce, education, and empowerment — helping farmers grow smarter and consumers buy fresher.

[![GitHub stars](https://img.shields.io/github/stars/HackWithSaksham/KisanConnect?color=gold&style=for-the-badge)](https://github.com/HackWithSaksham/KisanConnect/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/HackWithSaksham/KisanConnect?color=teal&style=for-the-badge)](https://github.com/HackWithSaksham/KisanConnect/forks)
[![GitHub issues](https://img.shields.io/github/issues/HackWithSaksham/KisanConnect?color=orange&style=for-the-badge)](https://github.com/HackWithSaksham/KisanConnect/issues)


</div>

---

## 🪄 About KisanConnect

**KisanConnect** is a multi-role agri-tech platform designed to **empower farmers** and **serve consumers** through one connected ecosystem.  
It offers **dual UI experiences** (Farmer / Consumer), **secure payments**, **donations**, and a **knowledge hub** packed with crop insights, government schemes, and modern farming techniques.

Whether you're a farmer seeking support or a consumer looking for fresh local produce — KisanConnect connects you directly.

---

## ⚡ Key Features

| 🌟 Feature | 💬 Description |
|-------------|----------------|
| 👨‍🌾 **Farmer Dashboard** | Manage profile, location, badges, stories, and milestones. |
| 🧺 **Product & Order Management** | Add products, track sales, and manage consumer orders. |
| 💰 **Ask for Donations** | Farmers can receive community donations for support or resources. |
| 📖 **Knowledge Hub** | Access articles, magazines, research, and AI-based learning on modern agriculture. |
| ☀️ **Weather Updates** | Live forecasts and regional climate insights for better crop planning. |
| 🧾 **Govt Schemes** | Curated and updated list of agriculture-related government programs. |
| 🧠 **AI in Farming** | Discover how AI and data analytics are changing crop management. |
| 🛒 **Consumer Marketplace** | Buy fresh produce directly from nearby farmers. |
| 🚚 **Track Orders** | Real-time order tracking and updates. |
| 🌍 **Nearby Farmers Map** | Locate verified farmers on an interactive map. |
| 💳 **Secure Payments** | End-to-end encrypted transactions with Razorpay / Stripe integration. |
| 🏅 **Badges & Milestones** | Unlock achievements for growth, trust, and contributions. |

---

## 🧰 Tech Stack

<div align="center">

| Layer | Technologies Used |
|--------|------------------|
| 💻 **Frontend** | React · Vite · TailwindCSS · Axios · React Router · Lucide Icons |
| ⚙️ **Backend** | Node.js · Express.js |
| 🗄️ **Database** | MongoDB |
| ☁️ **APIs** | Google Maps · WeatherAPI · Razorpay/Stripe |
| 🔒 **Auth & Security** | JWT · Bcrypt · HTTPS |
| 🌦️ **Hosting** | Vercel · Render · Railway |

</div>

---

## 📁 Folder Structure

```bash
sihsi/
│
├── public/                        # 🌐 Public assets
│   └── index.html
│
├── src/                           # 💻 Frontend (React + Vite)
│   ├── assets/                    # Images, icons, etc.
│   ├── components/                # Reusable UI components
│   ├── pages/                     # Page components (Farmer/Consumer views)
│   ├── App.jsx                    # Main App component
│   ├── App.css                    # Component-level styles
│   ├── index.css                  # Global styles
│   └── main.jsx                   # React entry point
│
├── server/                        # ⚙️ Backend (Node + Express)
│   ├── config/                    # Database & server config
│   ├── Middleware/                # Auth / error handlers
│   ├── models/                    # Mongoose schemas
│   └── routes/                    # Express routes
│
├── .env                           # Environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── server.js                      # Backend entry point
└── vite.config.js                 # Vite configuration
```

---

## ⚙️ Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/HackWithSaksham/KisanConnect.git
cd KisanConnect
```

### 2️⃣ Install Dependencies

#### Frontend
```bash
cd client
npm install
npm run dev
```

#### Backend
```bash
cd server
npm install
npm run server
```

### 3️⃣ Setup Environment Variables
Create `.env` inside `/server`:

```bash
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
CLOUDINARY_URL=your_cloudinary_url
RAZORPAY_KEY=your_key
WEATHER_API_KEY=your_api
GOOGLE_MAPS_KEY=your_api
```

Then open **http://localhost:5173** in your browser 🚀

---

## 👨‍💻 Author
**Saksham Garg**  
🌱 Developer | 💡 Innovator | 🌾 Agri-Tech Enthusiast  

<div align="center">

⭐ If you like **KisanConnect**, give it a star!  
Made with ❤️ by Saksham Garg

</div>
