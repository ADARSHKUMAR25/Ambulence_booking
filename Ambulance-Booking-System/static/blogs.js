document.addEventListener("DOMContentLoaded", function () {
  const blogs = [
    {
      title: "Emergency Health Tips",
      content: "Quick advice to follow in case of emergencies.",
      image: "https://via.placeholder.com/600x300",
    },
    {
      title: "How to Book an Ambulance",
      content: "Step-by-step guide for our ambulance booking process.",
      image: "https://via.placeholder.com/600x300",
    },
    {
      title: "First Aid Basics",
      content: "Learn the essential first aid techniques for safety.",
      image: "https://via.placeholder.com/600x300",
    },
  ];

  const blogContainer = document.getElementById("blogCards");

  blogs.forEach((blog, index) => {
    const isActive = index === 0 ? "active" : "";
    blogContainer.innerHTML += `
      <div class="carousel-item ${isActive}">
        <div class="card text-white bg-dark border-light rounded shadow-lg mx-auto" style="width: 90%; max-width: 700px;">
          <img src="${blog.image}" class="card-img-top" alt="${blog.title}">
          <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">${blog.content}</p>
          </div>
        </div>
      </div>
    `;
  });
});
