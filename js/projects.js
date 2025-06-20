document.addEventListener("DOMContentLoaded", () => {
  const username = "MzOutland"; // Your GitHub username
  const excludedRepos = [
    "basic-fetch-practice",
    "flexbox-wireframe-practice",
    "hello-world",
    "KnowledgeCKModule1", 
    "myrepo4",
    "myrepo5",
    "Project2",
  ];

  const projectList = document.getElementById("project-list");

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        if (!repo.fork && !excludedRepos.includes(repo.name)) {
          const projectDiv = document.createElement("div");
          projectDiv.classList.add("project");

          projectDiv.innerHTML = `
            <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
            <p>${repo.description || "No description available."}</p>
          `;

          projectList.appendChild(projectDiv);
        }
      });
    })
    .catch(error => {
      console.error("Error fetching repos:", error);
      projectList.innerHTML = "<p>Unable to load projects at this time.</p>";
    });
});
