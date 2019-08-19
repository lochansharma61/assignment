import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native'
import Images from '../../themes/images';
import Styles from './styles'


export default class Business extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // dataSource: ''
        };
    }

    renderTitle = () => {
        return (
            <View style={Styles.headerView}>
                <Image style={Styles.logo}  source={Images.logoButton} />
                <Text style={Styles.title}>Local Business near you</Text>
            </View>
        )
    }

    renderBusiness = (item) => {
        return (
            <View style={Styles.adsView}>
                <View style={Styles.postView}>
                    <ImageBackground style={Styles.imagePost} source={Images.buisnessAdPost}>
                        <View style={Styles.buyView}>
                            <Image style={Styles.logo} source={Images.logoButton} />
                            <TouchableOpacity style={Styles.buyButton} activeOpacity={0.7}>
                                <Text style={Styles.buyText}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={Styles.offerView}>
                        <Text style={Styles.offerText}>{item.offer}</Text>
                        <View style={Styles.validityView}>
                            <Text style={Styles.cafeName}>{item.name}</Text>
                            <Text style={Styles.validTime}>{item.validity}</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
    // componentDidMount() {
    //     let mydata = []
    //     for (i = 1; i <= 5; i++) {
    //         mydata.push(i)
    //     }
    //     this.setState({
    //         dataSource: mydata
    //     })
    // }


    render() {
        return (
            <View style={Styles.container}>
                {this.renderTitle()}
                {/* {this.renderBusiness()} */}
                <KeyboardAvoidingView behavior='position'
                    keyboardVerticalOffset={5} enabled>
                    <FlatList 
                        data={this.props.item.business}
                        renderItem={({ item }) => (
                            this.renderBusiness(item)
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