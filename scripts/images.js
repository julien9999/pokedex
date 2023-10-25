const fs = require('fs');
const currentImgPath = './assets/images/';
const finalImgPath = '../../assets/images/';

const imageFileNames = () => {
  const array = fs.readdirSync(currentImgPath);
  return Array.from(new Set(array));
};

const generate = () => {
  const images = imageFileNames()
    .filter(
      name =>
        (name.includes('png') || name.includes('jpg')) &&
        !name.includes('@2x') &&
        !name.includes('@3x'),
    )
    .map(name => {
      const fileName = name.replace(/\.[^/.]+$/, '');
      const fileExt = name.split('.').pop();
      return `'${fileName}': require('${finalImgPath}${fileName}.${fileExt}')`;
    })
    .join(',\n  ');
  const string = `import { ImageRequireSource } from 'react-native';

type TImages = {
  [name: string]: ImageRequireSource;
};

/**
 * Run "yarn images" to auto import images to this file
 * This function [@returns](https://github.com/returns) all ready to use images without having to import from components
 * returns {object} all images
 */
const images: TImages = {
  ${images},
};

export default images;
`;

  fs.writeFileSync('src/constants/images.tsx', string, 'utf8');
};

generate();
