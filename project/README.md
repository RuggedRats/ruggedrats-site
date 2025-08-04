# RuggedRats Landing Page

A modern, responsive landing page for RuggedRats with live metrics - built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Deploy to Vercel

1. Fork or download this repository
2. Push to your GitHub repository
3. Connect your GitHub repo to Vercel
4. Add environment variables in Vercel dashboard (see Configuration section)
5. Deploy automatically!

## ⚙️ Configuration

Before deploying, you'll need to set up the following environment variables in your Vercel dashboard or `.env.local` file:

### Required Environment Variables:
```
VITE_TWITTER_BEARER_TOKEN=your_twitter_bearer_token_here
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
VITE_TELEGRAM_CHAT_ID=-1002792110571
VITE_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
VITE_SOLANA_TOKEN_ADDRESS=YourTokenAddress
```

### How to get API keys:

1. **Twitter Bearer Token**:
   - Go to [Twitter Developer Portal](https://developer.twitter.com/)
   - Create an app and get your Bearer Token

2. **Telegram Bot Token**:
   - Message [@BotFather](https://t.me/botfather) on Telegram
   - Create a new bot and get the token
   - Add the bot to your Telegram group as an admin

3. **Solana Token Address**:
   - Update this when your token is launched on Solana

## 📁 Project Structure

```
├── public/
│   └── ruggedrats-banner.png
├── src/
│   ├── components/
│   │   └── MetricsSection.tsx
│   ├── hooks/
│   │   └── useMetrics.ts
│   ├── api/
│   │   └── metrics.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── .env.local
├── vercel.json
└── package.json
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Live metrics dashboard (Twitter, Telegram, Solana)
- ✅ Real-time data fetching with caching
- ✅ Modern React with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Lucide React icons
- ✅ Optimized for Vercel deployment
- ✅ SEO-friendly
- ✅ Fast loading times
- ✅ Error handling and fallbacks
- ✅ Auto-refresh every 5 minutes

## 🎨 Customization

- Update banner image in the `public/` folder
- Modify content in `src/App.tsx`
- Adjust colors and styling with Tailwind classes
- Update social links, CTA buttons, and API endpoints
- Configure metrics refresh intervals in `useMetrics.ts`

## 📦 Deployment

This project is optimized for Vercel deployment:

1. Push to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` configuration ensures optimal build settings and the metrics will work automatically once environment variables are configured.

## 🔧 Development

For local development:

1. Copy `.env.local.example` to `.env.local`
2. Fill in your API keys
3. Run `npm run dev`

The metrics section will show placeholder data until API keys are configured.