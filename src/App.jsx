import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import './App.css'
import SideBar from './components/Sidebar/Sidebar'

export default function App() {
    return (
        <div className="app-container">
      <SideBar />
      <main className="main-content">
        <section id="trend" className="content-section">
          <h1>Trend</h1>
          <p>Trend analysis and statistics</p>
        </section>

        <section id="insights" className="content-section">
          <h1>Insights</h1>
          <p>Business insights and analytics</p>
        </section>

        <section id="performance" className="content-section">
          <h1>Performance</h1>
          <p>Performance metrics and KPIs</p>
        </section>

        <section id="funnelgraph" className="content-section">
          <h1>Funnel Graph</h1>
          <p>Conversion funnel visualization</p>
        </section>

        <section id="settings" className="content-section">
          <h1>Settings</h1>
          <p>System configuration and preferences</p>
        </section>
      </main>
    </div>
    )
}
