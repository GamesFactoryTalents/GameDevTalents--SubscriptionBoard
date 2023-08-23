import React, { useState, useEffect, useRef } from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import ChippedMultiselect from "./ChippedMultiselect";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./App.css";

import CandidateCellRenderer from "./CandidateCellRenderer";
import { zohoMultiStringToArray } from "./Utils";

import * as subscribersData from "./generated/subscribers.json";

const countries = require("./commonSettings/countries");
const skillTree = require("./commonSettings/skillTree");
const employmentOptions = require("./commonSettings/employmentOptions");
const countriesList = [
  ...new Set(countries.map((value, key) => Object.values(value)[0])),
];

const possibleCategories = skillTree.map((value, key) => Object.keys(value)[0]);
const platformList = employmentOptions.platforms;
const skillList = employmentOptions.skills;

const platformsSet = [...new Set(platformList)];

const candidateCategories = subscribersData.map((c) => c.category);
const uniqCandidateCategories = [...new Set(candidateCategories)];
const presentCategories = possibleCategories.filter(
  (cat) => uniqCandidateCategories.indexOf(cat) !== -1
);
const categoryListForSelect = [""].concat(presentCategories);

const catSpecsMap = {};
presentCategories.forEach((cat) => (catSpecsMap[cat] = []));
for (const cat in catSpecsMap) {
  // console.log(`gathering specs for category [${cat}]`);
  // const rawCandSpecsForCat = subscribersData.filter(c => c.category === cat)
  //                             .map(c => c.specialities)
  //                             .filter(c => typeof(c) === "string")
  //                             .flatMap(s => zohoMultiStringToArray(s));
  const rawCandSpecsForCat = subscribersData
    .filter((c) => c.category === cat)
    .map((c) => c.specialities)
    .filter((c) => typeof c === "string")
    .flatMap((s) => zohoMultiStringToArray(s));
  const uniqSpecsForCat = [...new Set(rawCandSpecsForCat)].sort();
  catSpecsMap[cat] = uniqSpecsForCat;
}

// const catSkillsMap = {};
// presentCategories.forEach(cat => catSkillsMap[cat] = []);
// for (const cat in catSkillsMap) {
//   // console.log(`gathering specs for category [${cat}]`);
//   const rawCandSkillsForCat = subscribersData.filter(c => c.category === cat)
//                               .map(c => c.skills)
//                               .filter(c => typeof(c) === "string")
//                               .flatMap(s => zohoMultiStringToArray(s));
//   const uniqSkillsForCat = [...new Set(rawCandSkillsForCat)].sort();
//   catSkillsMap[cat] = uniqSkillsForCat;
//}
// console.log("catSpecsMap:", catSpecsMap);

// const subscribersDatapecEntries = subscribersData.map(c => c.specialities).filter(c => typeof(c) === "string");
// const presentSpecialities = subscribersDatapecEntries.flatMap(s => zohoMultiStringToArray(s));
// const uniqSpecialities = [...new Set(presentSpecialities)].sort();

const useQuery = () => {
  return new URLSearchParams(window.location.search);
};

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState([]);
  const [chosenSearch, setChosenSearch] = useState("");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const gridWrapperRef = React.useRef();

  useEffect(() => {
    if (gridApi) {
      gridApi.paginationGoToPage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedCategory,
    selectedSeniority,
    selectedSkills,
    selectedPlatforms,
    chosenSearch,
    selectedSpecialities,
  ]);

  // agGrid caches the accessed values for its callbacks such as doesExternalFilterPass
  // so we cannot just use selectedSpecialities from these hooks, ref helps accessing the current value
  const selectedSpecialitiesRef = useRef();
  selectedSpecialitiesRef.current = selectedSpecialities;
  const selectedSkillsRef = useRef();
  selectedSkillsRef.current = selectedSkills;
  const selectedSeniorityRef = useRef();
  selectedSeniorityRef.current = selectedSeniority;
  const selectedPlatformsRef = useRef();
  selectedPlatformsRef.current = selectedPlatforms;

  const [rowData] = useState(subscribersData.default);
  const query = useQuery();

  function onGridReady(params) {
    // console.log("onGridReady. params is ", params);
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  }

  function onFilterTextBoxChanged(e) {
    // console.log("onFilterTextBoxChanged:", e.target.value)
    setChosenSearch(e.target.value);
    gridApi.setQuickFilter(e.target.value);
  }

  function onCategorySelected(e) {
    const selectedCategoryStr = e.target.value;
    if (selectedCategoryStr !== selectedCategory) {
      setSelectedSpecialities([]);
      //setSelectedSkills([]);
    }
    setSelectedCategory(selectedCategoryStr);

    const wholeTableFilterModel = gridApi.getFilterModel();

    // for example filtering by a city field substring
    wholeTableFilterModel.category = {
      type: "equals",
      filter: selectedCategoryStr,
    };

    // refresh rows based on the filter
    gridApi.setFilterModel(wholeTableFilterModel);
  }

  function onSenioritySelected(e, value, reason) {
    setSelectedSeniority(value);
    selectedSeniorityRef.current = value;
    gridApi.onFilterChanged();
  }

  function platformsChanged(e, value, reason) {
    // console.log("in specialitiesChanged, selectedSpecialities is ", selectedSpecialities);

    setSelectedPlatforms(value);
    selectedPlatformsRef.current = value;
    gridApi.onFilterChanged();
  }

  function onPaginationChange(e) {
    if (e.newPage) {
      gridWrapperRef.current.scrollIntoView(true);
    }
  }

  // rowHeight={200}

  // Due to https://github.com/ag-grid/ag-grid/issues/3160 we can't use automatic row height
  // with React cell renderer
  function calcRowHeight() {
    // cloning the CSS rule here, go to index.css for the reference
    if (window.innerWidth >= 640) {
      // enough width for the right block to be on the same line
      return 350;
    } else {
      return 592;
    }
  }

  function specialitiesChanged(e, value, reason) {
    // console.log("in specialitiesChanged, selectedSpecialities is ", selectedSpecialities);
    setSelectedSpecialities(value);
    selectedSpecialitiesRef.current = value;
    gridApi.onFilterChanged();
  }

  function skillsChanged(e, value, reason) {
    // console.log("in specialitiesChanged, selectedSpecialities is ", selectedSpecialities);
    setSelectedSkills(value);
    selectedSkillsRef.current = value;
    gridApi.onFilterChanged();
  }

  function isExternalFilterPresent() {
    return true;
    // return selectedSpecialities.length > 0;
  }

  function doesExternalFilterPass(node) {
    const selSpecs = selectedSpecialitiesRef.current;
    const selSkills = selectedSkillsRef.current;
    const selPlatforms = selectedPlatformsRef.current;
    const selSeniority = selectedSeniorityRef.current;
    let testTarget = node.data.specialities;
    let testTargetSkills = node.data.skills;
    let testTargetPlatfroms = node.data.platforms;
    let testTargetCountries = node.data.country;
    let testTargetSeniorities = node.data.seniorityLevel;

    let chosenCountry = 1;
    let chosenSeniority = 1;

    if (selSeniority.length === 0) {
      chosenSeniority = 0;
    }

    if (testTarget === undefined) {
      testTarget = "";
    }
    if (testTargetSkills === undefined) {
      testTargetSkills = "";
    }
    if (testTargetPlatfroms === undefined) {
      testTargetPlatfroms = "";
    }
    if (testTargetCountries === undefined) {
      testTargetCountries = "";
    }
    if (testTargetSeniorities === undefined) {
      testTargetSeniorities = "";
    }

    const matchedFilters = [
      ...selSpecs.filter(
        (s) => testTarget.toLowerCase().indexOf(s.toLowerCase()) !== -1
      ),
      ...selSkills.filter(
        (s) => testTargetSkills.toLowerCase().indexOf(s.toLowerCase()) !== -1
      ),
      ...selPlatforms.filter(
        (s) => testTargetPlatfroms.toLowerCase().indexOf(s.toLowerCase()) !== -1
      ),
      ...selSeniority.filter(
        (s) =>
          testTargetSeniorities.toLowerCase().indexOf(s.toLowerCase()) !== -1
      ),
    ];
    const res =
      matchedFilters.length ===
      selSpecs.length +
        selSkills.length +
        selPlatforms.length +
        chosenCountry +
        chosenSeniority;

    return res;
    // return node.data.specialities.contains("Gameplay");
  }

  const categorySelectItems = categoryListForSelect.map((catStr, idx) => {
    return catStr === "" ? (
      <MenuItem value={catStr} key={idx}>
        <em>All Categories</em>
      </MenuItem>
    ) : (
      <MenuItem value={catStr} key={idx}>
        {catStr}
      </MenuItem>
    );
  });

  const specOptions = catSpecsMap[selectedCategory] || [];
  const skillOptions = skillList || [];

  if (!countriesList.includes("Europe")) {
    countriesList.unshift("Europe");
  }

  return (
    <div id="whole-app">
      <div className="filter-block">
        <div className="filter-control">
          <FormControl className="filter-control" variant="outlined">
            <InputLabel id="selectCategoryLabel" htmlFor="selectCategorySelect">
              Category
            </InputLabel>
            <Select
              id="selectCategorySelect"
              labelId="selectCategoryLabel"
              className="filter-select-box"
              label="Category"
              value={selectedCategory}
              onChange={onCategorySelected}
            >
              {categorySelectItems}
            </Select>
          </FormControl>
        </div>
        <div className="filter-control">
          <FormControl variant="outlined">
            <ChippedMultiselect
              id="seniorotyMultiselect"
              labelText="Seniority level"
              options={employmentOptions.seniorityLevels}
              onChange={onSenioritySelected}
              value={selectedSeniority}
            />
          </FormControl>
        </div>
        <div className="filter-control">
          <FormControl variant="outlined">
            <ChippedMultiselect
              id="specialitiesMultiselect"
              labelText="Skills"
              options={skillOptions}
              onChange={skillsChanged}
              value={selectedSkills}
            />
          </FormControl>
        </div>

        <div className="filter-control">
          <FormControl variant="outlined">
            <ChippedMultiselect
              id="platformsMultiselect"
              labelText="Platforms"
              options={platformsSet}
              onChange={platformsChanged}
              value={selectedPlatforms}
            />
          </FormControl>
        </div>
        <div className="filter-control">
          <FormControl variant="outlined">
            <ChippedMultiselect
              id="specialitiesMultiselect"
              disabled={!selectedCategory}
              labelText="Specialities"
              options={specOptions}
              onChange={specialitiesChanged}
              value={selectedSpecialities}
            />
          </FormControl>
        </div>
        <div className="filter-control">
          <FormControl>
            <TextField
              id="keywordsInput"
              className="filter-select-box"
              variant="outlined"
              value={chosenSearch}
              label="Search"
              type="search"
              onChange={onFilterTextBoxChanged}
            />
          </FormControl>
        </div>
      </div>
      <div id="grid-wrapper" className="ag-theme-alpine" ref={gridWrapperRef}>
        <AgGridReact
          rowData={rowData}
          onGridReady={onGridReady}
          enableBrowserTooltips={true}
          enableCellTextSelection={true}
          pagination={true}
          paginationPageSize={10}
          onPaginationChanged={onPaginationChange}
          domLayout="autoHeight"
          rowHeight={calcRowHeight()}
          rowClass="grid-row"
          isExternalFilterPresent={isExternalFilterPresent}
          doesExternalFilterPass={doesExternalFilterPass}
          defaultColDef={{
            resizable: true,
            sortable: true,
            wrapText: true,
            flex: 1,
          }}
        >
          <AgGridColumn
            wrapText={true}
            field="customRendered"
            headerName="subscribersData"
            cellRendererFramework={CandidateCellRenderer}
          ></AgGridColumn>
          <AgGridColumn
            flex={2}
            field="category"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            flex={4}
            field="specialities"
            headerName="Speciality"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            flex={3}
            field="skills"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            flex={3}
            field="jobTitle"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="seniorityLevel"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="gamesIndustryYears"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="totalExperienceYears"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="country"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="gamePlatforms"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="hasExperienceInGameIndustry"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="readyToRelocate"
            hide={!query.get("debug")}
          ></AgGridColumn>
          <AgGridColumn
            field="Candidate ID"
            hide={!query.get("debug")}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default App;
