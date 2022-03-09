import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CustomPagination } from './CustomPagination';
import { ddjrev7top, ddjrev7diagonal, ddjrev7front, ddjrev7back, ddjrev7slant } from './images';

const { width, height } = Dimensions.get('window');

const newImage = [ ddjrev7top, ddjrev7diagonal, ddjrev7front, ddjrev7back, ddjrev7slant ];

const image = index => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));

export default () => {
  return (
    <SwiperFlatList
        index={0}
        data={items}
        renderItem={({ item }) => <Image style={styles.image} source={item.image} />}
        showPagination
            PaginationComponent={CustomPagination}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 310,
    width,
  },
});