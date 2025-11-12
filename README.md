# 🏃‍♂️ CSV Runner Dashboard

A data visualization app built using **Next.js 14 (App Router)**, **React**, and **Recharts**.  
It allows users to upload a CSV file containing running records (`date`, `person`, `milesRun`), view the raw data in a table, and explore insights via interactive charts.

---

## 1️⃣ Project Overview

**Challenge:** Build a CSV-based dashboard to visualize and analyze running data.  
**Goal:** Enable users to upload and visualize data showing:

- 📊 Overall statistics (average, min, max)
- 👤 Per-person stats and total miles
- 📅 Date-wise performance trends for each person

**What I built:**

- CSV uploader (using **PapaParse**)
- Persistent global state via **React Context API**
- Dynamic tables (using **shadcn/ui**)
- Interactive charts (using **Recharts**)
- Responsive, accessible UI

---

## 2️⃣ Assumptions

- The uploaded CSV must have **exact headers**:
- Any extra, missing, or invalid headers trigger an **error toast**.
- Date format remains consistent (e.g., `YYYY-MM-DD`).
- All data is handled client-side — no backend or external DB required.

---

## 3️⃣ Prerequisites

- **Node.js:** v18 or higher  
- **Package Manager:** npm  
- **Framework:** Next.js (App Router)
- **No database** or external APIs required.

**Optional Tools for Local Development:**
- VS Code
- Prettier / ESLint extensions for formatting consistency

---

## 4️⃣ Setup

**🔹 Install Dependencies**
```bash
npm install
```

## 5️⃣ Run & Verify

**🔹 Start the Development Server**
```bash
npm run dev
```

App will run on **http://localhost:3000**

**🔹 Steps to Validate Each Feature**

- Start the app → Upload a CSV file (date, person, milesRun).
- ✅ Click View CSV → see a clean, formatted data table.
- ✅ Click View Charts → view:
- Overall stats (avg/min/max per person)
- Per-person summary bar chart
- Date-wise line chart after selecting a person
- ⚠️ Upload invalid CSV (extra/missing headers) → Error toast appears instantly.

---

## 6️⃣ Features & Limitations

**✅ Features**

- Upload and parse CSV files with PapaParse
- Global state management using React Context API
- shadcn/ui components for consistent design
- Recharts for interactive, responsive graphs
- Instant toast notifications for success/error
- Fully responsive layout across devices
- Clean dark-mode UI 

**⚠️ Known Limitations**

- Uploaded data is not persisted after refresh(coz no backend)

---

## 7️⃣ Notes on Architecture

**📁 Folder Structure**
```bash
src/
 ├── app/
 │    ├── charts/page.tsx       # Charts & analytics
 │    ├── csv/page.tsx          # CSV table view
 │    ├── global.css
 │    ├── page.tsx              # Landing page
 │    ├── layout.tsx
 ├── components/
 │    ├── ui/                   # shadcn/ui components
 │    ├── ChartsVisuals.tsx
 │    ├── CsvUploader.tsx       # Upload + navigation 
 │    ├── PersonChart.tsx
 ├── context/
 │    └── CsvContext.tsx        # Global context for CSV data
 ├── hooks/
 │    └── useCsv.ts             # Custom hook to access context
 ├── lib/
 │    └── utils.ts              # Helper functions (data aggregation)

```

**🧠 State & Data Flow**

- CSV data is stored globally in **Context API** after upload.
- Shared seamlessly between **/csv and /charts** pages.
- Charts compute derived stats dynamically **(average, min, max)**.
- **Recharts** components render using context-driven data.

---

## 8️⃣ Accessibility & UI

The app follows essential accessibility and design principles:

- ✅ Semantic HTML elements (<table>, <caption>, <th>, <button>)
- ✅ dark theme
- ✅ Keyboard-accessible buttons and file inputs
- ✅ Consistent spacing using Tailwind (p-6, gap-4, rounded-lg)
- ✅ Accessible color-coded charts (Blue → Avg, Green → Max, Red → Min)

---

## 📊 Example CSV
```csv
 date,person,milesRun  
 2018-03-24,Teddie,913.16   
 1963-03-06,Mildrid,274.82   
 1921-09-10,Teddie,236.65   
 1984-04-15,Monika,677.23   
 2014-07-17,Aigneis,477.29   
 2015-01-30,Sandie,654.37   
 1964-09-05,Ashlee,137.33   
```