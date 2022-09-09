import React, {useState, useEffect} from "react";
import httpService from "../Api/httpService";
import '../../styles/home.css';

const Home = () => {
    
    const [association, setAssociation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        httpService.get('/').then((response) => {
            setAssociation(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);



        return (

            <div className="home">
                <img className='banner mt-5' src="https://cdn.helloasso.com/img/photos/croppedimage-f14ba18cac1b4d769886f10cdec8e683.png" alt="banner" />
                <h1 className='titre py-5'>Hello</h1>
                
                <section className='description pb-5'>Art Prod : le promoteur de l’expression culturelle contemporaine sous toutes ses formes :<br />• musiques actuelles et émergentes<br />• spectacle vivant<br />• nouvelles tendances artistiques, visuelles, décoratives et médiatiques<br />• production d’événements et d’œuvres artistiques</section>
                <div dangerouslySetInnerHTML={{ __html: "<iframe id='haWidget' allowtransparency='true' scrolling='auto' src='https://www.helloasso.com/associations/artprod/adhesions/membre-actif/widget' style='width: 100%; height: 900px; border: none;' />" }} />
            </div>
        );
    }

   
export default Home;