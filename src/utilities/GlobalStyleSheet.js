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
    info_container: {
      backgroundColor: Constant.Color.image_Backgorund,
      height: Constant.height.infoHeight,
      width: Constant.width.full,
      marginVertical: Constant.margin.small,
    },
    header_icon: {
      marginLeft: Constant.margin.large,
      marginTop: Constant.margin.verySmall,
      color: Constant.Color.data_color,
    },
    info_icon: {
      marginLeft: Constant.margin.medium,
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
    total_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.small,
      marginLeft: Constant.margin.large,
      color: Constant.Color.black,
    },
    order_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.small,
      margin: Constant.margin.large,
      color: Constant.Color.black,
      marginHorizontal: Constant.margin.modalMargin,
    },
    customer_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.small,
      marginLeft: Constant.margin.large,
      color: Constant.Color.black,
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
    info_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.price,
      color: Constant.Color.black,
      marginLeft: Constant.margin.medium,
    },
    address_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.price,
      color: Constant.Color.black,
      marginHorizontal: Constant.margin.medium,
    },
    home_text_box: {
      flexDirection: 'row',
      margin: Constant.margin.small,
    },
    customer_details_box: {
      flexDirection: 'row',
      margin: Constant.margin.small,
      justifyContent: 'space-between',
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
    addedToBag_button: {
      height: Constant.height.small,
      width: Constant.width.large,
      marginHorizontal: Constant.margin.small,
      backgroundColor: Constant.Color.addedToBagColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Constant.borderRadius.small,
      borderWidth: Constant.borderWidth.verySmall,
      borderColor: Constant.Color.data_color,
    },
    addedToBag_text: {
      color: Constant.Color.data_color,
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.author,
    },
    placeOrder_button: {
      height: Constant.height.small,
      width: Constant.width.large,
      marginHorizontal: Constant.margin.small,
      backgroundColor: Constant.Color.data_color,
      justifyContent: 'center',
      alignItems: 'center',
    },
    continue_button: {
      height: Constant.height.small,
      width: Constant.width.search,
      marginHorizontal: Constant.margin.small,
      backgroundColor: Constant.Color.data_color,
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeOrder_text: {
      color: Constant.Color.backgroundColor,
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.price,
    },
    order_container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Constant.margin.extralarge,
    },
    customer_box: {
      height: Constant.height.imageHeight,
      width: Constant.width.extralarge,
      padding: Constant.padding.small,
    },
  });
};

export default GlobalStylesheet;
