import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

const Particle = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "#ffffff",
              },
              opacity: 1
            },
            fullScreen: {
              enable: false,
              zIndex: -1
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                  }
                },
                resize: {
                  delay: 0.5,
                  enable: true
                }
              },
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad"
                }
              }
            },
            particles: {
              color: {
                value: "#ff0000",
                animation: {
                  h: {
                    count: 0,
                    enable: true,
                    speed: 20,
                    decay: 0,
                    sync: true,
                    offset: 0
                  }
                }
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90
                },
                enable: true,
                direction: "none",
                random: false,
                speed: 2,
                straight: false,
                outModes: {
                  default: "out"
                }
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080
                },
                value: 80
              },
              opacity: {
                value: 0.4
              },
              shape: {
                type: "circle"
              },
              size: {
                value: {
                  min: 1,
                  max: 4
                }
              },
              links: {
                color: {
                  value: "#20b2aa"
                },
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1
              }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            zLayers: 100
          }}
        />
      )}
    </>
  );
}

export default Particle