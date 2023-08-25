const ChipSelected = ({ text, variant }) => {
  return variant === "corner" ? (
    <div style={{fontSize: '11px', padding: '0px 5px', border: '1px solid gray', fontWeight: '600', height: '15px', borderRadius: '2px', color: 'gray'}}>{text}</div>
  ) : (
    <div style={{fontSize: '11px', padding: '5px 5px', border: '1px solid black', borderRadius: '50px'}}>{text}</div>
  );
};
export default ChipSelected;
