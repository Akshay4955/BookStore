import {StyleSheet} from 'react-native';
import * as Constant from './Constant';

const GlobalStylesheet = () => {
  return StyleSheet.create({
    screen_container: {
      flex: 1,
      backgroundColor: Constant.Color.backgroundColor,
    },
    home_header: {
      flexDirection: 'row',
      height: Constant.height.small,
      width: Constant.width.full,
      marginTop: Constant.margin.large,
      padding: Constant.padding.small,
      alignItems: 'center',
      borderRadius: Constant.borderRadius.small,
    },
    wishlist_header: {
      flexDirection: 'row',
      height: Constant.height.small,
      width: Constant.width.full,
      padding: Constant.padding.small,
      alignItems: 'center',
      borderRadius: Constant.borderRadius.small,
    },
    search_input_container: {
      flexDirection: 'row',
      height: Constant.height.medium,
      width: Constant.width.search,
      borderColor: Constant.Color.data_color,
      borderWidth: Constant.borderWidth.small,
      borderRadius: Constant.borderRadius.small,
      margin: Constant.margin.large,
    },
    header_icon: {
      marginLeft: Constant.margin.large,
      marginTop: Constant.margin.verySmall,
      color: Constant.Color.data_color,
    },
    text_input: {
      height: Constant.height.small,
      width: Constant.width.BookCard,
      color: 'black',
      alignSelf: 'center',
      marginLeft: Constant.margin.large,
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.small,
    },
    search_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.small,
      marginLeft: Constant.margin.large,
      color: Constant.Color.lightColor,
    },
    home_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.medium,
      marginLeft: Constant.margin.medium,
      color: Constant.Color.black,
    },
    search_result_text: {
      fontFamily: 'Calisto MT',
      fontSize: Constant.fontSize.search,
      marginTop: Constant.margin.verySmall,
      marginLeft: Constant.margin.medium,
      color: Constant.Color.lightColor,
    },
    home_text_box: {
      flexDirection: 'row',
      margin: Constant.margin.small,
    },
    items_no: {
      fontFamily: 'Lato',
      fontWeight: '500',
      fontSize: Constant.fontSize.verySmall,
      color: Constant.Color.lightColor,
      marginLeft: Constant.margin.small,
      marginTop: Constant.margin.small,
    },
    books: {
      flexDirection: 'row',
    },
    backIcon: {
      marginTop: Constant.margin.large,
      marginLeft: Constant.margin.large,
    },
  });
};

export default GlobalStylesheet;
