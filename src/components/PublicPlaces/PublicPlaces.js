import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AddPlace from "./AddPlace";

const PublicPlaces = ({ userId }) => {
  const [places, setPlaces] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const getPlaces = async () => {
    const body = {
      authorId: userId,
    };
    const response = await fetch("http://localhost:5000/place/getplaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    setPlaces(json);
  };
  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <div style={{ padding: 50 }}>
      <div style={{ padding: 20 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={setIsOpen}
          style={{ marginBottom: "4%" }}
        >
          Add place
        </Button>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddPlace
          authorId={userId}
          refetchPlaces={getPlaces}
          setIsOpen={setIsOpen}
        />
      </Modal>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {places.length > 0 &&
          places.map((place) => {
            return (
              <PlaceCard
                name={place.name}
                description={place.description}
                location={place.location}
                img={place.img}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PublicPlaces;
