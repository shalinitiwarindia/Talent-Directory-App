

# 🌟 **Talent Directory App**

### *A MERN Stack Talent Management System*

A professionally built Talent Directory platform designed with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This application allows organizations to efficiently **add**, **filter**, and **view talents** along with their skills, experience, and contact details.

Built as part of an interview assignment — optimized for **clean code, scalability, and best practices**.

---

# 🚀 **Key Features**

### 🔹 **Talent Management**

* Add new talents with:

  * Name
  * Email
  * Years of experience
  * Skills (comma-separated)

### 🔹 **Skill-Based Filtering**

* Instantly filter talents by entering skill keywords
* Live real-time filtering with Redux state updates

### 🔹 **Talent Directory**

* List view containing:

  * Candidate name
  * Email
  * Experience in years
  * Skills
  * Created date

### 🔹 **Strong Architecture**

* Redux Toolkit for state management
* Express REST API
* MongoDB database
* Clean frontend folder structure

---

# 🧩 **Tech Stack**

### **Frontend**

* React.js
* Redux Toolkit
* Axios
* Custom CSS
* JavaScript (ES6+)

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* CORS
* Dotenv

---

# 📦 **Folder Structure (Professional Layout)**

```
Talent-Directory-App/
│
├── backend/
│   ├── models/
│   │   └── Talent.js
│   ├── routes/
│   │   └── talentRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── TalentForm.js
│   │   │   ├── TalentList.js
│   │   │   └── SkillFilter.js
│   │   ├── app/
│   │   │   └── store.js
│   │   ├── features/
│   │   │   └── talentsSlice.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── package.json
│   └── public/
│
└── README.md
```

---

# ⚙️ **Backend Setup**

### 1️⃣ Install dependencies

```bash
cd backend
npm install
```

### 2️⃣ Add `.env`

```
MONGO_URI=your_mongo_connection_string
PORT=5000
```

### 3️⃣ Start backend

```bash
npm start
```

If successful:

```
MongoDB Connected
Server running on port 5000
```

---

# 🎨 **Frontend Setup**

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

### 2️⃣ Start frontend

```bash
npm start
```

Runs at:
👉 [http://localhost:3000](http://localhost:3000)

---

# 🔗 **API Endpoints**

### ✔ GET — Fetch all talents

`GET /api/talents`

### ✔ POST — Add a new talent

`POST /api/talents`
Body example:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "experience": 3,
  "skills": ["React", "Node", "MongoDB"]
}
```

---

# 🖼️ **Screenshots**
<img width="1501" height="862" alt="image" src="https://github.com/user-attachments/assets/3bf3dc55-3f41-44c6-bc20-834e6ac62234" />
<img width="1513" height="880" alt="image" src="https://github.com/user-attachments/assets/7c03a6eb-9402-4421-8d1c-fe3d7d0e74d0" />
<img width="1458" height="892" alt="image" src="https://github.com/user-attachments/assets/58e7a5c9-6513-4ba1-9036-8f7aa522a86b" />
<img width="1475" height="869" alt="image" src="https://github.com/user-attachments/assets/f84f7e6f-d8bb-4db6-81d3-028022a8b7a5" />
<img width="1613" height="853" alt="image" src="https://github.com/user-attachments/assets/3bf8a399-9d9d-4ce7-998a-a25577386b01" />
<img width="1508" height="876" alt="image" src="https://github.com/user-attachments/assets/52283de6-9b39-4287-8489-0738611e3dae" />
<img width="1239" height="752" alt="image" src="https://github.com/user-attachments/assets/f65e92d4-668b-44da-a229-088b2fa564cf" />





