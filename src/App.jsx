import React, { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import SignIn from './pages/SignIn'
import Button from './components/Button'
import './App.css'

export default function App() {
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    return (
        <div>
            <ThemeToggle />
            <Button className="btn-primary" onClick={() => setIsSignInOpen(true)}>Open Sign In</Button>
            <SignIn 
                isOpen={isSignInOpen} 
                onClose={() => setIsSignInOpen(false)} 
            />
        </div>
    )
}
