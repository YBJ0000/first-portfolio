'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React from 'react'

import { LightningIcon, MoonIcon, SparkleIcon, SunIcon } from '~/assets'
import { Tooltip } from '~/components/ui/Tooltip'

const themes = [
  {
    label: 'Light Mode',
    value: 'light',
    icon: SunIcon,
  },
  {
    label: 'Dark Mode',
    value: 'dark',
    icon: MoonIcon,
  },
  {
    label: 'Frutiger Aero',
    value: 'frutiger-aero',
    icon: SparkleIcon,
  },
] as const

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { setTheme, theme, resolvedTheme } = useTheme()

  // next-themes persists the selection in localStorage and re-applies it
  // before paint on the next visit, so we only need to flag the mount.
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // When the stored theme is "system", fall back to the resolved value so
  // the icon/label and the cycle order stay in sync.
  const activeValue = theme === 'system' ? resolvedTheme : theme

  const ThemeIcon = React.useMemo(
    () => themes.find((t) => t.value === activeValue)?.icon ?? LightningIcon,
    [activeValue]
  )

  function cycleTheme() {
    const index = themes.findIndex((t) => t.value === activeValue)
    const next = themes[(index + 1) % themes.length]
    setTheme(next.value)
  }

  if (!mounted) {
    return null
  }

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label="切换颜色主题"
            className="fa-surface group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={cycleTheme}
          >
            <ThemeIcon className="h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
          </button>
        </Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {themes.find((t) => t.value === activeValue)?.label ||
                    'System Mode'}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
