

### **Black - Flask + React + MongoDB Dashboard**  

## 🚀 Overview  
This is a full-stack web application that utilizes **Flask** for the backend, **React.js** for the frontend, and **MongoDB** as the database. It provides interactive visualizations and analytics using various chart components.  

---

## 📂 Project Structure  
```
BLACK/
│── backend/               # Flask Backend  
│   ├── app.py            # Initializes Flask and MongoDB  
│   ├── config.py         # Stores configuration settings  
│   ├── routes.py         # Defines API routes  
│   ├── requirements.txt  # Lists backend dependencies  
│   ├── Procfile          # Heroku deployment configuration  
│   └── .venv/            # Virtual environment (ignored in Git)  
│  
│── frontend/              # React Frontend  
│   ├── src/  
│   │   ├── charts/       # Chart components  
│   │   │   ├── BarChart.jsx  
│   │   │   ├── DoughnutChart.jsx  
│   │   │   ├── LineChart.jsx  
│   │   │   ├── PieChart.jsx  
│   │   │   ├── PolarChart.jsx  
│   │   │   ├── RadarChart.jsx  
│   │   ├── components/   # Reusable components  
│   │   ├── App.js        # Main React component  
│   │   ├── App.css       # Styles  
│   │   ├── index.js      # Entry point  
│   ├── public/           # Static files  
│   ├── build/            # Production build  
│   ├── package.json      # Frontend dependencies  
│   ├── package-lock.json # Lockfile  
│  
├── .gitignore             # Files to ignore in Git  
├── README.md              # Project documentation  
```

---

## 🔧 Setup Instructions  

### **Backend (Flask) Setup**  
1. Create and activate a virtual environment:  
   ```sh
   python -m venv venv
   source venv/bin/activate   # On macOS/Linux
   venv\Scripts\activate      # On Windows
   ```
2. Install dependencies:  
   ```sh
   pip install -r requirements.txt
   ```
3. Run the Flask server:  
   ```sh
   python app.py
   ```

---

### **Frontend (React) Setup**  
1. Navigate to the `frontend` folder:  
   ```sh
   cd frontend
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the development server:  
   ```sh
   npm start
   ```

---

## 🛠️ Features  
✅ Interactive visualizations using **React Chart.js**  
✅ Backend powered by **Flask & MongoDB**  
✅ REST API for fetching data  
✅ Responsive UI  

---

## 📌 Deployment  
- **Frontend**: Can be deployed on **Vercel** or **Netlify**  
- **Backend**: Can be deployed on **Heroku** or **Render**  
- **Database**: Uses **MongoDB Atlas** (or local MongoDB instance)  

---

Let me know if you need any **changes or additions**! 🚀🔥
