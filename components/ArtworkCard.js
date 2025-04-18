import useSWR from 'swr';
import Error from 'next/error';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function ArtworkCard({ objectID }) {
    const { data, error } = useSWR(
        objectID ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}` : null
    );
    if (error) return <Error statusCode={404} />;
    if (!data) return null;

    return (
        <Card>
            <Card.Img
                variant="top"
                src={data.primaryImageSmall || 'https://placehold.co/375x375?text=Not+Available'}
                alt={data.title || 'Artwork'}
            />
            <Card.Body>
                <Card.Title>{data.title || 'N/A'}</Card.Title>
                <Card.Text>
                    <strong>Date:</strong> {data.objectDate || 'N/A'}
                    <br />
                    <strong>Classification:</strong> {data.classification || 'N/A'}
                    <br />
                    <strong>Medium:</strong> {data.medium || 'N/A'}
                </Card.Text>
                <Link href={`/artwork/${objectID}`} passHref legacyBehavior>
                    <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
