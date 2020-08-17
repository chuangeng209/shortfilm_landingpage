import React, {Component} from 'react';
import './Contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className='Form'>
            <div className='formComponents'>
            <form 
                id = 'form'
                onSubmit={this.submitForm}
                action="https://formspree.io/mnqgyano"
                method="POST"
            >
                <div>
                    <label>Your Email: </label>
                    <input type="email" name="email" id='typezone'/>
                </div>
                <div>
                    <label>Enquiry/Feedback:</label>
                    <p></p>
                    <textarea id='typezone' type="text" name="message" cols="50" rows="4"></textarea>
                </div>
                <div>
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button style={cursor}>Submit</button>}
                    {status === "ERROR" && <p>There was an error, please try again</p>}
                </div>
            </form>
            </div>
            <button onClick={this.props.closeForm} style={cursor}>Close</button>
        </div>

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

const cursor = {
    cursor: "pointer"
}

export default Contact; 

