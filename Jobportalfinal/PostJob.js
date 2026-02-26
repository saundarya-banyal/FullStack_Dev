const postButton = document.getElementById("postButton");
const form = document.getElementById("jobForm");
const cancelBtn = document.getElementById("cancelBtn");
const jobsContainer = document.getElementById("jobsContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

postButton.onclick = () => {
    form.style.display = "block";
    postButton.style.display = "none";
};

cancelBtn.onclick = () => {
    form.reset();
    form.style.display = "none";
    postButton.style.display = "inline";
};

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const title = document.getElementById("jobtitle").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const salary = document.getElementById("salary").value;

    createJobCard(title, company, location, salary);

    form.reset();
    form.style.display="none";
    postButton.style.display="inline";
});

function createJobCard(title, company, location, salary){

    const card = document.createElement("div");
    card.className="job-card";

    card.innerHTML = `<h3 contenteditable="false">${title}</h3>
                      <p>Company: <span>${company}</span></p>
                      <p>Location: <span>${location}</span></p>
                      <p>Salary: <span>${salary}</span></p>

                      <button class="updateBtn">Update</button>
                     <button class="deleteBtn">Delete</button>`;

    const updateBtn = card.querySelector(".updateBtn");
    const deleteBtn = card.querySelector(".deleteBtn");

    updateBtn.onclick = () => {
        const spans = card.querySelectorAll("span");

        spans.forEach(s => {
            s.contentEditable = true;
            s.style.border="1px solid black";
        });
    };

    deleteBtn.onclick = () => {
        card.remove();
    };

    jobsContainer.appendChild(card);
}

searchInput.addEventListener("keyup", function(){

    const searchValue = searchInput.value.toLowerCase();

    const jobs = document.querySelectorAll(".job-card");

    jobs.forEach(job => {

        const text = job.innerText.toLowerCase();

        if(text.includes(searchValue)){
            job.style.display = "block";
        } 
    });
});

searchBtn.addEventListener("click", function(){

    const value = searchInput.value.toLowerCase();
    const jobs = document.querySelectorAll(".job-card");

    let found = false;

    jobs.forEach(job => {

        job.classList.remove("highlight");

        if(job.innerText.toLowerCase().includes(value)){
            job.classList.add("highlight");
            found = true;
        }
    });

    if(!found){
        alert("No matching job found");
    }
});