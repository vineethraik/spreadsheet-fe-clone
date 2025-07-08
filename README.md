# Spreadsheet Frontend Clone

## Project Description

This project is a simplified frontend application designed to mimic the core functionalities and visual appearance of a spreadsheet application, similar to Microsoft Excel or Google Sheets. It focuses on efficient data display, manipulation, and user interaction within a tabular format.

## Key Architectural Decisions and Learnings

1.  **Modular Table Cell Components**:
    To ensure reusability, maintainability, and performance, the application utilizes a modular approach for rendering table cells. Instead of a monolithic component, specialized "building blocks" (e.g., `CurrencyCell`, `DateCell`, `StatusPill`) are created for different data types. This design offers several advantages:

    - **Extensibility**: New data types can be easily integrated by developing new cell components without impacting the core table structure.
    - **Code Readability**: Each component is responsible for a single, well-defined task, leading to cleaner and more understandable code.
    - **Performance Optimization**: Individual cell components can be optimized for rendering efficiency, contributing to a smoother user experience, especially with large datasets.

2.  **Custom Table Implementation (`CustomTable.tsx`)**:
    The central table component is a custom implementation, providing granular control over its behavior and rendering. This bespoke approach facilitates:

    - **Performance Tuning**: Direct control over rendering logic allows for fine-tuned optimizations, crucial for handling extensive data efficiently.
    - **Data Agnosticism**: The table is designed to be flexible, capable of consuming various data structures, including the mock data provided in `mockData.ts`.

3.  **Reusable UI Components**:
    The application leverages a library of small, reusable UI components (e.g., `Breadcrumbs`, `CustomButton`, `Notification`, `SearchPill`).

## Technologies Used

- React
- TypeScript
- react-table
- SCSS (for styling)
- Vite (for build tooling)

## Hosting

- GitHub Pages
