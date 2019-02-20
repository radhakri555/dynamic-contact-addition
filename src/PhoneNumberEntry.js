import React from "react";
import { Grid, Label, Input, Select, Icon, Button } from "semantic-ui-react";

class PhoneNumberEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  handleClick = index => {
    console.log("child", index);
    this.props.removeItem(index);
  };
  render() {
    //let props = this.props;
    let labelStyle = {
      backgroundColor: "white"
    };
    let typeOptions = [
      { key: "MAIN", value: "MAIN", text: "MAIN" },
      { key: "WORK", value: "WORK", text: "WORK" },
      { key: "PERSONAL", value: "PERSONAL", text: "PERSONAL" }
    ];
    let gridId = `ph_${this.props.index}`;
    return (
      <Grid id={gridId}>
        <Grid.Row>
          <Grid.Column width={2}>
            <Label style={labelStyle}>Phone Number</Label>
          </Grid.Column>
          <Grid.Column width={3}>
            <Input value={this.props.item.national_number} />
          </Grid.Column>
          <Grid.Column width={1}>
            <Label style={labelStyle}>Ext.</Label>
          </Grid.Column>
          <Grid.Column width={3}>
            <Input value={this.props.item.extension_number} />
          </Grid.Column>
          <Grid.Column width={1}>
            <Label style={labelStyle}>Type</Label>
          </Grid.Column>
          <Grid.Column width={3}>
            <Select options={typeOptions} value={this.props.item.type} />
          </Grid.Column>
          <Grid.Column width={2}>
            <Button
              color="red"
              onClick={e => this.handleClick(this.props.index)}
            >
              -
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PhoneNumberEntry;
