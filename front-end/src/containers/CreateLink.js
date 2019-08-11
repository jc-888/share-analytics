import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import axios from 'axios';
import cheerio from 'cheerio';

import linkActions from '../redux/actions/linkActions.actions';

export class CreateLink extends Component {
  onUpdateLink = (event) => {
    console.log(event);
    this.props.updateLink(event.target.value);
  };

  getTitle = () => {
    axios
      .get('https://www.nfl.com/')
      .then((result) => {
        const html = result.data;
        const $ = cheerio.load(html);

        var title = $(html)
          .filter('title')
          .text();

        console.log(title);
      })
      .catch((err) => {
        console.log('error');
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Create Link</Card.Title>
        <Form onSubmit={this.onSignUp}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">Your URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={this.onUpdateLink}
              value={this.props.link}
            />
          </InputGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  link: state.Link.link
});

const mapDispatchToProps = {
  updateLink: linkActions.updateLink
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLink);