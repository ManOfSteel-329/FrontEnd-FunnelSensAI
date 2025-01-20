import React from 'react'
import ThemeToggle from './components/ThemeToggle'
import Button from './components/Button'
import './App.css'

export default function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <ThemeToggle />
            <div style={{ 
                marginTop: '2rem', 
                display: 'flex', 
                gap: '1rem', 
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="neutral">Neutral Button</Button>
                <Button variant="special">Special Button</Button>
                <Button variant="primary" disabled>Disabled Button</Button>
            </div>
        </div>
    )
}
