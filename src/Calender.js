import React from "react";

const buttonStyles = {
  cursor: "pointer"
};

class Calenders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    const start = escape(this.props.start);
    const end = escape(this.props.end);
    const title = escape(this.props.title);
    const address = escape(this.props.address);
    const description = escape(this.props.description);
    const duration = escape(this.props.duration);
    const website = escape(this.props.website);

    const googleUrl = `http://www.google.com/calendar/event?action=TEMPLATE&dates=${start}%2F${end}&text=${title}&location=${address}&details=${description}`;

    const appleUrl = `http://www.google.com/calendar/event?action=TEMPLATE&dates=${
      this.props.start
    }%2F${this.props.end}&text=${this.props.title}&location=${
      this.props.address
    }&details=${this.props.description}`;

    const yahooUrl = `
http://calendar.yahoo.com/?v=60&TITLE=${title}&ST=${start}&ET=${end}&in_loc=${address}&DESC=${description}&URL=${website}`;

    const iCalUrl = `http://www.google.com/calendar/event?action=TEMPLATE&dates=${
      this.props.start
    }%2F${this.props.end}&text=${this.props.title}&location=${
      this.props.address
    }&details=${this.props.description}`;

    const outlookUrl = `http://www.google.com/calendar/event?action=TEMPLATE&dates=${
      this.props.start
    }%2F${this.props.end}&text=${this.props.title}&location=${
      this.props.address
    }&details=${this.props.description}`;

    const calender = this.state.toggle && (
      <ul>
        {this.props.display.google && (
          <li>
            <a className="icon-google" target="_blank" href={googleUrl}>
              Google
            </a>
          </li>
        )}
        {this.props.display.apple && (
          <li>
            <a className="icon-apple" target="_blank" href={appleUrl}>
              Apple
            </a>
          </li>
        )}
        {this.props.display.yahoo && (
          <li>
            <a className="icon-yahoo" target="_blank" href={yahooUrl}>
              Yahoo!
            </a>
          </li>
        )}
        {this.props.display.iCal && (
          <li>
            <a className="icon-ical" target="_blank" href={iCalUrl}>
              iCal
            </a>
          </li>
        )}
        {this.props.display.outlook && (
          <li>
            <a className="icon-outlook" target="_blank" href={outlookUrl}>
              Outlook
            </a>
          </li>
        )}
      </ul>
    );
    return (
      <div>
        <button style={buttonStyles} className="" onClick={this.handleClick}>
          + Add to Calendar
        </button>
        {calender}
      </div>
    );
  }
}

export default Calenders;
