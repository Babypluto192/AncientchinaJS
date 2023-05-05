
import React, {useRef} from 'react';
import Card from "react-bootstrap/Card";



import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import video from "../video/МИФЫИЛЕГЕНДЫКИТАЙ.mp4"
function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    return (
        <section ref={ref}>
      <span
          style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.75, 0.55, 1) 0.8s"
          }}
      >
        {children}
      </span>
        </section>
    );
}



const Video = () => {


    return(
        <Section>


            <header>
                <OffCanvas />
                <h1>Древний Китай</h1>
                <h3></h3>
            </header>
        <Card>
            <video width="auto" height="auto" controls >
                <source src={video} type="video/mp4"/>
            </video>
        </Card>


        </Section>
    )

}
export default Video;

