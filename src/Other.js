import React, { Component } from 'react';
import axios from 'axios';
 
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
 
class Other extends Component {
  
    state = {
        memes:[]
    }
 
  componentDidMount() {
    this.setState({ isLoading: true });
 
    const url='http://localhost:8081/memes';
    
    axios.get(url)
    .then(response => response.data)
    .then((data) => {
      this.setState({ memes: data })
      console.log(this.state.memes)
     })
    }

  render (){
    const spacing = 30;
    return (
        <div className="Other">

            <h1>Memes</h1>
            <br/>
            <div className="col-xs-12 memebox" style={{paddingLeft:spacing+'px'}} >
                {this.state.memes.map((meme) => (
                    
                        <div className="meme-body">
                            <p className="meme-name">{meme.name}</p>
                            <p className="meme-caption" >{meme.caption}</p>
                            <p className="meme-url" ><img src={meme.url} width="150" height="150" /></p>
                        </div>
                    
                ))}
        </div>
        </div>
    );
  }
}
 
export default Other;