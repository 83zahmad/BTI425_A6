'use client';

import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ArtworkCard from '@/components/ArtworkCard';

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  // Prevent rendering until favouritesList is loaded
  if (!favouritesList) return null;

  return (
    <Container>
      <h2 className="my-4">My Favourite Artworks</h2>
      {favouritesList.length > 0 ? (
        <Row className="gy-4">
          {favouritesList.map((objectID) => (
            <Col lg={3} key={objectID}>
              <ArtworkCard objectID={objectID} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>Nothing Here. Try adding some new artwork to the list.</p>
      )}
    </Container>
  );
}
