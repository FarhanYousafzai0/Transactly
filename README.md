# Transactly – Full-Stack Fintech App

A Next.js 13 Full Stack Bank Application powered by Appwrite, Plaid, and Dwolla 🚀

---

## 🌟 Features

- Modern Next.js 13 App Router Project
- Appwrite Backend for Authentication & Database
- User Onboarding Flow
- Plaid API Integration (connect bank accounts)
- Dwolla API Integration (move money securely)
- Dashboard with real-time account & transaction data
- Zod + React Hook Form for validation
- Chart.js Integration
- Modular & Scalable Project Structure
- Fully Responsive with Tailwind CSS

---

## 🛠 Tech Stack

**Frontend:**
- Next.js 13 (App Router)
- JavaScript
- TailwindCSS
- React Hook Form + Zod
- Chart.js

**Backend & Services:**
- Appwrite (Auth, DB, Functions)
- Plaid (Banking Data)
- Dwolla (ACH Transfers)

---

## ⚙️ How It Works

### 🔐 Auth with Appwrite
Users sign up/sign in with Appwrite Auth. Their data is stored securely in Appwrite DB collections.

### 🏦 Link Bank Account with Plaid
Users link their real bank accounts using Plaid Link. We use `public_token` → `access_token` and save metadata securely.

### 💸 Create Dwolla Customer
We create a verified customer on Dwolla, linking their bank funding source. This is required to send/receive money.

### 💰 Transfer Money
Users can transfer funds between connected accounts. Dwolla handles ACH behind the scenes. All transactions are stored in Appwrite.

### 📊 Realtime Dashboard
Users view:
- Total balance
- Recent transactions
- Transfer status
- Analytics

---

## 📁 Project Structure


---

## 🧪 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/transactly.git
cd transactly
npm install
NEXT_PUBLIC_APPWRITE_URL=your-appwrite-url
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-db-id
NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID=your-user-collection
NEXT_PUBLIC_APPWRITE_ACCOUNT_COLLECTION_ID=your-account-collection
NEXT_PUBLIC_APPWRITE_TRANSACTION_COLLECTION_ID=your-transaction-collection
NEXT_PUBLIC_APPWRITE_BALANCE_COLLECTION_ID=your-balance-collection

PLAID_CLIENT_ID=your-client-id
PLAID_SECRET=your-secret
PLAID_ENV=sandbox

DWOLLA_KEY=your-key
DWOLLA_SECRET=your-secret
DWOLLA_ENVIRONMENT=sandbox
