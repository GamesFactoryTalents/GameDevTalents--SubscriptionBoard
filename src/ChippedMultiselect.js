import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

function ChippedMultiselect(props) {

  // When tabulation is pressed or you exit control in ome other ways and some text is entered,
  // generate a fresh chip out of it
  // just as if enter was pressed (except real Enter can possibly send "select-option" reason
  // if user entered the full value manually)
  const handleBlur = event => {
    if(event.target.value && event.target.value.length > 0) {
      let changedValues = [...props.value];
      changedValues.push(event.target.value);
      props.onChange(event, changedValues, "create-option");
    }
  }

	return (
    <Autocomplete
        multiple
        name={props.name}
        options={props.options || []}
        forcePopupIcon={true}
        onChange={props.onChange}
        value={props.value}
        onBlur={handleBlur}
        disabled={props.disabled}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => {
          return (
            <TextField {...params} label={props.labelText} variant="outlined"/>
          );
        }}
    />
	);
}

ChippedMultiselect.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  hintText: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default ChippedMultiselect;