import React, { useEffect } from 'react'
import Header from './Header'
import About from './About'
import TotalCategories from './TotalCategories'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import '../css/style.css'
import { useFirebase } from '../context/Firebase'
import { motion, useAnimation } from 'framer-motion'
import { Element } from 'react-scroll'

const Home = () => {
    const controlsAbout = useAnimation();
    const controlsCategories = useAnimation();
    const controlsTeam = useAnimation();
    const controlsContact = useAnimation();
    const controlsFooter = useAnimation();

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const aboutSection = document.getElementById('about');
        const categoriesSection = document.getElementById('categories');
        const teamSection = document.getElementById('team');
        const contactSection = document.getElementById('contact');
        const footerSection = document.getElementById('footer');

        if (aboutSection) {
            const aboutOffset = aboutSection.offsetTop;
            if (scrollTop > aboutOffset - window.innerHeight / 2) {
                controlsAbout.start({ opacity: 1 });
            }
        }

        if (categoriesSection) {
            const categoriesOffset = categoriesSection.offsetTop;
            if (scrollTop > categoriesOffset - window.innerHeight / 2) {
                controlsCategories.start({ opacity: 1, y: 0 });
            }
        }

        if (teamSection) {
            const teamOffset = teamSection.offsetTop;
            if (scrollTop > teamOffset - window.innerHeight / 2) {
                controlsTeam.start({ opacity: 1, scale:1 });
            }
        }

        if (contactSection) {
            const contactOffset = contactSection.offsetTop;
            if (scrollTop > contactOffset - window.innerHeight / 2) {
                controlsContact.start({ opacity: 1, y: 0 });
            }
        }

        if (footerSection) {
            const footerOffset = footerSection.offsetTop;
            if (scrollTop > footerOffset - window.innerHeight / 2) {
                controlsFooter.start({ opacity: 1, y: 0 });
            }
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const firebase = useFirebase()
    return (
        <div>
            <Header />
            {firebase.isLoggedIn ?
                <>
                    <Element name="about" id="about">
                        <motion.div  initial={{ opacity: 0 }} animate={controlsAbout} transition={{ duration: 1.5 }}>
                            <About />
                        </motion.div>
                    </Element>

                    <Element name="categories" id="categories">
                        <motion.div initial={{ opacity: 0, y: 75 }} animate={controlsCategories} transition={{ duration: 1.5 }}>
                            <TotalCategories />
                        </motion.div>
                    </Element>

                    <Element name="team" id="team">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={controlsTeam} transition={{ duration: 1.5 }}>
                            <Team />
                        </motion.div>
                    </Element>

                    <Element name="contact" id="contact">
                        <motion.div initial={{ opacity: 0, y: 75 }} animate={controlsContact} transition={{ duration: 1.5 }}>
                            <Contact />
                        </motion.div>
                    </Element>
                        
                    <Footer />
                </>
                : ""
            }
        </div>
    )
}

export default Home
