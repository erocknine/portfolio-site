import React from 'react'
import Particles from 'react-particles-js';

export default function Feature(props) {

  const { num } = props

  return(
    <Particles className="particles" params={particleOptions[num]}>{props.children}</Particles>
  )
}

const circles = {
  "particles": {
    "number": {
      "value": 77,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 12
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4489553770423464,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 0,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

const bubbles = {
  "particles": {
    "number": {
        "value": 160,
        "density": {
            "enable": false
        }
    },
    "color": {
      "value":"#ff5e62"
    },
    "size": {
        "value": 10,
        "random": true,
        "anim": {
            "speed": 4,
            "size_min": 0.3
        }
    },
    "line_linked": {
        "enable": false
    },
    "move": {
        "random": true,
        "speed": 1,
        "direction": "top",
        "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        },
        "onclick": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
        "bubble": {
            "distance": 250,
            "duration": 4,
            "size": 20,
            "opacity": 1
        },
        "repulse": {
            "distance": 250,
            "duration": 4
        },
        "push": {
          "particles_nb": 4
        },
        "grab":{
          "distance":400,
          "line_linked":{
            "opacity":1
          }
        }
    }
  }
}

const polygons = {
  "particles": {
    "number": {
      "value":80,
      "density":{
        "enable":true,
        "value_area":800
      }
    },
    "color": {
      "value":"#ff5e62"
    },"shape": {
      "type": "circle",
      "stroke": {
        "width":0,
        "color":"#000000"
      },
      "polygon": {
        "nb_sides":5 
      },
      "image": {
        "src":"img/github.svg",
        "width":100,
        "height":100
      }
    },
    "opacity": {
      "value":0.5,
      "random":false,
      "anim": {
        "enable":false,
        "speed":1,
        "opacity_min": 0.1,
        "sync":false
      }
    },
    "size": {
      "value":3,
      "random": true,
      "anim": {
        "enable":false,
        "speed":40,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked": {
      "enable":true,
      "distance":150,
      "color":"#ff5e62",
      "opacity": 0.4,
      "width":1
    },"move": {
      "enable":true,
      "speed":6,
      "direction":"none",
      "random":false,
      "straight":false,
      "out_mode":"out",
      "bounce":false,
      "attract": {
        "enable":false,
        "rotateX":600,
        "rotateY":1200
      }
    }
  },
  "interactivity": {
    "detect_on":"canvas",
    "events": {
      "onhover": {
        "enable":true,
        "mode":"grab"
      },
      "onclick": {
        "enable":true,
        "mode":"push"
      },
      "resize":true
    },"modes": {
      "grab": {
        "distance":200,
        "line_linked": {"opacity":1}
      },
      "bubble": {
        "distance":400,
        "size":40,
        "duration":2,
        "opacity":8,
        "speed":3
      },
      "repulse": {
        "distance":200,
        "duration":0.4
      },
      "push": {
        "particles_nb":4
      },
      "remove": {"particles_nb":2}
    }
  },
  "retina_detect":true
}


const particleOptions = [circles, bubbles, polygons]