# Project Notes

## Technical choices

The project was developed with Vite, React and JavaScript, using a component-based structure

- **React Router** → to manage navigation between the dashboard and character detail
- **Context API** → for global state management
- **Rick and Morty API** → for fetching characters, handling pagination and searching by name through API query parameters
- **Bootstrap** → for the responsive grid system, while for the visual design i used custom CSS
- **Loading, API errors, and empty states** → to provide appropriate user feedback
- **Responsive interface** → to adapt the layout across desktop, tablet, and mobile

### Additional choices

- **Alphabetical sorting** → to allow users to sort characters from A-Z or Z-A
- **Debounce** → on the character search to avoid triggering an API request on every keystroke


## Use of AI

I used ChatGPT as a support tool throughout the development of the project

used primarily for:

- debugging and understanding errors
- reviewing React components and CSS
- discussing responsive design and UI improvements

The project structure, components and main functionality were implemented manually. I wrote and tested the code myself, while using AI to clarify doubts, review parts of the implementation (without an explicit solution)


## What I would do with more time

- **Favorites page** → would add a page where users can save and view their favorite characters
- **Local storage** → to store favorites so they remain available even after refreshing the page
- **Additional filters** → more filters based on the information available in the character cards
- **Scrolling** →  to implement smoother scrolling between sections with "useRef"