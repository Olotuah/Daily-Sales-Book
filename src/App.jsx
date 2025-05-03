
import React, { useState, useEffect } from 'react'
import './App.css'
import AddToHomeScreenPrompt from './components/AddToHomeScreenPrompt'
import InstallPrompt from './InstallPrompt'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App() {
  // --- Core Data State (sales & expenses by date) ---
  const [dataByDate, setDataByDate] = useState(() => {
    const json = localStorage.getItem('dataByDate')
    return json ? JSON.parse(json) : {}
  })

  // --- Form State for Sales ---
  const [saleDesc, setSaleDesc] = useState('')
  const [saleAmt, setSaleAmt] = useState('')

  // --- Form State for Expenses ---
  const [expDesc, setExpDesc] = useState('')
  const [expAmt, setExpAmt] = useState('')

  // --- UI State ---
  const [selectedDate, setSelectedDate] = useState(getTodayDate())
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  )
  const [showHelp, setShowHelp] = useState(false)

  // --- Utilities ---
  function getTodayDate() {
    return new Date().toISOString().split('T')[0]
  }

  // --- Persist data & theme ---
  useEffect(() => {
    localStorage.setItem('dataByDate', JSON.stringify(dataByDate))
  }, [dataByDate])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // --- Handlers ---
  const handleAddSale = () => {
    if (!saleDesc || !saleAmt) return
    const entry = { id: Date.now(), description: saleDesc, amount: parseFloat(saleAmt) }
    setDataByDate(prev => {
      const day = prev[selectedDate] || { sales: [], expenses: [] }
      return {
        ...prev,
        [selectedDate]: {
          ...day,
          sales: [...day.sales, entry]
        }
      }
    })
    setSaleDesc(''); setSaleAmt('')
  }

  const handleAddExpense = () => {
    if (!expDesc || !expAmt) return
    const entry = { id: Date.now(), description: expDesc, amount: parseFloat(expAmt) }
    setDataByDate(prev => {
      const day = prev[selectedDate] || { sales: [], expenses: [] }
      return {
        ...prev,
        [selectedDate]: {
          ...day,
          expenses: [...day.expenses, entry]
        }
      }
    })
    setExpDesc(''); setExpAmt('')
  }

  const handleDeleteEntry = (id, type) => {
    setDataByDate(prev => {
      const day = prev[selectedDate] || { sales: [], expenses: [] }
      return {
        ...prev,
        [selectedDate]: {
          ...day,
          [type]: day[type].filter(e => e.id !== id)
        }
      }
    })
  }

  // --- CSV Import (simple) ---
  const handleImportCSV = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const text = reader.result
      text.trim().split('\n').forEach(line => {
        // expected: date,type,description,amount
        const [date, type, desc, amt] = line.split(',')
        if (!date || !type || !desc || !amt) return
        const entry = { id: Date.now() + Math.random(), description: desc, amount: parseFloat(amt) }
        setDataByDate(prev => {
          const day = prev[date] || { sales: [], expenses: [] }
          return {
            ...prev,
            [date]: {
              ...day,
              [type === 'sale' ? 'sales' : 'expenses']: [
                ...day[type === 'sale' ? 'sales' : 'expenses'],
                entry
              ]
            }
          }
        })
      })
    }
    reader.readAsText(file)
  }

  // --- Data for current date ---
  const today = dataByDate[selectedDate] || { sales: [], expenses: [] }
  const totalSales = today.sales.reduce((s, e) => s + e.amount, 0)
  const totalExpenses = today.expenses.reduce((s, e) => s + e.amount, 0)
  const profit = totalSales - totalExpenses

  return (

    <div className="app-container">

    {/* Install prompt banner */}
    <InstallPrompt />

     {/* Add the banner component here so it's global */}
      <AddToHomeScreenPrompt />

      {/* DARK MODE TOGGLE */}
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(dm => !dm)}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <header className="header">📒 Daily Sales Book</header>

      <DatePicker
  selected={new Date(selectedDate)}
  onChange={(date) => setSelectedDate(date.toISOString().split('T')[0])}
  dateFormat="yyyy-MM-dd"
  className="date-picker"
/>

      {/* SUMMARY */}
      <div className="summary-card">
        <h2>
  {new Date(selectedDate).toLocaleDateString('en-NG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
</h2>


        <p>Total Sales: ₦{totalSales}</p>
        <p>Total Expenses: ₦{totalExpenses}</p>
        <p style={{ color: profit >= 0 ? 'green' : 'red' }}>
          {profit >= 0 ? 'Profit' : 'Loss'}: ₦{profit}
        </p>
      </div>

      {/* SALE FORM */}
      <div className="form-section">
        <h3>Add Sale</h3>
        <input
          type="text"
          placeholder="What did you sell?"
          value={saleDesc}
          onChange={e => setSaleDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₦)"
          value={saleAmt}
          onChange={e => setSaleAmt(e.target.value)}
        />
        <button onClick={handleAddSale}>Add Sale</button>
      </div>

      {/* EXPENSE FORM */}
      <div className="form-section">
        <h3>Add Expense</h3>
        <input
          type="text"
          placeholder="What did you spend on?"
          value={expDesc}
          onChange={e => setExpDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₦)"
          value={expAmt}
          onChange={e => setExpAmt(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      {/* IMPORT CSV */}
      <div className="form-section">
        <h3>Import CSV</h3>
        <input type="file" accept=".csv" onChange={handleImportCSV} />
        <small>Format: date,type(sale|expense),description,amount</small>
      </div>

      {/* LISTS */}
      <div className="sales-list">
        <h4>Sales</h4>
        {today.sales.map(s => (
          <div key={s.id} className="sale-item">
            {s.description} — ₦{s.amount}
            <button onClick={() => handleDeleteEntry(s.id, 'sales')}>Delete</button>
          </div>
        ))}
      </div>
      <div className="sales-list">
        <h4>Expenses</h4>
        {today.expenses.map(e => (
          <div key={e.id} className="sale-item expense-item">
            {e.description} — ₦{e.amount}
            <button onClick={() => handleDeleteEntry(e.id, 'expenses')}>Delete</button>
          </div>
        ))}
      </div>

      {/* TIP */}
      <div className="tip">
        💡 Tip: Record both sales and expenses daily to see your real profit!
      </div>

      {/* HELP/FAQ */}
      <button className="help-toggle" onClick={() => setShowHelp(h => !h)}>
        {showHelp ? 'Hide Help ❌' : 'Show Help ❓'}
      </button>
      {showHelp && (
        <div className="help-section">
          <h3>How to use</h3>
          <ul>
            <li>Select a date to view or record entries.</li>
            <li>Use “Add Sale” and “Add Expense” to log transactions.</li>
            <li>Import CSV for bulk entries (format: date,type,desc,amount).</li>
            <li>Toggle Dark Mode for low-light environments.</li>
            <li>Your data is saved in your browser; clear cache to reset.</li>
          </ul>
        </div>
      )}
    </div>
  )
}



export default App
