# What's My Contribution Room?

A Canadian tax-advantaged savings calculator that helps you understand and estimate your contribution room for **TFSA**, **FHSA**, and **RRSP** accounts — all in one place.

## Features

- **TFSA** — Enter your birth year and instantly see your total accumulated contribution room, plus a year-by-year breakdown of annual limits since 2009.
- **FHSA** — Enter the year you opened your First Home Savings Account and see your estimated contribution room ($8,000/year, $40,000 lifetime max). Includes a note if you enter a year before the FHSA launched in April 2023.
- **RRSP** — Enter your prior year's earned income (T4 Box 14 / T1 line 10100) and see your estimated new contribution room (18% of income, capped at the CRA annual limit).

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This project is deployed as a static site to **GitHub Pages** via `next export`.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) components

## Disclaimer

These calculators provide **estimates only**. Actual contribution room depends on your personal CRA account history, prior contributions, withdrawals, and pension adjustments. Always verify your exact available room through [CRA My Account](https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html) or your Notice of Assessment.
