import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity,TouchableWithoutFeedback, Share, FlatList, Dimensions } from 'react-native'
import Styles from './styles'
import moment from "moment";
import { connect } from 'react-redux';
import Heart from '../../themes/assets/resources/heart.png'
import Like from '../../themes/assets/resources/like.png'
import Video from 'react-native-video';
import Images from '../../themes/images';
import * as Animatable from 'react-native-animatable';
import { fetchFeeds, updateDislike, updateLike } from '../../screens/feeds/actions';
const pulseNew = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 1.5,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};
// const THRESHOLD = 100;
 class Card extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      comment: '',
      liked: false,
      paused: true,
      volume: 1,
      likeCount: null
      
    };
    this._shareMessage = this._shareMessage.bind(this)
    this.multiImagePost = this.multiImagePost.bind(this)
  }

  // position={
  //   start: null,
  //   end: null
  // }

  componentDidMount(){
    this.setState({likeCount: this.props.item.likes})
  }

  componentWillReceiveProps(newProps) {
    if(newProps.visibleIndex && newProps.visibleIndex == this.props.index )
    {
      this.setState({paused: false})
    }
    else{
      this.setState({paused: true})
    }
  }

  // handleVideoLayout = e => {
  //   const { height } = Dimensions.get("window");
  //   this.position.start = e.nativeEvent.layout.y - height + THRESHOLD;
  //   this.position.end = e.nativeEvent.layout.y + e.nativeEvent.layout.height - THRESHOLD;
  // };

  // handleScroll = e => {
  //   const scrollPosition = e.nativeEvent.contentOffset.y;
  //   const paused = this.state.paused;
  //   const { start, end } = this.position;

  //   if (scrollPosition > start && scrollPosition < end && paused) {
  //     this.setState({ paused: false });
  //   } else if (
  //     (scrollPosition > end || scrollPosition < start) && !paused
  //   ) {
  //     this.setState({ paused: true });
  //   }
  // };

  _shareMessage = () => {
    Share.share({
      message: 'this is a simple shared message'
    })
  }

  imagePost = () => {
    const { type, imageShared } = this.props.item
    if (type === 'image') {
      return (
        <Image style={Styles.imagePost} source={{ uri: imageShared }} />
      )
    } else if (type === 'video' || type == 'text') {
      return null
    }

  }

  multiImagePost = () => {
    const { type, multiImages } = this.props.item
    if (type === 'multiImageShared') {
      return (
        <FlatList style={Styles.multipleImageList}
          data={multiImages}
          renderItem={({ item }) =>
            <Image style={Styles.multipleImagePost} source={Images.multiImagePost} />
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      )
    } else if (type === 'video') {
      return null
    } else if (type === 'image') {
      return null
    }
  }
  
  videoPost = () => {
    const { type, videoShared } = this.props.item
    if (type === 'video') {
      return (
        <TouchableOpacity style={Styles.videoButton} onPress={() => { this.setState({ paused:!this.state.paused}) }} activeOpacity={0.5}>
          <Video style={Styles.videoPost}  source={{ uri: videoShared }} volume={this.state.volume} paused={this.state.paused}  />
          {
            (this.state.paused) ?
              <Image style={Styles.playButton}
                source={Images.playButton} resizeMode={'contain'} />
              : null
          }
        </TouchableOpacity>
      )
    } else if (type === 'image' || type == 'text') {
      return null
    }
  }

  caption = () => {
    const { caption } = this.props.item
    if (caption === '') {
      return null
    }
    return (
      <View>
        <Text style={Styles.captionText}>{caption} </Text>
      </View>
    )
  }

  likeClicked(){
    this.setState({ liked: !this.state.liked }, ()=> {
      this.setState({likeCount: this.state.liked ? this.state.likeCount + 1 : this.state.likeCount - 1})
    })
    
    if(this.state.liked){
      this.props.updateLiked(this.props.item)
    }else{
      this.props.updateDisliked(this.props.item)
    }
  }

  heartIcon() {
    var imgSource = this.state.liked ? Like : Heart;
    return (
      <Image style={Styles.likeIcon} resizeMode={'contain'} source={imgSource} />
    );
  }
  // handleViewRef = ref => this.view = ref;
  
  // bounce = () => {this.view.pulse(100).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'))
  
  // };

  userInfo = () => {
    const { userImage } = this.props.item
    return (
      <View style={Styles.userProfileView}>
        <View style={Styles.profileIconView}>
          <View style={Styles.profileBorder}>
            <Image style={Styles.profileIcon} source={{ uri: userImage }} />
          </View>
          <View style={Styles.userNameView}>
            <Text style={Styles.userName}>{this.props.item.name}</Text>
            <View style={Styles.seenView}>
              <Text style={Styles.timeText}>{moment(this.props.item.time).fromNow()}</Text>
              <Image style={Styles.eyeIcon} resizeMode={'contain'} source={Images.eyeIcon} />
              <Text style={Styles.viewText}> {this.props.item.views}</Text>
            </View>
          </View>
        </View>
        <View style={Styles.menuView}>
          <Text style={Styles.likeText}>{`${this.state.likeCount}`} </Text>
          {/* <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ liked: !this.state.liked })}> */}
          <TouchableWithoutFeedback  onPress={()=> this.likeClicked()}>
        <Animatable.View duration={300}  animation={this.state.liked ? pulseNew: ''} >
            {this.heartIcon()}
            </Animatable.View>
      </TouchableWithoutFeedback>
          {/* </TouchableOpacity> */}
          <Text style={Styles.sharedText}>{this.props.item.shared}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={this._shareMessage}>
            <Image style={Styles.sharedIcon} resizeMode={'contain'} source={Images.sharedIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
          <Image style={Styles.menuIcon} resizeMode={'contain'} source={Images.userMenu} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  commentSection = () => {
    return (
      <View style={Styles.commentSectionView}>
        <View style={Styles.chatIconView}>
        <TouchableOpacity activeOpacity={0.5}>
        <Image style={Styles.chatIcon} resizeMode={'contain'} source={Images.chatIcon} />
        </TouchableOpacity>
          <Text style={Styles.chatText}>{this.props.item.totalComments}</Text>
        </View>
        <View style={Styles.commentArea}>
          <View style={Styles.commentView}>
            <TextInput placeholder="Write Comments…" value={this.state.comment} onChangeText={(text) => this.setState({ comment: text })} style={Styles.commentInput}></TextInput>
            <TouchableOpacity activeOpacity={0.5}>
            <Image style={Styles.sendIcon} resizeMode={'contain'} source={Images.sendMessageIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  renderShared = () => {
    
    const { userImage, isShared, sharedUser } = this.props.item
    if (isShared) {
      return (
        <View style={Styles.postSharedView}>
          <View style={Styles.SharedUserInfo}>
            <View style={Styles.sharedProfileView}>
              <View style={Styles.sharedUserBorder}>
                <Image style={Styles.sharedUserIcon}  source={{ uri: userImage }} />
              </View>
              <View style={Styles.shareUserNameView}>
                <Text style={Styles.sharedUserName}>{sharedUser.name}</Text>
                <Text style={Styles.postSharedTime}>{moment(sharedUser.time).fromNow()}</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.5}>
            <Image style={Styles.sharedUserMenu} resizeMode={'contain'} source={Images.sharedUserMenuIcon} />
            </TouchableOpacity>
          </View>
          <Text style={Styles.sharedCommentText}>I like that.  :)</Text>
        </View>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderShared()}
        {this.userInfo()}
        {this.caption()}
        {this.imagePost()}
        {this.videoPost()}
        {this.multiImagePost()}
        {this.commentSection()}
      </View>
    )
  }
}

const StateToProps = (state) => ({
  feed: state.feeds.todos,
})
const DispatchToProps = (dispatch) => {
  return {
    updateDisliked: (item, like) => dispatch(updateDislike(item, like)),
    updateLiked: (item, like) => dispatch(updateLike(item, like))
    
  }
}
export default connect(StateToProps, DispatchToProps)(Card)
