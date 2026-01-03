# FANG & FLEECE — Library Theme (Shopify OS 2.0)

This theme renders the **Library → Volumes → Issues → Chronicle** architecture using Shopify primitives.

## Data model (Shopify)

### Volumes
- Use **Collections** as Volumes.
- Collection metafields (namespace: `custom`):
  - `access` (single line) → `accessible` or `locked`
  - `subtitle` (single line)
  - `manifesto` (rich text)

### Issues
- Use **Products** as Issues.
- Product metafields (namespace: `custom`):
  - `status` (single line) → `acquire` | `limited` | `reserve` | `alert` | `vaulted`
  - `issue_story` (rich text)
  - `fabric_notes` (rich text)
  - `craftsmanship` (rich text)
  - `edition` (single line)

## Locked volumes (no detail leakage)
If a collection metafield `custom.access` equals `locked`, the theme:
- disables navigation from the shelf tile (home)
- disables the collection page content (no manifesto/subtitle/products)

## CTAs (locked mapping)
- `acquire` → Acquire
- `limited` → Limited Quantity + Acquire
- `reserve` → Reserve
- `alert` → Alert Me (contact form capture)
- `vaulted` → Vaulted (no purchase)

## GitHub → Shopify
Connect this repository using **Online Store → Themes → Add theme → Connect from GitHub**.

