import 'materialize-css';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import './style.css';

function Cards (){
    return(
        <div id="cards-area">
                <Col className="card-name">
                    <Card
                        actions={[
                        <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>

                <Col className="card-name">
                    <Card
                        actions={[
                        <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>

                <Col className="card-name">
                    <Card
                        actions={[
                        <a key="1" href="#">This is a Link</a>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        Here is the standard card with an image thumbnail.
                    </Card>
                </Col>
    </div>
    );
}

export default Cards;