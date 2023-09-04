import { Button } from "@mui/material";

interface Props {
  variant: string;
  topic: string;
  recipient: string;
}

const CommonBtn = ({ variant, topic, recipient }: Props) => {
  return (
    <Button
      href={`mailto:${recipient}?subject=${topic}`}
      style={{
        maxWidth: "200px",
        zoom: variant === "small" ? "80%" : "150%",
        borderRadius: "10px",
      }}
      /* @ts-ignore comment */
      variant="pink"
      color="secondary"
    >
      I&#39;M INTERESTED
    </Button>
  );
};

export default CommonBtn;