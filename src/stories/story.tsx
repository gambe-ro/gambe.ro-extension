
import * as React from 'react';

export default class Story extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = this.props.item
    }

    public render() {
        console.log(this.state)
        return (<div>
                <a href={this.state.short_id_url} className="story">{ this.state.title }</a></div>
            
        );
    }
}