/*********************************************************************************
 *  BTI425 – Assignment 5
 * 
 *  I declare that this assignment is my own work in accordance with Seneca's 
 *  Academic Integrity Policy: 
 *  
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *  
 *  Name: Zeeshaun Ahmad  Student ID: 158043224  Date: March 21, 2025
 ********************************************************************************/

import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <Row className="my-4">
                <Col>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
                        alt="Metropolitan Museum of Art"
                        fluid
                        rounded
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <p>
                        The <strong>Metropolitan Museum of Art</strong> in New York City is one of the world's largest
                        and most prestigious art museums. It houses over two million works of art spanning 5,000 years
                        of history, including paintings, sculptures, textiles, and more from various cultures.
                    </p>
                </Col>
                <Col lg={6}>
                    <p>
                        The museum's collection includes works from ancient Egypt, European masterpieces, and modern
                        American art. The Met is a cultural landmark, attracting millions of visitors each year.
                    </p>
                    <p>
                        Learn more on{' '}
                        <a
                            href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Wikipedia
                        </a>
                        .
                    </p>
                </Col>
            </Row>
        </>
    );
}
