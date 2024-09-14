# React Todo App 📝

## Objective
The application allows users to manage tasks, including creating, editing, deleting, and changing the status of tasks. Tasks are stored in a Firestore database provided by Google Firebase. This project will demonstrate proficiency in frontend development, component library usage, and database integration.

## Features
- **Task Management:** Create, edit, delete tasks.
- **Status Update:** Move tasks between columns (TODO, IN PROGRESS, COMPLETED).
- **Modal for Task Creation:** A modal form for task creation and editing.
- **Drag and Drop:** Change task status using drag-and-drop (optional).
- **Firebase Integration:** Tasks stored in Firestore.
- **Responsive Design:** UI similar to the provided Figma reference.
- **Deployment:** Hosted on Vercel.

## Technologies Used
- **Frontend:** React
- **Styling:** CSS Framework (Tailwind/Ant Design/Material UI/React Bootstrap)
- **Database:** Firebase Firestore
- **Hosting:** Vercel


## Setup Instructions

### Prerequisites
- Node.js
- Firebase account
- GitHub account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/profile/repo_name.git
   cd repo_name
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```


# Firebase Setup Guide

This guide will help you set up Firebase for your project. Follow these steps to configure Firebase and integrate it with your application.

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add project" and follow the on-screen instructions to create a new Firebase project.

## 2. Enable Firestore Database

1. In the Firebase Console, select your newly created project.
2. Navigate to the "Build" section in the left sidebar.
3. Click on "Firestore Database".
4. Click on "Create database" and follow the prompts to set up Firestore.

## 3. Obtain Firebase Configuration Details

1. In the Firebase Console, go to the project settings by clicking on the gear icon next to "Project Overview".
2. Under the "General" tab, locate your Firebase configuration details.
3. Note down the following details:
   - API Key
   - Project ID
   - Auth Domain
   - Storage Bucket
   - Messaging Sender ID
   - App ID
  
# Components Documentation

## TaskSections Component

**Purpose:**
Displays tasks organized by their status (Todo, In Progress, Completed).

**Props:**
- `status`: Filters tasks based on their current status.

**State Management:**
- Uses `useSelector` from React Redux to access tasks from the Redux store.


## TaskAdder Component

**Purpose:**
Handles the creation of new tasks.

**State Management:**
- Uses `useState` for local state management.
- Uses `useDispatch` to dispatch Redux actions for adding new tasks.

**Validation:**
- Ensures that a task's name is provided before submission.

## UpdaterModal Component

**Purpose:**
Used for updating or deleting tasks.

**Props:**
- `onClose`: Closes the modal.
- `isOpen`: Determines if the modal is open or closed.
- `task`: The task being edited or deleted.
- `setTask`: Updates the task's details.


**State Management:**
- Uses Redux to dispatch actions for updating or deleting tasks.
- Uses `useDispatch` from React Redux to interact with the Redux store.

### Additional Considerations:

- **Code Examples:** Include code snippets to illustrate how to use the components.
- **Styling:** Consider using a Markdown linter or a code formatter to improve readability.
- **Organization:** Group components by functionality or relatedness.
- **Versioning:** If applicable, document component versions and changes.
- **Testing:** Mention any unit or integration tests for the components.

## State Management with Redux Toolkit

**Purpose:**
- Manages the application's state in a predictable and efficient manner.
- Simplifies Redux store setup and logic writing.

**Key Concepts:**

- **Slices:** Encapsulate related state logic and actions into reusable modules.
- **Reducers:** Pure functions that update state based on actions.
- **Actions:** Objects that describe state changes.
- **Thunks:** Asynchronous actions that can perform side effects (e.g., API calls).
- **Selectors:** Functions that extract specific parts of the state.

**Actions:**

- `addTask`: Adds a new task to the state and saves it to the Firebase database.
- `updateTask`: Updates an existing task based on its ID.
- `deleteTask`: Removes a task from the state by its ID.
- `dndTask`: Handles drag-and-drop operations for tasks.


## Links
**GitHub Profile:** https://github.com/shalukumari7484


**Repository Link:** https://github.com/shalukumari7484/Board-Infinity-Assignment


**Demo Link:** https://board-infinity-assignment-hzrakmve5-shalukumari7484s-projects.vercel.app/
