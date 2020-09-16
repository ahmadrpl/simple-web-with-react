import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpg';

import TimeLine from '../common/TimeLine';
import Team from '../common/Team';

class About extends Component{

    render(){
        return(
            <div>
                <Header
                title="About Us"
                subtitle="It's really good story"
                showButton={false}
                image={image}
                />
                <TimeLine />
                <Team/>
            </div>
        )
    }
}

export default About;