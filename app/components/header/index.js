import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Styles from './styles'
import Images from '../../themes/images';



export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (

      <View style={[Styles.container, this.props.color]}>
        <Image style={Styles.logoIcon} resizeMode={'contain'} source={this.props.image}></Image>
        <Text style={Styles.title}>{this.props.title}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground style={[Styles.frameIcon, this.props.style]} resizeMode={'contain'} source={this.props.backImage}>
            <Text style={Styles.frameText}>{this.props.frameText}</Text>
          </ImageBackground>
        </TouchableOpacity>

      </View>

    )
  }
}