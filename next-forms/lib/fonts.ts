import { Inter, Noto_Sans_JP } from 'next/font/google';

const inter = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
});

export const fontVariablesClassName = `${inter.variable} ${notoSansJp.variable}`