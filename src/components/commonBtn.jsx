import { Button } from "@material-ui/core";

const commonBtn = ({ variant, topic, recipient }) => {
  return (
    <Button
      href={`mailto:${recipient}?subject=${topic}`}
      style={{
        maxWidth: "200px",
        zoom: variant === "small" ? "80%" : "150%",
        borderRadius: "10px",
      }}
      variant="contained"
      color="secondary"
    >
      I'M INTERESTED
    </Button>
  );
};

export default commonBtn;
