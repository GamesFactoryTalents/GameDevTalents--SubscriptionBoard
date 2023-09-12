import React, { useRef, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import tbFormConfig from "../interfaces/tbFormConfig";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import short from "short-uuid";
import countries from "../commonSettings/countries";
import skillTree from "../commonSettings/skillTree";
import employmentOptions from "../commonSettings/employmentOptions";
import customTheme from "../theme/theme";
import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { AlertTitle } from "@mui/material";
import { Montserrat } from "next/font/google";
import { Container } from "@mui/system";

export const SENDING_NONE = "none";
export const SENDING_IN_PROGRESS = "sending";
export const SENDING_FAILED = "failed";
export const SENDING_SUCCEEDED = "succeeded";
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

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function Alert(props: any) {
  return <AlertTitle elevation={6} variant="filled" {...props} />;
}

/**
 * If we'll need some more validation, it may make sense to move to Formik or Formik+Yup
 *
 * @param emailAddress can be null or empty
 */
function validateEmailAddress(emailAddress: any) {
  if (!emailAddress) {
    return "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailAddress)) {
    return "Invalid email address";
  }
  return null;
}

export default function GFApplicationForm(props: any) {

  const locationRef = useRef() as any;
  const locationRoleRef = useRef() as any;
  const formRef = useRef();
  const [locationWarning, setLocationWarning] = useState(false);
  const [locationRoleWarning, setLocationRoleWarning] = useState(false);
  const [anotherRole, setAnotherRole] = useState(false);
  const [resumeWarning, setResumeWarning] = useState(false);
  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(25000);
  const [showLogoCheckbox, setShowLogo] = React.useState(false);

  const countriesList = countries.map((country) => country.label);

  function specialitiesForCategory(category: any) {
    const categoryEntry = skillTree.find(
      (item: any) => Object.keys(item)[0] === category
    ) as any;
    const rawSpecList =
      (categoryEntry && categoryEntry[category].specialities) || [];
    const uniqSpecList = [...new Set(rawSpecList)];
    return uniqSpecList.sort();
  }

  // Go over array of category entries and for each entry get the very first key (as there is one only always)
  const categories = skillTree.map(
    (value: any, key: any) => Object.keys(value)[0]
  );
  const workPreferences = employmentOptions.workPreferences;

  const seniorityLevels = employmentOptions.seniorityLevels;
  const skills = employmentOptions.skills;

  const employmentOptionsPossible = employmentOptions.employmentOptions;

  const [recruitValues, setRecruitValues] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    linkCompany: "",
    emailAddress: "",
    showLogo: false,
    logoFile: null,
    aboutStudio: "",
    benefits: "",
  });

  const [formValues, setFormValues] = useState({
    category: '',
    specialities: [],
    skills: [],
    gameGenres: [],
    gameEngines: [],
    workPreferences: [],
    gamePlatforms: [],
    seniorityLevel: [],
    jobTitle: "",
    employmentOptions: [],
    country: "",
    roleLocation: [],
    salaryRange: [salaryFrom, salaryTo],
    responsibilities: "",
    requirements: "",
    idealAdditions: "",
    theirCulture: "",
    reasonsToWork: "",
    linkJob: "",
    id: short.generate(),
  } as any);

  const updateCategoryField = (e: any) => {
    // cleaning out the specialities field when category is changed
    if (e) doUpdateFields([{ category: e.target.innerText }, { specialities: [] }]);
  };

  // Cannot be called several times in the update cycle as the next one will override the previous one
  const doUpdateFields = (nameValuePairs: any) => {
    let updateObject = { ...formValues };
    for (let entry of nameValuePairs) {
      const name = Object.keys(entry)[0];
      const value = entry[name];
      updateObject[name] = value;
    }

    setFormValues(updateObject);
  };

  // Cannot be called several times in the update cycle as the next one will override the previous one
  const doUpdateField = (fieldName: any, fieldValue: any) => {
    setFormValues({
      ...formValues,
      [fieldName]: fieldValue,
    });
    setRecruitValues({
      ...recruitValues,
      [fieldName]: fieldValue,
    });
  };

  /**
   * "Known" as in we we are ready to display them
   * @type {{}}
   */
  const [knownErrors, setKnownErrors] = useState({
    emailAddress: null,
  });

  function validateEmailAddressFieldValue(emailAddressFieldValue: any) {
    const emailAddressError = validateEmailAddress(emailAddressFieldValue);
    setKnownErrors({
      emailAddress: emailAddressError as any,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    let locEnabled = locationRef.current.querySelector("input").value !== "";
    let locRoleEnabled = true;
    if (formValues.roleLocation.length !== 0) {
      formValues.roleLocation.forEach((element: any) => {
        if (!countriesList.includes(element)) {
          locRoleEnabled = false;
        }
      });
    } else {
      locRoleEnabled = false;
    }
    if (locEnabled) {
      setLocationWarning(false);
    }
    if (locRoleEnabled) {
      setLocationRoleWarning(false);
    }
    if (knownErrors.emailAddress !== null) {
      console.log("Cannot submit form with invalid email address");
      return false;
    }

    if (locEnabled && locRoleEnabled) {
      // converts indices of employmentOptions to array of strings to post
      if (props.onSubmitWish) {
        if (anotherRole) {
          props.onSubmitWish(
            {
              ...formValues,
              ...recruitValues,
              salaryRange: [salaryFrom, salaryTo],
              showLogo: `${showLogoCheckbox ? "true" : "false"}`,
              id: short.generate(),
            },
            true
          );
          setFormValues({
            category: "",
            specialities: [],
            skills: [],
            gameGenres: [],
            gameEngines: [],
            workPreferences: [],
            gamePlatforms: [],
            seniorityLevel: [],
            jobTitle: "",
            employmentOptions: [],
            country: "",
            roleLocation: [],
            salaryRange: [0, 25000],
            responsibilities: "",
            requirements: "",
            idealAdditions: "",
            theirCulture: "",
            reasonsToWork: "",
          } as any);
        } else {
          props.onSubmitWish({
            ...formValues,
            ...recruitValues,
            salaryRange: [salaryFrom, salaryTo],
            showLogo: `${showLogoCheckbox ? "true" : "false"}`,
            id: short.generate(),
          });
        }

        emailjs
          .sendForm(
            "service_vlw2mas",
            "template_9yj6f1o",
            e.target,
            "_9UETZzyKZBjZd-wQ"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    } else {
      if (!locEnabled) {
        setLocationWarning(true);
        window.scrollTo(0, locationRef.current!.offsetTop);
      }
      if (!locRoleEnabled) {
        setLocationRoleWarning(true);
        window.scrollTo(0, locationRoleRef.current!.offsetTop);
      }
    }
  }

  function specialitiesChanged(e: any, value: string | any[], reason: any) {
    if (Array.isArray(value) && value.length > 3) {
      value = value.slice(0, 3);
    }
    doUpdateFields([{ specialities: value }]);
  }

  function skillsChanged(e: any, value: string | any[], reason: any) {
    if (Array.isArray(value) && value.length > 5) {
      value = value.slice(0, 5);
    }
    doUpdateFields([{ skills: value }]);
  }

  function gameGenresChanged(e: any, value: any, reason: any) {
    doUpdateField("gameGenres", value);
  }

  function gameEnginesChanged(e: any, value: any, reason: any) {
    doUpdateField("gameEngines", value);
  }

  function gamePlatformsChanged(e: any, value: any, reason: any) {
    doUpdateField("gamePlatforms", value);
  }

  // function countryChanged(e, value, reason) {
  //   doUpdateField("countryRole", value);
  // }

  function employmentOptionChanged(e: any, value: any) {
    doUpdateField("employmentOptions", value);
  }

  function seniorityLevelChanged(e: any, value: any) {
    doUpdateField("seniorityLevel", value);
  }

  function workPreferencesChanged(e: any, value: any) {
    doUpdateField("workPreferences", value);
  }

  function rolePreferencesChanged(e: any, value: any) {
    doUpdateField("roleLocation", value);
  }

  function fileSelectionButtonLabel() {
    return formValues.logoFile ? formValues.logoFile.name : `Logo`;
  }


  const updateField = (e: any) => {
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked && e.target.value;
    } else if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size / 1024 / 1024 < tbFormConfig.maxCVFileSizeMB) {
        value = e.target.files[0];
        setResumeWarning(false);
      } else {
        setResumeWarning(true);
      }
    }

    doUpdateField(e.target.name, value);
    if (e.target.name === "emailAddress") {
      validateEmailAddressFieldValue(value);
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <form
          name="personregistration"
          onSubmit={handleSubmit}
          ref={formRef.current}
        >
          <Grid
            className={montserrat.className}
            container
            spacing={4}
            direction="column"
            alignItems="stretch"
          >
            <Grid item>
              <h2>Subscription form</h2>
            </Grid>
            <Grid container item direction="row" xs={12} spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} required>
                  <TextField
                    label="First Name"
                    required
                    name="firstName"
                    value={recruitValues.firstName}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} required>
                  <TextField
                    label="Last Name"
                    required
                    name="lastName"
                    value={recruitValues.lastName}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container item direction="row" xs={12} spacing={2}>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} required>
                  <TextField
                    label="Company Name"
                    required
                    name="companyName"
                    value={recruitValues.companyName}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }} required>
                  <TextField
                    label="Email Address"
                    required
                    type="email"
                    name="emailAddress"
                    error={knownErrors.emailAddress!}
                    helperText={knownErrors.emailAddress}
                    value={recruitValues.emailAddress}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              style={{ display: "flex", gap: "30px", width: "100%" }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showLogoCheckbox}
                      onChange={(event) => setShowLogo(event.target.checked)}
                      name="showLogo"
                    />
                  }
                  label="Publish Company Logo along with the Role Listing"
                />
                <FormHelperText style={{ width: "100%", display: "flex" }}>
                  <span>
                    All Roles are published anonymously unless otherwise
                    specified
                  </span>
                </FormHelperText>
              </Box>

              <Grid
                item
                xs={6}
                style={{ display: "flex", gap: "30px", width: "100%" }}
              >
                {showLogoCheckbox && (
                  <Box>
                    <FormControl sx={{ width: "100%" }}>
                      <Button
                        aria-label="upload logo"
                        variant="contained"
                        component="label"
                        startIcon={<AttachFileIcon style={{ fontSize: 14 }} />}
                      >
                        <span>{fileSelectionButtonLabel()}</span>
                        <input
                          type="file"
                          name="logoFile"
                          id="cvFileInput"
                          onChange={updateField}
                          hidden
                        />
                      </Button>
                      {resumeWarning && (
                        <Alert severity="error">
                          Please select file less than 5GB!
                        </Alert>
                      )}
                    </FormControl>

                    <FormHelperText>
                      <span>Please select file less than 5GB</span>
                    </FormHelperText>
                  </Box>
                )}
              </Grid>
            </Grid>
            <Grid container item direction="row" xs={12} spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} required>
                  <TextField
                    label="Link to company website (URL)"
                    required
                    name="linkCompany"
                    type="url"
                    value={recruitValues.linkCompany}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid item>
              <h2>Role Specification</h2>
            </Grid>
            <Grid container item direction="row" xs={12} spacing={2}>
              <Grid item xs={12}>
                <FormControl required sx={{ width: "100%" }}>
                  <TextField
                    label="Who are you looking for?"
                    required
                    name="jobTitle"
                    value={formValues.jobTitle}
                    onChange={updateField}
                  />
                </FormControl>
                <FormHelperText>Please specify a job title</FormHelperText>
              </Grid>

              <Grid
                container
                item
                direction="row"
                xs={12}
                spacing={2}
                style={{ marginTop: "10px" }}
              >
                <Grid item xs={6}>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={seniorityLevels}
                    onChange={seniorityLevelChanged}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField {...params} label="Seniority Levels" />
                    )}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Autocomplete
                    id="tags-outlined"
                    options={categories}
                    onChange={updateCategoryField}
                    renderInput={(params) => (
                      <TextField {...params} label="Category" />
                    )}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={specialitiesForCategory(formValues.category)}
                  onChange={() => specialitiesChanged}
                  renderInput={(params) => (
                    <TextField {...params} label="Specialisations" />
                  )}
                />
                <FormHelperText>
                  Please specify max. 3 specialties within your category. If a
                  specialty is not available in the list, enter it in the text
                  field
                </FormHelperText>
              </Grid>

              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={skills}
                  onChange={() => skillsChanged}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Key Skills – Tech Stack, Technologies and Tools"
                    />
                  )}
                />
                <FormHelperText>
                  Please list max. 5 tech skills and stack e.g. C++, Unity,
                  Houdini etc. If a skill is not available in the list, enter it
                  in the text field
                </FormHelperText>
              </Grid>

              <Grid
                container
                item
                direction="row"
                xs={12}
                spacing={2}
                style={{ marginTop: "10px" }}
              >
                <Grid item xs={6}>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={employmentOptions.gameGenres}
                    onChange={gameGenresChanged}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField {...params} label="Game Genres" />
                    )}
                  />
                  <FormHelperText>
                    Please list game genres. If a genre is not available in the
                    list, enter them in the text field
                  </FormHelperText>
                </Grid>

                <Grid item xs={6}>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={employmentOptions.gameEngines}
                    onChange={gameGenresChanged}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField {...params} label="Game Engines" />
                    )}
                  />
                  <FormHelperText>
                    Please list game engines. If an engine is not available in
                    the list, enter them in the text field
                  </FormHelperText>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              item
              direction="row"
              xs={12}
              spacing={2}
              style={{ position: "relative" }}
            >
              <Grid item xs={6}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={employmentOptions.platforms}
                  onChange={gamePlatformsChanged}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Platforms" />
                  )}
                />
                <FormHelperText>
                  Please list platforms. If a platform is not available in the
                  list, enter them in the text field
                </FormHelperText>
              </Grid>

              <Grid item xs={6} style={{ paddingTop: "0" }}>
                <Typography
                  /* @ts-ignore comment */
                  variant="subtitle2"
                >
                  What is the salary range for this role?
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <div className="p">{salaryFrom}</div>
                  <div className="p">{salaryTo}</div>
                </Box>
                <RangeSlider
                  min={0}
                  max={25000}
                  step={500}
                  onInput={(event: any) => {
                    setSalaryFrom(event[0]);
                    setSalaryTo(event[1]);
                  }}
                  defaultValue={[0, 25000]}
                />
                <FormHelperText
                  style={{
                    padding: "10px",
                    position: "absolute",
                    top: "50px",
                    right: "100px",
                  }}
                >
                  Monthly in Euros.
                </FormHelperText>
              </Grid>
            </Grid>

            <Grid container item direction="row" xs={12} spacing={2}>
              <Grid item xs={6}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={workPreferences}
                  onChange={workPreferencesChanged}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Work Preferences" />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={employmentOptionsPossible}
                  onChange={employmentOptionChanged}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Employment Options" />
                  )}
                />
              </Grid>
            </Grid>

            <Grid
              container
              item
              direction="row"
              xs={12}
              spacing={2}
              sx={{ alignItems: "end" }}
            >
              <Grid item xs={6} ref={locationRoleRef.current}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={countriesList}
                  onChange={rolePreferencesChanged}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Role Location(s)" />
                  )}
                />
                <FormHelperText>
                  Please specify a country or countries of the Role Location(s)
                </FormHelperText>

                {locationRoleWarning && (
                  <Alert severity="error">Please fill correct country!</Alert>
                )}
              </Grid>
              <Grid item xs={6} ref={locationRef.current}>
                <FormControl required sx={{ width: "100%" }}>
                  <TextField
                    label="Preferred countries or area to hire from"
                    name="country"
                    value={formValues.country}
                    onChange={updateField}
                    required={true}
                  />
                </FormControl>
                <FormHelperText>
                  Please specify a country or area like European Union or
                  Worldwide.
                </FormHelperText>
                {locationWarning && (
                  <Alert severity="error">Please fill correct country!</Alert>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControl required sx={{ width: "100%" }}>
                {/* <InputLabel shrink>Link to Job Opening</InputLabel> */}
                <TextField
                  label="Link to Job Opening"
                  required
                  name="linkJob"
                  type="url"
                  value={formValues.linkJob}
                  onChange={updateField}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <h3>
                Please fill in additional information to enhance role matching
                (Optional)
              </h3>
            </Grid>

            <Grid container item direction="row" xs={12} spacing={0}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Tasks & Responsibilities"
                    multiline
                    name="responsibilities"
                    value={formValues.responsibilities}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
            </Grid>

            {/* <Grid container item direction="row" xs={12} spacing={0}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formLine}>
              <InputLabel
                required
                className={classes.inputLabel}
                classes={{ asterisk: classes.inputLabelAsterisk }}
                shrink
              >
                Describe your Requirements
              </InputLabel>
              <TextField
                required
                className={classes.textFieldInput}
                multiline
                variant="filled"
                name="requirements"
                value={formValues.requirements}
                onChange={updateField}
              />
            </FormControl>
          </Grid>
        </Grid> */}

            {/* <Grid container item direction="row" xs={12} spacing={0}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formLine}>
              <InputLabel
                required
                className={classes.inputLabel}
                classes={{ asterisk: classes.inputLabelAsterisk }}
                shrink
              >
                Team Member would ideally also have
              </InputLabel>
              <TextField
                required
                className={classes.textFieldInput}
                multiline
                variant="filled"
                name="idealAdditions"
                value={formValues.idealAdditions}
                onChange={updateField}
              />
            </FormControl>
          </Grid>
        </Grid> */}

            <Grid container item direction="row" xs={12} spacing={0}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="About the Studio"
                    multiline
                    name="aboutStudio"
                    value={formValues.aboutStudio}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
            </Grid>

            {/* <Grid container item direction="row" xs={12} spacing={0}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formLine}>
              <InputLabel
                required
                className={classes.inputLabel}
                classes={{ asterisk: classes.inputLabelAsterisk }}
                shrink
              >
                Their Culture
              </InputLabel>
              <TextField
                required
                className={classes.textFieldInput}
                multiline
                variant="filled"
                name="theirCulture"
                value={formValues.theirCulture}
                onChange={updateField}
              />
            </FormControl>
          </Grid>
        </Grid> */}

            {/* <Grid container item direction="row" xs={12} spacing={0}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formLine}>
              <InputLabel
                required
                className={classes.inputLabel}
                classes={{ asterisk: classes.inputLabelAsterisk }}
                shrink
              >
                Reasons to work with them:
              </InputLabel>
              <TextField
                required
                className={classes.textFieldInput}
                multiline
                variant="filled"
                name="reasonsToWork"
                value={formValues.reasonsToWork}
                onChange={updateField}
              />
            </FormControl>
          </Grid>
        </Grid> */}

            <Grid container item direction="row" xs={12} spacing={0}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Benefits"
                    multiline
                    name="benefits"
                    value={formValues.benefits}
                    onChange={updateField}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              {props.sendingStatus === SENDING_FAILED && (
                <Alert severity="error">
                  We are sorry, something went wrong. Please, try again later or
                  contact us by email.
                  {props.errorMessage && " Server tells: "} {props.errorMessage}
                </Alert>
              )}
              {(!props.sendingStatus ||
                props.sendingStatus === SENDING_NONE ||
                props.sendingStatus === SENDING_FAILED) && (
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => setAnotherRole(false)}
                  color="secondary"
                >
                  Subscribe Now
                </Button>
              )}
              {(!props.sendingStatus ||
                props.sendingStatus === SENDING_NONE ||
                props.sendingStatus === SENDING_FAILED) && (
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<ArrowRightAltIcon />}
                  color="primary"
                  onClick={() => setAnotherRole(true)}
                  className="anotherRole"
                >
                  Add Another Role
                </Button>
              )}
              {props.sendingStatus === SENDING_IN_PROGRESS && (
                <CircularProgress />
              )}
              {
                // For messages before posting such as e.g. file size limit
                props.sendingStatus === SENDING_NONE && props.errorMessage && (
                  <Alert severity="error">{props.errorMessage}</Alert>
                )
              }
              <Backdrop open={props.sendingStatus === SENDING_SUCCEEDED}>
                <Alert severity="success">
                  Thank you for your subscription. We will notify you once a
                  matching talent is available.
                </Alert>
              </Backdrop>

              {/*props.recommendedCandidates.length > 0 && (
                  <Grid item xs={12}>
                    <p>Candidates IDS: </p>
                    {props.recommendedCandidates.map(cand => (<p>{cand['Candidate ID']}</p>))}
                  </Grid>
              )*/}
            </Grid>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
}

GFApplicationForm.propTypes = {
  sendingStatus: PropTypes.oneOf([
    SENDING_NONE,
    SENDING_IN_PROGRESS,
    SENDING_FAILED,
    SENDING_SUCCEEDED,
  ]),
  errorMessage: PropTypes.string,
  onSubmitWish: PropTypes.func,
  recommendedCandidates: PropTypes.array,
};
