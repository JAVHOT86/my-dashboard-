document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("video-gallery");

  const videos = [
    {
      title: "Sample Video 1",
      thumb: "https://via.placeholder.com/160x90",
      duration: "12:34",
      url: "#"
    },
    {
      title: "Sample Video 2",
      thumb: "https://via.placeholder.com/160x90",
      duration: "08:45",
      url: "#"
    }
  ];

  videos.forEach(video => {
    const item = document.createElement("div");
    item.innerHTML = `
      <a href="${video.url}">
        <img src="${video.thumb}" alt="${video.title}" />
        <p>${video.title}</p>
        <span>${video.duration}</span>
      </a>
    `;
    gallery.appendChild(item);
  });

  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});