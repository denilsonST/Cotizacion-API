import React, { Fragment,useState } from 'react'
import './Home.css';
function Home(){
    const [user] = useState(null);
    return(
     <> 
       
        {(user == null) ? (
            
            <div className="text-center">
                <br></br>
                 <h2>BIENVENIDO</h2>
                 <br></br>

            <p>Le damos la Bienvenida al Sistema de Apoyo para las cotizaciones dentro la universidad Mayor de San Simon </p>
            <div className="content">
            <img src="./logoumss.png" alt="" ></img>
            </div>
            </div>
        ):(
            <div className="text-center">
            <h1>Bienvenido al sistema</h1>
            <h2>Revise sus datos personales</h2>
            <img src="./logoumss.png" alt=""></img>
            </div>
            
            
        )
       }
     </>
    );
}

export default Home;