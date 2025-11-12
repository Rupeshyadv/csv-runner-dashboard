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

### 🔹 Install Dependencies
```bash
npm install