import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "@mui/base";
import {
  Autocomplete,
  Chip,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   formControlLabel: {
//     width: "270px",
//     display: "flex",
//     "& span": {
//       fontSize: "12px",
//     },
//   },
//   titleBar: {
//     backgroundColor: "#81A199",
//     // height: 148
//   },
//   titleCaptionsContainer: {
//     maxWidth: "80%",
//     width: 760,
//     height: "100%",
//     padding: 0,
//     borderRadius: "14px",
//   },
//   titleCaptionsInnerContainer: {
//     height: "100%",
//   },
//   titleLogoContainer: {
//     maxWidth: "100vw", //for logo never to be wider than the view port
//   },
//   titleLogo: {
//     // height: 148,
//     maxWidth: "100%",
//   },
//   formWrapper: {
//     maxWidth: 644,
//     textAlign: "left",
//     marginTop: 40,
//     borderRadius: "14px",
//   },
//   registrationForm: {
//     paddingBottom: 80,
//   },
//   introText: {
//     textAlign: "justify",
//   },
//   formLine: {
//     width: "100%",
//     paddingTop: 20,
//   },
//   nonLineFormElement: {
//     paddingTop: 20,
//     width: "100%",
//   },
//   inputControl: {
//     paddingTop: 9,
//     paddingBottom: 9,
//   },
//   textFieldInput: {
//     "& input": {
//       paddingTop: 19,
//       paddingBottom: 9,
//     },

//     "& textarea": {
//       borderRadius: 0,
//     },
//   },

//   inputLabel: {
//     fontWeight: "bold",
//     color: "black",
//     whiteSpace: "nowrap",
//   },
//   inputLabelFile: {
//     fontWeight: "bold",
//     color: "black",
//     whiteSpace: "nowrap",
//     width: "500px%",
//   },
//   employmentOptionsLabel: {
//     fontWeight: "bold",
//     color: "black",
//     whiteSpace: "break-spaces",
//     position: "static",
//   },
//   inputLabelAsterisk: {
//     color: "red",
//   },
//   autocompleteInputRoot: {
//     paddingTop: "0 !important;",
//   },
//   chipRoot: {
//     height: 24,
//     borderRadius: 4,
//   },
//   chipColorPrimary: {
//     backgroundColor: "#2A7CE4",
//   },
//   fileInputControl: {
//     backgroundColor: "rgba(0, 0, 0, 0.09)",
//     textTransform: "initial",
//     whiteSpace: "nowrap",
//     justifyContent: "flex-start",
//     width: "300px",
//   },
//   fileInputControlLabelFileNonSelected: {
//     overflow: "hidden",
//     marginRight: -8, // for full width - to fit "CV" part of text
//   },
//   fileInputControlLabelFileSelected: {
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   },
//   additionalInformationFormControl: {
//     width: "100%",
//   },

//   inFormBlockHeader: {
//     marginTop: 0,
//   },
//   underInfo: {
//     fontSize: 12,
//     color: "#9E9EA7",
//   },
//   termsText: {
//     margin: "12px 0",
//     textAlign: "justify",
//   },
//   backdrop: {
//     zIndex: 1000,
//   },
//   errorAlert: {
//     marginBottom: 8,
//   },
// });

function ChippedMultiselect(props: any) {
  // const classes = useStyles();

  // When tabulation is pressed or you exit control in ome other ways and some text is entered,
  // generate a fresh chip out of it
  // just as if enter was pressed (except real Enter can possibly send "select-option" reason
  // if user entered the full value manually)
  const handleBlur = (event: any) => {
    // console.log("handleBlur, event is ", event);
    if (event.target.value && event.target.value.length > 0) {
      let changedValues = [...props.value];
      changedValues.push(event.target.value);
      props.onChange(event, changedValues, "create-option");
    }
  };

  return (
    <FormControl required={props.required}>
      <InputLabel
        shrink
      >
        {props.labelText}
      </InputLabel>
      <Autocomplete
        multiple
        options={props.options}
        freeSolo
        forcePopupIcon={true}
        onChange={props.onChange}
        value={props.value}
        onBlur={handleBlur}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              color="primary"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              required={
                props.required && props.value && props.value.length === 0
              }
              variant="filled"
              InputLabelProps={{ shrink: true }}
            />
          );
        }}
      />
      <FormHelperText>{props.hintText}</FormHelperText>
    </FormControl>
  );
}

ChippedMultiselect.defaultProps = {
  required: true,
};

ChippedMultiselect.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  hintText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ChippedMultiselect;
