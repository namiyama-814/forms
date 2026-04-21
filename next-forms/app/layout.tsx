import '@/app/globals.css';
import Header from '@/components/Header';
import { fontVariablesClassName } from '@/lib/fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Forms',
  description: 'フォームアプリ Forms'
}

export default function RootLayout(props:{
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={fontVariablesClassName}>
        <Header />
        {props.children}
      </body>
    </html>
  )
}