Daily Sales Book 📒
A simple and intuitive React app powered by Vite to track daily sales and expenses.
Track your business's income and expenses, toggle between light and dark modes, and even import data via CSV for bulk entry management.

Features 🌟
Add Sales and Expenses: Record your daily sales and expenses for better financial tracking.

Date Picker: Easily select a date to view or add data for a specific day.

Dark Mode: Toggle between dark and light themes for a better user experience.

CSV Import: Bulk import data with CSV (format: date,type,sale|expense,description,amount).

Persistent Data: All entries are saved locally in your browser so you don't lose your records.

Mobile-Friendly: Designed to be used on the go with a mobile-friendly interface.

Profit/Loss Calculation: See your daily profit or loss based on your sales and expenses.

Demo 🚀
Check out the live app:
👉 Click here to view the app

Installation ⚙️
Clone the repository:

bash
Copy
Edit
git clonehttps://github.com/Olotuah/Daily-Sales-Book.git
Navigate into your project folder:

bash
Copy
Edit
cd YOUR_REPO_NAME
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to view the app.

How to Use 🛠️
1. Add a Sale
Click Add Sale.

Enter the description of the sale and the amount in Naira (₦).

Click Add Sale to save the entry.

2. Add an Expense
Click Add Expense.

Enter the description of the expense and the amount in Naira (₦).

Click Add Expense to save the entry.

3. Import CSV Data
Click Import CSV.

Choose your .csv file with the format: date,type(sale|expense),description,amount.

The entries will be automatically added to your records.

4. Toggle Dark Mode
Click the Dark Mode/Light Mode button in the top right corner to switch themes.

File Structure 📁
plaintext
Copy
Edit
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
└── node_modules/
Deployment 🔥
This app has been deployed using Vercel. Here's how you can deploy it yourself:

Push to GitHub:

Initialize a git repository.

Commit and push your changes to GitHub.

Deploy on Vercel:

Go to Vercel.

Sign in with your GitHub account.

Import your GitHub repo.

Click Deploy and Vercel will build and deploy the app for you.

Technologies Used 💻
React for the frontend.

Vite as the build tool for fast development.

React Datepicker for the date picker.

CSS for styling (light and dark themes).

Local Storage for data persistence.

Vercel for deployment.

Future Improvements 🚀
User Authentication: Allow users to sign in and save data securely across devices.

Multi-User Support: Enable multiple users to track their own sales and expenses.

Advanced Reporting: Generate reports with charts and analytics for a more detailed financial overview.

License 📄
This project is licensed under the MIT License - see the LICENSE.md file for details.