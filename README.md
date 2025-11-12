# 🏃‍♂️ CSV Runner Dashboard

A data visualization app built using Next.js 14 (App Router), React, and Recharts.
It allows users to upload a CSV file containing running records (date, person, milesRun), view the raw data in a table, and explore insights via interactive charts.

## 1. Project Overview

    Challenge: Build a CSV-based dashboard to visualize and analyze running data.
    Goal: Enable users to upload and visualize data showing:

    Overall statistics (average, min, max)

    Per-person stats and total miles

    Date-wise performance trends for each person

    What I built:

        CSV uploader (using papaparse)

        Persistent global state via React Context API

        Dynamic tables (using shadcn/ui)

        Interactive charts (using recharts)

        responsive UI

## 2. Assumptions

    The uploaded CSV will have exact headers:
    date, person, milesRun.

    If the CSV has invalid/missing headers or extra columns, an error toast is displayed.

    The date format is consistent (e.g., YYYY-MM-DD).

## 3. Prerequisites

    Node.js: v18 or above

    Package manager: npm

    Framework: Next.js (App Router)

    No database required.

    Optional tools for local dev:

    VS Code

    Prettier / ESLint extensions for formatting

## 5. Run & Verify
    ### 🔹 Development
    ```bash
    npm run dev
    ```


    App runs on http://localhost:3000

    ### 🔹 Steps to Validate

    Start app → upload CSV file (headers: date, person, milesRun).

    ✅ Click View CSV → see raw table of all entries.

    ✅ Click View Charts → see:

    Overall stats (avg/min/max)

    Per-person summary chart

    Select a person → date-wise line chart

    ⚠️ Try uploading invalid CSV (extra/missing headers) → error toast appears.