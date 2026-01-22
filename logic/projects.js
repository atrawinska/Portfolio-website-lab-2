

// elements form the main doc
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
      <a href="${project.link}" target="_blank" class="btn-view-project">View Project</a>
    `;
    projectContainer.appendChild(card);
  });
  projectCounter.textContent = `Showing ${projectList.length} of ${projects.length} projects`;
}





//initial view
displayProjects(projects);

//the first 4

displayProjects(projects.slice(0, 4));

// // Filtering
// filterButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     filterButtons.forEach(b => b.classList.remove("active"));

//      btn.classList.add("active");


//     displayProjects(filtered);
//   });
// });

