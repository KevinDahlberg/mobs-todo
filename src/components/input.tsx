import * as React from 'react';
import { observer } from 'mobx-react';

interface Props {
    handleClick: any;
}
interface State {
    item: string;
}

@observer
export default class Input extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            item: ''
        };
    }

    onClick = () => {
        const { item } = this.state;
        this.props.handleClick(item);
        this.setState({ item: '' });
    }

    onChange = (e: any) => {
        const value = e.target.value;
        this.setState({ item: value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.item} onChange={this.onChange} />
                <button type="subimt" onClick={this.onClick}>Submit</button>
            </div>
        );
    }
}