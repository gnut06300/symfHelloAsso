import React, {useState, useEffect} from "react";
import httpService from '../Api/httpService';
import { Container } from "react-bootstrap";
import '../../styles/home.css';

function About() {
    const [association, setAssociation] = useState([]);
    useEffect(() => {
        (async () => {
                try{
                const response = await httpService.get('/org');
                
                setAssociation(response.data);
                console.log('response Home', response.data);
                }catch(err){
                    console.log(err);
                }
    })();
    },[]);
  
    return (

            <div className="home">
                <img className='banner my-5' src={association.banner} alt="banner"/>
                <Container>
                    <h1 className='text-center py-5'><img src={association.logo} alt="banner"/> {association.name}</h1>
                    <h2 className="text-center text-primary mb-5">{association.category}</h2>
                    <h4 className="text-center text-success mb-4">{association.type}</h4>
                    <div className="embed-responsive embed-responsive-16by9 videoArtProd text-center">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VC-Vdx4j88A?autoplay=1" allowFullScreen></iframe>
                    </div>
                </Container>
            </div>
    );
}
   
export default About;