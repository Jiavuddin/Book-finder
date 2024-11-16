# Book Finder App

A responsive **ReactJS** application that lets users search for books using the Open Library API. The app implements features like debounce, dynamic grid layout for responsive design, and a clean UI to enhance the user experience.

---

## Features

1. **Dynamic Book Search**:

   - Users can search for books by typing the title.
   - Minimum 3 characters required to initiate a search.
   - Implements debounce for optimized API calls.

2. **Responsive Design**:

   - Adapts book card layout for mobile, tablet, and desktop views.
   - Uses plain CSS for styling.

3. **Data Display**:
   - Displays book titles, authors, and publication year.
   - Includes a "View Book" button linking to the Open Library website.

---

## Project Structure

```plaintext
src/
├── BookFinder/
│   ├── BookFinder.js  # Main React component for the feature
│   ├── BookFinder.css # Styling for the BookFinder component
├── index.js           # React app entry point
├── App.js             # Root component of the app
```

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

1. **Node.js** (v14 or later)
2. **npm** or **yarn**

---

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd <project-directory>
```

### 3. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### 4. Run the Application

Start the development server:

```bash
npm start
```

or

```bash
yarn start
```

This will open the app in your default web browser at `http://localhost:3000`.

---

## Code Explanation

### **1. `BookFinder.js`**

This is the main component of the project. It contains:

- **State Management**:
  - `query`: Tracks user input in the search bar.
  - `books`: Stores fetched book data from the API.
  - `loading`: Indicates when data is being fetched.
  - `message`: Displays messages when no books are found or before searching.
- **Debounce Function**:
  Limits the frequency of API calls during user input.

- **API Fetching**:
  Queries the Open Library API for books with the entered title and handles errors gracefully.

- **Responsive Grid**:
  Displays book cards dynamically based on screen size.

### **2. `BookFinder.css`**

Handles the styling of the `BookFinder` component:

- **Header Styling**:
  - Contains the app title, description, and search bar.
- **Book Cards**:
  - Displays book details and a CTA button.
  - Designed to be visually appealing with hover effects.
- **Responsive Layout**:
  - Uses CSS Grid to adapt the number of visible cards based on screen size.

### **3. API Integration**

The app uses the Open Library's public API to fetch books dynamically. The API endpoint:

```plaintext
https://openlibrary.org/search.json?title={bookTitle}
```

Example query for `Harry Potter`:

```plaintext
https://openlibrary.org/search.json?title=Harry%20Potter
```

### **4. Debounce Functionality**

The debounce function delays API calls until the user stops typing for a specified period (500ms). This reduces unnecessary API requests, enhancing performance.

### **5. Responsive Design**

- Uses `grid-template-columns` to display 1, 2-3, or 4-5 cards depending on the screen width.
- Breakpoints ensure the app looks great on mobile, tablet, and desktop.

---

## Future Enhancements

1. Add pagination for large search results.
2. Include more book details like cover images.
3. Add a loader animation during API requests.
4. Implement additional filters (e.g., by author or publication year).

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request with a detailed description.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
