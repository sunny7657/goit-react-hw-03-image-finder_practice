import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  onFormSubmit = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery />
      </>
    );
  }
}
