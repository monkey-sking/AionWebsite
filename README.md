# Aion Official Website

This is the Astro-based official website for Aion, designed to meet Paddle's merchant compliance requirements and provide a premium landing page for users.

## Features

- **Premium Design**: Apple-inspired dark mode UI.
- **Compliance Ready**: Includes Mandatory Pricing, Terms of Service, and Privacy Policy.
- **Subdomain Support**: Optimized for `aion.7caifei.com`.

## Local Development

1. `cd Website`
2. `npm install`
3. `npm run dev`

## Deployment Instructions

### Cloudflare DNS Configuration

To bind `aion.7caifei.com` to your website:

1.  **If using Vercel**:
    *   **Type**: `CNAME`
    *   **Name**: `aion`
    *   **Content**: `cname.vercel-dns.com`
    *   **Proxy status**: `DNS only` (Important: Disable proxy/orange cloud initially for SSL verification).

2.  **If using GitHub Pages**:
    *   **Type**: `CNAME`
    *   **Name**: `aion`
    *   **Content**: `monkey-sking.github.io`
    *   **Proxy status**: `DNS only`.

### Option 2: GitHub Pages

1. In your GitHub repository, go to **Settings > Pages**.
2. Set up a GitHub Action for Astro deployment.
3. Add a `CNAME` file to `public/` with the content `aion.7caifei.com`.
4. Update your DNS with a CNAME record pointing to `your-username.github.io`.

## Paddle Verification URLS

Once deployed, provide these URLs to Paddle:

- **Main**: `https://aion.7caifei.com`
- **Terms**: `https://aion.7caifei.com/terms`
- **Privacy**: `https://aion.7caifei.com/privacy`
- **Pricing**: Clearly visible on the home page.
- **Contact**: `support@7caifei.com`
