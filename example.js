const API_BASE_URL = () =>
`https://jsonplaceholder.typicode.com/todos`;

var div = document.getElementById('testimonial-container')

// Write your code here.
async function fetchAPI() {
  const response = await fetch(API_BASE_URL())
  if(!response.ok) throw Error("Error!");
  const data = await response.json();
  // create document fragment to store and append data
  const fragment = document.createDocumentFragment()
  data.map(({title}) => {
        // create p tag
        let dataElement = document.createElement('p')
        // add class name = 'testimonal'
        dataElement.classList.add('testimonial')
        // add element
        dataElement.textContent = title;
        fragment.appendChild(dataElement)
    })
  div.appendChild(fragment)
}

fetchAPI()