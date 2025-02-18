import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
1. Create the component
2. Start off with interface
3. edit the App.tsx for the import
4. edit type.ts for the basic setup of HOW THE FUCK it looks.
5. change the component using useState and useEffect.
*  */
