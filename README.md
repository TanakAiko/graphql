# GraphQL User Dashboard

A web application that visualizes user statistics and project data using GraphQL queries. This project features interactive data visualizations including histograms and pie charts to display user achievements, XP progression, and audit statistics.

<div align="center">

![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)

</div>

## 🌐 Live Demo

Check out the live application: [graphql-cheimbaye.vercel.app](https://graphql-cheimbaye.vercel.app/)

### Login Page
![Login Page](./statics/imgs/Screenshot%20from%202025-10-15%2010-50-49.png)

## ✨ Features

- **User Authentication**: Secure login system with JWT token management
- **GraphQL Integration**: Efficient data fetching using GraphQL queries
- **Data Visualizations**:
  - XP Histograph showing project-based experience points
  - Pie chart for audit statistics (passed vs failed)
  - User profile information display
- **Responsive Design**: Clean and modern UI that works across devices
- **Single Page Application**: Smooth navigation without page reloads

## 🛠️ Technologies Used

### Backend
- **Go** (1.21.1) - Lightweight HTTP server
- Native `net/http` package for serving static files and templates

### Frontend
- **Vanilla JavaScript** (ES6 Modules)
- **SVG** for interactive data visualizations
- **CSS3** for styling
- **GraphQL** for data queries

## 📁 Project Structure

```
graphql/
├── main.go                 # Go server entry point
├── index.html             # Main HTML template
├── go.mod                 # Go module definition
├── statics/
│   ├── style.css          # Application styles
│   └── js/
│       ├── main.js        # Application entry point
│       ├── login.js       # Authentication logic
│       ├── home.js        # Home page functionality
│       ├── graph.js       # Data visualization functions
│       ├── query.js       # GraphQL queries
│       ├── request.js     # HTTP request handlers
│       ├── pages.js       # Page rendering logic
│       └── utils.js       # Utility functions
├── templates/
│   ├── home.html          # Home page template
│   └── loginPage.html     # Login page template
└── script/
    ├── init.sh            # Initialization script
    └── push.sh            # Deployment script
```

## 🚀 Getting Started

### Prerequisites

- Go 1.21.1 or higher
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cheimbaye/graphql.git
cd graphql
```

2. Install Go dependencies (if any):
```bash
go mod download
```

3. Run the server:
```bash
go run main.go
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## 🔧 Configuration

The application uses GraphQL to fetch user data. Make sure you have:
- Valid credentials for authentication
- Access to the GraphQL endpoint
- Proper CORS configuration if needed

## 📊 GraphQL Queries

The application fetches:
- User profile information (name, email, login)
- Transaction history with XP amounts
- Project-based achievements
- Audit statistics (passed and failed audits)

### User Information Display
![User Information](./statics/imgs/Screenshot%20from%202025-10-15%2010-51-47.png)

## 🎨 Visualizations

### Histograph
Displays XP progression across different projects with interactive bars showing:
- Project names
- XP amounts
- Hover effects for detailed information

![Histograph](./statics/imgs/Screenshot%20from%202025-10-15%2010-52-25.png)

### Pie Chart
Shows the ratio of:
- Valid audits (grade ≥ 1)
- Failed audits (grade < 1)

![Pie Chart](./statics/imgs/Screenshot%20from%202025-10-15%2010-52-16.png)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ from 🇸🇳

</div>