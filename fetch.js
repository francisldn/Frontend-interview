const API_BASE_URL = () =>
`https://jsonplaceholder.typicode.com/todos`;

var div = document.getElementById('testimonial-container')

// Write your code here.
const fetchAPI = () => {
  const data = fetch(API_BASE_URL())
  .then(res => {
      if(!res.ok) {
        throw Error("Error") 
      }
      return res.json();
    })
    .then(testimonials => {
      console.log(testimonials)
      testimonials.map(data => div.insertAdjacentHTML('afterbegin',`<p class="testimonial">Title: ${data.title}</p>`))
    })
    .catch((error) => {
      console.log(error)
  })
}

fetchAPI()