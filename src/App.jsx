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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <h3>Small</h3>
                    <Button className="btn-primary btn-sm">Primary Button</Button>
                    <Button className="btn-secondary btn-sm">Secondary Button</Button>
                    <Button className="btn-neutral btn-sm">Neutral Button</Button>
                    <Button className="btn-gradient btn-sm">Special Button</Button>
                    <Button className="btn-primary btn-sm" disabled>Primary Button</Button>
                    <Button className="btn-secondary btn-sm" disabled>Secondary Button</Button>
                    <Button className="btn-neutral btn-sm" disabled>Neutral Button</Button>
                    <Button className="btn-gradient btn-sm" disabled>Special Button</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <h3>Medium</h3>
                    <Button className="btn-primary">Primary Button</Button>
                    <Button className="btn-secondary">Secondary Button</Button>
                    <Button className="btn-neutral">Neutral Button</Button>
                    <Button className="btn-gradient">Special Button</Button>
                    <Button className="btn-primary" disabled>Primary Button</Button>
                    <Button className="btn-secondary" disabled>Secondary Button</Button>
                    <Button className="btn-neutral" disabled>Neutral Button</Button>
                    <Button className="btn-gradient" disabled>Special Button</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <h3>Large</h3>
                    <Button className="btn-primary btn-lg">Primary Button</Button>
                    <Button className="btn-secondary btn-lg">Secondary Button</Button>
                    <Button className="btn-neutral btn-lg">Neutral Button</Button>
                    <Button className="btn-gradient btn-lg">Special Button</Button>
                    <Button className="btn-primary btn-lg" disabled>Primary Button</Button>
                    <Button className="btn-secondary btn-lg" disabled>Secondary Button</Button>
                    <Button className="btn-neutral btn-lg" disabled>Neutral Button</Button>
                    <Button className="btn-gradient btn-lg" disabled>Special Button</Button>
                </div>
            </div>
        </div>
    )
}
