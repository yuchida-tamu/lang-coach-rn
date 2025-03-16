# Lang Coach

A mobile application for language learning, built with React Native and Expo.

## Overview

Lang Coach is a simple yet powerful language learning application that helps users improve their language skills through:

- Input interpretation with detailed translations
- Vocabulary management with bookmarking feature
- Example sentences for better context understanding

## Tech Stack

- React Native with Expo
- TypeScript
- NativeWind (TailwindCSS for React Native)
- React Native Testing Library
- ESLint & Prettier for code quality
- Husky & lint-staged for pre-commit hooks

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- iOS Simulator (for iOS development)
- Android Studio & Android SDK (for Android development)
- Expo Go app on your mobile device (for development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yuchida-tamu/lang-coach-rn.git
cd lang-coach-rn
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Start the app in iOS simulator
- `npm run android` - Start the app in Android simulator
- `npm run web` - Start the app in web browser
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Screen components
├── navigation/     # Navigation configuration
├── hooks/          # Custom React hooks
├── services/       # API and other services
├── utils/          # Utility functions
├── types/         # TypeScript type definitions
└── assets/        # Images, fonts, etc.
```

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Follow the project's ESLint and Prettier configurations
- Write meaningful commit messages following conventional commits

### Testing

- Write tests for all new components
- Maintain test coverage
- Run tests before committing

### Environment Variables

- Use .env files for environment-specific variables
- Never commit sensitive information
- Use .env.example as a template

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write/update tests
4. Ensure all tests pass
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
