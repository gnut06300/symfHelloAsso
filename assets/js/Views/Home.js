import React from "react";
import '../../styles/home.css';

function Home() {
  
    return (

            <div className="home">
                <img className='banner mt-5' src="https://cdn.helloasso.com/img/photos/croppedimage-f14ba18cac1b4d769886f10cdec8e683.png" alt="banner"/>
                <h1 className='titre py-5'>Hello ArtProd</h1>
                {/* <p>{
                    this.associations.filter((association) => (
                        <div key={association.id}>
                            <h3>{association.name}</h3>
                            <p>{association.description}</p>
                        </div>
                    // ))
            // }
                </p> */}
                <section className='description pb-5'>Art Prod : le promoteur de l’expression culturelle contemporaine sous toutes ses formes :<br/>• musiques actuelles et émergentes<br/>• spectacle vivant<br/>• nouvelles tendances artistiques, visuelles, décoratives et médiatiques<br/>• production d’événements et d’œuvres artistiques</section>
                <div dangerouslySetInnerHTML={{ __html: "<iframe id='haWidget' allowtransparency='true' scrolling='auto' src='https://www.helloasso.com/associations/artprod/adhesions/membre-actif/widget' style='width: 100%; height: 900px; border: none;' />" }} /> 
            </div>
    );
}
   
export default Home;