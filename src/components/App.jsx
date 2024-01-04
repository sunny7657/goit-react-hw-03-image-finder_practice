import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as ImageService from 'Service/image-service';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total: 0,
    error: '',
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
      const { hits, totalHits } = await ImageService.getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    );
  }
}
