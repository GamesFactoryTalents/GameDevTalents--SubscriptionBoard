import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { zohoMultiStringToArray } from "./Utils";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function CandidateCellRenderer(params) {
  const jobTitleLine = params.data.jobTitle ? (
    <span>{params.data.jobTitle}</span>
  ) : (
    <span>&nbsp;</span>
  );
  const specialitiesArray = params.data.specialities
    ? zohoMultiStringToArray(params.data.specialities)
    : [];
    

    console.log('params', params);
  const gameGenres = params.data.gameGenres
    ? params.data.gameGenres.split(",")
    : [];
  const filteredGameGenres = gameGenres.filter((s) => s.length > 0);
  const gameGenresLine = filteredGameGenres.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));

  const gameEngines = params.data.gameEngines
    ? params.data.gameEngines.split(",")
    : [];
  const filteredGameEngines = gameEngines.filter((s) => s.length > 0);
  const gameEnginesLine = filteredGameEngines.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));

  const gamePlatforms = params.data.gamePlatforms
    ? params.data.gamePlatforms.split(",")
    : [];
  const filteredGamePlatforms = gamePlatforms.filter((s) => s.length > 0);
  const gamePlatformsLine = filteredGamePlatforms.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));
  const salaryRangeLine = '';

  const employmentOptions = params.data.employmentOptions;
  const linkJob = params.data.linkJob;
  const firstName = params.data.firstName;
  const lastName = params.data.lastName;
  const fullName = firstName + " " + lastName;
  const companyName = params.data.companyName;
  const linkCompany = params.data.linkCompany;

  const filteredSpecialitiesArray = specialitiesArray.filter(
    (s) => s.length > 0
  );
  const specialitiesLine = filteredSpecialitiesArray.map((spec, idx) => (
    <Chip key={`sp-${idx}-${spec}`} label={spec} />
  ));
  const skillsArray = params.data.skills
    ? zohoMultiStringToArray(params.data.skills)
    : [];
  const filteredSkillsArray = skillsArray.filter((s) => s.length > 0);
  const skillsLine = filteredSkillsArray.map((spec, idx) => (
    <Chip
      key={`sk-${idx}-${spec}`}
      className="value-chip"
      color="primary"
      label={spec}
    />
  ));

  const seniorityString = params.data.seniorityLevel ? (
    <span>{params.data.seniorityLevel}</span>
  ) : (
    <span>&nbsp;</span>
  );
  const countryString = params.data.country ? (
    <span>{params.data.country}</span>
  ) : (
    <span>&nbsp;</span>
  );

  const navigate = useNavigate();

  function openSingleSubscription(id) {
    navigate(`/details/${id}`)
  }

  return (
    <div onClick={() => openSingleSubscription(params.data.ip)} className="candidateRowCell">
      <div className="cand-detail-row">
        <div className="cand-detail-block">
          <div className="elem top">
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <a href={linkCompany}>
                <div style={{ fontWeight: "600" }} className="id light">
                  {companyName}
                </div>
              </a>
              <div class="id light">{fullName}</div>
            </Box>
          </div>

          <div className="elem">
            <div className="title">{jobTitleLine}</div>
            <div class="seniority light">{seniorityString}</div>
            <div className="relocate light">{employmentOptions}</div>
            <div className="country light">{countryString}</div>
          </div>
          {specialitiesLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Specialisations:</div>
              <div className="elem-values">{specialitiesLine}</div>
            </div>
          )}
          {skillsLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Skills:</div>
              <div className="elem-values">{skillsLine}</div>
            </div>
          )}
          {gameGenresLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Game Genres:</div>
              <div className="elem-values">{gameGenresLine}</div>
            </div>
          )}
          {gameEnginesLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Game Engines:</div>
              <div className="elem-values">{gameEnginesLine}</div>
            </div>
          )}
          {gamePlatformsLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Game Platforms:</div>
              <div className="elem-values">{gamePlatformsLine}</div>
            </div>
          )}
          {salaryRangeLine.length > 0 && (
            <div className="elem">
              <div className="sm-title light">Salary Range:</div>
              <div className="elem-values">{salaryRangeLine}</div>
            </div>
          )}

          {
            <div className="elem buttons">
              <Button variant="contained" href={linkJob}>
                Read More
              </Button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default CandidateCellRenderer;
