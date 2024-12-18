# Shopify Flow Builder - Frontend ReadMe

This document serves as an overview of the **Shopify Flow Builder Frontend** project, outlining its structure, key files, and usage instructions.

---

## Project Structure

### Components
- **PageLayout.jsx**  
  Defines the layout for the application, including the header, main content, and footer.

### Routes
- **_index.tsx**  
  The main entry point for the app. Includes form submission logic for generating workflows.

### Utilities
- **api.js**  
  Contains API helper functions for interacting with the backend.

### Styling
- **tailwind.css**  
  Configured with Tailwind CSS for the app’s design system.

---

## Key Files and Purpose

### `/app/components/PageLayout.jsx`
Provides the base layout for the app with a styled header, main content area, and footer.  

**Key Features:**
- Reusable layout for consistent styling.
- Encapsulates header and footer elements.

---

### `/app/routes/_index.tsx`
Handles the main functionality of the app, including:
- Accepting user input for workflow descriptions.
- Communicating with the backend to generate workflows.
- Displaying results or errors.

---

### `/app/utils/api.js`
Defines helper functions to:
- Interact with the backend API.
- Abstract repetitive fetch logic.

---

### `/app/tailwind.css`
Includes:
- Tailwind’s base, components, and utilities.
- Custom styles for dark mode and responsive design.

---

### `/public/index.html`
Serves as the main HTML file for the app, featuring:
- A lightweight structure with a `div` for app rendering.
- Custom loading styles for visual consistency.

---

## Development Setup

### Prerequisites
- Node.js (>= 20.0.0)
- NPM or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shopify-flow-builder/frontend
Install dependencies:
bash
Copy code
npm install
Development Workflow
Running the App Locally
Start the development server:

bash
Copy code
npm run dev
Access the app at http://localhost:3000.

Deployment
Build the app for production:

bash
Copy code
npm run build
Start the production server:

bash
Copy code
npm start
Testing
Linting
Run ESLint to ensure code quality:

bash
Copy code
npm run lint
Configuration
Environment Variables
Defined in .env:

VITE_API_BASE_URL: Base URL for the backend API.
VITE_ENV: Application environment (e.g., development).
Technical Stack
Core Technologies
React: Frontend framework.
Remix: Full-stack framework for React.
Tailwind CSS: Utility-first CSS framework.
TypeScript: Type safety and improved development experience.
Tools & Plugins
ESLint: Code quality enforcement.
Vite: Fast build tool optimized for modern web projects.
tsconfig-paths: Simplifies module resolution.
Styling Guidelines
Tailwind Configuration
Customization is handled in tailwind.config.ts. Key settings include:

Extended fontFamily for modern typography.
Content scanning to optimize CSS output.
Contribution Guidelines
Fork the repository and create a new branch for your feature or bug fix.
Ensure code follows the existing style guide.
Submit a pull request with a clear description of changes.
File Descriptions
/app/root.tsx
Defines the app layout and includes meta tags, links, and scripts.
/app/entry.client.tsx and /app/entry.server.tsx
Handles client and server-side entry points for Remix.
/vite.config.ts
Configures Vite with Remix plugins and additional settings.
/package.json
Lists dependencies, scripts, and version requirements for the app.
Additional Notes
For more information about Remix and Tailwind CSS, refer to their official documentation:

Remix Docs
Tailwind CSS