
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "95%", label: "Customer Satisfaction" },
  { value: "80%", label: "Brand Recognition" },
  { value: "60%", label: "More Engagement" },
];

function App() {
  const container = useRef(null);

  useGSAP(
    () => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-title span",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .from(
          ".stat-card",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.35"
        )
        .from(
          ".hero-car",
          {
            opacity: 0,
            scale: 0.85,
            duration: 1,
          },
          "-=0.7"
        );

      
        
gsap.to(".hero-car", {
  y: 150,
  x: -50,
  scale: 0.82,
  rotate: -2,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=1100",
    scrub: 0.8,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <section className="hero">
        <nav className="navbar">
          <a className="logo" href="#">
            fizz<span>.</span>
          </a>
          <span className="nav-label">CREATIVE STUDIO</span>
          <a className="nav-link" href="#about">
            DISCOVER ↗
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">MAKE EVERY MOMENT COUNT</p>

          <h1 className="hero-title">
            <span>WELCOME</span>
            <span>ITZ FIZZ</span>
          </h1>

          <p className="hero-description">
            We create experiences that move brands
            forward and make people feel something.
          </p>

          <div className="stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="car-wrap">
          <img
            className="hero-car"
           src="https://pngimg.com/uploads/ferrari/ferrari_PNG102807.png"
           alt="Red sports car"
          />
        </div>

        <div className="scroll-hint">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </div>

        <span className="hero-index">01 / 03</span>
      </section>

      <section className="next-section" id="about">
        <p>BUILT TO MOVE YOU</p>
        <h2>Scroll changes the story.</h2>
        <p>
          Thoughtful design. Meaningful motion.
          Experiences made to stand out.
        </p>
      </section>
    </main>
  );
}

export default App;
