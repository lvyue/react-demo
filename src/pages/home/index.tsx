import React from 'react';
import { Menus } from '../../components/menus';
class Home extends React.Component<object> {
    render() {
        return (
            <div className="main-container">
                <div className="left">
                    <Menus />
                </div>
                <div className="right" />
            </div>
        );
    }
}

export default Home;
