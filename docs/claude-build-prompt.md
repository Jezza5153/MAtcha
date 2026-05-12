# Claude build prompt

Use this after Stitch gives you the design direction.

---

You are a senior frontend engineer and motion designer.

Build a premium animated ecommerce landing page for a matcha brand using:
- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP ScrollTrigger
- Lenis for smooth scroll

Use the project's existing structure and do not invent unnecessary architecture.

Creative direction:
The site should feel calm, premium, natural, Japanese-inspired, and editorial. Avoid generic wellness clichés, cheap green gradients, fake zen icons, over-animation, or childish movement.

Core scroll story:
1. Hero: product pack appears over soft matcha powder texture.
2. Origin: background transitions into tea leaves / field imagery.
3. Grinding: powder texture moves slowly as the user scrolls.
4. Ritual: whisking bowl scene, text reveals in calm steps.
5. Product cards: smooth reveal, clear ecommerce CTA.
6. Final buy section: strong but calm close.

Animation requirements:
- Use GSAP ScrollTrigger for pinned and scrubbed scroll sections.
- Use one main pinned hero/story section.
- Use transform and opacity animations only where possible.
- Add prefers-reduced-motion fallback.
- Mobile must use simplified animations.
- Clean up all ScrollTriggers on unmount.
- No animation should block purchase.
- Keep performance strong.

UX requirements:
- CTA visible above the fold.
- Product cards clear: name, use case, price, CTA.
- Add trust signals: origin, grade, shipping, reviews.
- Mobile layout must be clean and conversion-focused.
- Do not hide key information behind animation.

Deliverables:
1. Full component code.
2. Tailwind classes included.
3. Animation setup explained briefly in comments.
4. Asset placeholders clearly named:
   /images/matcha-pack.png
   /images/matcha-powder.jpg
   /images/matcha-field.jpg
   /images/matcha-whisking.mp4
   /images/matcha-bowl.jpg

Important:
Before coding, inspect the existing project structure.
Then implement the page cleanly.
After implementation, review for performance, accessibility, mobile UX, and animation bugs.
