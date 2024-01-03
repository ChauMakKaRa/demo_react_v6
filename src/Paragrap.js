import { useContext } from "react"
import {ThemeContext} from './App'
function Paragrap() {
    const context = useContext(ThemeContext)
    return (
        <div className={context}> 
            <p>Hello các anh em</p>
        </div>
    )
}

export default Paragrap

