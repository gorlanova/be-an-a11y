# Checklist - Design

## A and AA levels (Required)

### 🫟 Visual design rules

- Content order stays consistent across breakpoints ([1.3.2](01-wcag-content.md#1.3.2))
- The page design works in both portrait and landscape mode ([1.3.4](01-wcag-content.md#1.3.4))
- Color is not the only way to know an element state (active, error, success...) ([1.4.1](01-wcag-content.md#1.4.1))
- Contrast ratio for regular text content is at least 4.5:1 ([1.4.3](01-wcag-content.md#1.4.3))
- Contrast ratio for large text content is at least 3:1 ([1.4.3](01-wcag-content.md#1.4.3))
- Font sizes, margins and paddings use relative units (em, rem) ([1.4.4](01-wcag-content.md#1.4.4))
- Layouts are flexible and adapt to breakpoints and 400% zoom ([1.4.10](01-wcag-content.md#1.4.10))
- Contrast ratio for borders, icons and the focus indicator is at least 3:1 ([1.4.11](01-wcag-content.md#1.4.11))
- Content appearing on hover or focus does not disappear automatically ([1.4.13](01-wcag-content.md#1.4.13))
- Content does not flash more than 3 times in a second (including media) ([2.3.1](01-wcag-content.md#2.3.1))
- When content order changes across breakpoints, the code team is aware of it ([2.4.3](01-wcag-content.md#2.4.3))
- The focus indicator is consistent across the website ([2.4.7](01-wcag-content.md#2.4.7))
- Interactive elements have a target size of at least 44px by 44px ([2.5.8](01-wcag-content.md#2.5.8))
- Errors are easy to identify (not just with color) ([3.3.1](01-wcag-content.md#3.3.1))
- Form fields have visible labels ([3.3.2](01-wcag-content.md#3.3.2))
- Placeholders are not used as labels ([3.3.2](01-wcag-content.md#3.3.2))
- Required fields (or optional ones) are clearly identified ([3.3.2](01-wcag-content.md#3.3.2))
- The user is notified about status change (new message, process complete...) ([4.1.3](01-wcag-content.md#4.1.3))

### ✏ Content design rules

- Every non-text, non-decorative content has a text alternative (even icon buttons) ([1.1.1](01-wcag-content.md#1.1.1))
- Elements are easy to distinguish (heading level, hint texts...) for the code team ([1.3.1](01-wcag-content.md#1.3.1))
- The page uses one `h1` element and correct heading levels ([1.3.1](01-wcag-content.md#1.3.1))
- Information is never conveyed by only one sensory characteristic (color, sound...) ([1.3.3](01-wcag-content.md#1.3.3))
- Images of text have a detailed text alternative ([1.4.5](01-wcag-content.md#1.4.5))
- Each page has a descriptive title ([2.4.2](01-wcag-content.md#2.4.2))
- Links have a meaningful label (at least in context) ([2.4.4](01-wcag-content.md#2.4.4))
- Sections have a descriptive heading ([2.4.6](01-wcag-content.md#2.4.6))
- Form fields have a descriptive label (prefer visual labels) ([2.4.6](01-wcag-content.md#2.4.6))
- Every interactive element can be used with a single pointer (keypress, click...) ([2.5.1](01-wcag-content.md#2.5.1))
- Navigation elements are always found in the same place and order ([3.2.3](01-wcag-content.md#3.2.3))
- The same element has the same label across the website ([3.2.4](01-wcag-content.md#3.2.4))
- Help elements are always found in the same place and order ([3.2.6](01-wcag-content.md#3.2.6))
- Error messages are clear and explain how to fix the error ([3.3.3](01-wcag-content.md#3.3.3))
- Interactive elements have a clear label that the code team knows about ([4.1.2](01-wcag-content.md#4.1.2))

### 🧩 Elements to design

- Text alternative (captions, transcripts...) is present for recorded audio-only content ([1.2.1](01-wcag-content.md#1.2.1))
- Text alternative or audio is present for recorded video-only content ([1.2.1](01-wcag-content.md#1.2.1))
- Text alternative or audio description is present for recorded video content ([1.2.3](01-wcag-content.md#1.2.3))
- The user can turn down or off audio that auto-plays for more than 3 seconds ([1.4.2](01-wcag-content.md#1.4.2))
- The user can stop content that moves, blinks or scrolls automatically for more than 5 seconds ([2.2.2](01-wcag-content.md#2.2.2))
- There are skip links on the page to skip repetitive content ([2.4.1](01-wcag-content.md#2.4.1))
- The user can use at least 2 different ways to navigate the page (search, menu, links...) ([2.4.5](01-wcag-content.md#2.4.5))
- In long forms, there is an error summary at the top of the form ([3.3.1](01-wcag-content.md#3.3.1))
- The user can select a previously entered value in form fields ([3.3.7](01-wcag-content.md#3.3.7))

### 🧬 Functionality

- Do not use single character shortcuts, or provide a way to disable or remap them ([2.1.4](01-wcag-content.md#2.1.4))
- The user is warned before a time limit is reached ([2.2.1](01-wcag-content.md#2.2.1))
- The user can extend time limits, or turn them off ([2.2.1](01-wcag-content.md#2.2.1))
- Every action that requires motion has an alternative ([2.5.4](01-wcag-content.md#2.5.4))
- Every action that requires dragging has an alternative ([2.5.5](01-wcag-content.md#2.5.5))
- No surprising action is triggered on focus ([3.2.1](01-wcag-content.md#3.2.1))
- No surprising action is triggered on input ([3.2.2](01-wcag-content.md#3.2.2))
- Important data submission can be reviewed and confirmed, or cancelled by the user ([3.3.4](01-wcag-content.md#3.3.4))
- Authentication mechanisms (Face ID, Passkeys, OAuth...) are available ([3.3.8](01-wcag-content.md#3.3.8))
- There are alternatives for CAPTCHAs ([3.3.8](01-wcag-content.md#3.3.8))

## AAA level (Optional)

### 🫟 Visual design rules

- Contrast ratio for regular text content is at least 7:1 ([1.4.6](01-wcag-content.md#1.4.6))
- Contrast ratio for large text content is at least 4.5:1 ([1.4.6](01-wcag-content.md#1.4.6))
- Font sizes, margins and paddings use relative units (em, rem) ([1.4.8](01-wcag-content.md#1.4.8))
- Text width is no more than 80 characters per line (40 if CJK) ([1.4.8](01-wcag-content.md#1.4.8))
- Text is not justified ([1.4.8](01-wcag-content.md#1.4.8))
- Line height is at least 1.5 in paragraphs ([1.4.8](01-wcag-content.md#1.4.8))
- Space between paragraphs is at least 2.25 ([1.4.8](01-wcag-content.md#1.4.8))
- Content does not flash more than 3 times in a second (including media) ([2.3.2](01-wcag-content.md#2.3.2))
- The focus indicator is at least 2px wide ([2.4.13](01-wcag-content.md#2.4.13))
- Contrast ratio for the focus indicator is at least 3:1 ([2.4.13](01-wcag-content.md#2.4.13))
- Interactive elements have a target size of at least 44px by 44px ([2.5.5](01-wcag-content.md#2.5.5))
  
### ✏ Content design rules

- There is no image containing text ([1.4.9](01-wcag-content.md#1.4.9))
- Links have a visible and descriptive text label ([2.4.9](01-wcag-content.md#2.4.9))
- Links do not have a generic label, or with additional context ([2.4.9](01-wcag-content.md#2.4.9))
- Each page section has a descriptive heading ([2.4.9](01-wcag-content.md#2.4.9))

### 🧩 Elements to design

- Text alternative (captions, transcripts...) is present for recorded audio and video content ([1.2.8](01-wcag-content.md#1.2.8))
- Live captions are present for live audio content ([1.2.9](01-wcag-content.md#1.2.9))
- The user can change the background and text colors is provided ([1.4.8](01-wcag-content.md#1.4.8))
- The user can turn off motion effects triggered by interaction ([2.3.3](01-wcag-content.md#2.3.3))
- Breadcrumbs are present on nested pages ([2.4.8](01-wcag-content.md#2.4.8))
- A site map is present if the website is small ([2.4.8](01-wcag-content.md#2.4.8))
- The user can trigger a page content change (feed refresh, next step...) manually ([3.2.5](01-wcag-content.md#3.2.5))
- Help in non-trivial forms or complex steps is provided ([3.3.5](01-wcag-content.md#3.3.5))

### 🧬 Functionality

- The website does not use time limits, except for live events and non interactive media ([2.2.3](01-wcag-content.md#2.2.3))
- The user is warned if inactivity shorter than 20 hours causes loss of data ([2.2.6](01-wcag-content.md#2.2.6))
- The page content does not change automatically (feed refresh, next step...) ([3.2.5](01-wcag-content.md#3.2.5))
- Every data submission can be reviewed and confirmed, or cancelled by the user ([3.3.6](01-wcag-content.md#3.3.6))
- Authentication mechanisms (Face ID, Passkeys, OAuth...) are available ([3.3.9](01-wcag-content.md#3.3.9))

