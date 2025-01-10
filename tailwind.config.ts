import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import { light, dark } from 'daisyui/src/theming/themes';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // adopted from cmyk theme
        light: {
          ...light,
          'base-100': 'oklch(100% 0 0)',
          'base-200': 'oklch(93% 0 0)',
          'base-300': 'oklch(86% 0 0)',
          'base-content': 'oklch(20% 0 0)',
          'primary-content': 'oklch(14.3544% 0.02666 239.443325)',
          'secondary-content': 'oklch(12.8953% 0.040552 359.339283)',
          'accent-content': 'oklch(18.8458% 0.037948 105.306968)',
          'neutral-content': 'oklch(84.3557% 0 0)',
          'info-content': 'oklch(13.6952% 0.0189 217.284104)',
          'success-content': 'oklch(89.3898% 0.032505 321.406278)',
          'warning-content': 'oklch(14.2473% 0.031969 52.023412)',
          'error-content': 'oklch(12.4027% 0.041677 28.717543)',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '.2s',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
          primary: 'oklch(71.7722% 0.133298 239.443325)',
          secondary: 'oklch(64.4766% 0.202758 359.339283)',
          accent: 'oklch(94.2289% 0.189741 105.306968)',
          neutral: 'oklch(21.7787% 0 0)',
          info: 'oklch(68.4759% 0.094499 217.284104)',
          success: 'oklch(46.949% 0.162524 321.406278)',
          warning: 'oklch(71.2364% 0.159843 52.023412)',
          error: 'oklch(62.0133% 0.208385 28.717543)',
        },
      },
      {
        // adopted from business theme
        dark: {
          ...dark,
          'base-100': 'oklch(24.3535% 0 0)',
          'base-200': 'oklch(22.6487% 0 0)',
          'base-300': 'oklch(20.944% 0 0)',
          'base-content': 'oklch(84.8707% 0 0)',
          'primary-content': 'oklch(88.3407% 0.019811 251.473931)',
          'secondary-content': 'oklch(12.8185% 0.005481 229.389418)',
          'accent-content': 'oklch(13.4542% 0.033545 35.791525)',
          'neutral-content': 'oklch(85.4882% 0.00265 253.041249)',
          'info-content': 'oklch(12.5233% 0.028702 240.033697)',
          'success-content': 'oklch(14.0454% 0.018919 156.59611)',
          'warning-content': 'oklch(15.4965% 0.023141 81.519177)',
          'error-content': 'oklch(90.3221% 0.029356 29.674507)',
          '--animation-btn': '0.25s',
          '--animation-input': '.2s',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
          // primary customized
          primary: 'oklch(76.61% 0.1083 259.79)',
          secondary: 'oklch(64.0924% 0.027405 229.389418)',
          accent: 'oklch(67.271% 0.167726 35.791525)',
          neutral: 'oklch(27.441% 0.01325 253.041249)',
          info: 'oklch(62.6163% 0.143511 240.033697)',
          success: 'oklch(70.2268% 0.094594 156.59611)',
          warning: 'oklch(77.4824% 0.115704 81.519177)',
          error: 'oklch(51.6105% 0.14678 29.674507)',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
        },
      },
    ],
  },
  darkMode: ['selector', '[data-theme="dark"]'],
} satisfies Config;
