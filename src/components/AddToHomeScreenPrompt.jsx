// AddToHomeScreenPrompt.jsx
import React, { useEffect, useState } from 'react'

function isIOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
}

function isInStandaloneMode() {
  return 'standalone' in window.navigator && window.navigator.standalone
}

function AddToHomeScreenPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOSDevice, setIsIOSDevice] = useState(false)

  useEffect(() => {
    const isiOS = isIOS() && !isInStandaloneMode()
    setIsIOSDevice(isiOS)

    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(outcome === 'accepted' ? 'App installed' : 'Install dismissed')
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  if (!showPrompt && !isIOSDevice) return null

  return (
    <div className="install-banner">
      {isIOSDevice ? (
        <div>
          <p>To add this app to your home screen:</p>
          <p><strong>Tap the Share icon</strong> in Safari and then <strong>“Add to Home Screen”</strong>.</p>
        </div>
      ) : (
        <div>
          <p>Install this app on your device:</p>
          <button onClick={handleInstallClick}>Add to Home Screen</button>
        </div>
      )}
    </div>
  )
}

export default AddToHomeScreenPrompt
