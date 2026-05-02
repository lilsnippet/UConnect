# UConnect Starter Handoff

## What UConnect Is

UConnect is a platform for international students who want to study in the United States. It will help students understand the U.S. admissions pathway without needing to depend completely on expensive consultants.

The first audience is:

- Students finishing high school who want to apply for bachelor's degrees in the U.S.
- Students who want to apply for master's degrees in the U.S.

The site will be in English and open to students from any country.

## Business Goal

The first version should build interest and trust. It does not need a large content library yet. It should clearly explain what UConnect offers, guide visitors toward Getting Started, and collect contact information from interested students.

## Access Plan

The learning pathway will eventually have around 10 connected tiers:

- Tiers 1-3 will be free.
- Tiers 4-10 will be paid.
- Paid access will be a one-time payment.
- Paid benefits may include full content access, PDF downloads, templates, and access to a student community group chat.

## Content Plan

Content will be a mix of:

- Written guides.
- Videos.
- Downloadable PDFs.
- Templates.

The content is still being created, so the website should be built with placeholder structure first.

## Initial Pages

The first planned pages are:

- Landing page.
- About page.
- Getting Started page.
- Contact or interest form.

The most important action for a new visitor is to click or move toward Getting Started and learn what UConnect offers.

## Style Direction

The site should feel:

- Warm.
- Welcoming.
- Direct.
- Modern and clean.

Color direction:

- Turquoise for major highlights and components.
- White backgrounds.
- A little blue.
- A little black for text and contrast.

Design inspiration:

- https://antigravity.google/

## Technical Setup

The project uses:

- Next.js and React for the website.
- Tailwind CSS for styling.
- Supabase for user accounts and database later.
- Stripe for one-time payments later.
- Vercel for hosting.
- GitHub for source control.

Supabase URL and anon key have been provided by the owner. They should go into `.env.local` and Vercel environment variables. They should not be written into GitHub commits or permanent public documents.

## Important Safety Rules

- Never commit `.env.local`.
- Never commit API keys, passwords, tokens, or secret values.
- Always preview locally at `http://localhost:3000` before pushing.
- Push completed changes to `main` so Vercel can auto-deploy.
- Do not delete database content, reset tables, or remove important files without asking the owner twice and explaining what will be lost.

## Recommended Roadmap

First, build the public website foundation:

- Polished landing page.
- About page.
- Getting Started page.
- Contact or interest form.

Second, connect the early audience-building tools:

- Save interest form submissions.
- Prepare Supabase setup.
- Make it easy to add first content tiers.

Third, build the paid platform:

- Student accounts.
- Free and paid content access.
- Stripe one-time payment.
- Downloads/templates.
- Community access tracking.

## Current Status

Discovery is complete for the first version. The first UConnect landing page has been built with:

- A warm hero section using UConnect branding.
- Turquoise and white visual direction.
- A clear Getting Started call to action.
- A preview of the free and future paid content tiers.
- A section explaining what students can expect.
- An interest form UI.
- Extra scrolling sections for the student journey, target audiences, and planned resource previews.
- Modern minimalist buttons plus subtle hover and scroll animations.

The interest form is not connected to the database yet. The next step is to connect the form so submissions can be saved, then build standalone About and Getting Started pages.
