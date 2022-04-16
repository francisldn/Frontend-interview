const API_BASE_URL = `https://www.algoexpert.io/api/testimonials`
const PAGE_SIZE = 5;
let afterID= null;

var div = document.getElementById('testimonial-container')
// to prevent scroll event faster than API fetch
let canFetchTestimonials = true;

// Write your code here.

// create API URL function 
// fetch api data
// store api data in document fragment
// scroll event listener --> update id --> update URL --> then trigger fetch api to fetch more data

div.addEventListener('scroll', handleScroll)

function handleScroll() {
  // if fetching is in progress, do not re-trigger fetch --> wait until fetching is done (status = true)
  if(!canFetchTestimonials) return;
  const bottomSpaceLeftToScroll = (
    // total height of scroll - include overflow
    this.scrollHeight -
    // height of overflow at the top
    this.scrollTop -
    // container height
    this.clientHeight
  );
  if(bottomSpaceLeftToScroll>0) return;
  fetchAndAppendTestimonials();
}

const createAPIURL = () => {
  const url = new URL(API_BASE_URL);
  url.searchParams.set('limit',PAGE_SIZE);
  if(afterID != null) {
    url.searchParams.set('after',afterID);
  }
  return url;
}

async function fetchAndAppendTestimonials() {
  // to prevent re-triggering fetch while it is fetching
  canFetchTestimonials = false;
  const response = await fetch(createAPIURL(),{mode: 'no-cors'})
  console.log(response.json())
  const {testimonials, hasNext} = await response.json();

  const fragment = document.createDocumentFragment();
  testimonials.map(({message}) => {
      fragment.appendChild(`<p class="testimonial">${message}</p>`)
    })
  console.log(fragment);
  div.appendChild(fragment)
    // find the last element data id
  if(hasNext) {
    afterID = testimonials[testimonials.length-1].id;
  } else {
    div.removeEventListener('scroll',handleScroll)
  }
  canFetchTestimonials = true;
}

fetchAndAppendTestimonials();