
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { ProviderTask } from './context/context.jsx'

createRoot(document.getElementById('root')).render( <ProviderTask> <App /></ProviderTask>)
