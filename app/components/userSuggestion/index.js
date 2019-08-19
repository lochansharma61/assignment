import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList, KeyboardAvoidingView } from 'react-native'
import Fonts from '../../themes/fonts'
import Images from '../../themes/images'
import Styles from './styles'

export default class UserSuggetion extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    renderTitle = () => {
        return (
            <View style={Styles.headerView}>
                <Image style={Styles.logo} source={Images.logoButton} />
                <Text style={Styles.title}>Your Preferred Match for the day</Text>
            </View>
        )
    }
    renderProfile = (item) => {
        return (
            <View style={Styles.profileView}>
                <ImageBackground style={Styles.userImage} source={require('../../themes/assets/resources/shahid.png')}>
                    <Image style={Styles.plusIcon} resizeMode={'contain'} source={Images.plusIcon} />
                    <View style={Styles.textView}>
                    <Text style={Styles.userName}>{item.name}</Text>
                    <Text style={Styles.userLocation}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </View>
        )

    }
    // componentDidMount(){
    //     let mydata = []
    //     for(i=1 ; i<=5 ; i++){
    //       mydata.push(i)
    //     }
    //     this.setState({
    //       dataSource: mydata
    //     })
    //   }
      

    render() {
        return (
            <View style={Styles.container}>
                {this.renderTitle()}
                <KeyboardAvoidingView behavior='position'
                    keyboardVerticalOffset={5} enabled>
                    <FlatList style={{ height: 130}}
                        data={this.props.item.ads}
                        renderItem={({ item }) => (
                            this.renderProfile(item) 
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </KeyboardAvoidingView>

            </View>
        )
    }
}