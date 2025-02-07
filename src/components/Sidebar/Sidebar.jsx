import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import logo from "../../assets/Logo.svg";
import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import "bootstrap/dist/css/bootstrap.min.css";
import './Sidebar.css'


const Sidebar = () => {

  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "trend",
        "insights",
        "performance",
        "funnelgraph",
        "settings",
      ];

      let foundActive = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100 && !foundActive) {
            setActiveSection(section);
            foundActive = true;
          }
        }
      }

      // If no section is in view, clear the active section
      if (!foundActive) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Navbar expand="lg" className="sidebar-nav" expanded={expanded}>
      <img
        src={logo}
        alt="Logo"
        className="mobile-logo"
        onClick={() => setExpanded(!expanded)}
      />

      <Navbar.Collapse id="sidebar-nav">
        <Nav className="flex-column">
          <Nav.Link className="logo-container desktop-only">
            <img src={logo} alt="Logo" className="nav-logo" />
          </Nav.Link>

          <Nav.Link
            href="#trend"
            className={`nav-icon ${activeSection === "trend" ? "active" : ""}`}
            onMouseEnter={() => setHoveredIcon('trend')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="material-symbols-outlined">ssid_chart</span>
            {hoveredIcon === 'trend' && <div className="tooltip">trend</div>}
          </Nav.Link>

          <Nav.Link
            href="#insights"
            className={`nav-icon ${activeSection === "insights" ? "active" : ""}`}
            onMouseEnter={() => setHoveredIcon('insights')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="material-symbols-outlined">lightbulb</span>
            {hoveredIcon === 'insights' && <div className="tooltip">insights</div>}
          </Nav.Link>

          <Nav.Link
            href="#performance"
            className={`nav-icon ${activeSection === "performance" ? "active" : ""}`}
            onMouseEnter={() => setHoveredIcon('performance')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="material-symbols-outlined">attach_money</span>
            {hoveredIcon === 'performance' && <div className="tooltip">performance</div>}
          </Nav.Link>

          <Nav.Link
            href="#funnelgraph"
            className={`nav-icon ${activeSection === "funnelgraph" ? "active" : ""}`}
            onMouseEnter={() => setHoveredIcon('funnelgraph')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="material-symbols-outlined">pie_chart_outline</span>
            {hoveredIcon === 'funnelgraph' && <div className="tooltip">funnel graph</div>}
          </Nav.Link>

          <Nav.Link
            href="#settings"
            className={`nav-icon ${activeSection === "settings" ? "active" : ""}`}
            onMouseEnter={() => setHoveredIcon('settings')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className="material-symbols-outlined">settings</span>
            {hoveredIcon === 'settings' && <div className="tooltip">settings</div>}
          </Nav.Link>
          <ThemeToggle className='theme-toggle' />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Sidebar