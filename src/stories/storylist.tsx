import Story from "./story"
import * as React from "react"

export default class StoryList extends React.Component<any, any> {
constructor(props: any){
    super(props);
    this.state = {items: props.items, isLoaded:false}
}
    renderStory(story_id){return <Story story_id={story_id}/>}

    componentDidMount() {
        var myHeaders = new Headers();
        var fetchInit:RequestInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

        fetch("https://gambe.ro/newest.json", fetchInit)
        .then(res => res.json())
        .then(
          (items) => {
            this.setState({
              isLoaded: true,
              items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() { 
        console.log(this.state)
    const {error, isLoaded, items}  = this.state;
    if (error) {
      return <div>Error: {error.toString()}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="storylist">
          {items.map(item => (
              <Story item={item} />
          ))}
        </div>
      );
    }
    }
}
