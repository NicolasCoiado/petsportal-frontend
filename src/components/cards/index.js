import 'materialize-css';
import './style.css';
import {Card , Icon, CardTitle} from 'react-materialize';
function Cards (){
    return(
        <>
        <div className="cards">
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title="Card Title"
                >
                <p>
                    <a href="#">
                    This is a link
                    </a>
                </p>
            </Card>
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title="Card Title"
                >
                <p>
                    <a href="#">
                    This is a link
                    </a>
                </p>
            </Card>
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title="Card Title"
                >
                <p>
                    <a href="#">
                    This is a link
                    </a>
                </p>
            </Card>
        </div>
    </>
    );
}

export default Cards;