import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './component/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
const API_KEY='your api key';




class App extends Component{
    constructor(props){
        super(props);
        this.state={videos:[],selectedVideo:null,term:''};
        this.videoSearch('surfboard')
    }

    componentWillUpdate(){
        console.log(this.state);
    }

    videoSearch(term){
        this.setState({term:term});
        YTSearch({key:API_KEY,term:this.state.term},(data)=>{
            this.setState({
                videos:data,
                selectedVideo:data[0]
            });
        });
    }

    render(){
        return(
            <div>
                <SearchBar videoSearch={(value)=>this.videoSearch(value)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<div><App/></div>, document.getElementById('root'));

