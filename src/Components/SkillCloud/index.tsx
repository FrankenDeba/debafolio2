import { useCallback } from "react";
import "./SkillCloud.css";
import ReactLogo from "../../assets/logo192.png";
import type { Container, Engine } from "tsparticles-engine";
import ProfileImg from "../../debaProfile.jpeg";

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function SkillCloud() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="skill_cloud_cont">
      {/* <div>
        {" "}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: false,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: false,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 10,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "image",
                // image: {
                //   src: ReactLogo,
                //   width: 50,
                //   height: 50,
                // },
                images: [
                  {
                    src: ReactLogo,
                    width: 50,
                    height: 50,
                  },
                  {
                    src: ProfileImg,
                    width: 50,
                    height: 50,
                  },
                ],
              },
              size: {
                value: 20,
              },
            },
            detectRetina: true,
          }}
        />
      </div> */}
    </div>
  );
}

export default SkillCloud;
