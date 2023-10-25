import {ImageRequireSource} from 'react-native';

type TImages = {
  [name: string]: ImageRequireSource;
};

/**
 * Run "yarn images" to auto import images to this file
 * This function [@returns](https://github.com/returns) all ready to use images without having to import from components
 * returns {object} all images
 */
const images: TImages = {};

export default images;
