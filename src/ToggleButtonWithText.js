import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  View,
  Image,
} from "react-native";
import PropTypes from "prop-types";

class ToggleButtonWithText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
    };
  }

  render() {
    const { value } = this.state;
    const {
      activeText,
      inActiveText,
      ActiveImage,
      DisableImage,
      activeImageStyle,
      disableImageStyle,
      backgroundActive = "transparent",
      backgroundInactive = "transparent",
      containerWidth = 100,
      containerheight = 30,
      borderRadius = containerheight / 2,
      textStyle = styles.textStyle,
      disabled = false,
    } = this.props;
    this.getActiveStatus();
    return (
      <TouchableOpacity onPress={() => this.toggle(disabled)}>
        <View
          style={[
            {
              width: containerWidth,
              height: containerheight,
              backgroundColor: "#ffffff",
              flexDirection: "row",
              overflow: "visible",
              borderRadius: borderRadius,
              alignItems: "center",
              justifyContent: "center",
            },
            value && {
              flexDirection: "row-reverse",
            },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image
              style={[
                styles.imageStyle,
                value ? activeImageStyle : disableImageStyle,
              ]}
              source={value ? ActiveImage : DisableImage}
            />
          </View>
          <View
            style={[
              styles.textContainerStyle,
              value
                ? {
                    backgroundColor: backgroundActive,
                    borderTopLeftRadius: borderRadius,
                    borderBottomLeftRadius: borderRadius,
                  }
                : {
                    backgroundColor: backgroundInactive,
                    borderTopRightRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                  },
            ]}
          >
            <Text style={textStyle} numberOfLines={1} ellipsizeMode="tail">
              {value ? activeText : inActiveText}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  toggle = async (disabled) => {
    if (disabled) {
      return true;
    }
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    await this.setState({
      value: !this.state.value,
    });

    this.getActiveStatus();
  };

  getActiveStatus = () => {
    if (this.state.value) {
      this.props.onActive();
    } else {
      this.props.onDisable();
    }
  };
}

ToggleButtonWithText.propTypes = {
  activeText: PropTypes.string,
  inActiveText: PropTypes.string,
  ActiveImage: PropTypes.string,
  DisableImage: PropTypes.string,
  activeImageStyle: PropTypes.object,
  disableImageStyle: PropTypes.object,
  backgroundActive: PropTypes.string,
  backgroundInactive: PropTypes.string,
  containerWidth: PropTypes.number,
  containerheight: PropTypes.number,
  borderRadius: PropTypes.number,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
};
const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainerStyle: {
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  textStyle: {
    fontSize: 14,
    color: "#4E5983",
  },
});

export default ToggleButtonWithText;
