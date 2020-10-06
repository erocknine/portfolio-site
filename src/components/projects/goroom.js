import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const GoroomDoc = (props) => {
  const { openDoc, handleProject } = props;

  return (
    <div className={openDoc === 'goroom' ? `projects-document goroom`: "projects-document"}>
      <div id="goroom" className="project-title">
        <p>Design</p>
        <h1>GO ROOM</h1>
        <p className="text">June 2020</p>
        <p className="text">A redesign & rebrand of GO ROOM home page, an impressive video-chat web app that offers a robust poker game, supporting up to 16 users</p>
      </div>

      <div className="project-content">
        <div className="project-skills">
          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"/><path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"/><path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"/><path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"/><path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"/><path fill="#bdbdbd" d="M24 24H30V28H24z"/><path fill="#eee" d="M18 24H24V28H18z"/></svg>
            </div>
            <p>Angular JS</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><rect width="36" height="36" x="6" y="6" fill="#1976d2"/><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"/><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"/></svg>
            </div>
            <p>TypeScript</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#f06292" d="M24.042,4.032C35.065,4.032,44,12.967,44,23.99	c0,11.022-8.935,19.958-19.958,19.958c-11.022,0-19.958-8.935-19.958-19.958C4.085,12.967,13.02,4.032,24.042,4.032L24.042,4.032z" /><path fill="#fff" d="M36.561,12.574c-0.904-3.545-6.781-4.71-12.343-2.734c-3.31,1.176-6.894,3.022-9.471,5.432 c-3.064,2.866-3.552,5.36-3.351,6.402c0.71,3.677,5.749,6.081,7.82,7.865v0.011c-0.611,0.301-5.081,2.563-6.127,4.876 c-1.104,2.44,0.176,4.191,1.023,4.427c2.625,0.73,5.318-0.583,6.766-2.742c1.397-2.084,1.281-4.774,0.674-6.113 c0.837-0.221,1.814-0.32,3.054-0.175c3.501,0.409,4.188,2.595,4.056,3.51c-0.131,0.915-0.866,1.418-1.111,1.57 c-0.246,0.152-0.32,0.205-0.3,0.317c0.03,0.164,0.143,0.158,0.353,0.123c0.288-0.049,1.838-0.744,1.905-2.433 c0.084-2.144-1.97-4.542-5.608-4.48c-1.498,0.026-2.44,0.168-3.121,0.422c-0.05-0.057-0.102-0.114-0.154-0.171 c-2.249-2.4-6.407-4.097-6.231-7.323c0.064-1.173,0.472-4.261,7.989-8.007c6.158-3.069,11.088-2.224,11.94-0.353 c1.217,2.674-2.635,7.643-9.03,8.36c-2.437,0.273-3.72-0.671-4.039-1.023c-0.336-0.37-0.386-0.387-0.511-0.317 c-0.204,0.113-0.075,0.44,0,0.635c0.191,0.497,0.975,1.378,2.31,1.817c1.175,0.386,4.036,0.597,7.496-0.741 C34.424,20.229,37.45,16.059,36.561,12.574z M20.076,30.638c0.29,1.074,0.258,2.076-0.041,2.983c-0.033,0.101-0.07,0.2-0.11,0.299 c-0.04,0.098-0.083,0.196-0.129,0.292c-0.231,0.48-0.542,0.929-0.922,1.344c-1.16,1.265-2.78,1.743-3.474,1.34 c-0.75-0.435-0.374-2.218,0.97-3.64c1.446-1.529,3.527-2.512,3.527-2.512l-0.003-0.006C19.954,30.705,20.015,30.672,20.076,30.638z"/></svg>
            </div>
            <p>SASS</p>
          </div>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <img className="image-solo" src="images/project-images/goroom/goroom_new.png" alt="Redesigned Go Room Home Page"/>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <h3>The Reimagining</h3>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">Go Room's developer explained his application was lacking in styling and any kind of meaningful design. So, I decided to try and implement a few ideas I've never tried before. The end result was a complete rebranding of the video chat application, blending minimalistic modern themes with interactive elements. Everything was made possible with Angular's conditional rendering logic collaborating intimately with custom SASS styling & animations.</p>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <p>Original Go Room landing page which included a join chat room button, a start chat room button, and a fixed navbar on the bottom.</p>
          <div className="image-block">
            <img className="image" src="images/project-images/goroom/goroom_original.png" alt="Original Go Room home page"/>
            <span>Original Go Room</span>
          </div>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <h3>Neumorphism</h3>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">For this project, I wanted to test different design concepts. The original Go Room design was minimalistic, and since the buttons were at the forefront, I believed a Neumorphic design suited the application.</p>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <div className="image-block">
            <img className="image-solo" src="images/project-images/goroom/neumorphic.png" alt="Neumorphic Design example"/>
            <span>Neumorphic Design</span>
          </div>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">Neumorphism emphasizes realism and minimalistic style, and is most effective when buttons are involved. Clean, smooth color gradients with light & dark box-shadow creates that special visual effect of neumorphism.</p>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/goroom/goroom_test.png" alt="Test neumorphic button design layout"/>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">I toyed with the concept hoping to encourage the prominence of the buttons. Unfortunately, the neumorphic effect on only two buttons wasn't enough to create any meaningful impact.</p>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/goroom/goroom_sketch.png" alt="Wireframe sketch of final design layout"/>
          <img className="image" src="images/project-images/goroom/goroom-home.gif" alt="GIF demonstrating animations to join and start a chat room in final design"/>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">Ultimately, I decided on a classy & modern touch with simple interactions emphasized by meaningful animations. Using some clever class switches, hovers, and transforms, Go Room's landing page becomes an interactive delight.</p>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" }>
          <img className="image-solo" src="images/project-images/goroom/goroom_new2.png" alt="Final design layout"/>
        </div>

        <div className={ openDoc === 'goroom' ? "project-portion":"project-portion closed" } onClick={() => handleProject("goroom")}>
          <Link smooth to={"/#projects"}>
            <img className="return"src="images/project-images/return.png" alt="Return Arrow"/>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GoroomDoc;