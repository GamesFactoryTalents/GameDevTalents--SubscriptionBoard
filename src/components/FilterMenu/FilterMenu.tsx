"use client";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import getAllSubscribersFilterValues from "../../utils/getAllSubscribersFilterValues";
import countries from "../../commonSettings/countries";
import { observer } from "mobx-react";
import store from "../../store/store";
import getSubscriberData from "../../utils/getSubscriberData";
import subscribers from "../../generated/subscribers.json";
import TextField from "@mui/material/TextField";
import ISubscriptionItem from "../../interfaces/SubscriptionItem";

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

  const _countries = countries.map((country) => country.label);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedSpecialisations, setSelectedSpecialisations] = useState<
    string[]
  >([]);
  const [selectedGanres, setSelecteGanres] = useState<string[]>([]);
  const [selectedEngines, setSelectedEngines] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSeniorityLevel, setSelectedSeniorityLevel] = useState<
    string[]
  >([]);
  const [searchField, setSearchField] = useState<string>("");

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
      !selectedCategory.length &&
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

    const currentCandidates = subscribers.filter((subscriber: ISubscriptionItem) => {
      const subscriberData = getSubscriberData(subscriber);

      return (
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
          subscriberData.country.includes(country)
        ) &&
        allFilters.selectedSeniorityLevel.every((seniorityLevel) =>
          subscriberData.seniorityLevel.includes(seniorityLevel)
        ) &&
        subscriberData.category.every((category) =>
          subscriberData.category.includes(category)
        )
      );
    });

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

  function changeSelectedSkills(event: SelectChangeEvent<string[]>) {
    setSelectedSkills(event.target.value as string[]);
  }

  function changeSelectedCategory(event: SelectChangeEvent<string[]>) {
    setSelectedCategory(event.target.value as string[]);
  }

  function changeSelectedSpecialisations(event: SelectChangeEvent<string[]>) {
    setSelectedSpecialisations(event.target.value as string[]);
  }

  function changeSelectedGanres(event: SelectChangeEvent<string[]>) {
    setSelecteGanres(event.target.value as string[]);
  }

  function changeSelectedEngines(event: SelectChangeEvent<string[]>) {
    setSelectedEngines(event.target.value as string[]);
  }

  function changeSelectedPlatforms(event: SelectChangeEvent<string[]>) {
    setSelectedPlatforms(event.target.value as string[]);
  }

  function changeSelectedCountries(event: SelectChangeEvent<string[]>) {
    setSelectedCountries(event.target.value as string[]);
  }

  function changeSelectedSeniorityLevel(event: SelectChangeEvent<string[]>) {
    setSelectedSeniorityLevel(event.target.value as string[]);
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
        setSelectedCategory((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "specialisations":
        setSelectedSpecialisations((prevSelected) =>
          prevSelected.filter((item) => item !== value)
        );
        break;
      case "gameGenres":
        setSelecteGanres((prevSelected) =>
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
      {/* Skills */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedSkills}
          onChange={changeSelectedSkills}
          input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "skills")}
                />
              ))}
            </Box>
          )}
        >
          {skills.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Specialisations */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Specialisations</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          disabled={!selectedCategory.length}
          value={selectedSpecialisations}
          onChange={changeSelectedSpecialisations}
          input={
            <OutlinedInput id="select-multiple-chip" label="Specialisations" />
          }
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "specialisations")}
                />
              ))}
            </Box>
          )}
        >
          {specialisations.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Category */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedCategory}
          onChange={changeSelectedCategory}
          input={<OutlinedInput id="select-multiple-chip" label="Category" />}
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "category")}
                />
              ))}
            </Box>
          )}
        >
          {category.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* gameGenres */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Game Genres</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedGanres}
          onChange={changeSelectedGanres}
          input={<OutlinedInput id="select-multiple-chip" label="gameGenres" />}
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "gameGenres")}
                />
              ))}
            </Box>
          )}
        >
          {gameGenres.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* gameEngines */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Game Engines</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedEngines}
          onChange={changeSelectedEngines}
          input={
            <OutlinedInput id="select-multiple-chip" label="gameEngines" />
          }
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "gameEngines")}
                />
              ))}
            </Box>
          )}
        >
          {gameEngines.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* gamePlatforms */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Game Platforms</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedPlatforms}
          onChange={changeSelectedPlatforms}
          input={
            <OutlinedInput id="select-multiple-chip" label="gamePlatforms" />
          }
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "gamePlatforms")}
                />
              ))}
            </Box>
          )}
        >
          {gamePlatforms.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Countries */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Countries</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedCountries}
          onChange={changeSelectedCountries}
          input={<OutlinedInput id="select-multiple-chip" label="Countries" />}
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "Countries")}
                />
              ))}
            </Box>
          )}
        >
          {_countries.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* seniorityLevel */}
      <FormControl sx={{ m: 1, width: "48%" }}>
        <InputLabel id="demo-multiple-chip-label">Seniority Level</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedSeniorityLevel}
          onChange={changeSelectedSeniorityLevel}
          input={
            <OutlinedInput id="select-multiple-chip" label="seniorityLevel" />
          }
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, zIndex: 5 }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onMouseDown={(e) => e.stopPropagation()}
                  onDelete={() => handleDelete(value, "seniorityLevel")}
                />
              ))}
            </Box>
          )}
        >
          {seniorityLevel.map((name: string) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Search */}
      <FormControl sx={{ m: 1, width: "100%" }}>
        <TextField
          id="filled-search"
          label="Keywords search"
          type="search"
          variant="filled"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
      </FormControl>
    </Box>
  );
};

export default observer(FilterMenu);
