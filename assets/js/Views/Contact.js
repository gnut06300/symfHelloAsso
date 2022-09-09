import React,{useState, useEffect} from "react";
import httpService from "../Api/httpService";
function Contact() {
    const [association, setAssociation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        httpService.get('/api/contact/').then((response) => {
            setAssociation(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (

            <div className="home">
                <div className="container">    
                    <h1 className="text-center mt-5 mb-3">Contact Page</h1>
                    <h2>Hello {association.name}</h2>
                </div>
            </div>
    );
}

export default Contact;