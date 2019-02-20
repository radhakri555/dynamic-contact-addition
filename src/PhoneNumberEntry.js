import React from "react";
import { Grid, Label, Input, Select, Icon, Button } from "semantic-ui-react";

class PhoneNumberEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = index => {
    this.props.removeItem(index);
  };

  render() {
    const { index, item } = this.props;
    let labelStyle = {
      backgroundColor: "white"
    };
    let typeOptions = [
      { key: "MAIN", value: "MAIN", text: "MAIN" },
      { key: "WORK", value: "WORK", text: "WORK" },
      { key: "PERSONAL", value: "PERSONAL", text: "PERSONAL" }
    ];

    return (
      <div>
        <Grid id={`ph_entry_${index}`}>
          <Grid.Row>
            <Grid.Column width={2}>
              <Label style={labelStyle}>Phone Number</Label>
            </Grid.Column>
            <Grid.Column width={3}>
              <Input value={item.national_number} />
            </Grid.Column>
            <Grid.Column width={1}>
              <Label style={labelStyle}>Ext.</Label>
            </Grid.Column>
            <Grid.Column width={3}>
              <Input value={item.extension_number} />
            </Grid.Column>
            <Grid.Column width={1}>
              <Label style={labelStyle}>Type</Label>
            </Grid.Column>
            <Grid.Column width={3}>
              <Select options={typeOptions} value={item.type} />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color="red" onClick={e => this.handleClick(index)}>
                -
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default PhoneNumberEntry;
