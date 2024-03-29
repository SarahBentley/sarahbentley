import React, { Component} from "react";
import '../utilities.css'
import "./About.css";
import { Link } from "react-router-dom";


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/* <hr width ="100px"></hr>
                <h2 className="u-textCenter">About Me</h2>
                <hr width ="100px"></hr> */}
                <div className="AboutSection padded-cont">
                    <div className="half-flex">
                        <img className="profile-img" src="profile_pic.jpg"/>
                    </div>
                    <div className="description">
                        <h2 className="u-textCenter">Hello!</h2>
                        <p>
I am a senior at Massachusetts Institute of Technology from Los Angeles, California double majoring in math and AI and decision-making. At MIT, I am using my studies to combine analytical and creative approaches to problem-solving. In my programming courses, I have learned not only the building blocks of Python but also best style practices, program parsimony, and how to write clean, comprehensible code. I enjoy using computer science to solve advanced mathematical problems, especially those involving linear algebra, optimization, and combinatorics. I also study statistics to gain a theoretical understanding of modern advances in machin learning.</p>
                        <p>
                            Throughout my time at MIT, I've specifically grown interested in aerospace, modeling, and simulation. Check out my <Link to="/experience">experience</Link> page to learn about all the projects I have worked on.</p>
                    </div>
                </div>
                <hr width="200px" className="Blue"></hr>
                <h2 className="u-textCenter">Activities</h2>
                <hr width="200px" className="Blue"></hr>

                <div className="AboutSection padded-cont">
                    <div className="half-flex">
                        <img className="u-textCenter xc-img" src="running_photo.JPG"></img>
                    </div>
                    <div className="half-flex">
                        <h4 className="u-bold u-textCenter">MIT Cross Country and Track</h4>
                        <p>
                            Outside of school, I dedicate most of my time to the cross country and track and field teams at MIT, for which I am a recruited athlete.</p>
                        <p>
                            Take a look at my <a href="https://mit.prestosports.com/sports/w-xc/2020-21/bios/bentley_sarah_2uy6?view=bio">bio</a> to learn more about my accomplishments and the <a href="https://mit.prestosports.com/sports/w-xc/index">team page</a> to stay up to date on our performances.</p>
                    </div>
                </div>
                <div className="AboutSection padded-cont">
                    <div className="half-flex">
                        <img className="codeit-img" src="code_it.png"></img>
                    </div>
                    <div className="half-flex">
                        <h4 className="u-bold u-textCenter">MIT CodeIt</h4>
                        <p>
                            I'm also a mentor for CodeIt, a program which teaches middle school-age female and nonbinary students how to code.
                        </p>
                    </div>
                </div>
                <div className="AboutSection padded-cont blue-cont">
                    <div className="half-flex">
                        <hr width="200px" className="Blue"></hr>
                        <h2 className="u-textCenter">Other Interests</h2>
                        <hr width="200px" className="Blue"></hr>
                        <ul>
                            <li><p>Surfing - I've surfed for nearly all my life!</p></li>
                            <li><p>Food - I enjoy healthy food and love to cook up simple yet nutritious meals whenever I get the chance.</p></li>
                            <li><p>Athleticism - I'm fascinated by the human body and how it balances the stress-recovery cycle of being an athlete.</p></li>
                            <li><p>Math - While a lot of the work I've done is CS-focused, few things provide me more intellectual stimulation and sense of accomplishment than a good math problem.</p></li>
                            <li><p>Teaching - I worked as an undergraduate assistant for MIT's linear algebra course and absolutely loved digging deeper into the subject and explaining it to students through a new lense.</p></li>
                            <li><p>Crossfit - I'm a fan of Crossfit, both as a sport and a path to living an overall healthy, fit lifestyle.</p></li>

                        </ul>          
                    </div>
                    <div className="half-flex">
                        <img className="surfing-img" src="surfing.jpeg"></img>
                    </div>
                </div>
            </>
        )
    }
};

export default About;

