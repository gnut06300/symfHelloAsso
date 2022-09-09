import React, {useState, useEffect} from "react";
<<<<<<< HEAD
import httpService from '../Api/httpService';
// import YoutubeEmbed from "../Components/YoutubeEmbed";
import { Container } from "react-bootstrap";
import '../../styles/home.css';

function Home() {
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
                <video className="video" muted="true" autoPlay={true} loop preload="auto" src="https://artprod.fr/wp-content/uploads/2021/10/Art-Prod.03.mp4"></video>
                
                <Container>
                    <h1 className='text-center py-5'><img src={association.logo} alt="banner"/> Hello {association.name}</h1>
                    <h2 className="text-center text-primary mb-5">{association.category}</h2>
                    <h4 className="text-center text-success mb-4">{association.type}</h4>
                    {/* https://artprod.fr/wp-content/uploads/2021/10/Art-Prod.03.mp4 */}
                    {/* <video className="videoArtProd text-center my-5" controls autoPlay={true} loop preload="auto" src="https://youtu.be/VC-Vdx4j88A"></video> */}
                    <section className='description pb-5' style={{whiteSpace: "pre-wrap"}}>
                        {association.description}
                    
                    </section>
                    {/* <div className="embed-responsive embed-responsive-16by9 videoArtProd text-center">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VC-Vdx4j88A?autoplay=1" allowFullScreen></iframe>
                    </div> */}
                </Container>
                {/* <div>
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                </div> */}
                <img className='banner mt-3' src={association.banner} alt="banner"/>
                <div dangerouslySetInnerHTML={{ __html: "<iframe id='haWidget' allowtransparency='true' scrolling='auto' src='https://www.helloasso.com/associations/artprod/adhesions/membre-actif/widget' style='width: 100%; height: 900px; border: none;' />" }} /> 
=======
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
>>>>>>> f51fb04dc38e12184c40bbaa3953e0b765d6b3a8
            </div>
        );
    }

   
export default Home;