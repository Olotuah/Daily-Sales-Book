import React, { useEffect, useState } from 'react'

// Detect iOS devices
function isIOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent.toLowerCase())
}

// Check if app is already installed
function isInStandaloneMode() {
  return (
    'standalone' in window.navigator && window.navigator.standalone
  ) || window.matchMedia('(display-mode: standalone)').matches
}

const AddToHomeScreenPrompt = () => {
  const [shouldShow, setShouldShow] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Only show prompt if on iOS and not installed
    if (isIOS() && !isInStandaloneMode()) {
      setShouldShow(true)
    }

    // Detect color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    // Listen for changes in color scheme
    const handleChange = (e) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleClose = () => setShouldShow(false)

  if (!shouldShow) return null

  // Styles that adapt to light or dark mode
  const containerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: isDarkMode ? '#1e1e1e' : '#fff8e1',
    color: isDarkMode ? '#f1f1f1' : '#333',
    padding: '12px 16px',
    textAlign: 'center',
    zIndex: 9999,
    borderTop: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
    boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  }

  const closeBtnStyle = {
    position: 'absolute',
    top: 8,
    right: 12,
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: isDarkMode ? '#f1f1f1' : '#333'
  }

  return (
    <div style={containerStyle}>
      <button onClick={handleClose} style={closeBtnStyle} aria-label="Close">
        ×
      </button>
      <p style={{ margin: 0, fontSize: '15px' }}>
        📲 <strong>To install this app:</strong> Tap the <strong>Share</strong> icon in your browser
        and then choose <strong>“Add to Home Screen”</strong>.
      </p>
    </div>
  )
}

export default AddToHomeScreenPrompt
