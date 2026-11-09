---
id: 6
title: "DGSTAY / 2ROOMZ — Hotel Guest-Experience SaaS"
description: "Features used by 800+ hotels across the EU, UK and Canada: Accor contract modules, an AI voice receptionist and a pre-acquisition security cleanup."
published: "Jun 2025 – Present"
tags: ["Vue", "React", "Laravel", "Flutter", "Twilio"]
url: "https://dgstay.com/"
featured: true
tile: "800+"
tileLabel: "hotels"
---

**Role:** Software Developer · Remote · DGSTAY OÜ (Estonia)

**Stack:** Vue 2/3, React, Laravel, PostgreSQL, Redis, Centrifugo (WebSocket), Flutter, Twilio Voice, ElevenLabs

> The code and product screens are private. This case study describes my work without showing them.

## The product

DGSTAY / 2ROOMZ is a guest-experience platform for hotels: guests chat with reception, order services and
report issues from their phone, and hotel staff manage everything from an admin panel and a mobile app.
It is used by 800+ hotels across the EU, UK and Canada.

## What I built

### Task Management and Lost & Found modules
Two complete modules (Vue) for hotel staff, from spec to production. Both were included in the company's
**enterprise contract with Accor**, one of the largest hotel groups in the world.

### AI receptionist with voice calling
Guests can call reception straight from the guest app. I built the calling flow with **Twilio Voice** and an
**ElevenLabs AI receptionist** that answers first and escalates the call to a human SIP phone at the front desk
when needed. It runs in production hotels.

### Security remediation before an acquisition audit
Before an acquisition audit I led the dependency and security cleanup across three apps:

| App | Vulnerabilities before | After |
|---|---|---|
| Vue 2 guest app | 214 | 5 |
| Admin panel | 86 | 36 |
| React app | 49 | 0 |

### Flutter admin app (app2roomz)
I own the staff mobile app and run **App Store and Google Play releases on my own**. I fixed iOS audio issues
and voice-message playback that broke between platforms.

### Real-time chat and production fixes
- Improved the real-time guest chat (Vue 2, Centrifugo WebSocket) and added Redis caching to its translation
  service to cut Google Translate API spend.
- Fixed production issues across the stack: spa overbooking, checkout data bugs, phone-number corruption and
  WebSocket outages.
