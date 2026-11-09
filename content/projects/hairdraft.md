---
id: 5
title: "HairDraft — AI Hair-Styling Preview"
description: "Salon clients see a new hairstyle and color on their own photo before the cut. Gemini image generation with accurate color transfer."
published: ""
tags: ["Vue 3", "Go", "PostgreSQL", "Gemini"]
url: "https://hairdraft.com"
image: "/images/projects/hairdraft.jpg"
featured: true
---

**Live:** [hairdraft.com](https://hairdraft.com)

**Stack:** Vue 3, Go, PostgreSQL, Gemini API, Google Cloud, GitHub Actions, Nginx

## The problem

Salon clients find it hard to imagine how a new cut or color will look on them. Generic AI image tools change
the person's face and get hair colors wrong, which makes them useless for a real salon consultation.

## What I built

- **Image generation with Gemini** using a **3-layer prompt system** that keeps the client's face and changes
  only the hair.
- **Swatch-image color transfer:** instead of describing a color in text ("ash blonde"), the model receives an
  image of the actual dye swatch. This fixed color accuracy that text prompts alone could not.
- **Go backend** with PostgreSQL, an admin panel and IP rate limiting to control API costs.
- **CI/CD:** GitHub Actions deploys to a Linux server behind Nginx.
- The same engine also powers a sister product for another market.
