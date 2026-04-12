**Objective**:

Integrate a Strapi CMS backend with an existing Vite/React frontend deployed on Vercel. The architecture must prioritize high performance, ease of use for a non-technical client, and UI stability.

**1\. Architecture & Deployment (Vite-Specific)**

   a) Static Generation Pattern: Implement a "Build-Time Injection" strategy. Use a Node.js pre-build script (sync-cms.js) that fetches all content from Strapi and saves it to src/data/content.json before the Vite build begins.

   b) Vercel Integration: Ensure the package.json build command is updated to: node sync-cms.js && vite build.

   c) Environment Variables: Use import.meta.env for the Strapi URL and API tokens.

**2\. CMS Structure (Client-Safe Editing)**

   a) Single Types: Use Strapi Single Types for global site sections (Home, About, Contact Info) to prevent accidental duplicate pages.

   b) Dynamic Zones: Implement a "Block-Based" layout. Define components like Hero, ServiceCard, and FeatureList. The client should be able to reorder these blocks but not edit the code or CSS.

   c) Role-Based Access (RBAC): Configure an "Editor" role that only has access to the Content Manager. Hide the Content-Type Builder and Settings from the client.

**3\. Functional Requirements**

   a) B2B Lead Generation: Create a Leads Collection Type in Strapi. Configure the React contact form to POST submissions directly to the Strapi API.

   b) UI Stability: Use a "Component Mapper" in React. Map the Strapi \_\_component slug to a corresponding pre-approved React component.

   c) Automation: Configure a Strapi Webhook to trigger the Vercel Deploy Hook whenever content is Published or Unpublished.

**4\. Coding Standards**

   a) TypeScript: (Optional, if applicable) Ensure all fetched JSON data is typed via interfaces.

   b) Clean Code: Decouple the API fetching logic from the UI components. Components should consume data via props, not via direct fetch calls.

   c) Add error handling to the pre-build script, so that if the CMS is down, the Vercel build fails gracefully instead of deploying a broken site.