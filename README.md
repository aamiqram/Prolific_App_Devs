# Prolific App Devs Marketplace

## Description

This application simulates a feature-rich app marketplace, providing users with the ability to browse a catalog of productivity and lifestyle applications.

**Key features include:**

- **App Discovery:** View a list of available apps, complete with details on company, ratings, and download counts.
- **Search and Sorting:** Easily filter the app list using a search bar and sort results by criteria like total downloads and average rating.
- **Detailed Views:** Access individual app pages to see comprehensive statistics, full descriptions, and a visual breakdown of user ratings.
- **Installation Management:** Users can "install" or "uninstall" apps, and manage their installed collection from a dedicated page. Installation state is persisted using client-side storage (localStorage).
- **Responsive Design:** The interface is optimized for viewing and interaction across mobile, tablet, and desktop devices.
- **Error Handling:** Custom pages are provided for general 404 errors and specific "App Not Found" scenarios.

## Technologies

This application is built as a single-file React component, utilizing modern web development tools and libraries for a robust and aesthetically pleasing user experience.

| Technology       | Purpose                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| React            | The core JavaScript library for building the user interface.                                                            |
| react-router-dom | Handles all client-side navigation, routing between Home, Apps, Details, and Installation pages.                        |
| Tailwind CSS     | Used for utility-first styling and ensuring a fully responsive layout.                                                  |
| DaisyUI          | A Tailwind CSS component library used for pre-styled UI elements (buttons, cards, menus).                               |
| Lucide React     | Provides a set of beautiful, lightweight open-source icons for navigation and features.                                 |
| react-hot-toast  | A minimal and accessible library for displaying non-blocking notifications for installations and uninstallation events. |
| localStorage     | Used for client-side data persistence to remember which apps the user has "installed".                                  |
