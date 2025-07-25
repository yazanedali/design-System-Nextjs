'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return null
  }
  return (
    <div
      className="bg-background text-foreground rounded-2xl shadow-lg p-8 max-w-xs mx-auto my-8 text-center border border-muted"
    >
      <div className="font-semibold text-lg mb-3">Theme Switcher</div>
      <div className="text-sm mb-5 opacity-80">
        Current theme: <span className="font-medium">{theme}</span>
      </div>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setTheme('light')}
          className="px-4 py-2 rounded-lg border border-muted bg-background text-foreground font-medium transition-colors hover:bg-muted focus:outline-none"
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="px-4 py-2 rounded-lg border border-muted bg-background text-foreground font-medium transition-colors hover:bg-muted focus:outline-none"
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('blue')}
          className="px-4 py-2 rounded-lg border border-muted bg-background text-foreground font-medium transition-colors hover:bg-muted focus:outline-none"
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default ThemeChanger