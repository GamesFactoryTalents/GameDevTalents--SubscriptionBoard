import { Container } from "@mui/material";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import SubscriptionItemList from "../components/SubscriptionItemList";
import SubscriptionsPagination from "../components/SubscriptionsPagination/SubscriptionsPagination";

export default function Home() {
  return (
    <Container sx={{ p: 2, background: "#00b0ff", maxWidth: "100%" }}>
      <FilterMenu />
      <SubscriptionsPagination />
    </Container>
  );
}
