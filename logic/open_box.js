//For opening each project in a new page

//take the id
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id")); // convert to number

//find the box
const project = projects.find(p => p.id === projectId);

//take the data
if (project) {
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-image").src = project.image;
  document.getElementById("project-image").alt = project.title;
  document.getElementById("project-description").textContent = project.description;
  document.getElementById("project-technologies").textContent = "Technologies: " + project.technologies.join(", ");
}
