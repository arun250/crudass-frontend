# 👤 User Registration

This project demonstrates a full-stack implementation of user registration where the backend checks an external API before registering the user. It also supports fetching and displaying users from an API.



## 📦 Tech Stack

- ⚛️ React (Frontend)
- 🗄️ JSON or SQL Database (optional)

---

## 🚀 Features

- ✅ Register users via form
- 📥 Fetches and displays registered users
- 📝 Edit/Delete functionality
- ✅ Success toast on update

---

## 📁 Project Structure
```
project/
│
├── crudass/
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── RegisterForm.jsx # Form to add users (with external API check)
│ │ └── UserDetailsCard.jsx # List users + Edit/Delete
│ ├── App.jsx # Main app component
│ └── index.css
└── README.md
```

## screenshots 
|User Registration|

<img src ="https://res.cloudinary.com/diejm0elz/image/upload/v1753868517/Bildschirmfoto_2025-07-30_um_12.10.19_c1zocb.png" width=200/>

|User Registration Validation|

<img src ="https://res.cloudinary.com/diejm0elz/image/upload/v1753868517/Bildschirmfoto_2025-07-30_um_12.10.45_wuyaaz.png" width=200/>

|Fetched User Data|

<img src ="https://res.cloudinary.com/diejm0elz/image/upload/v1753868517/Bildschirmfoto_2025-07-30_um_12.11.35_nugb53.png" width=200/>

|Edited Fetched Data|

<img src ="https://res.cloudinary.com/diejm0elz/image/upload/v1753868517/Bildschirmfoto_2025-07-30_um_12.11.16_ezm6cg.png" width=200/>


## 🔧 Setup Instructions

### 1. Clone the repository

    git clone https://github.com/your-username/your-repo-name.git
    cd covass

    
###  3. Frontend Setup
    
    cd crudass
    npm install
    npm run dev

