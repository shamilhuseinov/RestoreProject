import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        outDir: '../API/wwwroot'
    },
    server: {      
        port: 3000, 
    },
    plugins: [react()]
})