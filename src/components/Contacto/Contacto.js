import { useEffect } from "react"



const Contacto = () => {
    
    const clickear = (event) =>{
        console.log(event)
    }

    useEffect(() => {

        window.addEventListener('click', clickear) 

 
        return() => {
            window.removeEventListener('click', clickear)
        }
    }, [])



    return (
        <div className="container my-5" onClick={clickear}>
            <h2>Contacto</h2>
            <hr/>
        </div>
    )
}

export default Contacto;