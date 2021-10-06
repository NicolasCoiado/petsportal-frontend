import 'materialize-css';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import './style.css';
import Gato from '../../images/gato.jpeg';
function Cards (){
    return(
        <Row>
            <Col 
                className="coluna"
            >
                <Card
                    actions={[
                        <a key="1" href="#">This is a Link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={Gato}>Card Title</CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Here is the standard card with an image thumbnail.
                </Card>
            </Col>
            <Col
                className="coluna"
            >
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
            <Col
                className="coluna"
            >
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
        </Row>
    );
}

export default Cards;