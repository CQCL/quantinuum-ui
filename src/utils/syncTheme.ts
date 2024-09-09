import { subscribeToTheme } from "./darkMode"

// This script sets up event listeners to set the appropriate css class in the DOM for the current theme. It's intended to be executed in the head of the document hence it is immediately invoked (IIFE).
(() =>  {
    console.log('uo')
    subscribeToTheme(({isDark}) => {
        console.log('BRO', {isDark})
        document.body.setAttribute("data-theme",  isDark ?"dark" : 'light') 
    })
})()
