import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function SingleProductScreen() {

    const params = useParams();

    const productId = params.id

    //what we are trying to fetch
    const [products, SetProducts] = useState([]);
    //manage if fetching is done yet
    const [loading, SetLoading] = useState(true);

    //run use effect on component/page load
    useEffect(() => {

        //create function to call api for products
        const fetchProduct = async () => {
            //api call
            const { data } = await axios.get(`https://localhost:7214/api/products/${productId}`)
            console.log(data)
            SetProducts(data)
            if (data) {
                SetLoading(false)
            }
        }

        fetchProduct()

    }, []);

    return <div>
        {loading ? <Loader /> : (
            <Container>
                <h1>{product.name}</h1>
                <img src={product.image} alt="game"></img>
                <p>{product.description}</p>
                <h2>£{product.price}</h2>
            </Container>
        )}
    </div>;
}


export default SingleProductScreen;
