# Simple ToDo App

A clean, modular ToDo application built with vanilla JavaScript using ES6 modules and Object-Oriented Programming principles. Users can create tasks, optionally assign due dates, and manage completion status in a responsive and user-friendly interface.

---

## Functionality

This application allows users to:

- Add new to-do items
- Assign optional due dates
- Mark tasks as completed
- Delete tasks
- Validate form input with real-time feedback
- Generate unique IDs for new tasks using the `uuid` package

The app dynamically renders tasks from a `<template>` element and maintains clean separation of logic using reusable classes.

Form validation prevents submission of invalid input and provides immediate user feedback. After successful submission, the form resets and disables the submit button to maintain proper UX behavior.

---

## Technology & Techniques

### JavaScript (ES6+)

- ES6 Modules (`import` / `export`)
- Classes and Object-Oriented Programming
- Private and public class methods
- DOM manipulation
- Event handling

### External Package

- `uuid` (imported via CDN) for generating unique IDs

### 🏗 Architecture

- `Todo` class — responsible for rendering and managing individual to-do items
- `FormValidator` class — handles form validation logic
- `constants.js` — centralized configuration and initial data
- Modular file structure for scalability and maintainability

### Frontend

- Semantic HTML
- CSS styling
- Template cloning for dynamic UI rendering

---

## Deployment

This project is deployed on GitHub Pages:

**[Live Demo](https://zephyrd18.github.io/se_project_todo-app/)**
