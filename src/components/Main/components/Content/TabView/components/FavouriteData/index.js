import Container from "./components/Container";
import Locations from "./components/Locations";
import Events from "./components/Events";
import News from "./components/News";

function FavouriteData({ index }) {
  return (
    <Container>
      {index === 0 ? <Locations /> : index === 1 ? <Events /> : <News />}
    </Container>
  );
}

export default FavouriteData;
