import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return (
      <FormGroup>
        <InputGroup>
          <FormControl type="text" />
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    )
  }
}

export default SearchBar;
