import { Stack } from "@mui/material";
import SubscriptionItem from "./SubscriptionItem";
import ISubscriptionItem from "../../interfaces/SubscriptionItem";
import { observer } from "mobx-react";
import store from "../../store/store";

interface Props {
  page: number;
  rowsPerPage: number;
}

const SubscriptionItemList = (props: Props) => {
  const { page, rowsPerPage } = props;
  const { subscribers } = store;

  const currentPageSubscribers = [...subscribers].slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {currentPageSubscribers.map((subscriber: ISubscriptionItem) => (
        <SubscriptionItem key={subscriber.ip} subscriber={subscriber} />
      ))}
    </Stack>
  );
}

export default observer(SubscriptionItemList);