import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import PhoneNumberEntry from "./PhoneNumberEntry";

class PhoneNumberComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.addNew = this.addNew.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  componentDidMount() {}

  addNew = () => {
    console.log("hi");
    this.setState({ data: [...this.state.data, { id: 355 }] });
    console.log(this.state.data);
  };

  removeItem = i => {
    console.log("test", i);
    let items = this.state.data;
    let updatedItems = items
      .slice(0, i - 1)
      .concat(items.slice(i, items.length));
    console.log(updatedItems);

    //this.setState({
    //data: updatedItems});
  };
  render() {
    //let props = this.props;
    //this.state.size = props.data.length;
    return (
      <Card fluid>
        <Card.Content>
          <Button floated={"right"} size={"mini"} onClick={this.addNew}>
            + Add New
          </Button>
          <Card.Header>Phone Number</Card.Header>
        </Card.Content>
        <Card.Content>
          {this.state.data.map((item, index) => {
            return (
              <PhoneNumberEntry
                index={index}
                item={item}
                removeItem={this.removeItem}
              />
            );
          })}
        </Card.Content>
      </Card>
    );
  }
}

export default PhoneNumberComponent;
