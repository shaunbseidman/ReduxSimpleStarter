import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {render} from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
const API_Key = 'AIzaSyAlYM_ViuIZRO0qLLCtnIq-V3_2mEMNo4E'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
    YTSearch({
      key: API_Key,
      term: 'code orange'
    }, (videos) => {
      this.setState({videos})
      //only works when the key and property are the same variable name, otherwise videos:videos
    })
  }
  render() {
    return (<div>
      <SearchBar/>
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos}/>
    </div>)
  }
}

//take this component's generated HTML and display it on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'))
