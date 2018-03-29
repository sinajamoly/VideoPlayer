import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
    }

    render(){
        return(
            <div>
                <input onChange={event=>this.onInputChange(event.target.value)}/>
                <p>{this.state.term}</p>
                <button onClick={()=>this.props.videoSearch(this.state.term)}>search</button>
            </div>
        );
    }
    onInputChange(term){
        this.setState({term:term});
        this.props.videoSearch(term);
    }

}

export default SearchBar;