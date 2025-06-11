const guidelines = [
  {
    label: "1 - Perceivable",
    children: [
      {
        label: "1.1 - Text Alternatives",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives",
        description:
          "Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.",
        children: [
          {
            label: "1.1.1 - Non-text Content",
            level: "A",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content",
              goal: "Create a text alternative for visual and auditory content",
              description:
                "All non-text-content must have a text alternative or an accessible name, except if they are purely decorative or redundant.",
              descriptionList: [],
              examples: [
                "The cover image of an article has an <code>alt</code> attribute that describes the image",
                "An audio track of a song is labeled with the title and artist name",
                "An envelope icon next to a \"Contact Us\" title has an empty <code>alt</code> attribute",
                "An image used for decoration only has an empty <code>alt</code> attribute",
              ],
              methods: [
                "Always use an <code>alt</code> attribute on <code>img</code> elements",
                "Leave the <code>alt</code> attribute empty on decorative images",
                "Write a descriptive but concise <code>alt</code> attribute for images that convey information with the relevant context",
                "Use the <code>aria-describedby</code> attribute to provide a longer description of the element",
              ],
              resources: [
                {
                  label: "Axess Lab - Alt texts, the ultimate guide",
                  path: "https://axesslab.com/alt-texts",
                },
                {
                  label: "A11y Collective - How to write great alt texts",
                  path: "https://www.a11y-collective.com/blog/how-to-write-great-alt-text/",
                },
              ],
            },
          },
        ],
      },
      {
        label: "1.2 - Time-based Media",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/time-based-media",
        description: "Provide alternatives for time-based media (audio and video).",
        children: [
          {
            label: "1.2.1 - Audio-only and Video-only (Prerecorded)",
            level: "A",
            difficulty: "normal",
            teams: ["design", "content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded",
              goal: "Provide an alternative when content is perceivable with only one sense, and if there is no text description of the content already available on the page",
              description:
                "Provide a text transcript for audio content, and a text or audio transcript for video-only content.",
              descriptionList: [],
              examples: [
                "A podcast episode has a text transcript available on the page",
                "A video-only content has an audio description available on the page",
              ],
              methods: [
                "Provide a text transcript for audio content",
                "Provide a text or audio transcript for video-only content",
                "Make sure the transcript covers all the content of the audio or video",
                "Make sure the transcript is in the same language as the rest of the content",
                "Make sure the transcript is available on the same page as the media content",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.2 - Captions (Prerecorded)",
            level: "A",
            difficulty: "normal",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded",
              goal: "Provide synchronized text captions for audio content in videos, if there is no text description of the content already available on the page",
              description: "If the content of a video is not already available in text form, provide synchronized captions for the audio content.",
              descriptionList: [],
              examples: [
                "A video has synchronized captions for the audio content",
                "A video does not have captions, but the audio content is already available in text form on the page",
              ],
              methods: [
                "If no text version is available on the page, provide synchronized captions for the audio content in videos",
                "Make sure the captions cover all the content of the audio track",
                "Make sure the captions are in the same language as the rest of the content",
                "Make sure the captions are synchronized with the audio track",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.3 - Audio Description or Media Alternative (Prerecorded)",
            level: "A",
            difficulty: "normal",
            teams: ["design", "content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded",
              goal: "Provide a description of the visual content in videos, if there is no text description of the content already available on the page",
              description: "For a video content, provide an audio description or a transcript of the content.",
              descriptionList: [],
              examples: [
                "A video has an audio description of the visual content",
                "A video does not have an audio description, but the visual content is already available in text form on the page",
              ],
              methods: [
                "If no text version is available on the page, provide an audio description of the visual content in videos",
                "Make sure the audio description covers all the content of the video",
                "Make sure the audio description is in the same language as the rest of the content",
                "Make sure the audio description is synchronized with the video",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.4 - Captions (Live)",
            level: "AA",
            difficulty: "hard",
            teams: ["content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live",
              goal: "Provide synchronized text captions for audio content in real-time videos",
              description: "Provide synchronized captions for the audio content in live videos.",
              descriptionList: [],
              examples: [
                "A video has synchronized captions for the audio content",
              ],
              methods: [
                "Provide synchronized captions for the audio content in videos",
                "You can use artificial intelligence to generate the captions in real-time",
                "Make sure the captions cover all the content of the audio track",
                "Make sure the captions are in the same language as the rest of the content",
                "Make sure the captions are synchronized with the audio track",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.5 - Audio Description (Prerecorded)",
            level: "AA",
            difficulty: "hard",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded",
              goal: "Provide an audio description of the visual content in videos",
              description: "For a video content, provide an audio description of the content.",
              descriptionList: [],
              examples: [
                "A video has an audio description of the visual content",
              ],
              methods: [
                "Provide an audio description of the visual content in videos",
                "Make sure the audio description covers all the content of the video",
                "Make sure the audio description is in the same language as the rest of the content",
                "Make sure the audio description is synchronized with the video",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.6 - Sign Language (Prerecorded)",
            level: "AAA",
            difficulty: "hard",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded",
              goal: "Provide synchronized sign language interpretation for audio content in existing videos",
              description: "Provide a synchronized sign language interpretation for the audio content in videos.",
              descriptionList: [],
              examples: [
                "A video has a sign language interpretation of the audio content",
              ],
              methods: [
                "Provide a synchronized sign language interpretation for the audio content in videos",
                "Make sure the sign language interpretation covers all the content of the audio track",
                "Make sure the sign language interpretation is in the same language as the rest of the content",
                "Make sure the sign language interpretation is synchronized with the video",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.7 - Extended Audio Description (Prerecorded)",
            level: "AAA",
            difficulty: "hard",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded",
              goal: "Provide extended spoken descriptions of the visual content in videos",
              description:
                "When the video contains a lot of visual content, provide an extended audio description of the visual content in the video, with pauses in the video.",
              descriptionList: [],
              examples: [
                "In a video of a class, the teacher draws a diagram on the board while speaking rapidly. The video should pause at the end of the sequence while the audio description plays until it reaches the end of the sequence description, and then the video resumes to the next sequence",
              ],
              methods: [
                "Provide an extended audio description of the visual content in videos",
                "Make sure the audio description covers all the content of the video",
                "Make sure the audio description is in the same language as the rest of the content",
                "Make sure the audio description is synchronized with the video (with pauses in the video)",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.8 - Media Alternative (Prerecorded)",
            level: "AAA",
            difficulty: "hard",
            teams: ["design", "content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded",
              goal: "Provide a text equivalent for all content in videos",
              description: "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
              descriptionList: [],
              examples: [
                "A video has a text transcript available on the page",
                "The text transcript covers all the content of the video, including the audio and visual content",
              ],
              methods: [
                "Provide a text transcript for all prerecorded synchronized media",
                "Make sure the transcript covers all the content of the audio and visual tracks",
                "Make sure the transcript is in the same language as the rest of the content",
                "Make sure the transcript is available on the same page as the media content",
              ],
              resources: [],
            },
          },
          {
            label: "1.2.9 - Audio-only (Live)",
            level: "AAA",
            difficulty: "hard",
            teams: ["design", "content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live",
              goal: "Provide a text equivalent for live audio-only content",
              description: "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
              descriptionList: [],
              examples: [
                "A live audio-only content has a text transcript available on the page",
                "The text transcript covers all the content of the audio track",
              ],
              methods: [
                "Provide a text transcript for all live audio-only content",
                "You can use artificial intelligence to generate the transcription in real-time",
                "Make sure the transcript covers all the content of the audio track",
                "Make sure the transcript is in the same language as the rest of the content",
                "Make sure the transcript is available on the same page as the media content",
              ],
              resources: [],
            },
          },
        ],
      },
      {
        label: "1.3 - Adaptable",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/adaptable",
        description: "Create content that can be presented in different ways (for example, simpler layout) without losing information or structure.",
        children: [
          {
            label: "1.3.1 - Info and Relationships",
            level: "A",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships",
              goal: "Use code to reinforce relationships and information conveyed through presentation",
              description: "Use semantic HTML to provide a consistent and logical structure to your content, so that assistive technologies can understand it.",
              descriptionList: [],
              examples: [
                "Page has a <code>h1</code> element as the main title, and <code>h2</code> elements as section titles",
                "A recipe steps section uses <code>ol</code> and <code>li</code> elements to indicate the order of the steps",
              ],
              methods: [
                "Use semantic HTML elements to structure your content",
                "Use <code>h1</code> to <code>h6</code> elements in the right sequence",
                "Use <code>ol</code> and <code>ul</code> elements to indicate lists",
                "Use <code>table</code> elements for tabular data",
                "Use the appropriate regions for your content",
                "Do not use more than one <code>h1</code> element per page",
              ],
              resources: [
                {
                  label: "MDN - HTML elements reference",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements",
                },
                {
                  label: "MDN - Heading elements",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements",
                },
              ],
            },
          },
          {
            label: "1.3.2 - Meaningful Sequence",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence",
              goal: "Use code to preserve meaningful content order",
              description: "The DOM order of the content should match the visual order of the content.",
              descriptionList: [],
              examples: [
                "A sidebar is presented on the reading-start side of the page, it appears first in the DOM",
                "A footer is presented at the bottom of the page, it appears last in the DOM",
                "The users uses the Tab key to navigate the page, and the focus order matches the visual order of the content",
              ],
              methods: ["Write the HTML in the same order as the visual content", "Be careful about reordering content in different breakpoints"],
              resources: [],
            },
          },
          {
            label: "1.3.3 - Sensory Characteristics",
            level: "A",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics",
              goal: "Describe controls by name, not just by appearance or location",
              description: "Instructions should not rely on color, shape, size, visual location, orientation, or sound.",
              descriptionList: [],
              examples: [
                'The user is asked to click on the "Submit" button, not on the "green button"',
                'The user is asked to check the checkbox next to the "I agree" label, not the checkbox on the right side of the page',
                "The user is alerted with a text message that the form was submitted, not only with a sound",
              ],
              methods: [
                "Use descriptive labels for controls and inputs",
                "Use descriptive text for instructions, not just sensory cues",
                "If you use sensory cues, provide an alternative that does not rely on them",
              ],
              resources: [],
            },
          },
          {
            label: "1.3.4 - Orientation",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/orientation",
              goal: "Do not lock content to either portrait or landscape presentation",
              description: "Unless essential, the user can display the content in either portrait or landscape orientation.",
              descriptionList: [],
              examples: [
                "A mobile application can be used in both portrait and landscape modes",
                "A web page can be viewed in both portrait and landscape modes without breaking the layout",
                "A piano app can only be used in landscape mode",
              ],
              methods: ["Do not lock the content to a specific orientation", "Use CSS media queries to adapt the layout to different orientations"],
              resources: [
                {
                  label: "MDN - CSS Media Queries",
                  path: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
                },
              ],
            },
          },
          {
            label: "1.3.5 - Identify Input Purpose",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose",
              goal: "Use code to indicate the purpose of common inputs, where technology allows",
              description: "Form fields collecting user information have appropriate attributes.",
              descriptionList: [],
              examples: [
                "An email input field can automatically fill the user's email address",
                "A phone number input field displays a numeric keypad on mobile devices",
              ],
              methods: [
                "Use the <code>autocomplete</code> attribute to indicate the purpose of form fields",
                "Use the <code>inputmode</code> attribute to indicate the type of input expected",
              ],
              resources: [
                {
                  label: "MDN - autocomplete attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",
                },
                {
                  label: "MDN - inputmode attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode",
                },
              ],
            },
          },
          {
            label: "1.3.6 - Identify Purpose",
            level: "AAA",
            difficulty: "hard",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose",
              goal: "Use code to indicate the meaning of all controls and other key information, where available",
              description: "Every component indicates its purpose to assistive technologies, such as screen readers.",
              descriptionList: [],
              examples: ["A navbar uses the <code>nav</code> element", "A footer uses the <code>footer</code> element"],
              methods: [
                "Use semantic HTML elements to structure your content",
                "Use the appropriate regions for your content",
                "Use appropriate ARIA roles to indicate the purpose of components",
                "Give your components accessible names and descriptions",
              ],
              resources: [
                {
                  label: "MDN - HTML elements reference",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements",
                },
                {
                  label: "MDN - ARIA roles",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles",
                },
                {
                  label: "MDN - aria-labelledby attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby",
                },
                {
                  label: "MDN - aria-describedby attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",
                },
              ],
            },
          },
        ],
      },
      {
        label: "1.4 - Distinguishable",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/distinguishable",
        description: "Make it easier for users to see and hear content by separating foreground from background (visual and audio).",
        children: [
          {
            label: "1.4.1 - Use of Color",
            level: "A",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color",
              goal: "Use information in addition to color, such as shape or text, to convey meaning",
              description: "Color is not the only way to distinguish an element of its state.",
              descriptionList: [],
              examples: [
                "A link is underlined in addition to being blue",
                "An error message is displayed in red and has an icon next to it",
                "A line graph uses different shapes in addition to colors to distinguish the lines",
              ],
              methods: ["Use icons or shapes", "Use patterns or textures", "Use borders, background or underlines"],
              resources: [
                {
                  label: "Deque - Presenting information in multiple ways",
                  path: "https://www.deque.com/blog/inclusive-design-tips-presenting-information-multiple-ways",
                },
              ],
            },
          },
          {
            label: "1.4.2 - Audio Control",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control",
              goal: "If you play audio content automatically, let people turn it down or off",
              description: "If your page auto-plays audio for more than 3 seconds, the user can lower the volume or stop it.",
              descriptionList: [],
              examples: [
                "A song plays automatically when the page loads, but a stop button is clearly visible",
                "A ping sound plays when the user submits a contact form, but it only lasts for 0.5 seconds",
              ],
              methods: [
                "If possible, do not auto-playing audio content",
                "Otherwise, make it last for less than 3 seconds",
                "Otherwise, provide a way for the user to easily turn it off or down",
              ],
              resources: [],
            },
          },
          {
            label: "1.4.3 - Contrast (Minimum)",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum",
              goal: "Provide sufficient contrast between text and its background",
              description: "Text has a minimum contrast ratio of 4.5:1 against its background, except for the following:",
              descriptionList: [
                "<b>Large Text</b> - Large text (24px, or 18.5px and bold) have a contrast ratio of at least 3:1",
                "<b>Incidental Text</b> - Decorative text and text in inactive elements has no contrast requirement",
                "<b>Logotypes</b> - Text that is part of a logo or brand name has no contrast requirement",
              ],
              examples: [
                "A paragraph of text with a contrast ratio of 5:1 against its background",
                "A large page title with a contrast ratio of 3:1 against its background",
                "A disabled button with a contrast ratio of 1.5:1 against its background",
                "A logo with a contrast ratio of 1:1 against its background",
              ],
              methods: [
                "Make sure the small body text has a contrast ratio of at least 4.5:1",
                "Make sure the large texts have a contrast ratio of at least 3:1",
              ],
              resources: [
                {
                  label: "Color contrast checker",
                  path: "https://colorcontrast.app/#fg=%23107db5&bg=%23fff&level=aa&format=rgb&algo=WCAG2",
                },
              ],
            },
          },
          {
            label: "1.4.4 - Resize Text",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text",
              goal: "Ensure text can be doubled in size",
              description: "The user can resize the text of the page up to 200 percent and be able to navigate it normally.",
              descriptionList: [],
              examples: [
                "When resizing the text to 200%, the text remains readable without horizontal scrolling",
                "When resizing the text to 200%, the layout does not break and all content remains accessible",
              ],
              methods: [
                "Do not prevent text resizing",
                "Use relative units (like <code>em</code> or <code>rem</code>) for font sizes, margins, paddings...",
                "Use flexible layouts that can adapt to elements sizes",
              ],
              resources: [
                {
                  label: "MDN - Relative length units",
                  path: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units",
                },
              ],
            },
          },
          {
            label: "1.4.5 - Images of Text",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text",
              goal: "Use text instead of pictures of text",
              description: "Your content uses text instead of images of text, except for the following:",
              descriptionList: ["<b>Customizable</b> - The image of text can be customized", "<b>Essential</b> - Using an image of text is essential"],
              examples: ["A logo with a text can not be avoided", "An image of a graphic with text can not be avoided"],
              methods: ["Avoid using images of text", "If you must use them, provide an <code>alt-text</code> that reads the text in the image"],
              resources: [],
            },
          },
          {
            label: "1.4.6 - Contrast (Enhanced)",
            level: "AAA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced",
              goal: "Strongly contrast text against its background",
              description: "Text has a minimum contrast ratio of 7:1 against its background, except for the following:",
              descriptionList: [
                "<b>Large Text</b> - Large text (24px, or 18.5px and bold) have a contrast ratio of at least 4.5:1",
                "<b>Incidental Text</b> - Decorative text and text in inactive elements has no contrast requirement",
                "<b>Logotypes</b> - Text that is part of a logo or brand name has no contrast requirement",
              ],
              examples: [
                "A paragraph of text with a contrast ratio of 8:1 against its background",
                "A large page title with a contrast ratio of 4.5:1 against its background",
                "A disabled button with a contrast ratio of 2.5:1 against its background",
                "A logo with a contrast ratio of 1:1 against its background",
              ],
              methods: [
                "Make sure the small body text has a contrast ratio of at least 7:1",
                "Make sure the large texts have a contrast ratio of at least 4.5:1",
              ],
              resources: [
                {
                  label: "Color contrast checker",
                  path: "https://colorcontrast.app/#fg=%23107db5&bg=%23fff&level=aa&format=rgb&algo=WCAG2",
                },
              ],
            },
          },
          {
            label: "1.4.7 - Low or No Background Audio",
            level: "AAA",
            difficulty: "normal",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio",
              goal: "Avoid or lessen background sound, or let users turn it off",
              description: "For prerecorded audio content that mainly contains speech and is not music, at least one of the following is true:",
              descriptionList: [
                "<b>No Background</b> - The audio does not contain background sounds",
                "<b>Turn Off</b> - The background sounds can be turned off",
                "<b>20 dB</b> - The background sounds are at least 20 decibels lower than the speech content",
              ],
              examples: [
                "A podcast audio contains speech and no background sound",
                "A podcast audio contains speech and background music, but the user can turn off the music",
                "A podcast audio contains speech and background music, but the background music is low",
              ],
              methods: ["Make sure the background sound is low or does not exist"],
              resources: [],
            },
          },
          {
            label: "1.4.8 - Visual Presentation",
            level: "AAA",
            difficulty: "hard",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation",
              goal: "Meet text display requirements or allow users to adjust them",
              description: "On blocks of text in your content, the following is true:",
              descriptionList: [
                "The user can change the text and background colors",
                "Width is no more than 80 characters (40 if CJK)",
                "Text is not justified",
                "Line-height is at least 1.5 in paragraphs, and 2.25 between paragraphs",
                "Text can be resized up to 200% without breaking the layout",
              ],
              examples: [
                "The user can change the text color to black and the background color to white",
                "The user can resize the text to 200% without breaking the layout",
              ],
              methods: [
                "Allow the user to change the text and background colors",
                "Use relative units for font sizes, margins, paddings...",
                "Use flexible layouts that can adapt to elements sizes",
                "Do not justify text",
                "Use sufficient line-height and spacing between paragraphs",
                "Use a maximum width of 80 characters (40 if CJK)",
              ],
              resources: [],
            },
          },
          {
            label: "1.4.9 - Images of Text (No Exception)",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception",
              goal: "Do not use pictures of text unless there is no other way to present information",
              description: "Your content uses text instead of images of text.",
              descriptionList: [],
              examples: ["A text replacement is displayed instead of the logo"],
              methods: ["Do not use images of text"],
              resources: [],
            },
          },
          {
            label: "1.4.10 - Reflow",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/reflow",
              goal: "Make lines of text reflow within the viewport",
              description: "The user can zoom in, and still navigate the page without needing to scroll horizontally:",
              descriptionList: ["up to 100% in a window that is 320px wide", "up to 400% in a window that is 1280px wide"],
              examples: ["A form has two columns, but when zoomed in, it becomes a single column", "A text adapts to the viewport width when zoomed in"],
              methods: [
                "Use relative units for font sizes, margins, paddings...",
                "Use flexible layouts that can adapt to elements sizes",
                "Do not assign elements a fixed width bigger than 320px",
                "Use CSS media queries to adapt the layout to different screens sizes",
              ],
              resources: [
                {
                  label: "MDN - CSS Media Queries",
                  path: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
                },
              ],
            },
          },
          {
            label: "1.4.11 - Non-text Contrast",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast",
              goal: "Ensure meaningful visual cues achieve 3:1 against the background",
              description: "These elements have a contrast ratio of at least 3:1 against adjacent backgrounds:",
              descriptionList: [
                "<b>User Interface Components</b> - Elements and their borders, backgrounds, focus indicators, except when disabled or if they're native elements",
                "<b>Graphical Objects</b> - Icons and graphs",
              ],
              examples: [],
              methods: [],
              resources: [
                {
                  label: "Color contrast checker",
                  path: "https://colorcontrast.app/#fg=%23107db5&bg=%23fff&level=aa&format=rgb&algo=WCAG2",
                },
              ],
            },
          },
          {
            label: "1.4.12 - Text Spacing",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing",
              goal: "Ensure content adapts to user-defined text settings",
              description: "If the user increases the text spacing, the layout does not break, up to the following settings:",
              descriptionList: [
                "Line height to 1.5 times the font size",
                "Spacing following paragraphs to 2 times the font size",
                "Letter spacing to 0.12 times the font size",
                "Word spacing to 0.16 times the font size",
              ],
              examples: [
                "When resizing the line height to 1.3, the text remains readable without horizontal scrolling",
                "When resizing the letter spacing to 0.1, the layout does not break and all content remains accessible",
              ],
              methods: [
                "Do not prevent text spacing resizing",
                "Use relative units (like <code>em</code> or <code>rem</code>) for font sizes, margins, paddings...",
                "Use flexible layouts that can adapt to elements sizes",
              ],
              resources: [
                {
                  label: "MDN - Relative length units",
                  path: "https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units",
                },
              ],
            },
          },
          {
            label: "1.4.13 - Content on Hover or Focus",
            level: "AA",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus",
              goal: "If hover or focus causes content changes, ensure interaction is predictable",
              description: "If your page displays elements on hover or focus (like tooltips), the following are true:",
              descriptionList: [
                "<b>Dismissable</b> - They can be dismissed easily",
                "<b>Hoverable</b> - They can be reached with the mouse",
                "<b>Persistent</b> - They do not disappear automatically",
              ],
              examples: [
                'A tooltip appears when hovering a "Help" icon, and disappears when moving the mouse away',
                "The user can hover that tooltip without it disappearing",
                'A tooltip appears when focusing a "Help" icon, and disappears when pressing the Escape key',
                "The tooltip does not disappear automatically after a few seconds",
              ],
              methods: [
                "Make sure tooltips can be dismissed easily",
                "Do not make them disappear automatically",
                "Allow the user to hover the tooltip without it disappearing",
              ],
              resources: [],
            },
          },
        ],
      },
    ],
  },
  {
    label: "2 - Operable",
    children: [
      {
        label: "2.1 - Keyboard Accessible",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible",
        description: "Make all functionality available from a keyboard.",
        children: [
          {
            label: "2.1.1 - Keyboard",
            level: "A",
            difficulty: "hard",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard",
              goal: "Ensure pointer actions have a keyboard equivalent",
              description: "The page can be operated with a keyboard alone, except freehand movements.",
              descriptionList: [],
              examples: [
                "A custom select menu can be used with the keyboard",
                "A custom date picker can be used with the keyboard",
                "A painting application needs to be operated with a mouse, as the brushes require freehand movements",
              ],
              methods: [
                "Try to use native HTML elements, as they are already keyboard accessible",
                "For custom elements, research needs and implement full keyboard support",
                "Do not rely on mouse events only to trigger actions on custom elements",
                "Use the <code>tabindex</code> attribute to make elements focusable / hidden",
                "Hide elements that should not be focusable with <code>aria-hidden</code>",
              ],
              resources: [
                {
                  label: "WAI ARIA - Authoring Practices Guide",
                  path: "https://www.w3.org/WAI/ARIA/apg/patterns",
                },
                {
                  label: "Web AIM - Keyboard Accessibility",
                  path: "https://webaim.org/techniques/keyboard",
                },
              ],
            },
          },
          {
            label: "2.1.2 - No Keyboard Trap",
            level: "A",
            difficulty: "normal",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap",
              goal: "Ensure users always know how to navigate away from components",
              description: "Make it easy for users to navigate away from an element with the keyboard.",
              descriptionList: [],
              examples: ["A modal dialog can be closed with the Escape key", "A custom dropdown can be closed with the Escape key"],
              methods: ["Make sure the user can use the keyboard to leave any component"],
              resources: [],
            },
          },
          {
            label: "2.1.3 - Keyboard (No Exception)",
            level: "AAA",
            difficulty: "hard",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception",
              goal: "Ensure all pointer actions have a keyboard equivalent",
              description: "The page can be operated with a keyboard alone.",
              descriptionList: [],
              examples: ["A custom select menu can be used with the keyboard", "A custom date picker can be used with the keyboard"],
              methods: [
                "Try to use native HTML elements, as they are already keyboard accessible",
                "For custom elements, research needs and implement full keyboard support",
                "Do not rely on mouse events only to trigger actions on custom elements",
                "Use the <code>tabindex</code> attribute to make elements focusable / hidden",
                "Hide elements that should not be focusable with <code>aria-hidden</code>",
              ],
              resources: [
                {
                  label: "WAI ARIA - Authoring Practices Guide",
                  path: "https://www.w3.org/WAI/ARIA/apg/patterns",
                },
                {
                  label: "Web AIM - Keyboard Accessibility",
                  path: "https://webaim.org/techniques/keyboard",
                },
              ],
            },
          },
          {
            label: "2.1.4 - Character Key Shortcuts",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts",
              goal: "Ensure character-only shortcut keys can be turned off or modified",
              description: 'If your page provides keyboard shortcuts of single characters (like "c" or "1") at least one of the following is true:',
              descriptionList: [
                "<b>Turn Off</b> - The user can turn them off",
                "<b>Remap</b> - The user can remap them to use a different key or combinations",
                "<b>Active Only</b> - The shortcuts are only available on focused elements (not the whole page)",
              ],
              examples: [
                'The user can turn off the shortcut "c" to open a chat window',
                'The user can remap this shortcut to "Ctrl + c"',
                "The user can use the spacebar to pause a video, but only when the video is focused",
              ],
              methods: [
                "Avoid using single character shortcuts, as they can conflict with browser shortcuts",
                "If you must use them, provide a way for users to turn them off or remap them",
                "Make sure the shortcuts are only active when the element is focused, not on the whole page",
              ],
              resources: [],
            },
          },
        ],
      },
      {
        label: "2.2 - Enough Time",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/enough-time",
        description: "Provide users enough time to read and use content.",
        children: [
          {
            label: "2.2.1 - Timing Adjustable",
            level: "A",
            difficulty: "normal",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable",
              goal: "Let users turn off, adjust, or extend time limits",
              description: "If your content has a time limit, at least one of the following is true:",
              descriptionList: [
                "<b>Turn Off</b> - The user can turn it off before accessing the content",
                "<b>Adjust</b> - The user can make it 10 times bigger",
                "<b>Extend</b> - The user is warned 20 seconds before it expires, and can extend it with a simple action, an can repeat the process at least 10 times",
                "<b>Real-time Exception</b> - It is a real-time event, such as a live broadcast or a real-time chat, and can not be changed",
                "<b>Essential Exception</b> - It is essential and extending it would invalidate the activity",
                "<b>20 Hours Exception</b> - It is longer than 20 hours",
              ],
              examples: [
                "The user is waiting for a meeting to start. After waiting for 10 minutes, the user is asked if they still want to wait. If they do not respond, the page times out",
                "A ticket booking site has a 15-minute time limit to complete the purchase. The user is warned 1 minute before the time limit expires, and can extend the time limit by clicking a button",
                "An auction site can not allow the user to extend the time limit, as it would invalidate the auction",
              ],
              methods: [
                "Warn users of time limits before they encounter them",
                "If possible, provide a way for users to turn off or adjust time limits",
                "Otherwise, warn users beforehand and before the time limit expires",
              ],
              resources: [],
            },
          },
          {
            label: "2.2.2 - Pause, Stop, Hide",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide",
              goal: "Let users control content changes that occur in parallel with other content",
              description: "For moving, blinking, scrolling, or auto-updating information, all of the following are true, unless it is essential:",
              descriptionList: [
                "<b>Moving, blinking, or scrolling</b> - If it starts automatically, lasts more than 5 seconds, and is presented in parallel with other content, there is a way for the user to pause, stop, or hide it",
                "<b>Auto-updating</b> - If it starts automatically and is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update",
              ],
              examples: [
                "A carousel that automatically rotates can be paused or stopped",
                "An elements that blinks stops after 5 seconds",
                "A game where the decor scrolls automatically can be paused",
              ],
              methods: [
                "Try not to display moving content that is not essential",
                "Provide a way for users to pause, stop or hide moving content",
                "Provide a way for users to pause, stop or hide auto-updating content",
              ],
              resources: [],
            },
          },
          {
            label: "2.2.3 - No Timing",
            level: "AAA",
            difficulty: "normal",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/no-timing",
              goal: "Do not use time limits, except for video and live events",
              description: "Timing is not an essential part of the content, except for non-interactive synchronized media and real-time events.",
              descriptionList: [],
              examples: [
                "The user is not required to complete a form within a certain time limit",
                "A test is designed to score users based on their answers, not on the time taken to answer",
              ],
              methods: ["Do not use time limits, except for video and live events"],
              resources: [],
            },
          },
          {
            label: "2.2.4 - Interruptions",
            level: "AAA",
            difficulty: "easy",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/interruptions",
              goal: "Let people delay or turn off updates, except in emergencies",
              description: "The user can turn off interruptions, except for emergencies.",
              descriptionList: [],
              examples: ["The user can turn off notifications that appear on the screen"],
              methods: ["Do not interrupt users with content that is not essential", "Provide a way for users to turn off or delay interruptions"],
              resources: [],
            },
          },
          {
            label: "2.2.5 - Re-authenticating",
            level: "AAA",
            difficulty: "normal",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating",
              goal: "Preserve users' prior activity and data through reauthentication",
              description: "When a session expires, the user can continue the activity without loss of data after signing in again.",
              descriptionList: [],
              examples: [
                "The user is filling out a form, but the session expires. When the user signs in again, the form is still filled out with the data they entered",
                "The user is shopping online, but the session expires. When the user signs in again, the shopping cart is still filled with the items they added",
              ],
              methods: ["Save user data in the browser's local storage or session storage", "Automatically restore the data when the user signs in again"],
              resources: [
                {
                  label: "MDN - Local Storage",
                  path: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
                },
                {
                  label: "MDN - Session Storage",
                  path: "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",
                },
              ],
            },
          },
          {
            label: "2.2.6 - Timeouts",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/timeouts",
              goal: "Tell users how long their session can be inactive before they may lose information",
              description: "Users are warned if inactivity can cause data loss, unless the data is preserved for more than 20 hours.",
              descriptionList: [],
              examples: [
                "A tax filing platform indicates that after 1 hour of inactivity, the user will be logged out and lose any unsaved data",
                "The user shopping cart is preserved for 20 hours, so no warning is needed",
              ],
              methods: ["If possible, preserve user data for more than 20 hours", "Otherwise, warn users if inactivity can cause data loss"],
              resources: [],
            },
          },
        ],
      },
      {
        label: "2.3 - Seizures and Physical Reactions",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions",
        description: "Do not design content in a way that is known to cause seizures or physical reactions.",
        children: [
          {
            label: "2.3.1 - Three Flashes or Below Threshold",
            level: "A",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold",
              goal: "Avoid content that flashes, or keep it under thresholds",
              description: "Do not make elements flash more than 3 times per second, or keep the flash below the red flash thresholds.",
              descriptionList: [],
              examples: [
                "A CTA button flashes 2 times per second to draw attention",
                "A video contains a sequence with a flashing title card that flashes 1.5 times per second",
              ],
              methods: ["Keep flashing content to a minimum"],
              resources: [],
            },
          },
          {
            label: "2.3.2 - Three Flashes",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes",
              goal: "Do not flash content more than 3 times a second",
              description: "Do not make elements flash more than 3 times per second.",
              descriptionList: [],
              examples: ["A video contains a sequence with a flashing title card that flashes 1.5 times per second"],
              methods: ["Keep flashing content to a minimum"],
              resources: [],
            },
          },
          {
            label: "2.3.3 - Animation from Interactions",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions",
              goal: "Support user preferences for motion, and eliminate unnecessary motion effects",
              description: "Motion triggered by interaction can be disabled, unless it is essential.",
              descriptionList: [],
              examples: [
                "A parallax effect on a page can be turned off by the user",
                "A page turning effect respects the <code>prefers-reduced-motion</code> media query",
                "An animation sandbox does not allow users to turn off the animation, as it is essential to the experience",
              ],
              methods: [
                "Use the <code>prefers-reduced-motion</code> media query to detect user preferences",
                "Provide a way for users to turn off or adjust motion effects",
              ],
              resources: [
                {
                  label: "MDN - prefers-reduced-motion",
                  path: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
                },
              ],
            },
          },
        ],
      },
      {
        label: "2.4 - Navigable",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/navigable",
        description: "Provide ways to help users navigate, find content, and determine where they are.",
        children: [
          {
            label: "2.4.1 - Bypass Blocks",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks",
              goal: "Provide a means of skipping repeating content",
              description: "Give keyboard users a way to skip content that is repeated on pages.",
              descriptionList: [],
              examples: [
                'The user can use a "Skip to content" link to avoid the header content',
                'The user can use a "Skip to content" link to avoid the sidebar menu',
              ],
              methods: [
                "Wrap the main content in a <code>main</code> element",
                'Provide a "Skip to content" link at the top of each page',
                "You can hide it visually, but it should become visible on focus",
              ],
              resources: [
                {
                  label: "Web AIM - Skip Navigation Links",
                  path: "https://webaim.org/techniques/skipnav",
                },
                {
                  label: "MDN - main Element",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main",
                },
              ],
            },
          },
          {
            label: "2.4.2 - Page Titled",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled",
              goal: "Provide a descriptive page title using appropriate technology",
              description: "Every page has a title that describes its topic or purpose.",
              descriptionList: [],
              examples: [
                'A page titled "Contact Us - Amazon UK" clearly indicates the purpose of the page',
                'A page titled "About Our Company - Ikea" provides context about the content',
              ],
              methods: [
                "Use the <code>title</code> element in the HTML head",
                "Ensure the title is unique and descriptive for each page",
                "Try to use the same title for the <code>h1</code> element on the page",
              ],
              resources: [
                {
                  label: "Web AIM - Page titles",
                  path: "https://webaim.org/techniques/pagetitle",
                },
              ],
            },
          },
          {
            label: "2.4.3 - Focus Order",
            level: "A",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order",
              goal: "Elements receive focus in an order that preserves meaning",
              description: "When the user navigates the page with the keyboard, the focus order is logical and intuitive (usually the same as reading order).",
              descriptionList: [],
              examples: [
                "A form with 2 columns will have the focus go through the first column, then the second",
                "A navigation menu will have the focus go through each item in the order they appear visually",
              ],
              methods: [
                "When designing interfaces, keep a consistent order across different breakpoints",
                "When the order changes, communicate the change to the developers team",
                "Be careful about using CSS properties like <code>position</code>, <code>order</code> or <code>flex-direction</code> as they can change the visual order without changing the DOM order",
              ],
              resources: [],
            },
          },
          {
            label: "2.4.4 - Link Purpose (In Context)",
            level: "A",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context",
              goal: "Provide descriptive names or context for all links",
              description: "The purpose of each link should be clear from the link text alone, or from the link text and its context.",
              descriptionList: [],
              examples: [
                'A text "If you have a question, visit our " follow by a link "FAQ section"',
                'A link labeled "Read more" contains a visually hidden text " about the peach pie recipe"',
                'A contact card identifying the person\'s name and role, with a link labeled "Email"',
              ],
              methods: [
                'Avoid labeling links with generic text like "click here" or "read more"',
                "If the text label is generic but its context is clear, it is acceptable",
                "Otherwise, provide more context in a visually hidden element",
              ],
              resources: [
                {
                  label: "Nomensa - How to write good link text",
                  path: "https://www.nomensa.com/blog/how-write-good-link-text",
                },
              ],
            },
          },
          {
            label: "2.4.5 - Multiple Ways",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways",
              goal: "Provide at least 2 options for reaching the same content",
              description: "Users can find pages using more than one method, except when the page is a process step or result.",
              descriptionList: [],
              examples: ["The user can browse the categories menu or search for a specific item"],
              methods: ["Provide a search function that allows users to find content", "If your website is small, consider providing a site map"],
              resources: [],
            },
          },
          {
            label: "2.4.6 - Headings and Labels",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels",
              goal: "Provide descriptive headings and labels",
              description: "Headings describe the page sections, and labels identify form fields.",
              descriptionList: [],
              examples: [
                'A heading labeled "Contact Information" clearly indicates the section\'s content',
                'A form field labeled "Email Address" clearly indicates what information is expected',
              ],
              methods: ["Use descriptive heading elements to organize your page content", "Use clear labels on form fields"],
              resources: [
                {
                  label: "MDN - Headings",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
                },
                {
                  label: "MDN - label Element",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
                },
              ],
            },
          },
          {
            label: "2.4.7 - Focus Visible",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible",
              goal: "Ensure each item receiving focus has a visible indicator",
              description: "When the user navigates the page with the keyboard, focused interactive elements are clearly identified.",
              descriptionList: [],
              examples: [
                "A button has a visible outline when it receives focus",
                "A scrollable container has a visible focus ring when it is focused",
                "A link is underlined when it receives focus",
                "A form field changes background color when it receives focus",
              ],
              methods: [
                "Design focus styles that are clearly visible",
                "Use consistent focus styles across the site",
                "Do not hide focus styles with CSS for keyboard users",
              ],
              resources: [
                {
                  label: "Sara Soueidan - A guide to designing focus indicators",
                  path: "https://www.sarasoueidan.com/blog/focus-indicators",
                },
              ],
            },
          },
          {
            label: "2.4.8 - Location",
            level: "AAA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/location",
              goal: "Use breadcrumbs, site maps, or other indicators to give context",
              description: "Provide a way for the user to locate themselves within the content.",
              descriptionList: [],
              examples: [
                "A breadcrumb trail shows the user's current location on an online store",
                "A site map provides an overview of the website's structure",
              ],
              methods: [
                "Use breadcrumb navigation to show the user's current location in nested pages",
                "Label the breadcrumb links concisely and use a clear structure",
                "Provide a site map for smaller websites",
              ],
              resources: [
                {
                  label: "Smashing Magazine - Breadcrumbs in Web design",
                  path: "https://www.smashingmagazine.com/2009/03/breadcrumbs-in-web-design-examples-and-best-practices",
                },
              ],
            },
          },
          {
            label: "2.4.9 - Link Purpose (Link Only)",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only",
              goal: "Provide descriptive names for all links",
              description: "The purpose of each link should be clear from the link text alone.",
              descriptionList: [],
              examples: [
                'A text "If you have a question, visit our " follow by a link "FAQ section"',
                'A link labeled "Read more" contains a visually hidden text " about the peach pie recipe"',
              ],
              methods: [
                "Do not use icons only links",
                'Avoid labeling links with generic text like "click here" or "read more"',
                "If the text label is generic, provide more context in a visually hidden element",
              ],
              resources: [
                {
                  label: "Nomensa - How to write good link text",
                  path: "https://www.nomensa.com/blog/how-write-good-link-text",
                },
              ],
            },
          },
          {
            label: "2.4.10 - Section Headings",
            level: "AAA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/section-headings",
              goal: "Where content is organized in sections, provide section headings",
              description: "Headings describe the page sections.",
              descriptionList: [],
              examples: [
                'A heading labeled "Contact Information" clearly indicates the section\'s content',
                'A heading labeled "Notifications" clearly indicates the section for user alerts in the settings page',
              ],
              methods: ["Use descriptive heading elements to organize your page content", "Use heading elements to label groups of related content"],
              resources: [
                {
                  label: "MDN - Headings",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
                },
              ],
            },
          },
          {
            label: "2.4.11 - Focus Not Obscured (Minimum)",
            level: "AA",
            difficulty: "normal",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum",
              goal: "Ensure when an item gets keyboard focus, it is at least partially visible",
              description: "When the user focuses an element, this element is at least partially visible in the viewport.",
              descriptionList: [],
              examples: ["The user focuses a link below the bottom of the viewport, the page scrolls to make the link visible"],
              methods: ["When changing elements position, ensure they do not completely obscure focused elements"],
              resources: [],
            },
          },
          {
            label: "2.4.12 - Focus Not Obscured (Enhanced)",
            level: "AAA",
            difficulty: "normal",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced",
              goal: "Ensure when an item gets keyboard focus, it is fully visible",
              description: "When the user focuses an element, this element is fully visible in the viewport.",
              descriptionList: [],
              examples: ["The user focuses a link below the bottom of the viewport, the page scrolls to make the link visible"],
              methods: ["When changing elements position, ensure they do not obscure focused elements"],
              resources: [],
            },
          },
          {
            label: "2.4.13 - Focus Appearance",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance",
              goal: "Use a focus indicator of sufficient size and contrast",
              description: "The focus indicator is at least 2px wide and has a contrast ratio of at least 3:1 against the adjacent background, except when:",
              descriptionList: [
                "The focus indicator is determined by the user agent and cannot be adjusted by the author",
                "The focus indicator and the indicator's background color are not modified by the author",
              ],
              examples: ["The focus indicator is 2px wide and is black, against a white background"],
              methods: [
                "Use at least 2px on <code>outline-width</code> for focus indicators",
                "Make sure focus indicators have a contrast ratio of at least 3:1 against the background",
              ],
              resources: [
                {
                  label: "Sara Soueidan - A guide to designing focus indicators",
                  path: "https://www.sarasoueidan.com/blog/focus-indicators",
                },
                {
                  label: "MDN - outline-width",
                  path: "https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width",
                },
              ],
            },
          },
        ],
      },
      {
        label: "2.5 - Input Modalities",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/input-modalities",
        description: "Make it easier for users to operate functionality through various inputs beyond keyboard.",
        children: [
          {
            label: "2.5.1 - Pointer Gestures",
            level: "A",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures",
              goal: "Provide single-point operation for all functions",
              description: "All actions can be done using a single pointer (e.g. keypress, tap, click).",
              descriptionList: [],
              examples: [
                "A map supports pinch-to-zoom, but also provides a button to zoom in and out",
                "A carousel supports swiping to change slides, but also provides buttons to change slides",
                "A kanban supports dragging cards to change their order, but also provides buttons to move cards up and down",
              ],
              methods: ["Provide buttons or other controls that can be activated with a single tap or click"],
              resources: [],
            },
          },
          {
            label: "2.5.2 - Pointer Cancellation",
            level: "A",
            difficulty: "normal",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation",
              goal: "Make pointer cancellation predictable and consistent",
              description: "For all pointer actions, at least one of the following is true:",
              descriptionList: [
                "<b>No Down-Event</b> - The action is not triggered by a down-event",
                "<b>Abort or Undo</b> - The action can be aborted or undone before completion",
                "<b>Essential</b> - Completing the function on the down-event is essential",
              ],
              examples: [
                "The user clicks a button to submit a form, but can drag the pointer away from the button before releasing the mouse button to cancel the action",
                "The user presses a key to start a video, but can press the escape key to cancel the action before the video starts",
                "A virtual piano key will play a sound as soon as the key is pressed",
              ],
              methods: [
                "Use <code>keyup</code> or <code>mouseup</code> events instead of <code>keydown</code> or <code>mousedown</code>",
                "Provide a way to cancel the action mid-way through, such as a drag or an escape keypress",
              ],
              resources: [
                {
                  label: "MDN - keyup Event",
                  path: "https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event",
                },
                {
                  label: "MDN - keydown Event",
                  path: "https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event",
                },
                {
                  label: "MDN - mouseup Event",
                  path: "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event",
                },
                {
                  label: "MDN - mousedown Event",
                  path: "https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event",
                },
              ],
            },
          },
          {
            label: "2.5.3 - Label in Name",
            level: "A",
            difficulty: "easy",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name",
              goal: "Where practical, make the control's text label and accessible name match",
              description: "Make sure the accessible name of a component matches or starts with its visible label.",
              descriptionList: [],
              examples: [
                'A button with the text "Submit" has an accessible name of "Submit".',
                'A search bar with the label "Search" has an accessible name of "Search for a product".',
              ],
              methods: [
                "Avoid duplicating visible labels and other accessible names",
                "If using different means to label a control, ensure the accessible name matches or starts with the visible label",
              ],
              resources: [],
            },
          },
          {
            label: "2.5.4 - Motion Actuation",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation",
              goal: "Do not rely solely on device motion to control page content",
              description: "If your page uses motion features, you provide a non-motion alternative and you allow the user to disable them, except when:",
              descriptionList: [
                "<b>Supported Interface</b> - The motion is part of an accessibility supported interface",
                "<b>Essential</b> - The motion is essential for the function and doing so would invalidate the activity",
              ],
              examples: [
                "Shaking the device can empty a text field, but the user can also click a button to clear the field",
                "Tilting the device can navigate between pages, but the user can turn that feature off",
              ],
              methods: [
                "Provide a non-motion alternative for any functionality that relies on motion",
                "Allow users to disable motion features",
                "Do not interfere if the feature is a native accessibility feature of the device",
              ],
              resources: [],
            },
          },
          {
            label: "2.5.5 - Target Size (Enhanced)",
            level: "AAA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced",
              goal: "Make custom targets at least 44px by 44px",
              description: "Interactive elements must have a minimum target size of 44px by 44px, except when:",
              descriptionList: [
                "<b>Equivalent</b> - The element has a duplicate on the same page that meets this requirement",
                "<b>Inline</b> - The element is in a block of text",
                "<b>User Agent Control</b> - The element is a native control and is not modified by the author",
                "<b>Essential</b> - The current presentation of the element is essential",
              ],
              examples: [
                "A button is at least 44px by 44px in size",
                "A button is smaller, but has sufficient space around it to allow for a 44px by 44px target",
                "A button is smaller, but there is a duplicate on the same page that meets the requirement",
                "A link is part of a sentence and its size is constrained by the line-height of the text",
              ],
              methods: [
                "Use a minimum size of 44px by 44px for interactive elements",
                "<em>OR</em> ensure that the element has sufficient space around it to allow for a 44px by 44px target",
                "<em>OR</em> provide an equivalent control on the same page that meets the requirement",
              ],
              resources: [
                {
                  label: "Ahmad Shadeed - Designing better target sizes",
                  path: "https://ishadeed.com/article/target-size/",
                },
              ],
            },
          },
          {
            label: "2.5.6 - Concurrent Input Mechanisms",
            level: "AAA",
            difficulty: "easy",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms",
              goal: "Do not prevent users from switching their mode of input",
              description: "Your content must be usable by multiple input methods.",
              descriptionList: [],
              examples: [
                "The user can navigate a page with the keyboard, then use a mouse to click a button",
                "The user can use a touchscreen to tap a button, then use a keyboard to type in a text field",
              ],
              methods: ["Do not restrict users to a single input method"],
              resources: [],
            },
          },
          {
            label: "2.5.7 - Dragging Movements",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements",
              goal: "For any action that involves dragging, provide a simple pointer alternative",
              description: "If your page has a dragging feature, provide an alternative.",
              descriptionList: [],
              examples: [
                "The user can drag a card to move it, but can also click a button to move it up or down",
                "The user can drag a slider to change the volume, but can also click the slider",
              ],
              methods: ["Provide alternatives for dragging actions"],
              resources: [],
            },
          },
          {
            label: "2.5.8 - Target Size (Minimum)",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum",
              goal: "Make custom targets at least 24px by 24px",
              description: "Interactive elements must have a minimum target size of 24px by 24px, except when:",
              descriptionList: [
                "<b>Equivalent</b> - The element has a duplicate on the same page that meets this requirement",
                "<b>Inline</b> - The element is in a block of text",
                "<b>User Agent Control</b> - The element is a native control and is not modified by the author",
                "<b>Essential</b> - The current presentation of the element is essential",
              ],
              examples: [
                "A button is at least 24px by 24px in size",
                "A button is smaller, but has sufficient space around it to allow for a 24px by 24px target",
                "A button is smaller, but there is a duplicate on the same page that meets the requirement",
                "A link is part of a sentence and its size is constrained by the line-height of the text",
              ],
              methods: [
                "Use a minimum size of 24px by 24px for interactive elements",
                "<em>OR</em> ensure that the element has sufficient space around it to allow for a 24px by 24px target",
                "<em>OR</em> provide an equivalent control on the same page that meets the requirement",
              ],
              resources: [
                {
                  label: "Ahmad Shadeed - Designing better target sizes",
                  path: "https://ishadeed.com/article/target-size/",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    label: "3 - Understandable",
    children: [
      {
        label: "3.1 - Readable",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/readable",
        description: "Make text content readable and understandable.",
        children: [
          {
            label: "3.1.1 - Language of Page",
            level: "A",
            difficulty: "easy",
            teams: ["code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page",
              goal: "Indicate the predominant language on a page",
              description: "Indicate the language of the page in the HTML markup so a screen reader can read it correctly.",
              descriptionList: [],
              examples: ['An english page has the <code>lang</code> attribute set to "en"'],
              methods: [
                "Use the <code>lang</code> attribute in the HTML tag to specify the language of the page",
                "Use a 2-letter language code from ISO-639 Set 1 and do not specify a region or country",
              ],
              resources: [
                {
                  label: "MDN - Lang Attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang",
                },
                {
                  label: "Wikipedia - ISO 639-1 Codes",
                  path: "https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes",
                },
              ],
            },
          },
          {
            label: "3.1.2 - Language of Parts",
            level: "AA",
            difficulty: "easy",
            teams: ["content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts",
              goal: "Indicate when words are in a different language",
              description:
                "If different from the page language, indicate the language of a piece of content in the HTML markup, except for proper names, technical terms and common-use words or phrases.",
              descriptionList: [],
              examples: [
                'A german word in an english page has the <code>lang</code> attribute set to "de"',
                'The french word "rendez-vous" in an english page does not need a <code>lang</code> attribute',
              ],
              methods: [
                "Use the <code>lang</code> attribute in the HTML tag to specify the language of a piece of content",
                "Use a 2-letter language code from ISO-639 Set 1 and do not specify a region or country",
                "If the attribute can not be used (e.g. in a text editor), give a translation or a definition of the word",
              ],
              resources: [
                {
                  label: "MDN - Lang Attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang",
                },
                {
                  label: "Wikipedia - ISO 639-1 Codes",
                  path: "https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes",
                },
              ],
            },
          },
          {
            label: "3.1.3 - Unusual Words",
            level: "AAA",
            difficulty: "easy",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/unusual-words",
              goal: "Provide definitions for technical jargon and unusual terms",
              description: "If your content uses unusual words or phrases, provide a way for users to find their meaning.",
              descriptionList: [],
              examples: ["A word that is not commonly used is followed by a definition or a link to its meaning"],
              methods: [
                "Provide a definition or a link to the meaning of unusual words or phrases",
                "Use a glossary or a dictionary to explain technical jargon",
              ],
              resources: [],
            },
          },
          {
            label: "3.1.4 - Abbreviations",
            level: "AAA",
            difficulty: "easy",
            teams: ["content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/abbreviations",
              goal: "Provide the expanded form of abbreviations to users",
              description: "If your content uses abbreviations, provide a way for users to find their meaning.",
              descriptionList: [],
              examples: ["An abbreviation like 'HTML' is followed by its expanded form 'HyperText Markup Language'"],
              methods: [
                "Provide the expanded form of abbreviations in the content when they are first used",
                "Use a glossary or a dictionary to explain abbreviations",
                "You can use the <code>abbr</code> HTML element to mark up abbreviations",
              ],
              resources: [
                {
                  label: "MDN - Abbr Element",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",
                },
              ],
            },
          },
          {
            label: "3.1.5 - Reading Level",
            level: "AAA",
            difficulty: "hard",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level",
              goal: "When text information becomes complex, create a more easily understood version",
              description:
                "If your content requires an advanced reading ability (≃10 years old) after removal of proper names and titles, a simplified version is available.",
              descriptionList: [],
              examples: [
                "A research paper provides a simplified summary for the general public",
                "A legal document provides a link to a plain language version",
              ],
              methods: [
                "Use plain language and avoid complex vocabulary",
                "<em>OR</em> provide a summary or an overview of the content",
                "<em>OR</em> create a simplified version of the content that is easier to understand",
              ],
              resources: [],
            },
          },
          {
            label: "3.1.6 - Pronunciation",
            level: "AAA",
            difficulty: "easy",
            teams: ["content"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/pronunciation",
              goal: "Indicate how to pronounce a word, where its meaning is otherwise unclear",
              description: "If your content contains unusual or ambiguous words or phrases, provide a way for users to find their pronunciation.",
              descriptionList: [],
              examples: [
                'The word "quinoa" is followed by its phonetic pronunciation "(pronounced <em>keen-wah</em>)"',
                'The word "lead" is followed by its phonetic pronunciation "(pronounced <em>leed</em>)" when it means to guide, and "(pronounced <em>led</em>)" when it means the metal',
              ],
              methods: ["Provide the phonetic pronunciation of unusual or ambiguous words or phrases"],
              resources: [],
            },
          },
        ],
      },
      {
        label: "3.2 - Predictable",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/predictable",
        description: "Make web pages appear and operate in predictable ways.",
        children: [
          {
            label: "3.2.1 - On Focus",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/on-focus",
              goal: "Do not change the user's context when items get focus",
              description: "When any component receives focus, it does not trigger any action.",
              descriptionList: [],
              examples: [
                "The user goes in a links menu with the keyboard, focusing a link does not change the page",
                "The user focuses on a button, the button does not trigger its action",
              ],
              methods: ["Do not trigger actions on focus (tab key) events"],
              resources: [],
            },
          },
          {
            label: "3.2.2 - On Input",
            level: "A",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/on-input",
              goal: "Warn users if their context will change based on their input",
              description: "When a form field is used, it does not trigger any surprising change.",
              descriptionList: [],
              examples: [
                "Selecting an option in a form dropdown does not change the page",
                "Checking a checkbox does not submit a form",
                "Checking a checkbox can show or hide additional fields",
              ],
              methods: ["Do not trigger big changes on input events"],
              resources: [],
            },
          },
          {
            label: "3.2.3 - Consistent Navigation",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation",
              goal: "Consistently order navigation that repeats across multiple pages",
              description:
                "Navigation links that are repeated on multiple pages should stay in the same order and location, unless the user has initiated the change.",
              descriptionList: [],
              examples: [
                "The website always displays the search bar at the same location",
                "The main navigation always has the same links in the same order",
                "A navigation content depending on the current products category will change if the user changes the category",
              ],
              methods: [
                "Use the same location for navigation items across multiple pages",
                "Use the same order for navigation items across multiple pages",
                "Do not change the content of a navigation unless the user has initiated the change",
              ],
              resources: [],
            },
          },
          {
            label: "3.2.4 - Consistent Identification",
            level: "AA",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification",
              goal: "Identify repeating functions consistently",
              description: "If an element is repeated on multiple pages, it has the same accessible name.",
              descriptionList: [],
              examples: [
                "A button that creates a new item is always labeled 'Create new xxx'",
                "A link that goes to the contact page is always labeled 'Contact us'",
              ],
              methods: [
                "Use the same label for the same element across multiple pages",
                "Use the same accessible name for the same element across multiple pages",
              ],
              resources: [],
            },
          },
          {
            label: "3.2.5 - Change on Request",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/change-on-request",
              goal: "Provide ways for users to trigger or turn off changes of context",
              description: "The user must stay in control of changes of context, and can request or turn off changes.",
              descriptionList: [],
              examples: ['The user can turn off auto-updates in a feed, and use a "Refresh" button to update manually'],
              methods: ["Do not trigger changes of context automatically", "Provide a way for the user to request changes of context"],
              resources: [],
            },
          },
          {
            label: "3.2.6 - Consistent Help",
            level: "A",
            difficulty: "easy",
            teams: ["design"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help",
              goal: "Put help in the same place when it is on multiple pages",
              description:
                "When the web page contains any of the following help tools, they are displayed in the same location and order, unless the user has initiated the change:",
              descriptionList: [
                "<b>Human contact details</b> - email, phone number...",
                "<b>Human contact mechanism</b> - chat, contact form...",
                "<b>Self-help option</b> - FAQ, Wiki, resource link...",
                "<b>A fully automated contact mechanism</b> - chatbot",
              ],
              examples: [
                "A website has a contact form in the footer of every page",
                "A website has a chat button in the bottom right corner of every page",
                "A website has a FAQ link in the header of every page",
                "The user can drag the chat button to a different location, and it will stay there across pages",
              ],
              methods: [
                "Use the same location for help tools across multiple pages",
                "Use the same order for help tools across multiple pages",
                "Do not change the location of a help tool unless the user has initiated the change",
              ],
              resources: [],
            },
          },
        ],
      },
      {
        label: "3.3 - Input Assistance",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/input-assistance",
        description: "Help users avoid and correct mistakes.",
        children: [
          {
            label: "3.3.1 - Error Identification",
            level: "A",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification",
              goal: "Provide descriptive notification of errors",
              description: "If the user makes a mistake while completing a form, identify where the error is and explain it.",
              descriptionList: [],
              examples: [
                "The user has entered an invalid email address, the email field becomes red and an error message is displayed below",
                "The user has made several mistakes in a long form, the fields display errors and a summary of the errors is displayed at the top of the form",
              ],
              methods: [
                "When the field has an error, link the error message to the field using <code>aria-describedby</code>",
                "User the <code>aria-invalid</code> attribute to indicate that the field has an error",
                "Style the field and the error message so it is easy to locate the error visually (not just with color)",
                "If the form is long, consider displaying a summary of the errors at the top of the form",
                "Use the <code>alert</code> role on error messages and summary for assistive technologies",
                "Do not identify errors on fields before submission if the user has not interacted with them",
              ],
              resources: [
                {
                  label: "GOV.UK Design System - Error message",
                  path: "https://design-system.service.gov.uk/components/error-message",
                },
                {
                  label: "GOV.UK Design System - Error summary",
                  path: "https://design-system.service.gov.uk/components/error-summary",
                },
                {
                  label: "MDN - aria-invalid",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid",
                },
                {
                  label: "MDN - aria-describedby",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",
                },
                {
                  label: "MDN - Alert role",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role",
                },
              ],
            },
          },
          {
            label: "3.3.2 - Labels or Instructions",
            level: "A",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions",
              goal: "Provide labels or instructions for inputs",
              description: "Use labels and hints to explain how the user should fill the form.",
              descriptionList: [],
              examples: [
                "A field has a label that describes what the user should enter",
                "A checkbox has a label that describes what it does",
                "A name field explains what is expected (e.g. full name, first name...)",
                "A password field has an instruction that explains the requirements",
              ],
              methods: [
                "Use the <code>label</code> element to associate labels with form fields",
                "Try not to visually hide labels, as they help users understand the form",
                "Do not use placeholder texts as labels, as they disappear and are not accessible",
                "Use <code>required</code> on native elements or <code>aria-required</code> on custom elements",
                "Indicate which fields are required (<em>OR</em> which are optional) using a visual indicator",
                "When the field has hint, link the hint text to the field using <code>aria-describedby</code>",
                "Use <code>fieldset</code> and <code>legend</code> <em>OR</em> role <code>group</code> to group related fields",
              ],
              resources: [
                {
                  label: "MDN - Label element",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label",
                },
                {
                  label: "MDN - required",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required",
                },
                {
                  label: "MDN - aria-required",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required",
                },
                {
                  label: "MDN - aria-describedby",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",
                },
                {
                  label: "MDN - Fieldset element",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset",
                },
                {
                  label: "MDN - Group role",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role",
                },
              ],
            },
          },
          {
            label: "3.3.3 - Error Suggestion",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion",
              goal: "Where errors are detected, suggest known ways to correct them",
              description: "If the user makes a mistake while completing a form, give them suggestions on how to fix it.",
              descriptionList: [],
              examples: [
                'For an invalid email field with no hint text, the error says "Enter a valid email address (e.g. jane@wong.com)"',
                'For an password field with a hint text that specifies the requirements, the error says "The password must meet the requirements"',
              ],
              methods: [
                'Do not use words like "forbidden" or "you forgot"',
                'Do not use humorous words like "oops" or say "please"',
                "Do not use technical jargon that the user may not understand",
                "If there was a hint text, refer to it in the error message",
                "Clearly indicate what is wrong (e.g. too long, too short, empty...)",
                "If the error is in a sign in form, do not indicate which part is wrong (e.g. email or password) to avoid security issues",
              ],
              resources: [
                {
                  label: "GOV.UK Design System - Error message",
                  path: "https://design-system.service.gov.uk/components/error-message",
                },
              ],
            },
          },
          {
            label: "3.3.4 - Error Prevention (Legal, Financial, Data)",
            level: "AA",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data",
              goal: "Provide ways for users to confirm, correct, or reverse important submissions",
              description: "If the user is making a financial transaction, legal commitment, or updating personal data, at least one of the following is true:",
              descriptionList: [
                "<b>Reversible</b> - The user can reverse the submission",
                "<b>Checked</b> - The data is checked automatically and the user can correct them before submitting",
                "<b>Confirm</b> - The user can review, correct, and confirm their information before submitting",
              ],
              examples: [
                "The user is making a payment, they can review the payment details before confirming",
                "The user is signing a contract, an alert is displayed, asking them to confirm their decision",
              ],
              methods: [
                "Provide a way for the user to reverse the process after submission for a certain period of time",
                "<em>OR</em> display a confirmation page before finalizing that allows them to correct their information",
              ],
              resources: [],
            },
          },
          {
            label: "3.3.5 - Help",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "content", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/help",
              goal: "Provide help to users on the function currently being performed",
              description: "The user can access help when completing a form or a process.",
              descriptionList: [],
              examples: [
                "The user is filing their taxes online, a help tooltip is available next to each field",
                "The user is asked about their skin type on a makeup website, a chart is displayed next to the field",
                "The user is buying a shirt, a size guide link is available next to the size field",
              ],
              methods: [
                "For non-trivial forms, provide a help link, tooltip, or description next to each field",
                "For complex processes, provide a help link or tooltip on each step",
              ],
              resources: [],
            },
          },
          {
            label: "3.3.6 - Error Prevention (All)",
            level: "AAA",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all",
              goal: "Provide ways for users to confirm, correct, or reverse any submissions",
              description: "If the user submitting a form, at least one of the following is true:",
              descriptionList: [
                "<b>Reversible</b> - The user can reverse the submission",
                "<b>Checked</b> - The data is checked automatically and the user can correct them before submitting",
                "<b>Confirm</b> - The user can review, correct, and confirm their information before submitting",
              ],
              examples: [
                "The user is making a payment, they can review the payment details before confirming",
                "The user is signing a contract, an alert is displayed, asking them to confirm their decision",
                "The user is filling their profile information, they can review and correct their information before submitting",
              ],
              methods: [
                "Provide a way for the user to reverse the process after submission for a certain period of time",
                "<em>OR</em> display a confirmation page before finalizing that allows them to correct their information",
              ],
              resources: [],
            },
          },
          {
            label: "3.3.7 - Redundant Entry",
            level: "A",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry",
              goal: "Do not ask for the same information twice in the same session",
              description:
                "If the user has already given a piece of information, it will be auto-filled or selectable the next time they have to give it, except when:",
              descriptionList: [
                "Re-entering the information is essential",
                "The information is required to ensure the security of the content",
                "Previously entered information is no longer valid",
              ],
              examples: [
                "The next time the user has to enter their email address, it is auto-filled",
                "The next time the user has to enter their shipping address, it is suggested in a dropdown",
                "A credit card security code must be entered every time for security reasons",
                "A code verification sent by email expires when it is used (or after a period of time)",
                "The user must type the name of the Github repository they want to delete",
              ],
              methods: [
                "Use the <code>autocomplete</code> attribute on form fields to enable auto-fill",
                "Use the <code>datalist</code> element to provide suggestions for previously entered information",
              ],
              resources: [
                {
                  label: "MDN - Autocomplete attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",
                },
                {
                  label: "MDN - Datalist element",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist",
                },
              ],
            },
          },
          {
            label: "3.3.8 - Accessible Authentication (Minimum)",
            level: "AA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum",
              goal: "Do not make people solve, recall, or transcribe something to sign in",
              description: "When the user signs in, do not ask them to pass a test (solve a puzzle or remember their password), unless:",
              descriptionList: [
                "<b>Alternative</b> - You provide an alternative authentication method (e.g. magic link, OAuth...)",
                "<b>Mechanism</b> - You enable a mechanism to assist the user (e.g. auto-fill, 2FA, passkeys...)",
                "<b>Object Recognition</b> - The test is to recognize objects",
                "<b>Personal Content</b> - The test is to recognize user-supplied images or media",
              ],
              examples: [
                "The user must solve a puzzle to sign in, but they can also sign in with a magic link",
                "The user must remember their password to sign in, but they can also sign in with a fingerprint",
                "The user must recognize objects in a picture to sign in",
                "The user can use a password manager to fill their password automatically",
              ],
              methods: [
                "Do not block pasting values in the sign in form",
                "Use the <code>autocomplete</code> attribute on form fields to enable auto-fill",
                "Use the <code>inputmode</code> attribute to indicate the type of input expected (e.g. numeric, email...)",
                "If possible, use mechanisms such as Fingerprint, Face ID, or Passkeys for authentication",
                "If you use a CAPTCHA, make sure it is accessible and provides an alternative method",
              ],
              resources: [
                {
                  label: "MDN - Autocomplete attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",
                },
                {
                  label: "MDN - Inputmode attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode",
                },
              ],
            },
          },
          {
            label: "3.3.9 - Accessible Authentication (Enhanced)",
            level: "AAA",
            difficulty: "easy",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced",
              goal: "Do not make people recognize objects or user-supplied images and media to sign in",
              description: "When the user signs in, do not ask them to pass a test (solve a puzzle or remember their password), unless:",
              descriptionList: [
                "<b>Alternative</b> - You provide an alternative authentication method (e.g. magic link, OAuth...)",
                "<b>Mechanism</b> - You enable a mechanism to assist the user (e.g. auto-fill, 2FA, passkeys...)",
              ],
              examples: [
                "The user must solve a puzzle to sign in, but they can also sign in with a magic link",
                "The user must remember their password to sign in, but they can also sign in with a fingerprint",
                "The user can use a password manager to fill their password automatically",
              ],
              methods: [
                "Do not block pasting values in the sign in form",
                "Use the <code>autocomplete</code> attribute on form fields to enable auto-fill",
                "Use the <code>inputmode</code> attribute to indicate the type of input expected (e.g. numeric, email...)",
                "If possible, use mechanisms such as Fingerprint, Face ID, or Passkeys for authentication",
              ],
              resources: [
                {
                  label: "MDN - Autocomplete attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",
                },
                {
                  label: "MDN - Inputmode attribute",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    label: "4 - Robust",
    children: [
      {
        label: "4.1 - Compatible",
        documentation: "https://www.w3.org/WAI/WCAG22/Understanding/compatible",
        description: "Maximize compatibility with current and future user agents, including assistive technologies.",
        children: [
          {
            label: "4.1.1 - Parsing (Obsolete and Removed)",
            level: "A",
            difficulty: "easy",
            teams: ["code"],
            content: {
              warning: "This success criterion has been removed from WCAG 2.2. It is included here for reference only",
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/parsing",
              goal: "Create web pages according to HTML standards",
              description:
                "The markup does not contain errors that cause conflicts with assistive technologies (incorrect nesting, missing end tags, duplicate id attributes...).",
              descriptionList: [],
              examples: [],
              methods: [],
              resources: [],
            },
          },
          {
            label: "4.1.2 - Name, Role, Value",
            level: "A",
            difficulty: "hard",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value",
              goal: "Give components correct accessible names, roles, states, and values",
              description:
                "Components have accessible names and roles, and show their state and value to assistive technologies, even when they change dynamically.",
              descriptionList: [],
              examples: [
                "A <code>button</code> with no visible label has an accessible name that is announced by screen readers",
                "A custom <code>tabs</code> component has a <code>tablist</code> role and each tab has a <code>tab</code> role",
                "A toggle <code>button</code> has an <code>aria-pressed</code> attribute that indicates whether it is pressed or not",
              ],
              methods: [
                "Always prefer native HTML elements, as they come with built-in accessibility features",
                "Always prefer to display visual labels for your components",
                "Link your form fields to <code>label</code> elements (you can hide them visually if needed)",
                "Use <code>aria-labelledby</code> to link existing text labels (you can hide them visually if needed)",
                "Avoid <code>aria-label</code> and <code>title</code> as it is not always announced or translated by browsers",
                "Use the correct <code>role</code> for custom elements",
                "Use the correct ARIA attributes to convey state and value",
              ],
              resources: [
                {
                  label: "MDN - HTML elements",
                  path: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements",
                },
                {
                  label: "MDN - WAI-ARIA roles",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles",
                },
                {
                  label: "MDN - WAI-ARIA attributes",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes",
                },
              ],
            },
          },
          {
            label: "4.1.3 - Status Messages",
            level: "AA",
            difficulty: "normal",
            teams: ["design", "code"],
            content: {
              documentation: "https://www.w3.org/WAI/WCAG22/Understanding/status-messages",
              goal: "Let assistive technology notify users about status changes that do not take focus",
              description:
                "If your web page uses notifications or status messages that do not take focus, they are still announced by assistive technologies, even when they change dynamically.",
              descriptionList: [],
              examples: [
                "When the user tries to submit an incomplete form, an error message appears",
                "The user receives a new message in a chat application",
                "The user deletes an item from a list, a confirmation message appears",
                "A search action returns results in a section below the search bar",
                "A progress bar shows the status the the current upgrade",
              ],
              methods: [
                "Use the role <code>status</code> for a successful message",
                "Use the role <code>alert</code> for an error or warning message",
                "Use the role <code>log</code> for sequential messages that do not require immediate attention",
                "Use the role <code>progressbar</code> for an error or warning message",
              ],
              resources: [
                {
                  label: "MDN - Status role",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role",
                },
                {
                  label: "MDN - Alert role",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role",
                },
                {
                  label: "MDN - Log role",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/log_role",
                },
                {
                  label: "MDN - Progressbar role",
                  path: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export { guidelines };
