# UConnect Project Instructions

## Project Overview

UConnect is a web platform for international students who want to study in the United States. The first audience is students finishing high school and applying for bachelor's degrees, plus students applying for master's degrees. The platform will be in English and will serve students from any country, with a special awareness that many students from South Asia and Southeast Asia currently rely on expensive consultants for admissions and paperwork.

UConnect's purpose is to simplify the U.S. study pathway so students can understand the process, make better decisions, and access affordable guidance, templates, and community support.

## Product Direction

- Brand name: UConnect for now; may change later.
- Tone: warm, welcoming, and direct.
- Visual style: clean modern interface inspired by https://antigravity.google/, adjusted to feel student-friendly and approachable.
- Color direction: turquoise as the main highlight/component color, mostly white backgrounds, small blue accents, and limited black for text/contrast.
- Main first-visit goal: help visitors get started and understand what UConnect offers.

## Tech Stack

- Next.js with React for the website and app.
- Tailwind CSS for styling.
- Supabase for database, authentication, and account-based access later.
- Stripe for one-time payments later.
- Vercel for hosting and automatic deployment.
- GitHub for source control.

## Critical Rules

- Never commit `.env.local` or any file containing passwords, API keys, secret keys, tokens, or private credentials to GitHub.
- Environment values such as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` belong in `.env.local` on the local computer and in Vercel environment variables for production.
- Always run `npm run dev` and preview the website at `http://localhost:3000` before pushing to GitHub.
- Push completed changes to `main` because Vercel auto-deploys from `main`.
- Before destructive actions such as deleting database tables, deleting content, resetting data, or removing files, ask the owner twice and clearly explain what would be lost.
- Explain technical issues in plain English before fixing them.
- Keep this `AGENTS.md` file up to date as the project grows.
- Write or update a handoff document at the end of every working session.
- If Next.js behavior is unclear, read the relevant local docs in `node_modules/next/dist/docs/` because this project uses Next.js 16.

## Planned Pages

- Landing page: explain the promise of UConnect and direct visitors to Getting Started.
- About page: explain the mission, who the platform helps, and why it exists.
- Getting Started page: show the first free guidance tiers and the overall study pathway.
- Contact or interest form: collect names, emails, and student questions.
- Future sign in and sign up pages: allow students to create accounts.
- Future paid access pages: unlock deeper content after payment.
- Future checkout page: process one-time payments through Stripe.

## Planned Content Model

The learning pathway should be connected and tier-based:

- Tiers 1-3: free guidance to build trust and interest.
- Tiers 4-10: paid access later.
- Content types: written guides, videos, downloadable PDFs, templates, and other student resources.
- Initial launch content will be basic. The first goal is audience interest, not a large content library.

## Planned Database Tables

These are expected Supabase tables as the product grows:

- `profiles`: one row per student account with name, email, role, country, degree goal, and timestamps.
- `interest_submissions`: early contact and interest form submissions with name, email, student goal, message, and timestamps.
- `content_tiers`: the pathway structure, including tier number, title, summary, access level, and sort order.
- `content_items`: lessons, guides, videos, PDFs, and templates connected to a tier.
- `user_progress`: tracks which lessons a student has viewed or completed.
- `purchases`: records Stripe one-time payment status and access entitlement.
- `downloads`: optional tracking for template or PDF downloads.
- `community_access`: tracks which paid students should be invited to the community group chat.

Do not create or modify production database tables without confirming the schema and explaining the change to the owner.

## Access and Payment Plan

- The first version should focus on free public content and collecting interest.
- Students should eventually have accounts so they can log in and see what they have access to.
- Paid access should be a one-time payment, not a subscription.
- Paid benefits should include deeper tiers, PDF downloads, templates, and community group chat access.

## Future Features

Potential future additions:

- Live sessions with students.
- Community forum or group chat access.
- Blog or resource articles.
- Email newsletter.
- Directory of student resources.
- More advanced dashboard for students to track their progress.

## Current Build Status

Done:

- Project scaffold exists.
- Business discovery completed for the first version.
- Initial product direction, page plan, content model, and technical rules documented.
- `.gitignore` already ignores `.env*`, which helps protect `.env.local`.
- First landing page built with UConnect branding, turquoise/white styling, a generated hero image, pathway preview, support highlights, and an interest form UI.
- Landing page has been expanded with more scrolling sections, audience cards, resource previews, minimalist button styling, hover lift effects, and scroll/fade animations.

Planned next:

- Connect the interest form so submissions are saved.
- Add standalone About and Getting Started pages.
- Add Supabase client setup using environment variables.
- Later, add authentication, paid access, Stripe checkout, and student progress tracking.
