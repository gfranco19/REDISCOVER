import React from "react";
import "./Example.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import { Card, CardDeck } from "react-bootstrap";
import Office from '../../assets/images/office.png';
import Ferris from '../../assets/images/ferris.png';
import madmen from '../../assets/images/madmen.png';
import ironman from '../../assets/images/ironman.png';
import '../../assets/images/film1.png';

function Example() {
    return (
        <div>
            <NavTabs />
            <div className="filmBackground">
                <div >
                    <br /> <br />
                    <h1>As Seen On The Big Screen - Example</h1>
                </div>
                <div className="row">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={Office} />
                            <Card.Body>
                                <Card.Title>The Office office building</Card.Title>
                                <Card.Text>
                                    Location: 13927 Saticoy Street Van Nuys, CA<br />
                            Description: the exterior of the Office office building<br />
                            Date: 1/1/20<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Ferris} />
                            <Card.Body>
                                <Card.Title>Ferris Bueller's house</Card.Title>
                                <Card.Text>
                                    Location: 4160 Country Club Dr, Long Beach, CA <br />
                            Description: Ferris' house in the movie<br />
                            Date: 1/1/19<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={ironman} />
                            <Card.Body>
                                <Card.Title>Ironman's house</Card.Title>
                                <Card.Text>
                                    Location: Malibu Point 10880 Malibu, CA<br />
                            Description: house from Ironman 3<br />
                            Date: 12/12/18<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={madmen} />
                            <Card.Body>
                                <Card.Title>Mad Men diner</Card.Title>
                                <Card.Text>
                                    Location: 1236 West 7th Street, LA CA<br />
                            Description: the diner where Don and Betty eat<br />
                            Date: 2/23/17<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>

                <div className="row">
                    <CardDeck>
                        <Card className="example">
                            <Card.Img variant="top" src={Office} />
                            <Card.Body>
                                <Card.Title>The Office office building</Card.Title>
                                <Card.Text>
                                    Location: 13927 Saticoy Street Van Nuys, CA<br />
                            Description: the exterior of the Office office building<br />
                            Date: 1/1/20<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                        <Card className="example">
                            <Card.Img variant="top" src={Ferris} />
                            <Card.Body>
                                <Card.Title>Ferris Bueller's house</Card.Title>
                                <Card.Text>
                                    Location: 4160 Country Club Dr, Long Beach, CA <br />
                            Description: Ferris' house in the movie<br />
                            Date:<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                        <Card className="example">
                            <Card.Img variant="top" src={ironman} />
                            <Card.Body>
                                <Card.Title>Ironman's house</Card.Title>
                                <Card.Text>
                                    Location: Malibu Point 10880 Malibu, CA<br />
                            Description: house from Ironman 3<br />
                            Date: 12/12/18<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                        <Card className="example">
                            <Card.Img variant="top" src={madmen} />
                            <Card.Body>
                                <Card.Title>Mad Men diner</Card.Title>
                                <Card.Text>
                                    Location: 1236 West 7th Street, LA CA<br />
                            Description: the diner where Don and Betty eat<br />
                            Date: 2/23/17<br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Contributed by: username</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>


            </div>

        </div>



    );
}

export default Example;