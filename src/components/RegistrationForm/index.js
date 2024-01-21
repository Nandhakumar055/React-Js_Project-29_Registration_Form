import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    userFirstName: '',
    userLastName: '',
    isEmptyFirstName: false,
    isEmptyLastName: false,
    isSuccessRegistration: false,
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validFirstName()
    this.setState({isEmptyFirstName: !isValidFirstName})
  }

  onChangeUserFirstName = event => {
    this.setState({userFirstName: event.target.value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validLastName()
    this.setState({isEmptyLastName: !isValidLastName})
  }

  onChangeUserLastName = event => {
    this.setState({userLastName: event.target.value})
  }

  validLastName = () => {
    const {userLastName} = this.state
    return userLastName !== ''
  }

  validFirstName = () => {
    const {userFirstName} = this.state
    return userFirstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validFirstName()
    const isValidLastName = this.validLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSuccessRegistration: true})
    } else {
      this.setState({
        isEmptyFirstName: !isValidFirstName,
        isEmptyLastName: !isValidLastName,
        isSuccessRegistration: false,
      })
    }
  }

  onClickSubmitAnother = () => {
    this.setState({
      userFirstName: '',
      userLastName: '',
      isSuccessRegistration: false,
    })
  }

  renderRegistrationSuccess = () => (
    <div className="success-reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="tick-image"
      />
      <p className="success-msg">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-button"
        onClick={this.onClickSubmitAnother}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderRegistrationFiled = () => {
    const {
      userFirstName,
      userLastName,
      isEmptyFirstName,
      isEmptyLastName,
    } = this.state

    const firstNameInputStyle = isEmptyFirstName
      ? 'error-first-name-style'
      : 'non-error-input'

    const lastNameInputStyle = isEmptyLastName
      ? 'error-last-name-style'
      : 'non-error-input'

    return (
      <form
        className="registration-form-container"
        onSubmit={this.onSubmitForm}
      >
        <label htmlFor="UserFirstName" className="input-label">
          FIRST NAME
        </label>
        <input
          id="UserFirstName"
          className={firstNameInputStyle}
          type="text"
          placeholder="First name"
          value={userFirstName}
          onChange={this.onChangeUserFirstName}
          onBlur={this.onBlurFirstName}
        />
        {isEmptyFirstName ? <p className="error-msg">Required</p> : ''}
        <label htmlFor="UserLastName" className="input-label">
          LAST NAME
        </label>
        <input
          id="UserLastName"
          className={lastNameInputStyle}
          type="text"
          placeholder="Last name"
          value={userLastName}
          onChange={this.onChangeUserLastName}
          onBlur={this.onBlurLastName}
        />
        {isEmptyLastName ? <p className="error-msg">Required</p> : ''}

        <button className="registration-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSuccessRegistration} = this.state
    return (
      <div className="registration-container">
        <h1 className="registration-heading">Registration</h1>

        {isSuccessRegistration
          ? this.renderRegistrationSuccess()
          : this.renderRegistrationFiled()}
      </div>
    )
  }
}

export default RegistrationForm
