
//array of projects
const projects = [
  { id: 1, title: "Autonomous car app", description: "My personal portfolio built with HTML, CSS, and JavaScript", category: "Mobile App", technologies: ["Flutter","Dart","BLE"], image: "/images/Picture1.png", link: "#" },
  { id: 2, title: "Boat app", description: "A simple todo application", category: "Mobile App", technologies: ["Flutter","Dart","SSH"], image: "/images/Picture2.png", link: "#" },
  { id: 3, title: "Weather app", description: "A logo I designed for a local company", category: "Mobile App", technologies: ["Flutter", "Dart"], image: "/images/Picture3.png", link: "#" },
  { id: 4, title: "Social campaign", description: "A group project for school", category: "Social Projects", technologies: ["Instagram","Canva"], image: "/images/Picture4.png", link: "#" },
  { id: 5, title: "GrowBox app", description: "A landing page for a product", category: "Mobile App", technologies: ["Flutter","Dart", "BLE"], image: "/images/Picture5.png", link: "#" },
  { id: 6, title: "RF communication", description: "Poster design project", category: "Electronics", technologies: ["ESP32", "ArduinoIDE/C++", "AM modules at 433MHz"], image: "/images/Picture6.png", link: "#" }
];

//locate elements form the main doc
const projectContainer = document.getElementById("project-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCounter = document.getElementById("project-counter");


function displayProjects(projectList) {
  projectContainer.innerHTML = "";
  projectList.forEach(project => {
    const card = document.createElement("div");

     card.classList.add("project-card");
    card.innerHTML = `
       <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <p><strong>Category:</strong> ${project.category}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectContainer.appendChild(card);
  });
  projectCounter.textContent = `Showing ${projectList.length} of ${projects.length} projects`;
}

//initial view
displayProjects(projects);

// Filtering
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));

     btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    const filtered = category === "all" ? projects : projects.filter(p => p.category === category);

    displayProjects(filtered);
  });
});
