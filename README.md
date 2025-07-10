# 📝 Simple To-Do List

A clean, intuitive to-do list application built with vanilla HTML, CSS, and JavaScript. Features a modern design with persistent data storage and smooth user interactions.

## ✨ Features

- **Add Tasks**: Create new tasks with a simple form interface
- **Mark Complete**: Toggle tasks between complete and incomplete states
- **Edit Tasks**: Modify existing task text with inline editing
- **Delete Tasks**: Remove tasks with smart deletion warnings
- **Data Persistence**: Tasks are automatically saved to browser localStorage
- **Responsive Design**: Clean two-column layout that works across devices
- **Visual Feedback**: Hover effects, transitions, and clear visual states

## 🚀 Demo

The application features:
- Left panel for adding new tasks
- Right panel displaying your task list
- Intuitive button controls for each task
- Smooth animations and transitions

## 🛠️ Installation

1. Clone or download the project files
2. Ensure you have all three files in the same directory:
   - `TO-DO-LIST.html`
   - `TO-DO-LIST.css`
   - `TO-DO-LIST.js`
3. Open `TO-DO-LIST.html` in your web browser

No server setup required - runs entirely in the browser!

## 📁 Project Structure

```
todo-list/
├── TO-DO-LIST.html    # Main HTML structure
├── TO-DO-LIST.css     # Styling and layout
└── TO-DO-LIST.js      # JavaScript functionality
```

## 🎮 Usage

### Adding Tasks
1. Enter your task in the "Cosa devi fare?" input field
2. Click "Aggiungi" or press Enter to add the task
3. Use "Annulla" to clear the input field

### Managing Tasks
- **Complete**: Click the green "Completa" button to mark as done
- **Edit**: Click "Modifica" to change the task text
- **Delete**: Click the red "Elimina" button to remove the task

### Smart Deletion
- Attempting to delete an incomplete task will show a warning
- The second attempt will proceed with deletion
- Completed tasks can be deleted immediately

## 🎨 Design Features

- **Color Scheme**: Honeydew background with green accents
- **Typography**: Clean Arial font with proper hierarchy
- **Interactions**: Smooth hover effects and transitions
- **Visual States**: Clear distinction between complete and incomplete tasks
- **Accessibility**: Good contrast ratios and intuitive button styling

## 💾 Data Storage

Tasks are automatically saved to browser localStorage, ensuring your to-do list persists between browser sessions. No external database required!

## 🌐 Browser Compatibility

Compatible with all modern browsers that support:
- ES6 JavaScript features
- CSS3 transitions and transforms
- localStorage API

## 🔧 Technical Details

### Key Components
- **Form Validation**: Prevents empty tasks from being added
- **Event Delegation**: Efficient event handling for dynamic task buttons
- **Local Storage**: Automatic save/load functionality
- **DOM Manipulation**: Clean, semantic HTML structure updates

### JavaScript Features Used
- `addEventListener` for event handling
- `localStorage` for data persistence
- `querySelector` and `querySelectorAll` for DOM selection
- Template literals for dynamic HTML generation

## 📝 License

This project is open source and available under the MIT License.

*Built with vanilla HTML, CSS, and JavaScript - no frameworks required!*
