---
name: "Franz Mozar: WordPress & Shopify Developer"
description: Dark, product-grade portfolio that shows client sites like shipped software.
colors:
  ground: "#0a0b0d"
  ground-raise: "#111317"
  panel: "#15181d"
  hairline: "#22262d"
  hairline-strong: "#323844"
  text: "#eceef1"
  text-soft: "#a3aab5"
  text-faint: "#8b929d"
  live-mint: "#3ddc97"
  live-mint-bright: "#5fe6ab"
  mint-ink: "#04130c"
  aurora-blue: "#5878ff"
  danger: "#ff7a7a"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.9rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.038em"
  feature:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.25rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 600
    lineHeight: 1.6
  meta:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.6
  wordmark:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.045em"
rounded:
  inset: "6px"
  control: "8px"
  surface: "10px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  container: "80rem"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
  hero-top: "clamp(3.5rem, 8vw, 6.5rem)"
  head-gap: "clamp(2rem, 4vw, 3rem)"
  panel-pad: "clamp(1.5rem, 3vw, 2.5rem)"
  card-pad: "clamp(1.5rem, 4vw, 3.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.live-mint}"
    textColor: "{colors.mint-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.live-mint-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.15rem"
  button-ghost-hover:
    backgroundColor: "{colors.ground-raise}"
  button-submit:
    backgroundColor: "{colors.live-mint}"
    textColor: "{colors.mint-ink}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1rem"
  button-submit-sent:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0.7rem 0.85rem"
  segmented-option:
    backgroundColor: "transparent"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.4rem"
  work-frame:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.surface}"
    padding: "6px"
  panel:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.surface}"
    padding: "{spacing.panel-pad}"
  contact-card:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.surface}"
    padding: "{spacing.card-pad}"
  sample-tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.inset}"
    padding: "0.05rem 0.5rem"
  tool-tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.inset}"
    padding: "0.3rem 0.7rem"
  nav-bar:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text-soft}"
    height: "4rem"
---

# Design System: Franz Mozar

## Overview

**Creative North Star: "The Shipped Build"**

The portfolio presents client work the way a software company presents its product: real sites in clean browser frames, set on near-black, lit by one mint "live" signal. Everything around the work is graphite, hairline and off-white so the sites carry the colour. The world is category-standard dark tech, chosen by the user and played straight at full craft rather than themed.

The page is held together by one structure rather than many effects. A single grid spine (two edge rails and a centre line, each carrying a slow travelling light beam) runs the full height of the page behind every band; headings and the lead work caption respect its centre line. Bands are told apart by one band rule (raised bands carry dots and a glowing top hairline, all others a plain hairline) and every surface speaks one shape language (10px frames and panels, 6 to 8px controls and tags). Over that sits a user-requested atmosphere layer: film grain, drifting mint and blue aurora with a masked square grid in the hero, soft glows on primary actions, and a cursor spotlight on framed surfaces. Atmosphere is low-opacity, behind content and off under reduced motion. Density is generous: wide section padding, two-column grids, short copy.

Confirmed rejections: the colourful freelancer template and the themed costume (the estate-agent window direction was rejected as not professional enough).

**Key Characteristics:**
- Near-black ground with graphite tonal layers and 1px hairlines.
- One mint accent for action, focus, selection and "live" signals.
- Archivo, semibold, tight negative tracking, slightly wide (font-stretch 104%).
- Work shown in browser-style frames; the screenshots supply the colour.
- One page-wide grid spine with travelling beams; one band rule; one shape language.
- Ambient atmosphere (grain, aurora, grids, glows) that never sits on top of content.
- Motion on a single long ease-out curve; everything honours reduced motion.

## Colors

A cold, near-monochrome graphite palette with one saturated mint signal and a blue used only as light, never as UI.

### Primary
- **Live Mint** (`live-mint`, `--accent`): primary buttons, the submit button, focus outlines, text selection, caret, checked form options, the platform dot on work meta, the logo's full stop and icon dot, the portrait live dot, step nodes, the contact underline, approach cell rules, success status text. In translucent form it drives glows, beams, the band hairline and the spotlight.
- **Bright Mint** (`live-mint-bright`, `--accent-bright`): hover state of mint-filled buttons, and the hover colour of FAQ questions.
- **Mint Ink** (`mint-ink`, `--accent-ink`): text on mint fills, on selection, and the cursor's "Visit" label.

### Tertiary
- **Aurora Blue** (`aurora-blue`): atmosphere only, always as low-alpha light paired with mint: hero aurora (0.18), stack, about and contact glows (0.06 to 0.18), the portrait wash (0.16). A cooler `rgb(140,165,255)` runs in the centre-line beam, the band hairline gradient and the contact card's edge light; a grey-blue `rgb(170,190,225)` lights the window stack.

### Neutral
- **Ground** (`ground`): page background, platform cells, approach cells, fact cells, input fills, logo tile, marquee strip, footer; also the `theme-color`.
- **Raised Ground** (`ground-raise`): the raised bands (Services, FAQ), the FAQ list, the portrait's empty frame, approach cell hover, ghost-button hover.
- **Panel Graphite** (`panel`): work-frame, window and portrait bodies, and the sent-state submit button.
- **Hairline** (`hairline`): plain band tops, the grid spine, list rules, panel borders and dividers, the contact card's split.
- **Strong Hairline** (`hairline-strong`): control borders, window and portrait edges, FAQ rules, the step track, marquee dots, scrollbar thumb.
- **Text** (`text`): headings and primary copy.
- **Soft Text** (`text-soft`): ledes, nav links, form labels, supporting paragraphs.
- **Faint Text** (`text-faint`): notes, meta tags, footer, marquee, placeholders, list icons, hover border for controls.
- **Danger** (`danger`): invalid field borders, error messages, failed-send status.

### Named Rules
**The One Signal Rule.** Mint is the only interface colour. Anything that is clickable-primary, focused, selected or "live" is mint; nothing else is.

**The Light, Not Paint Rule.** Blue never fills a control or colours text. It exists only as light: glows, beams, the band hairline gradient and the card edge light, always alongside mint.

**The Content Carries Colour Rule.** Strong colour belongs to the work previews. Per-listing swatches (`swatch.ground / ink / accent` in the listings data) are content, not system palette; never promote them into the chrome. The drawn sample previews are placeholders for real screenshots.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui, sans-serif)
**Body Font:** Archivo Variable (same family)

**Character:** One grotesque throughout, opened slightly wide (font-stretch 104% on body, 108% in the wordmark) and set semibold (650) with tight negative tracking at heading sizes, which gives the product-launch precision without a second face.

### Hierarchy
- **Display** (650, clamp 2.6 to 4.9rem, line-height 1, -0.038em): the hero headline only, max 14ch, balanced wrap.
- **Feature** (650, clamp 2.4 to 4.25rem, 1, -0.04em): the contact card heading only, the page's biggest after the hero.
- **Headline** (650, clamp 2 to 3rem, 1.04, -0.03em): section titles (work, services, about, approach, FAQ).
- **Title** (650, clamp 1.6 to 2.1rem): platform panel heads. Smaller titles: 1.2rem work cards (1.35 to 1.6rem for the lead), 1.25rem approach cells, 1.1rem contact steps.
- **Lede** (400, clamp 1.08 to 1.25rem, 1.6): hero sub in soft text, max 42ch. The about intro runs 1.1rem with its first paragraph at 1.2rem in text colour; the contact sub runs 1.15rem.
- **Body** (400, 1.0625rem, 1.6): running copy, kept to 38 to 62ch.
- **Label** (600, 0.88rem): form labels and legends in soft text. Buttons run 600 to 650 at 0.9 to 1rem; FAQ questions 600 at 1.1rem.
- **Meta** (400, 0.92rem): work tags, captions, notes and footer (0.9rem) in faint or soft text.
- **Wordmark** (800, 1.3rem, 108% width, -0.045em): the logo only.

### Named Rules
**The Single Family Rule.** Archivo carries every role; hierarchy comes from size, weight 650 versus 400, and the three text tones.

**The Tight Heading Rule.** Every heading tracks negative (-0.03em; -0.038em at display, -0.04em at feature) with line-height at or under 1.04. Body text never tracks.

## Layout

Content sits in a centred container (`container`, 80rem) with a fluid gutter (`gutter`). Sections run in this order: Hero, Work, Services, About, Approach, FAQ, Contact, then the footer. Every band below the hero uses `section` padding; the hero opens with `hero-top` and ends in the full-bleed platform marquee.

**The grid spine.** One absolutely positioned spine spans the whole of `main`, aligned to the container: two edge rails and a centre line, 1px hairline, faded at the very top and bottom. Each carries a 220px light beam travelling its full length (mint on the rails at 16s and 24s, cool blue on the centre line at 20s, staggered starts). Content sits above it (z-index 2); the spine is z-index 1 and non-interactive. No band draws its own gridlines.

**Section heads.** The heading sits in the left half (max width 50% minus 2rem, so it stays left of the centre line) with its faint note stacked underneath (0.9rem gap, note max 40ch), then `head-gap` before content. FAQ uses the same stacked head as the left column of its two-column layout. The lead work card splits its title/meta and scope caption on the centre line.

Grids are two-up by default: hero copy beside the window stack (1fr / 1.05fr), work in two columns with the lead project spanning full width, two platform cells, portrait beside about copy, FAQ head beside the list, contact copy beside the form inside the card. Approach is three-up.

**Responsive.** At 960px the hero, about, FAQ and contact go single column, heading widths release, about copy moves above a narrower portrait (24rem), and the contact card's split turns horizontal. At 720px work, platforms, approach and facts go single column; the nav becomes a horizontally scrollable section menu on its own row under the logo and CTA (hairline above, hidden scrollbar, 0.9rem links); the spine drops its centre line and keeps only the edge rails, pulled out to half the gutter so they sit outside the text.

### Named Rules
**The One Spine Rule.** There is exactly one gridline system on the page: the edge rails and centre line. New bands sit on it; they never add their own column lines.

**The Band Rule.** Every band below the hero opens with a 1px hairline. Raised bands (ground-raise, with the masked dot grid) add a glowing mint-to-blue gradient hairline over the centre 70% (max 56rem) of that top edge; plain bands keep the hairline alone. The hero has no top rule.

## Elevation & Depth

Depth is tonal first: ground, raised ground and panel graphite stacked with hairlines. Real shadows are reserved for objects that float, the hero windows, the portrait and the contact card, and for mint glows that mark action or hover. Atmosphere (aurora, glows, grids, grain) adds light, not elevation.

### Shadow Vocabulary
- **Window lift** (`box-shadow: 0 2px 6px rgba(0,0,0,0.4), 0 40px 80px -30px rgba(0,0,0,0.85)`): hero browser windows, with a glass edge highlight (160deg white 0.12 gradient).
- **Portrait lift** (`box-shadow: 0 2px 6px rgba(0,0,0,0.4), 0 50px 90px -40px rgba(0,0,0,0.9), 0 0 80px -30px rgba(61,220,151,0.25)`): the about portrait, a window lift with a faint mint halo.
- **Card lift** (`box-shadow: 0 0 0 1px #22262d, 0 60px 120px -60px rgba(61,220,151,0.35), 0 30px 80px -40px rgba(0,0,0,0.9)`): the contact card; its hairline edge is drawn as part of the shadow.
- **Mint action glow** (`box-shadow: 0 0 0 1px rgba(61,220,151,0.4), 0 8px 28px -8px rgba(61,220,151,0.45)`): primary buttons at rest; stronger on hover.
- **Frame hover glow** (`box-shadow: 0 0 0 1px rgba(61,220,151,0.25), 0 30px 80px -40px rgba(61,220,151,0.4)`): work frames on hover.
- **Focus halo** (`box-shadow: 0 0 0 3px rgba(61,220,151,0.18)`): focused inputs; danger-tinted when invalid.
- **Band hairline glow** (`box-shadow: 0 0 18px 1px rgba(61,220,151,0.35)`): the glowing top hairline of raised bands.

### Named Rules
**The Flat Chrome Rule.** Panels, frames, grids and bands are flat at rest. Only floating objects (hero windows, portrait, contact card) carry a dark lift; everything else rises by glow in response to state.

**The Behind-Glass Rule.** Atmosphere layers are absolutely positioned, non-interactive and beneath content; grain is the only layer above, at 0.06 opacity in overlay blend.

## Shapes

Two radii carry the whole page. Frames, panels and cards are 10px (`--radius`): work frames, hero windows, the portrait, the platform panel, the approach grid, the fact grid and the contact card. Controls and tags are 6 to 8px: 8px for buttons, inputs and segmented options; 6px for screenshot insets, the portrait's inner frame, toolkit tags and the "Sample" tag. Nothing is pill-shaped; circles appear only as dots (platform dot, live dot, step nodes, marquee separators, cursor). Frames wrap screenshots with a thin 5 to 6px graphite margin, like a browser body. Borders are always 1px (1.5px on step nodes and the logo tile stroke).

### Named Rules
**The Two Radii Rule.** 10px for anything that frames content, 6 to 8px for anything you press or read as a tag. No 12, 14, 16, 18 or 24px corners and no pills.

## Components

### Buttons
Primary buttons are a mint gradient (bright mint to live mint) in mint ink, 650 weight, 8px radius, with an inner top highlight, a 1px mint edge, a soft mint glow below and a ring that breathes out every 3.2s; a white light sweeps across them every 5.5s. On hover they lift 2px, brighten and the glow widens; the arrow nudges right. Ghost buttons are a strong-hairline outline on a faint glass fill that turns mint-edged with a soft mint glow and mint text on hover. Sizes: default (0.85rem x 1.35rem padding, 1rem text) for the top bar, and large `.btn-lg` (1.05rem x 1.8rem, 1.08rem text) for the hero pair and the full-width Send enquiry button. Reduced motion turns off the breathing ring, the sweep and the lift.
### Tags
- **Sample tag:** 6px corners, strong-hairline border, soft text, 0.72rem 600 uppercase at 0.06em tracking. An honest state label on placeholder work, never a section label.
- **Toolkit tags:** 6px corners, strong-hairline border, 0.02 white wash, soft text at 0.88rem; hover turns the edge mint (0.5) and the text full colour.

### Cards / Containers
- **Work frame:** panel graphite body, 1px hairline, 10px radius, 6px inset around a 16:10 screenshot (6px inner radius). Hover: border strengthens, mint frame glow, white cursor spotlight (360px, 0.1), and the screenshot scales to 1.025 over 1.2s.
- **Work meta:** title row with optional sample tag, then a mint dot before the platform name in text, type and year in faint meta, scope in soft text. The lead card sets meta and scope side by side on the centre line.
- **Hairline panels (platforms, approach, facts):** one 10px container with a 1px hairline, cells on ground divided by 1px hairlines (or 1px gaps over a hairline fill). Platforms and approach carry the mint cursor spotlight (420px radial, 0.08) on hover.
- **Hairline lists:** platform checklists divide items with 1px hairline rules; check icons are inline SVG in faint text.

### Inputs / Fields
- **Style:** ground fill, strong-hairline border, 8px radius, `0.7rem 0.85rem`, 1rem text; labels above in soft label type.
- **Focus:** border turns mint with the mint focus halo (outline removed in favour of the halo).
- **Error:** danger border and danger halo, error text below in 0.88rem danger. Validation runs on blur and submit.
- **Segmented choice:** radio options as equal-width 8px tiles; checked is mint border, text colour and mint 0.08 tint.

### Navigation
Sticky 4rem bar, ground at 0.86 alpha with saturate and 12px blur, hairline bottom border. Logo left, links pushed right in soft text at 0.95rem brightening to text on hover, compact primary CTA at the end. Under 720px the bar wraps: logo and CTA on the first row, the links as a scrollable section menu on a second row under a hairline.

### Logo
Lowercase wordmark "franzmozar" in the wordmark type, ending in a mint full stop with a soft glow (12px, 0.7) that brightens (18px, 1) when the home link is hovered. The compact icon is a drawn "fm." (letters scaled to 82% inside a 48-unit tile, 11-unit radius, ground fill, 1.5-unit strong-hairline border, 5-unit text-colour strokes, round joins, butt ends) with a mint dot; it is used in the footer at 22px, as the favicon and for avatars. Never capitalise the wordmark, add a space, recolour the letters, or move the stop.

### Browser Window Stack (signature)
Three offset windows (78%, 64%, 46% wide) in the hero, each a 10px panel-graphite frame with a 5px margin, strong-hairline edge, window lift and glass edge. They rise in staggered on load (1100ms, 120ms steps), float idly (7 to 9s), and shift in depth against the pointer at different rates for parallax, over a breathing mint/blue glow and a grey-blue light source.

### Platform Marquee
A slow (120s) horizontal ticker of platforms and services in faint 500-weight 0.95rem text, separated by 4px strong-hairline dots, on a ground strip with a hairline top at the foot of the hero, edge-masked, paused on hover.

### Portrait Frame
The About photo sits in a 4:5 frame: 10px panel-graphite outer with a 6px margin and strong-hairline edge, 6px inner frame on raised ground with a soft blue wash, portrait lift, mint cursor spotlight, and a caption row led by a pulsing mint live dot (2.4s). No corner brackets or viewfinder ticks. With no photo yet it shows a person outline and "Your photo goes here" in faint text.

### Fact Grid and Toolkit
Label/value facts in a 2-column hairline grid inside a 10px container (1 column under 720px; an odd last fact spans the row): faint 0.85rem label, 600-weight value. Toolkit tags follow below (see Tags).

### Approach Panel Grid
Six principles in a 3-column grid separated by 1px hairline gaps inside one 10px container (1 column under 720px). Each cell opens with a short 28px mint rule with a soft glow that lengthens to 56px on hover, and the cell lifts to raised ground on hover.

### FAQ Accordion
Native `details`/`summary` items sharing one name (one open at a time, first open by default) on a raised band, ruled with strong hairlines, beside the stacked FAQ head. Question in 1.1rem 600 weight, turning bright mint on hover; the plus icon rotates 45deg into a mint cross when open, and the answer rises in (500ms).

### Contact Card (closing signature)
The contact section is one 10px card on a deep graphite gradient lit mint top-left and blue bottom-right, with two drifting blurred lights and the card lift. A conic mint-to-blue light runs around its 1px edge every 8s. Inside, two halves split by one hairline (like the platform panel), with no nested form card: the left half holds the feature heading, whose key phrase gets a solid mint underline (0.1em, soft mint glow) that draws in from the left when the card scrolls into view, then the sub and the three-step track; the right half holds the form on a faint ground wash (0.45) with the mint cursor spotlight. Both halves pad at `card-pad`. Under 960px the halves stack and the hairline turns horizontal.

### Step Track
The three steps of how a project starts, as a vertical connected track inside the contact card: a 1px strong-hairline line linking 11px nodes (ground fill, 1.5px mint ring, soft mint glow; the first node filled mint), with a 70px mint beam travelling down the line every 4.5s. Each step is a 1.1rem title over a soft-text detail.

### Custom Cursor
Mouse and trackpad only (`pointer: fine`); touch keeps the default. A 6px mint dot with a soft mint glow tracks the pointer exactly, a 36px 45%-text ring trails it (eased), and a 420px faint mint/blue light follows more slowly. Over links, buttons, summaries and labels the ring swells to 56px with a mint edge and a 10% mint fill and the dot shrinks. Over work frames it becomes an 84px solid mint disc labelled "Visit" (or "Sample" for placeholders) in mint ink. Over text fields it fades out so the native caret shows. Pressing shrinks the ring. With reduced motion it follows without easing.

### Project List ("More projects")
Under the work grid, secondary projects sit in a hairline table: name (600, with a 6px "Via agency" tag when it applies), type, platform and builder in faint text, role, and an up-right arrow. Rows lift to raised graphite and nudge right on hover; the arrow turns mint. Each row links to the live site in a new tab. Under 960px the columns stack inside the row.

### Care and Security Panel
A 10px raised-graphite panel split by a hairline: on the left a mint shield icon tile, a title and one plain paragraph describing the maintenance work; on the right a two-column list of the sites looked after, each with a small glowing mint dot. It is the only place maintenance-only work appears, so builds and care are never mixed.

### Work Card Information
Every project card reads in one fixed order: the name (1.25rem; 1.4-1.7rem on the lead) with a "Visit site" link and arrow on the right that turns mint on hover; the business type in faint text; one line of soft-text scope; then a hairline spec row of three facts, each a small faint label over a 600-weight value: Platform (brand icon plus "WordPress · Elementor"), Role ("Full site build") and Work ("Freelance" with a filled mint dot, or "Via agency" with a hollow ring). On the lead card the copy sits in the left half and the three facts stack as label-value rows in the right half behind a hairline; under 420px the row stacks the same way.

## Iconography

Two free libraries, inlined at build time by `src/components/Icon.astro` (no runtime requests):
- **Lucide** (ISC licence, `lucide-static`) for interface icons, drawn at 1.5-1.75 stroke with round caps and joins in `currentColor`. Used on the approach cards (top-right, faint grey, mint on hover, drawing themselves in as each card arrives), the About fact labels (mint, 15px) and the code tag for tools without a brand.
- **Simple Icons** (CC0, `simple-icons`) for platform marks only: WordPress and Shopify in 38px hairline tiles beside the service titles (mint on panel hover), and WordPress, WooCommerce, Shopify, PHP, JavaScript and HTML5 on the toolkit tags (faint, mint on hover).

Rules: one icon per item, never decorative rows of icons; brand marks only for real platforms or tools; icons never replace a word, they sit beside it.

## Section Graphics

Animated vector scenes, each spanning the full width of its column (wide 480x170 / 560x220 viewBoxes, scaled with the column), in the page's own language (graphite panels, 1px hairlines, mint and light-blue accents, the expo ease), each looping quietly and frozen in a sensible end state under reduced motion:
- **WordPress panel, `BlocksGraphic`:** a block editor window; heading, media and button blocks slide in one after another, each block's own mint outline lights in turn (matching that block's exact bounds), the sidebar field and toggle react, and the add-block button pulses (7s loop).
- **Shopify panel, `CheckoutGraphic`:** a glowing mint parcel travels a dashed path from a product card into the cart, the cart bumps and its count ticks from 1 to 2, the checkout button presses and a check draws itself in a mint ring (7s loop).
- **FAQ, `ChatGraphic`:** a question bubble arrives, a mint typing indicator plays, then the answer's lines write themselves out and are marked read (8s loop). Hidden below 960px, where the FAQ stacks.

## Motion

**The Reveal Grammar Rule.** Everything enters by a mask opening or a line drawing in, never by a generic fade-and-slide alone, using the expo ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) the first time it scrolls into view. Content is visible by default; motion only runs once JS adds `.js` and the reveal observer adds `.in`. Under `prefers-reduced-motion` every piece below is off and content shows in its end state.

- **Hero headline:** each word rises out of its own mask (from 105% below with a 4deg tilt), 70ms apart, starting at 150ms.
- **Section headings:** wipe up from their baseline (clip-path from fully clipped to open, 0.35em rise), 1s.
- **Work frames:** each browser frame wipes open from the bottom inside its 10px corners, staggered 90ms per card. Where scroll-driven animation is supported, the preview inside drifts 3% against the scroll for parallax.
- **Services:** checkmarks draw themselves in sequence (120ms apart) and one mint light runs down the centre divider once.
- **About:** a mint scan line passes once over the portrait; toolkit tags step in 60ms apart.
- **Approach:** each cell's mint rule draws from 0 to 28px as the cell arrives (doubling on hover).
- **Contact steps:** each node pulses brighter as the travelling beam passes it, on the same 4.5s loop.
- **FAQ:** answers glide open (height transition via `interpolate-size`) instead of jumping.
- **Reading progress:** a 1px mint line grows along the bottom of the top bar with page scroll (scroll-driven; absent where unsupported).
- **Ambient:** spine beams (16/20/24s), aurora drift, window float, marquee, contact edge light, as described above.

## Do's and Don'ts

### Do:
- **Do** keep mint as the single interface signal: action, focus, selection, live.
- **Do** place every band on the one grid spine and keep section headings left of its centre line, note stacked underneath.
- **Do** open each band with a hairline, and give raised bands (ground-raise plus dots) the glowing gradient hairline.
- **Do** use 10px for frames, panels and cards and 6 to 8px for controls and tags.
- **Do** frame every piece of work in the browser-frame container, with real screenshots replacing the drawn sample previews.
- **Do** run all motion on the long ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) and disable every loop under `prefers-reduced-motion`.
- **Do** keep atmosphere layers behind content, non-interactive and low-alpha.
- **Do** reveal sections with the blur-up rise, staggered in 90ms steps, visible by default without JS.

### Don't:
- **Don't** use blue as a fill or text colour; it is light only.
- **Don't** lift swatch colours from the listings into the chrome.
- **Don't** add a second typeface or set headings with positive tracking.
- **Don't** add per-section column gridlines, or dots to plain bands.
- **Don't** use pills or 12 to 24px corners, or nest a card inside the contact card.
- **Don't** put drop shadows on panels, frames or grids at rest; dark lift belongs to floating objects only.
- **Don't** let atmosphere sit over text or controls, apart from the page-wide grain.
- **Don't** drift toward the colourful freelancer template or a themed costume.
