import React, { useEffect, useState } from 'react'

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const result = await deferredPrompt.userChoice
      if (result.outcome === 'accepted') {
        console.log('PWA installed')
      }
      setDeferredPrompt(null)
      setShowInstall(false)
    }
  }

  const handleDismiss = () => {
    setShowInstall(false)
  }

  if (!showInstall) return null

  return (
    <div className="install-banner">
      <p>📲 Install Daily Sales Book</p>
      <button onClick={handleInstall} className="install-btn">Install</button>
      <button onClick={handleDismiss} className="dismiss-btn">✖️</button>
    </div>
  )
}

export default InstallPrompt
