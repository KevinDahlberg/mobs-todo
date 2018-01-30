import * as React from 'react';

interface Props {
    items: any[];
}

export default class Todo extends React.Component <Props, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { items } = this.props;
        return(
            <div>
                {items.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        );
    }
}
