# The Extra Steps

*Accessibility is a start, not a finish line.*

The WCAG are a vital baseline, but **inclusive design** shifts the conversation from “bare-minimum compliance” to human-centered design. It considers cultural, emotional, cognitive, and personal context to build experiences that work for everyone, not just the average user.

- **Accessibility** is about ensuring people can use your product
- **Inclusivity** is about ensuring people feel respected, understood, and welcomed when they do

## ✨ Beyond Accessibility - Inclusivity Guidelines

### 1 - Language and Culture

<span class="doc-muted">Websites should be easy to understand and support right-to-left (RTL) languages</span>

- Avoid idioms, slang, or cultural references that don’t translate well
- Be cautious with flags: not all languages map cleanly to countries
- Offer language switching that’s accessible and persistent

#### RTL Languages

- Use logical CSS properties (e.g. `margin-inline-start`) for RTL language support
- Mirror directional icons (e.g. forward arrows) where appropriate for RTL language support
- Be careful with CSS properties that may need tweaking for RTL language support (e.g. `translateX`)

### 2 - Contact and Communication

<span class="doc-muted">Websites should respect users communication preferences</span>

- Let users choose their preferred contact method (e.g. "email", "no calls"...)
- Prefer asynchronous communication (e.g. email, chat) over synchronous (e.g. phone calls)
- Do not opt-in users to communication channels without explicit consent

### 3 - Identity and Personalization

<span class="doc-muted">Websites should respect and acknowledge diverse identities</span>

- Use neutral language by default (e.g. "they" instead of defaulting to "he")
- Do not assume users have traditional identities or family structures
- Avoid collecting unnecessary personal information (e.g. gender, phone numbers...) unless essential
- If you do, explain why and provide inclusive options (e.g. nonbinary, prefer not to say...)

#### User Names

- Allow users to provide preferred names vs. legal names when appropriate
- Allow flexibility in name structure (e.g. "full name" field instead of "first name" and "last name")
- Do not restrict name formats (e.g. no hyphens, no special characters, at least 2 characters...)

### 4 - Respect and Mental Health

<span class="doc-muted">Websites should not use dark patterns or trick users</span>

- Avoid manipulative design patterns that pressure or guilt users (e.g. fake scarcity, countdown timers)
- Do not ask users to justify themselves when they perform actions (e.g. deleting accounts, opting out)
- Write neutral and respectful error messages (do not blame, do not shame)
- Make it easy for users to cancel, delay, or opt-out of services without hassle

### 5 - Economic and Device Inclusion

<span class="doc-muted">Websites should be accessible to users with limited resources</span>

- Optimize for low-bandwidth connections (e.g. lazy loading, compression, 3G testing...)
- Support older browsers or devices as much as possible
- Support small screens and touch interactions

### 6 - Light and Dark Mode

<span class="doc-muted">Websites with lots of content should provide a light mode, as it is easier on the eyes for reading</span>

- Always provide a light mode option, even when dark mode is the default

## How to implement inclusivity

- Use inclusive design principles from the start, not as an afterthought
- Test with real users who reflect the diversity of your audience
- Test with edge cases, not the average user data point
- Document and challenge assumptions about your users
