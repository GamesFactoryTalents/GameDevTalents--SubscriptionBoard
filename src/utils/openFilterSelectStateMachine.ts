import SelectState from "../interfaces/SelectStateEnum";

class OpenFilterSelectStateMachine {
  state = {
    category: false,
    specialisations: false,
    platforms: false,
    gameEngines: false,
    seniorityLevel: false,
    skills: false,
    gameGenres: false,
    countries: false,
  };

  getCurrentState(state: SelectState) {
    switch (state) {
      case SelectState.category:
        return this.state.category;
      case SelectState.specialisations:
        return this.state.specialisations;
      case SelectState.platforms:
        return this.state.platforms;
      case SelectState.gameEngines:
        return this.state.gameEngines;
      case SelectState.seniorityLevel:
        return this.state.seniorityLevel;
      case SelectState.skills:
        return this.state.skills;
      case SelectState.gameGenres:
        return this.state.gameGenres;
      case SelectState.countries:
        return this.state.countries;
      default:
        return false;
    }
  }

  toggle(state: SelectState) {
    switch (state) {
      case SelectState.category:
        this.state.category =
          this.state.category === false
            ? false
            : true;
        break;
      case SelectState.specialisations:
        this.state.specialisations =
          this.state.specialisations === true
            ? false
            : true;
        break;
      case SelectState.platforms:
        this.state.platforms =
          this.state.platforms === true
            ? false
            : true;
        break;
      case SelectState.gameEngines:
        this.state.gameEngines =
          this.state.gameEngines === true
            ? false
            : true;
        break;
      case SelectState.seniorityLevel:
        this.state.seniorityLevel =
          this.state.seniorityLevel === true
            ? false
            : true;
        break;
      case SelectState.skills:
        this.state.skills =
          this.state.skills === true
            ? false
            : true;
        break;
      case SelectState.gameGenres:
        this.state.gameGenres =
          this.state.gameGenres === true
            ? false
            : true;
        break;
      case SelectState.countries:
        this.state.countries =
          this.state.countries === true
            ? false
            : true;
        break;
      default:
        break;
    }
  }
}

export default OpenFilterSelectStateMachine;
