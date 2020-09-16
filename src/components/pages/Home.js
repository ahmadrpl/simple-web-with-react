import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import TimeLine from '../common/TimeLine';
import Team from '../common/Team';

class Home extends Component{

    render(){

        return(
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="TELL ME MORE"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services/>
                <Portfolio />
                <TimeLine />
                <Team />
            </div>
        )
    }
}

export default Home;