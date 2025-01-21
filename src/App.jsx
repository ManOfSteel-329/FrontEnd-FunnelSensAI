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
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
            }}>
                {/* Column 1 - Small Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <h3>Small</h3>
                    <Button className="btn-primary btn-sm">Primary Button</Button>
                    <Button className="btn-secondary btn-sm">Secondary Button</Button>
                    <Button className="btn-neutral btn-sm">Neutral Button</Button>
                    <Button className="btn-gradient btn-sm">Special Button</Button>
                </div>

                {/* Column 2 - Medium Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <h3>Medium</h3>
                    <Button className="btn-primary">Primary Button</Button>
                    <Button className="btn-secondary">Secondary Button</Button>
                    <Button className="btn-neutral">Neutral Button</Button>
                    <Button className="btn-gradient">Special Button</Button>
                </div>

                {/* Column 3 - Large Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <h3>Large</h3>
                    <Button className="btn-primary btn-lg">Primary Button</Button>
                    <Button className="btn-secondary btn-lg">Secondary Button</Button>
                    <Button className="btn-neutral btn-lg">Neutral Button</Button>
                    <Button className="btn-gradient btn-lg">Special Button</Button>
                </div>
            </div>
        </div>
    )
}
