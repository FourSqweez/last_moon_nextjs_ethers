'use client'
import { MantineProvider } from '@mantine/core'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <body>{children}</body>
      </MantineProvider>
    </html>
  )
}
