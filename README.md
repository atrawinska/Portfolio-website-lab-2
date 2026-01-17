# Interactive Portfolio Enhancement

## Lab 2 - Portfolio
**Course:** JavaScript, HTML, CSS
**Version:** valid for December 2025/ January 2026  


---

## **Project Overview**
This portfolio website with a contact form shows my projects, however, the main point was to exercise JavaScript, CSS and HTML by getting to know them more in depth (different input forms, input validation and changing modes).

### **Features**
- **Contact Form with Validation**  
  - First Name, Last Name, Email, subject (dropdown), message (min 20 chars), phone (optional)  
  - Error messages display below invalid fields  
  - Real-time character counter for message input field
  - Success message after valid submission (disappears after 3 seconds)  
- **Project Gallery**  
  - Displays 6 projects dynamically  
  - Filter by category using buttons  
  - Active filter button highlighted  
  - Project counter updates dynamically  
- **Theme Switcher**  
  - Light, dark, and green themes  
  - Saves preference in cookies  
  - Smooth transitions for background, text, and card colors

---

```text
LAB_JS_WITH_GIT/
├── contact.html # Main page
├── oepened_box.html # Template for a page which opens for each project
├── css/
│ ├── contact.css # Form styles
│ ├── opened_box.css # Contact form styles
│ ├── projects.css # Project carts styles
│ └── themes.css # Theme styles (Light, Dark, Green)
├── js/
│ ├── contact.js # Contact form validation
│ ├── open_box.js # Dynamic project display and filtering
│ ├── project_data.js # Dynamic project display and filtering
│ ├── projects.js # Dynamic project display and filtering
│ └── themes.js # Theme switcher logic
├── images/ # Project images
└── README.md # This file
```


## **Setup Instructions**
1. Clone the repository:  
```bash
git clone <https://github.com/atrawinska/Portfolio-website-lab-2>
```
2. Open "contact.html" in web browser
