import React from 'react'
import Layout from './components/Layout'
import * as styles from "../styles/about.module.css"

export default function About() {
    return (
        <Layout>
        <section>
        <div className={styles.header}>
            <div className={styles.aboutBodyHeading}>
            <h3>Who I Am.</h3>
            </div>

            <div className={styles.aboutBodyText}>
                <p>A self-professed and mostly self-taught geek. I am a lover of all things Tech, but especially Web development and database design.</p>
                
                <p>During the Pandemic, amidst great fear of the unknown, I left the only industry I’d known for 15 years and completed
                a 10-week web development bootcamp and I have been developing ever since. </p>
             
                <p>I believe that good design is so important to the success of a site. It can very quickly sway a visitor to stay or leave. With this in mind, I am constantly researching current successful design trends to implement into my sites.</p>
            </div>
            </div>
            <div className={styles.column2}>
                <h2> Core Fundamentals</h2>
                <div className={styles.aboutList}>
                    <ul className={styles.uList}>
                        <li>Empathy.</li>
                        <li>Drive.</li>
                        <li>Passion.</li>
                    </ul>
                    <ul className={styles.uList}>    
                        <li>Mindfulness.</li>
                        <li>Sense of Humor.</li>
                        <li>Understanding.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.linkDiv}>
            <div className={styles.linksList}>
                <a href="https://www.linkedin.com/in/damian-lonel-48680b56/">LinkedIn</a>
                <a href="https://github.com/dalbar82/">GitHub</a>
                <a href="mailto:damian@playworkstudios.com.au">damian@playworkstudios.com.au</a>
                <a href="*">0438 344 386</a>
                </div>
            </div>
        </section>
        </Layout>
    )
}
