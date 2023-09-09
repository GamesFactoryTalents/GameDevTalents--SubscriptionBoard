"use client";
import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import getAllSubscribersFilterValues from "../../utils/getAllSubscribersFilterValues";
import countries from "../../commonSettings/countries";
import { observer } from "mobx-react";
import store from "../../store/store";
import getSubscriberData from "../../utils/getSubscriberData";
import subscribers from "../../generated/subscribers.json";
import TextField from "@mui/material/TextField";
import ISubscriptionItem from "../../interfaces/SubscriptionItem";

import skillTree from "../../commonSettings/skillTree";

const FilterMenu = () => {
  const {
    skills,
    category,
    specialisations,
    gameGenres,
    gameEngines,
    gamePlatforms,
    seniorityLevel,
  } = getAllSubscribersFilterValues();

  const { candidatesDispatch, setDefaultCandidates } = store;

  let countriesList = countries.map((country) => country.label);
  const _countries = ["Europe", ...countriesList];

  const categoryOptions = ['All Categories', ...category]

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSpecialisations, setSelectedSpecialisations] = useState<
    string[]
  >([]);
  const [selectedGanres, setSelectedGanres] = useState<string[]>([]);
  const [selectedEngines, setSelectedEngines] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSeniorityLevel, setSelectedSeniorityLevel] = useState<
    string[]
  >([]);
  const [searchField, setSearchField] = useState<string>("");

  const [specialisationsForCategory, setSpecialisationsForCategory] = useState<
    string[]
  >([]);

  useEffect(() => {
    const allFilters = {
      selectedSkills,
      selectedCategory,
      selectedSpecialisations,
      selectedGanres,
      selectedEngines,
      selectedPlatforms,
      selectedCountries,
      selectedSeniorityLevel,
    };

    if (
      !selectedSkills.length &&
      !selectedCategory &&
      !selectedSpecialisations.length &&
      !selectedGanres.length &&
      !selectedEngines.length &&
      !selectedPlatforms.length &&
      !selectedCountries.length &&
      !selectedSeniorityLevel.length
    ) {
      setDefaultCandidates();
      return;
    }

    const currentCandidates = subscribers.filter(
      (subscriber: ISubscriptionItem) => {
        const subscriberData = getSubscriberData(subscriber);

        return (
          (allFilters.selectedCategory === "" ||
            allFilters.selectedCategory === null ||
            allFilters.selectedCategory === subscriberData.category) &&
          allFilters.selectedSkills.every((skill) =>
            subscriberData.skills.includes(skill)
          ) &&
          allFilters.selectedSpecialisations.every((specialisation) =>
            subscriberData.specialities.includes(specialisation)
          ) &&
          allFilters.selectedGanres.every((ganre) =>
            subscriberData.gameGenres.includes(ganre)
          ) &&
          allFilters.selectedEngines.every((engine) =>
            subscriberData.gameEngines.includes(engine)
          ) &&
          allFilters.selectedPlatforms.every((platform) =>
            subscriberData.gamePlatforms.includes(platform)
          ) &&
          allFilters.selectedCountries.every((country) =>
            subscriberData.roleLocation.includes(country)
          ) &&
          (!Array.isArray(allFilters.selectedSeniorityLevel) ||
            allFilters.selectedSeniorityLevel.length === 0 ||
            allFilters.selectedSeniorityLevel.some((seniorityLevel) =>
              subscriberData.seniorityLevel.includes(seniorityLevel)
            ))
        );
      }
    );


    candidatesDispatch(currentCandidates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedSkills,
    selectedCategory,
    selectedSpecialisations,
    selectedGanres,
    selectedEngines,
    selectedPlatforms,
    selectedCountries,
    selectedSeniorityLevel,
  ]);

  useEffect(() => {
    if (searchField) {
      const fromSearch = subscribers.filter((subscriber: ISubscriptionItem) => {
        if (
          JSON.stringify(subscriber)
            .toLocaleLowerCase()
            .includes(searchField.toLocaleLowerCase())
        ) {
          return true;
        }
      });
      candidatesDispatch(fromSearch);
    } else {
      setDefaultCandidates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchField]);

  function specialitiesForCategory(category: string): any {
    const categoryEntry = skillTree.find((item) => {
      return Object.keys(item)[0].toString().includes(category);
    });
    const rawSpecList = categoryEntry
      ? Object.values(categoryEntry)[0].specialities
      : [];
    const uniqSpecList = [...new Set(rawSpecList)];
    return uniqSpecList.sort();
  }


  //TODO: set name type as enum
  function handleDelete(value: any, name: string) {
    switch (name) {
      case "skills":
        setSelectedSkills((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "category":
        setSelectedCategory("");
        break;
      case "specialisations":
        setSelectedSpecialisations((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "gameGenres":
        setSelectedGanres((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "gameEngines":
        setSelectedEngines((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "gamePlatforms":
        setSelectedPlatforms((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "Countries":
        setSelectedCountries((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "seniorityLevel":
        setSelectedSeniorityLevel((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
    }
  }


  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {/* Category */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          id="tags-outlined"
          options={categoryOptions}
          onChange={(event, value) => {
            setSelectedCategory(value as string);
            setSpecialisationsForCategory(
              specialitiesForCategory(value as string)
            );
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Category"
            />
          )}
        />
      </FormControl>

      {/* seniorityLevel */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          multiple
          id="tags-outlined"
          options={seniorityLevel}
          onChange={(event, value) => {
            setSelectedSeniorityLevel(value as string[]);
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seniority Level"
            />
          )}
        />
      </FormControl>

      {/* Specialisations */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          multiple
          id="tags-outlined"
          disabled={!selectedCategory}
          options={selectedCategory ?
            specialisationsForCategory : []}
          onChange={(event, value) => {
            setSelectedSpecialisations(value as string[]);
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Specialisations"
            />
          )}
        />
      </FormControl>

      {/* Skills */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          multiple
          id="tags-outlined"
          options={skills}
          onChange={(event, value) => {
            setSelectedSkills(value as string[]);
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Skills"
            />
          )}
        />
      </FormControl>

      {/* gamePlatforms */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={gamePlatforms}
          onChange={(event, value) => {
            setSelectedPlatforms(value as string[]);
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Platforms"
            />
          )}
        />
      </FormControl>

      {/* gameGenres */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          multiple
          id="tags-outlined"
          options={gameGenres}
          onChange={(event, value) => {
            setSelectedGanres(value as string[]);
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Game Genres"
            />
          )}
        />
      </FormControl>

      {/* gameEngines */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          multiple
          id="tags-outlined"
          options={gameEngines}
          onChange={(event, value) => {
            setSelectedEngines(value as string[]);
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Game Engines"
            />
          )}
        />
      </FormControl>

      {/* Countries */}
      <FormControl sx={{ m: 1, width: { xs: "100%", md: "48%" } }}>
      <Autocomplete
          multiple
          id="tags-outlined"
          options={_countries}
          onChange={(event, value) => {
            if (value.includes("Europe")) {
              let countriesArr = countries
                .filter((value, key) => value.region === "Europe")
                .map((value, key) => Object.values(value)[0]);
              setSelectedCountries(countriesArr as string[]);
            } else {
              setSelectedCountries(value as string[]);
            }
          }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Countries"
            />
          )}
        />
      </FormControl>

      {/* Search */}
      <FormControl sx={{ m: 1, width: "100%" }}>
        <TextField
          id="filled-search"
          label="Keywords search"
          type="search"
          variant="outlined"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          InputLabelProps={{
            sx: {
              top: "-3px",
              lineHeight: "1.05",
            },
          }}
          inputProps={{
            sx: {
              padding: "10px",
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default observer(FilterMenu);
