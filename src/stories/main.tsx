import * as React from 'react';
import './Popup.scss';
import Story from "./story"
import StoryList from "./storylist"
interface AppProps {}

interface AppState {}

export default class Popup extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    render() {
        return (<div>
        <StoryList />
        </div>
        )
    }
}


