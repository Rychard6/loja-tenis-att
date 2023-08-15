import 'daisyui/dist/full.css';
import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import App from './App';
import './index.css';




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
