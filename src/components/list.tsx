import * as React from 'react';
import { observer } from 'mobx-react';

interface Props {
    items: any;
    handleClick: any;
}

@observer
export default class List extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
    }

    onClick = (e: any, item: any) => {
        this.props.handleClick(item);
    }

    render() {
        const { items } = this.props;
        return(
            <div>
                <ul>
                {items.map((item: any, idx: number) => (
                    <li key={idx} onClick={(e) => this.onClick(e, item)}>{item}</li>
                ))}
                </ul>
            </div>
        );
    }
}
