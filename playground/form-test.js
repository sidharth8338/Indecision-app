import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const TextArea = (props) => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-input"
      style={props.resize ? null : { resize: 'none' }}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
  </div>
);

// TextArea.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   rows: React.PropTypes.number.isRequired,
//   name: React.PropTypes.string.isRequired,
//   content: React.PropTypes.string.isRequired,
//   resize: React.PropTypes.bool,
//   placeholder: React.PropTypes.string,
//   controlFunc: React.PropTypes.func.isRequired
// };

const CheckboxOrRadioGroup = (props) => (
  <div>
    <label className="form-label">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(opt => {
        return (
          <label key={opt} className="form-label capitalize">
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={props.selectedOptions.indexOf(opt) > -1}
              type={props.type} /> {opt}
          </label>
        );
      })}
    </div>
  </div>
);

// CheckboxOrRadioGroup.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
//   setName: React.PropTypes.string.isRequired,
//   options: React.PropTypes.array.isRequired,
//   selectedOptions: React.PropTypes.array,
//   controlFunc: React.PropTypes.func.isRequired
// };

const Select = (props) => (
  <div className="form-group">
    <select
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
      className="form-select">
      <option value="">{props.placeholder}</option>
      {props.options.map(opt => {
        return (
          <option
            key={opt}
            value={opt}>{opt}</option>
        );
      })}
    </select>
  </div>
);

// Select.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   options: React.PropTypes.array.isRequired,
//   selectedOption: React.PropTypes.string,
//   controlFunc: React.PropTypes.func.isRequired,
//   placeholder: React.PropTypes.string
// };

const SingleInput = (props) => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <input
      className="form-input"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
  </div>
);

// SingleInput.propTypes = {
//   inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
//   title: React.PropTypes.string.isRequired,
//   name: React.PropTypes.string.isRequired,
//   controlFunc: React.PropTypes.func.isRequired,
//   content: React.PropTypes.oneOfType([
//     React.PropTypes.string,
//     React.PropTypes.number,
//   ]).isRequired,
//   placeholder: React.PropTypes.string,
// };

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      petSelections: [],
      selectedPets: [],
      ageOptions: [],
      ownerAgeRangeSelection: '',
      siblingOptions: [],
      siblingSelection: [],
      currentPetCount: 0,
      description: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleCurrentPetCountChange = this.handleCurrentPetCountChange.bind(this);
    this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
    this.handlePetSelection = this.handlePetSelection.bind(this);
    this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  componentDidMount() {
    // simulating a call to retrieve user data
    // (create-react-app comes with fetch polyfills!)
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          ownerName: data.ownerName,
          petSelections: data.petSelections,
          selectedPets: data.selectedPets,
          ageOptions: data.ageOptions,
          ownerAgeRangeSelection: data.ownerAgeRangeSelection,
          siblingOptions: data.siblingOptions,
          siblingSelection: data.siblingSelection,
          currentPetCount: data.currentPetCount,
          description: data.description
        });
      });
  }
  handleFullNameChange(e) {
    this.setState({ ownerName: e.target.value });
  }
  handleCurrentPetCountChange(e) {
    this.setState({ currentPetCount: e.target.value });
  }
  handleAgeRangeSelect(e) {
    this.setState({ ownerAgeRangeSelection: e.target.value });
  }
  handlePetSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedPets.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.selectedPets, newSelection];
    }
    this.setState({ selectedPets: newSelectionArray });
  }
  handleSiblingsSelection(e) {
    this.setState({ siblingSelection: [e.target.value] });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      ownerName: '',
      selectedPets: [],
      ownerAgeRangeSelection: '',
      siblingSelection: [],
      currentPetCount: 0,
      description: ''
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      ownerName: this.state.ownerName,
      selectedPets: this.state.selectedPets,
      ownerAgeRangeSelection: this.state.ownerAgeRangeSelection,
      siblingSelection: this.state.siblingSelection,
      currentPetCount: this.state.currentPetCount,
      description: this.state.description
    };

    console.log('Send this in a POST request:', formPayload)
    this.handleClearForm(e);
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Pet Adoption Form</h5>
        <SingleInput
          inputType={'text'}
          title={'Full name'}
          name={'name'}
          controlFunc={this.handleFullNameChange}
          content={this.state.ownerName}
          placeholder={'Type first and last name here'} />
        <Select
          name={'ageRange'}
          placeholder={'Choose your age range'}
          controlFunc={this.handleAgeRangeSelect}
          options={this.state.ageOptions}
          selectedOption={this.state.ownerAgeRangeSelection} />
        <CheckboxOrRadioGroup
          title={'Which kinds of pets would you like to adopt?'}
          setName={'pets'}
          type={'checkbox'}
          controlFunc={this.handlePetSelection}
          options={this.state.petSelections}
          selectedOptions={this.state.selectedPets} />
        <CheckboxOrRadioGroup
          title={'Are you willing to adopt more than one pet if we have siblings for adoption?'}
          setName={'siblings'}
          controlFunc={this.handleSiblingsSelection}
          type={'radio'}
          options={this.state.siblingOptions}
          selectedOptions={this.state.siblingSelection} />
        <SingleInput
          inputType={'number'}
          title={'How many pets do you currently own?'}
          name={'currentPetCount'}
          controlFunc={this.handleCurrentPetCountChange}
          content={this.state.currentPetCount}
          placeholder={'Enter number of current pets'} />
        <TextArea
          title={'If you currently own pets, please write their names, breeds, and an outline of their personalities.'}
          rows={5}
          resize={false}
          content={this.state.description}
          name={'currentPetInfo'}
          controlFunc={this.handleDescriptionChange}
          placeholder={'Please be thorough in your descriptions'} />
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit" />
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>
    );
  }
}

ReactDOM.render(<FormContainer />, document.getElementById('app'));