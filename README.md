# 📒 Daily Sales Book

**Daily Sales Book** is a sleek and mobile-friendly React application powered by Vite, built for small business owners and entrepreneurs to effortlessly manage daily sales and expenses. With CSV import support, persistent local storage, and a smooth user interface with theme toggling, this app helps streamline daily financial tracking.

---

## ✨ Features

- **📊 Add Sales and Expenses**  
  Log daily income and expenses with just a few clicks.

- **📅 Smart Date Picker**  
  Quickly select dates to review or add transactions on specific days.

- **🌗 Dark & Light Mode**  
  Toggle between dark and light themes for a comfortable viewing experience, day or night.

- **📁 CSV Import**  
  Bulk import your data using a CSV file with the format:  
  `date,type(sale|expense),description,amount`.

- **💾 Persistent Data Storage**  
  Data is saved locally in your browser using `localStorage`—no backend required.

- **📱 Mobile-Optimized**  
  Responsive design ensures great usability on both desktop and mobile devices.

- **💹 Daily Profit & Loss Summary**  
  Instantly view your financial balance with real-time profit/loss calculations.

---

## 🚀 Live Demo

👉 [Click here to try the live app](https://your-demo-link.vercel.app)

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Olotuah/Daily-Sales-Book.git
```

Navigate into the project directory:

```bash
cd Daily-Sales-Book
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)

---

## 🛠️ How to Use

### ➕ Add a Sale
1. Click **Add Sale**.
2. Enter the sale description and amount in Naira (₦).
3. Click **Save** to store the entry.

### ➖ Add an Expense
1. Click **Add Expense**.
2. Input the expense details and amount in Naira (₦).
3. Click **Save** to log the expense.

### 📥 Import from CSV
1. Click **Import CSV**.
2. Upload a `.csv` file with the following format:
   ```
   date,type,description,amount
   2025-04-30,sale,"Item sold",5000
   2025-04-30,expense,"Transport",1500
   ```
3. Your records will update automatically.

### 🌙 Toggle Dark Mode
Click the theme toggle button in the top-right corner to switch between dark and light modes.

---

## 📁 Project Structure

daily-sales-book/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.js
│   └── InstallPrompt.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── vite.config.js
├── README.md
└── node_modules/


---

## 🔥 Deployment

This app is deployed with **Vercel**. You can deploy it too:

### Push to GitHub

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/Daily-Sales-Book.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Deploy on Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account.
3. Import your repository.
4. Click **Deploy**—Vercel will handle the rest.

---

## 💻 Technologies Used

- **React** – Frontend framework
- **Vite** – Lightning-fast development build tool
- **React Datepicker** – Intuitive date selection
- **CSS** – Custom styling with theme support
- **LocalStorage** – For offline data persistence
- **Vercel** – Zero-config deployment

---

## 📈 Future Roadmap

- 🔐 **User Authentication**  
  Allow users to log in and sync data across devices.

- 👥 **Multi-User Support**  
  Enable multiple users to manage separate accounts.

- 📊 **Advanced Reporting Tools**  
  Generate visual analytics, charts, and summaries for better insights.

- 📤 **Cloud Backup Integration**  
  Optional export to cloud storage for data backup and portability.

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

