export const ImageGalleryItem = ({ webformatURL, tags }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);
