import React from 'react'
import {createRoot}   from 'react-dom/client';
const container = document.getElementById('App')
const root = createRoot(container)
import App from './routes/App'

root.render(<App/>)



