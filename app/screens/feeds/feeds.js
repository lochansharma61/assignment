import React, { Component } from 'react'
import { View, FlatList, KeyboardAvoidingView, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import Headers from '../../components/header/index'
import Card from '../../components/card/index'
import UserSuggetion from '../../components/userSuggestion/index'
import Business from '../../components/buisness';
import Metrics from '../../themes/metrics'
import Styles from './styles'
import Images from '../../themes/images';
import { connect } from 'react-redux';
import * as actions from './actions'
import CreatePost from '../../components/modals/createPost';
import Colors from '../../themes/colors';


class Feeds extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      // moveScroll: false,
      // e:null,
      visibleIndex: false,
      openCreatePostModel: false,
    };
    this.renderItem = this.renderItem.bind(this);
    this.onModalClose = this.onModalClose.bind(this)
  }

  componentDidMount() {
    this.props.fetchFeeds()
  }

  componentWillReceiveProps(newProps) {
    if (this.state.props != newProps) {
      this.setState({
        dataSource: newProps.feed
      })

    }
  }

  onModalClose(val) {
    this.setState({ openCreatePostModel: val })
}


  renderItem = ({ item, index }) => {
    if (item.feedType === 'post') {
      return (
        <Card item={item} visible={this.state.visibleIndex} index={index} />
      )
    } else if (item.feedType === 'ads') {
      return (
        <UserSuggetion item={item} />
      )
    } else if (item.feedType === 'business') {
      return (
        <Business item={item} />
      )
    }

  }
  onViewableItemsChanged = ({ viewableItems, changed }) => {
    viewableItems.map((item) => {
      if (item.isViewable && item.index == 3) {
        this.setState({ visibleIndex: item.index })
      } else {
        this.setState({ visibleIndex: null })
      }
    })
  }


  render() {
    return (
      <SafeAreaView style={{backgroundColor: Colors.blue, flex: 1}}>
        <View style={Styles.container}>
        <Headers title={'Social Feeds'} image={Images.logo} backImage={Images.frame} frameText={'99+'} />
        <KeyboardAvoidingView behavior='position'
          keyboardVerticalOffset={5} enabled>
          <FlatList style={{ height: Metrics.screenHeight * 0.868 }}
            data={this.state.dataSource}
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 200
            }}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </KeyboardAvoidingView>
        <TouchableWithoutFeedback 
        onPress={() => this.setState({ openCreatePostModel: true }, ()=>{console.log('this.state.openCreatePost', this.state.openCreatePostModel)})}
        >
          <Image
            source={Images.add}
            style={Styles.image}
          />
        </TouchableWithoutFeedback>
        <CreatePost
          openModel={this.state.openCreatePostModel}
          onClose={this.onModalClose}
          type={'feedsHome'}
          withCommentBox={true}
        />
        </View>
      </SafeAreaView>
    )
  }
}

const StateToProps = (state) => ({
  feed: state.feeds.todos,
})
const DispatchToProps = (dispatch) => {
  return {
    fetchFeeds: () => dispatch(actions.fetchFeeds())
  }
}
export default connect(StateToProps, DispatchToProps)(Feeds)