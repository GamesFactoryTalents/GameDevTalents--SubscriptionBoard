/**
 * GFSelect == Game Factory Select not to reuse the Select name
 */

import React from "react";
import PropTypes from "prop-types";

import { FormControl, MenuItem, Select } from "@mui/base";
import { FormHelperText, InputLabel } from "@mui/material";

export default function GFSelect(props: any) {
  return (
    <FormControl required>
      <InputLabel>{props.labelText}</InputLabel>
      <Select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        // variant="filled"
      >
        {props.options.map((item: any, index: any) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{props.hintText}</FormHelperText>
    </FormControl>
  );
}

GFSelect.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  hintText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
