import React from 'react';
import { animated, useSpring, useInView } from '@react-spring/web';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaSass } from 'react-icons/fa';
import { SiExpress, SiGithub } from 'react-icons/si';
import { BiLogoMongodb, BiLogoCPlusPlus } from 'react-icons/bi';
import { PiBracketsAngleBold } from 'react-icons/pi';
import "./skills.css"

const skills = [
    { id: 1, name: 'React', icon: <FaReact /> },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt /> },
    { id: 3, name: 'HTML5', icon: <FaHtml5 /> },
    { id: 4, name: 'Node.js', icon: <FaNodeJs /> },
    { id: 5, name: 'Express.js', icon: <SiExpress /> },
    { id: 6, name: 'MongoDB', icon: <BiLogoMongodb /> },
    { id: 7, name: 'GitHub', icon: <SiGithub /> },
    { id: 8, name: 'Sass', icon: <FaSass /> },
    { id: 9, name: 'C++', icon: <BiLogoCPlusPlus /> },
    { id: 10, name: 'DSA', icon: <PiBracketsAngleBold /> },
];

const SkillsSection = () => {
    const isMobile = window.innerWidth < 475;
    let ref;
    let springs;
    !isMobile &&
        ([ref, springs] = useInView(
            () => ({
                from: {
                    y: 50,
                    opacity: 0,
                },
                to: {
                    y: -20,
                    opacity: 1,
                },
                config: {
                    duration: 500,
                },
            }),
            {
                once: true,
                rootMargin: '0px 0px -25% 0px',
            },
        ));

    const box = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    });

    const item = useSpring({
        from: {
            opacity: 0,
            y: -100,
        },
        to: {
            opacity: 1,
            y: 0,
        },
        config: {
            tension: 280,
            friction: 30,
        },
    });

    return (
        <section id="skills">
            <animated.div ref={ref} style={springs}>
                <div className='text-box'>
                    <h3 className="title">What I Have to Offer</h3>
                    <p className="text">
                        My name is Karan. I'm a Full Stack Web Developer based in Venezuela. I'm{' '}
                        <span className="bold">passionate</span> about cutting-edge, pixel-perfect, responsive user interfaces, and
                        dynamic user experiences. I have expertise in the following technologies and tools:
                    </p>
                </div>
                <div>
                    <animated.ul style={box} className="skills">
                        {skills.map((skill) => (
                            <animated.li style={item} key={skill.id} className="skill-item">
                                <div className='card'>
                                    <div className="skill-icon">{skill.icon}</div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            </animated.li>
                        ))}
                    </animated.ul>
                </div>
            </animated.div>
        </section>
    );
};

export default SkillsSection;
