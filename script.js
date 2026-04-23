const testimonials = [
  {
    name: "Parent 1",
    text: "Amazing coaches and great environment!"
  },
  {
    name: "Parent 2",
    text: "My son has improved so much."
  }
];

const container = document.getElementById("testimonials-container");

testimonials.forEach(t => {
  const div = document.createElement("div");
  div.innerHTML = `<p>"${t.text}"</p><strong>- ${t.name}</strong>`;
  container.appendChild(div);
});
