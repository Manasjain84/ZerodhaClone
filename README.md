# Trading Platform Web Application

A full-stack MERN application inspired by the Zerodha Kite trading platform. The project replicates the core trading workflow, allowing users to buy and sell stocks, manage holdings, and view orders through an interactive dashboard.

---

## Features

- Interactive trading dashboard
- Buy stocks with automatic holdings update
- Sell stocks with holdings adjustment
- Order history management
- Portfolio holdings
- Positions page (demo data)
- RESTful APIs
- MongoDB database integration
- Responsive user interface
- React Context API for state management

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Material UI
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools
- Git & GitHub
- Postman
- MongoDB Atlas

---

## Project Structure

```
ZerodhaClone
│
├── backend
│   ├── models
│   ├── routes
│   ├── index.js
│   └── ...
│
├── dashboard
│
├── frontend
│
└── README.md
```

---

## Implemented Functionality

### Buy Stocks

- Places a buy order
- Creates a new holding if the stock doesn't exist
- Updates existing holdings using weighted average price

### Sell Stocks

- Places a sell order
- Reduces holding quantity
- Removes holding when quantity reaches zero
- Prevents selling more shares than available

### Orders

- Stores every Buy/Sell transaction in MongoDB

### Holdings

- Displays current portfolio holdings
- Automatically updates after Buy/Sell operations

### Positions

- Demo implementation using static data

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/ZerodhaClone.git
```

Go to the project folder

```bash
cd ZerodhaClone
```

Install dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd ../frontend
npm install
```

Dashboard

```bash
cd ../dashboard
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

---

## Running the Project

Start Backend

```bash
cd backend
npm start
```

Start Frontend

```bash
cd frontend
npm start
```

Start Dashboard

```bash
cd dashboard
npm start
```

---

## Future Improvements

- User Authentication
- Live Stock Market API
- Real-time Portfolio Updates
- Dynamic Positions
- Charts & Analytics
- Watchlist Persistence

---


## Author

**Manas Jain**

GitHub: https://github.com/Manasjain84
