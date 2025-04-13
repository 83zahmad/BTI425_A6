'use client';

import { useAtom } from 'jotai';
import { searchHistoryAtom } from '@/store';
import { useRouter } from 'next/router';
import { ListGroup, Button, Container, Card } from 'react-bootstrap';
import { removeFromHistory } from '@/lib/userData';

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();

  if (!searchHistory) return null;

  const historyClicked = (index) => {
    router.push(`/artwork?${searchHistory[index]}`);
  };

  const removeHistoryClicked = async (event, index) => {
    event.stopPropagation();
    setSearchHistory(await removeFromHistory(searchHistory[index]));
  };

  return (
    <Container>
      <h2 className="my-4">Search History</h2>

      {searchHistory.length > 0 ? (
        <ListGroup>
          {searchHistory.map((query, index) => {
            let params = new URLSearchParams(query);
            let parsedQuery = Object.fromEntries(params.entries());

            return (
              <ListGroup.Item
                key={index}
                onClick={() => historyClicked(index)}
                className="history-item"
              >
                {Object.keys(parsedQuery).map((key) => (
                  <span key={key}>
                    <strong>{key}:</strong> {parsedQuery[key]} &nbsp;
                  </span>
                ))}
                <Button
                  className="float-end"
                  variant="danger"
                  size="sm"
                  onClick={(e) => removeHistoryClicked(e, index)}
                >
                  &times;
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <Card body>No search history available. Try searching for something!</Card>
      )}
    </Container>
  );
}
