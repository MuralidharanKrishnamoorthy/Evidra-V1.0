# Evidra Dashboard

A modern, responsive React.js dashboard application for client management with search, filter, and data visualization capabilities.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

## 📋 Features

- ✅ **Dashboard Overview** - Real-time statistics and metrics
- ✅ **Client Management** - View and search client records
- ✅ **Search Functionality** - Filter clients by name or contact number
- ✅ **Responsive Design** - Optimized for all desktop screen sizes
- ✅ **Modern UI** - Clean design with Lucide React icons
- ✅ **Scrollable Tables** - Handle large datasets efficiently

## 🎨 Design

- **Color Theme**: Dark navy blue based on Evidra branding
- **Icons**: Lucide React for professional, consistent icons
- **Styling**: Pure CSS (no external UI frameworks)
- **No Gradients**: Solid colors only for clean aesthetics

## 📁 Project Structure

```
evidra/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable React components
│   │   ├── common/      # Button, Input, Card
│   │   └── layout/      # Sidebar, Header, Footer
│   ├── pages/           # Page components
│   │   └── Dashboard/   # Dashboard page and components
│   ├── data/            # Mock data
│   ├── styles/          # Global CSS
│   ├── App.js           # Root component
│   └── index.js         # Entry point
├── package.json
└── .env.example         # Environment variables template
```

## 🛠️ Technology Stack

- **React 18.2.0** - UI library
- **Lucide React** - Icon library
- **Pure CSS** - Styling (CSS Grid, Flexbox)
- **React Scripts** - Build tooling

## 🌐 Responsive Breakpoints

- **1920px+** - Extra large desktops
- **1680px-1919px** - Large desktops
- **1440px-1679px** - Standard desktops
- **1366px-1439px** - Medium desktops
- **1280px-1365px** - Small desktops
- **1024px-1279px** - Laptops
- **768px-1023px** - Tablets
- **Below 768px** - Mobile devices

## 📊 Mock Data

The application uses mock data for demonstration:
- 15 client records
- Various service types (GST, ITR, Audit, TDS, Payroll)
- Date range: December 2024 - May 2025

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_BASE_URL=http://localhost:3000
```

## 🎯 Future Enhancements

- Backend API integration
- Advanced filtering options
- Client detail pages
- Client onboarding form
- Export to CSV/PDF
- Pagination for large datasets
- Sorting capabilities

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## 🤝 Contributing

This is a frontend-only application. To add features:
1. Create new components in `src/components/`
2. Add pages in `src/pages/`
3. Update mock data in `src/data/`
4. Style with CSS in component folders

## 📄 License

Private project for Evidra

## 👨‍💻 Development Notes

- **No Backend**: This is a pure frontend application
- **Icons**: All icons use Lucide React library
- **Styling**: Pure CSS with CSS custom properties
- **State Management**: React hooks (useState, useMemo)
- **Routing**: Ready for React Router integration

---

**Built with ❤️ for Evidra**
