import { Container } from "@mui/material";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import SubscriptionItemList from "../components/SubscriptionItemList";
import SubscriptionsPagination from "../components/SubscriptionsPagination/SubscriptionsPagination";

export default function Home() {
  return (
    <Container sx={{ p: 2 }}>
      <FilterMenu />
      <SubscriptionsPagination />
    </Container>
  );
}
