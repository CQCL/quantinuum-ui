
import {createRoot} from "react-dom/client" 
import { ComponentProps } from "react";
import { NavBar } from "../../components/navmenu";

  (() => {
    const mountElement = document.querySelector('.nexus-nav')
    if (!mountElement) return
    const renderIn = document.createElement('div')
    mountElement.appendChild(renderIn)
  
    const root = createRoot(renderIn)
    
    root.render(
      <div className="use-tailwind">  <div className="antialiased" style={{fontFamily: `Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`}}><NavBar activePath="/" ></NavBar> </div></div>
    )
  })()
