'use client'

import { MantineProvider } from '@mantine/core'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <head />
        <body>{children}</body>
      </MantineProvider>
    </html>
  )
}
