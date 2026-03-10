# WHV Australia — Vercel Deployment Guide

## Project Structure

```
whv-australia/
├── api/                        ← Vercel serverless functions (backend)
│   ├── create-subscription.js  ← Stripe subscription creation
│   ├── cancel-subscription.js  ← Subscription cancellation
│   └── stripe-webhook.js       ← Stripe event handler + emails
├── src/
│   ├── main.jsx                ← React app entry point + routing
│   ├── Layout.jsx              ← Shared navbar
│   └── pages/
│       ├── Home.jsx
│       ├── ForBusiness.jsx
│       ├── GetStarted.jsx      ← Stripe checkout
│       ├── SubscriptionSuccess.jsx
│       └── CancelSubscription.jsx
├── index.html
├── vite.config.js
├── vercel.json                 ← SPA routing config
├── package.json
└── .env.example                ← Copy this, fill in values
```

## Deploy to Vercel in 5 Steps

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/whv-australia.git
git push -u origin main
```

### Step 2 — Import in Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Framework: **Vite** (auto-detected)
4. Click Deploy

### Step 3 — Add Environment Variables
In Vercel Dashboard → Project → Settings → Environment Variables, add all variables from `.env.example`

### Step 4 — Set up Stripe Webhook
1. Stripe Dashboard → Developers → Webhooks → Add endpoint
2. URL: `https://your-project.vercel.app/api/stripe-webhook`
3. Events to listen for:
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Copy the signing secret → paste as `STRIPE_WEBHOOK_SECRET` in Vercel

### Step 5 — Set up Resend (emails)
1. Sign up free at [resend.com](https://resend.com)
2. Add domain `whvguides.com.au` and verify via DNS
3. Create API key → paste as `RESEND_API_KEY` in Vercel

## Local Development

```bash
npm install
cp .env.example .env.local   # Fill in your test keys
npm run dev
```

## Page URLs

| Page | URL |
|------|-----|
| Home | / |
| For Employers | /for-business |
| Checkout | /get-started |
| Success | /success |
| Cancel | /cancel |
