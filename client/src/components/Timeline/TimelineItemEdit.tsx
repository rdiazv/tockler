import * as React from 'react';
import * as styles from './TimelineItemEdit.css';

import { Input, Col, Button } from 'antd';
import { ColorPicker } from './ColorPicker';
import { ITrackItem } from '../../@types/ITrackItem';
const InputGroup = Input.Group;

interface IProps {
    selectedTimelineItem: any;
}

interface IState {
    item: any;
}

interface IHocProps {}

type IFullProps = IProps & IHocProps;

export class TimelineItemEdit extends React.Component<IProps, ITrackItem> {
    constructor(props) {
        super(props);
        console.log('ColorPicker', props);
        this.state = props.selectedTimelineItem;
    }
    changeColorHandler = color => {
        console.log('Changed color:', color);

        this.setState({ color });
    };

    saveItemHandler = () => {
        console.log('Saving  item:', this.state);
    };

    render() {
        const { selectedTimelineItem }: IFullProps = this.props;

        if (!selectedTimelineItem) {
            console.log('No item');
            return null;
        }

        console.log('Have timerange', selectedTimelineItem);

        const item = selectedTimelineItem.data().toJS();

        console.log(item);
        return (
            <div className={styles.editForm}>
                <InputGroup>
                    <Col span={6}>
                        <Input defaultValue={item.app} placeholder="App" />
                    </Col>
                    <Col span={16}>
                        <Input defaultValue={item.title} placeholder="Title" />
                    </Col>
                    <Col span={1}>
                        <ColorPicker color={item.color} onChange={this.changeColorHandler} />
                    </Col>
                    <Col span={1}>
                        <Button
                            type="primary"
                            shape="circle"
                            icon="save"
                            onClick={this.saveItemHandler}
                        />
                    </Col>
                </InputGroup>
            </div>
        );
    }
}
