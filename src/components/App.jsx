import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as ImageService from 'Service/image-service';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  onFormSubmit = value => {
    this.setState({ query: value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getApi(query, page);
    }
  }

  getApi = async (query, page) => {
    try {
      const data = await ImageService.getImages(query, page);
      console.log(data);
    } catch (error) {}
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
