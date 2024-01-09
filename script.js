// Sample job data
const jobData = [
    { title: "Software Engineer", location: "Remote", description: "We're looking for a skilled software engineer." },
    { title: "Marketing Specialist", location: "New York", description: "Join our marketing team and make an impact." },
    { title: "HR Manager", location: "San Francisco", description: "Help us build a great team and culture." }
  ];
  // Function to display benefits content
  function displayBenefits() {
    const benefitsSection = document.getElementById("benefits");
    const benefitsContent = `
      <h2>Why Work With Us?</h2>
      <p>Information about benefits and reasons to work at the company goes here.</p>
    `;
    benefitsSection.innerHTML = benefitsContent;
  }
  
  // Function to create job application form fields
  // Assuming you have a form with id="jobApplicationForm"
const form = document.getElementById('applicationForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  fetch('/apply', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // Handle successful submission
      console.log('Application submitted:', data);
      // You can display a success message or redirect to another page here
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the application:', error.message);
      // Display an error message or handle the error accordingly
    });
});

  // Display benefits content when the benefits.html page loads
  if (document.title === "Benefits - Company Job Openings") {
    displayBenefits();
  }
  
    // Function to display job openings
  function displayJobs() {
    const jobList = document.getElementById("jobList");
    jobData.forEach(job => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${job.title}</strong> - ${job.location}<br>${job.description}`;
      jobList.appendChild(li);
    });
  }
  // Display jobs and create form fields when the job-openings.html page loads
  if (document.title === "Job Openings - Company Job Openings") {
    displayJobs();
  }
  
  // Display job application form fields when the apply.html page loads
  if (document.title === "Apply Now - Company Job Openings") {
    createFormFields();
  }
  
  
  // Function to go back to the previous page
  function goBack() {
    window.history.back();
  }

  
