import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const BASE_WIDTH = 393;
const BASE_HEIGHT = 859;

const SCALE_FACTOR_HORIZONTAL = SCREEN_WIDTH / BASE_WIDTH;
const SCALE_FACTOR_VERTICAL = SCREEN_HEIGHT / BASE_HEIGHT;

export const scaleWidth = (width: number) => {
    return width * SCALE_FACTOR_HORIZONTAL;
};

export const scaleHeight = (height: number) => {
    return Math.round(height * SCALE_FACTOR_VERTICAL);
};

export const responsiveFontSize = (size: number) => {
    const scale = SCREEN_WIDTH / BASE_WIDTH;
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
