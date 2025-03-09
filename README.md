# Social Media Content Aggregator

This project is a web application that aggregates and processes content from multiple social media platforms (Facebook, Twitter, and Instagram) using Node.js and Express.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/HuangT1ng/TechFest2025.git
cd TechFest2025
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
.
├── server.js           # Main server file
├── main.js            # Frontend JavaScript
├── style.css          # Main stylesheet
├── index.html         # Main HTML file
├── extractors/        # Social media data extraction modules
├── processors/        # Content processing modules
├── facebook/          # Facebook-specific components
├── instagram/         # Instagram-specific components
├── twitter/          # Twitter-specific components
├── public/           # Static assets
└── images/           # Image assets
```

## Configuration

The application runs multiple servers on different ports:
- Main application: Port 3000
- Facebook service: Port 3001
- Instagram service: Port 3002
- Twitter service: Port 3003

## Running the Application

node server.js
```

## Available Scripts

- `npm run dev`: Starts the Vite development server
- `npm run build`: Builds the project for production
- `npm run preview`: Previews the production build locally
- `npm start`: Starts the Node.js server
- `npm run watch`: Watches for changes and automatically rebuilds/restarts the server

## Browser Support

The application is compatible with modern browsers that support ES6+ features.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
