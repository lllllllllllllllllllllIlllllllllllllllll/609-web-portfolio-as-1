import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/root/Root';
import { Error } from './pages/root/Error';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Message } from './pages/message/Message';
import { Pagelinks } from './pages/pagelinks/Pagelinkpage';
import { Skills } from './pages/skills/Skills';
import { Projects } from './pages/projects/Projects';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children:[
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'links',
        element: <Pagelinks />
      },
      {
        path: 'message',
        element: <Message />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'skills',
        element: <Skills />
      }
    ]
  }
])

root.render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
