import { Container } from "@mui/material";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import SubscriptionItemList from "../components/SubscriptionItemList";
import SubscriptionsPagination from "../components/SubscriptionsPagination/SubscriptionsPagination";
import background from "../background.jpg";

export default function Home() {
  return (
    <Container sx={{ p: 2, backgroundImage: `url(${background})`,backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", maxWidth: "100%!important" }}>
      <FilterMenu />
      <SubscriptionsPagination />
    </Container>
  );
}
