// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import { createRoot } from "react-dom/client";

// const theRoot = document.getElementById('root');
// const root = createRoot(theRoot);
// root.render(<span>Hello, from the other side!</span>)


// import { createRoot } from "react-dom/client";

// const react = createRoot(document.getElementById('root'));

// for components the function name should begin with a capital letter
// function ShowElement() {
//   return (
//     <div>
//       <p>The man is waiting for his order!</p>
//       <span>He has been waiting patiently for a long time</span>
//       <p>Ensure he gets what he requested, and promptly.</p>
//     </div>
// )
// };

// react.render(
//   <div>
//     <ShowElement />
//   </div>
// );


// import { createRoot } from "react-dom/client";

// const react = createRoot(document.getElementById('root'));
// function ThePage() {
//   return (
//     <div className='house'>

//       <img src="react-logo.png" width='40px'height='40px'/>
//       <h1>My First React Page</h1>
//       <h3>Reasons for React's Popularity</h3>

//       <ul>
//         <li>React has over 100k GitHub users</li>
//         <li>React is the most popular JS Library</li>
//         <li>It's first release happened in 2013</li>
//         <li>React was written by Jordan Walke</li>
//         <li>Fun fact: Meta maintains react. Funny, right?</li>
//       </ul>

//     </div>
//   )
// }

// react.render(
//   <div>
//     <ThePage />
//   </div>
// )


// import { createRoot } from "react-dom/client";
// import { Header } from "/Header.jsx";
// import { MainContent } from "/MainContent.jsx";
// import { Footer } from "/Footer.jsx";
// const theRoot = createRoot(document.getElementById('root'));

// function PageDeets() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   )
// }

// theRoot.render(
//   <PageDeets />
// )

import { createRoot } from "react-dom/client";
import { Appi } from "./Appi.jsx";
const rootDiv = createRoot(document.getElementById('root'));

rootDiv.render (<Appi />)