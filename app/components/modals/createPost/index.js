import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal'
import { ScrollView } from 'react-native-gesture-handler';
// import { Tooltip } from 'react-native-elements';
import styles from './styles';
import Images from '../../../themes/images';
import Colors from '../../../themes/colors';
import { fetchFeeds } from '../../../screens/feeds/actions';

class CreatePost extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userImage: [],
      offerTitle: null,
      offerValidity: null,
      offerStarts: null,
      imageArray: [],
      imageOption: false,
      offerUrl: null,
      comment: '',
      userName: '',
      userAvtar: '',
      openModel: false,
      maxUploadableItems: 0,
      IsEditPost: false,
      feedId: null,
      withCommentBox: true,
      moduleType: '',
      groupId: '',
      openCreatePostModel: false,
      interestModalVisibility: false,
      showLoader: false
    };
    this.onModalClose = this.onModalClose.bind(this)
    this._openModal = this._openModal.bind(this)
  }

  onModalClose(val) {
    this.setState({ openModel: val })
  }

  _openModal() {
    this.setState({ openModel: true })
  }

  componentDidMount() {
    this.setState({ openCreatePostModel: this.props.openModel })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.openModel != this.state.openCreatePostModel) {
      this.setState({ openCreatePostModel: newProps.openModel })
    }
  }

  onModalClose() {
    this.setState({ openCreatePostModel: false }, () => this.props.onClose(false))
  }

  postSubmit() {
    if (this.state.comment == '') {
      alert('please write something to post')

    } else {
      const min = 1;
      const max = 10000000;
      const ranNum = min + Math.random() * (max - min)
      let data = {
        "name": "Shahid Kapoor",
        "userImage": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png",
        "caption": this.state.comment,
        "time": Date.now(),
        "likes": 0,
        "id": parseInt(ranNum),
        "shared": "5k",
        "totalComments": "46k",
        "views": "9k",
        "videoShared": "http://techslides.com/demos/sample-videos/small.mp4",
        "imageShared": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png",
        "type": "text",
        "feedType": "post",
        "isShared": false,
        "sharedUser": {
          "name": "Vikas yadav",
          "userProfile": "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
          "time": "24 min ago"
        }
      }
      this.props.fetchFeeds(data)
      this.setState({ openCreatePostModel: false, comment: '' }, () => this.props.onClose(false))
    }
  }

  render() {
    return (
      <Modal
        transparent={true}
        isVisible={this.state.openCreatePostModel}
        style={{ margin: 0 }}
        avoidKeyboard={(this.state.userImage.lenght > 0) ? false : true}
      >
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <Text style={{ color: 'white', fontSize: 30 }}>CreatePost</Text>
            <TouchableOpacity onPress={() => this.onModalClose()}>
              <Image source={Images.cancle} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text>Post Description</Text>
            <TextInput
              placeholder="Write about your post…"
              placeholderTextColor={'rgb(211,211,211)'}
              style={styles.inputText}
              multiline={true}
              value={this.state.comment}
              onChangeText={(text) => this.setState({ comment: text })}
            />
            <TouchableOpacity onPress={() => this.postSubmit()} style={styles.buttonContainer}>
              <Text style={{ color: 'white', fontSize: 20 }}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (data) => dispatch(fetchFeeds(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost)
