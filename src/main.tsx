import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider >
      <main className='dark bg-black min-h-screen' >
        <App />
      </main>
    </HeroUIProvider>
  </StrictMode>,
)
