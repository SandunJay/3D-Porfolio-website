// import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import { Home,About,Projects,Contact } from './pages';

// const App = () => {
//   return (
//     <main 
//       className='bg-slate-300/20'
//       style={{
//         height: '100vh',
//         overflowY: 'auto',
//         scrollbarGutter: 'stable',
//       }}
//       >
//         <Router>
//             <Navbar/>
//             <Routes>
//                 <Route path="/" element={<Home/> } />
//                 <Route path='/about'element={<About/>}/>
//                 <Route path='/projects'element={<Projects/>}/>
//                 <Route path='/contact'element={<Contact />}/>
//             </Routes>
//         </Router>
//     </main>
//   )
// }

// export default App

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
  return (
    <>
        <style jsx global>{`
          /* Webkit browsers like Chrome, Safari */
          ::-webkit-scrollbar {
            hidden: true;
          }

          ::-webkit-scrollbar-track {
            background: #2D3748;
          }

          ::-webkit-scrollbar-thumb {
            background: #4A5568;
            border-radius: 6px;
            border: 3px solid #E2E8F0;
          }

          ::-webkit-scrollbar-thumb:hover {
            background:#A0AEC0;
          }

          /* Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #CBD5E0 #E2E8F0;
          }

          /* For Internet Explorer and Edge */
          body {
            -ms-overflow-style: none;
          }
        `}</style>

      <main 
        className='bg-slate-300/20'
        // style={{
        //   height: '100vh',
        //   overflowY: 'auto',
        //   scrollbarWidth: 'thin',
        //   scrollbarColor: 'rgba(255, 255, 255, 0.5) transparent',
        //   scrollbarGutter: 'stable',
        // }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App

