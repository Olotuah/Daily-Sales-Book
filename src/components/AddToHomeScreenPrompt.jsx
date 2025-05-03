import React, { useEffect, useState } from 'react'

// Detect iOS devices: iPhone, iPad, iPod (any browser)
function isIOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent.toLowerCase())
}

// Check if app is already installed (standalone mode)
function isInStandaloneMode() {
  return (
    'standalone' in window.navigator && window.navigator.standalone
  ) || window.matchMedia('(display-mode: standalone)').matches
}

const AddToHomeScreenPrompt = () => {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (isIOS() && !isInStandaloneMode()) {
      setShouldShow(true)
    }
  }, [])

  if (!shouldShow) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff8e1',
      padding: '12px',
      textAlign: 'center',
      zIndex: 9999,
      borderTop: '1px solid #ccc'
    }}>
      <p>
        📲 To install this app: <strong>Tap the Share icon</strong> in your browser
        and then choose <strong>“Add to Home Screen”</strong>.
      </p>
    </div>
  )
}

export default AddToHomeScreenPrompt
