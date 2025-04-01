# Tic-Tac-Toe Game - Web Application

## Project Overview

This is a Tic-Tac-Toe game application built as part of a take-home assessment. The project demonstrates
modern web development practices, state management, and API integration. The application features web
interface, allowing users to play against a computer opponent while tracking their game statistics.

### Key Features

- 🎮 Interactive Tic-Tac-Toe game board
- 👤 User authentication and registration
- 📊 Real-time game statistics tracking
- 🔄 Turn-based gameplay with computer opponent
- 📱 Responsive design for both web and mobile
- 🔒 Secure JWT-based authentication
- 📈 Win/Loss/Draw statistics tracking

## Technical Stack

- **Frontend Framework**: React.js with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Package Manager**: Yarn 3

## Demo video

https://drive.google.com/file/d/17BjlFxSJqCPqC5uojF-Q4n6WPADh5ENS/view?usp=share_link

## Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Git

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Attique033/avrioc-tic-tac-toe-web.git
cd avrioc-tic-tac-toe-web
```

2. Install dependencies:

```bash
yarn install
```

### Running the Application

1. Start the development server:

```bash
yarn dev
```

2. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
yarn build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── store/         # Redux store configuration
├── store/         # Context provider for authentication
├── services/      # API and storage service layer
├── hooks/         # Custom hook for session management
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── router/        # Route configurations
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Key Dependencies

- `@reduxjs/toolkit`: State management
- `react-router-dom`: Client-side routing
- `axios`: HTTP client for API requests
- `tailwindcss`: Utility-first CSS framework
- `typescript`: Type safety and better developer experience

## Development Features

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- TailwindCSS for styling
- Redux Toolkit for state management
- React Router for navigation
- Axios for API communication

## Testing

```bash
# Run tests (when implemented)
yarn test

# Run linting
yarn lint

# Format code
yarn format
```

## Security Considerations

- JWT tokens are stored securely in cookies
- API requests are authenticated
- Input validations
- API error handling
- Protected routes

## Performance Optimizations

- Code splitting with React Router
- Optimized bundle size with Vite
- Efficient state management with Redux Toolkit
- Responsive design for all screen sizes

## License

This project is part of a take-home assessment and is not licensed for public use.

## Disclaimer:

> GitHub Copilot was used during development to assist with boilerplate and repetitive tasks to improve development
> efficiency.
<br>
> AI tools were also used to help write project’s README.md.
> Additionally, the project logo was generated using an AI-based image tool.
<br>
> All design decisions, architecture, business logic, and final code implementations were crafted, reviewed, and tested
> manually to ensure they align with the case study objectives and reflect my own engineering work.
