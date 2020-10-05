import React from 'react'

const HiesDoc = (props) => {
  const { openDoc, handleProject } = props;

  return (
    <div className={openDoc === 'hies' ? `projects-document hies`: "projects-document"}>
      <div id="hies" className="project-title">
        <p>Design</p>
        <h1>HIES Inc.</h1>
        <p className="text">July 2020 - August 2020</p>
        <p className="text">Full UX / UI design & Front-end build of company website for HIES Inc., an environmental services company</p>
        <a href="https://hies.netlify.app/" target="_blank" rel="noopener noreferrer">View Redesigned HIES</a>
        <a href="http://www.hiesinc.com/" target="_blank" rel="noopener noreferrer">View Original HIES</a>
      </div>

      <div className="project-content">
        <div className="project-skills">
          
          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="72px" height="72px"><circle cx="78" cy="14" r="1" fill="#f1bc19"/><circle cx="50" cy="50" r="38" fill="#f9dbd2"/><circle cx="84" cy="16" r="4" fill="#f1bc19"/><circle cx="14" cy="26" r="2" fill="#ee3e54"/><circle cx="78" cy="77" r="2" fill="#fbcd59"/><circle cx="17" cy="78" r="4" fill="#fbcd59"/><circle cx="24" cy="83" r="2" fill="#ee3e54"/><circle cx="66.5" cy="78.5" r="2.5" fill="#fff"/><circle cx="16" cy="48" r="1" fill="#fff"/><circle cx="86" cy="31" r="1" fill="#f1bc19"/><circle cx="80" cy="66" r="2" fill="#fff"/><path fill="#77cbd2" d="M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z"/><path fill="#472b29" d="M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z"/><path fill="#77cbd2" d="M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z"/><path fill="#472b29" d="M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z"/><path fill="#77cbd2" d="M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z"/><path fill="#472b29" d="M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z"/><g><circle cx="50" cy="50" r="5.5" fill="#77cbd2"/><path fill="#472b29" d="M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z"/></g><g><path fill="#472b29" d="M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z"/></g><g><path fill="#472b29" d="M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z"/></g><g><path fill="#472b29" d="M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z"/></g><g><path fill="#472b29" d="M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z"/></g><g><path fill="#472b29" d="M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z"/></g><g><path fill="#472b29" d="M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z"/></g><g><path fill="#472b29" d="M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z"/></g><g><path fill="#472b29" d="M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z"/></g><g><path fill="#472b29" d="M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z"/></g></svg>
            </div>
            <p>React JS</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="56px" height="56px"><path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"/><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"/><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"/></svg>            </div>
            <p>Redux</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <img className="image-icon" src="images/project-images/hies/pixi.png" alt="PIXI.js logo" />
            </div>
            <p>PIXI.js</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#f06292" d="M24.042,4.032C35.065,4.032,44,12.967,44,23.99	c0,11.022-8.935,19.958-19.958,19.958c-11.022,0-19.958-8.935-19.958-19.958C4.085,12.967,13.02,4.032,24.042,4.032L24.042,4.032z" /><path fill="#fff" d="M36.561,12.574c-0.904-3.545-6.781-4.71-12.343-2.734c-3.31,1.176-6.894,3.022-9.471,5.432 c-3.064,2.866-3.552,5.36-3.351,6.402c0.71,3.677,5.749,6.081,7.82,7.865v0.011c-0.611,0.301-5.081,2.563-6.127,4.876 c-1.104,2.44,0.176,4.191,1.023,4.427c2.625,0.73,5.318-0.583,6.766-2.742c1.397-2.084,1.281-4.774,0.674-6.113 c0.837-0.221,1.814-0.32,3.054-0.175c3.501,0.409,4.188,2.595,4.056,3.51c-0.131,0.915-0.866,1.418-1.111,1.57 c-0.246,0.152-0.32,0.205-0.3,0.317c0.03,0.164,0.143,0.158,0.353,0.123c0.288-0.049,1.838-0.744,1.905-2.433 c0.084-2.144-1.97-4.542-5.608-4.48c-1.498,0.026-2.44,0.168-3.121,0.422c-0.05-0.057-0.102-0.114-0.154-0.171 c-2.249-2.4-6.407-4.097-6.231-7.323c0.064-1.173,0.472-4.261,7.989-8.007c6.158-3.069,11.088-2.224,11.94-0.353 c1.217,2.674-2.635,7.643-9.03,8.36c-2.437,0.273-3.72-0.671-4.039-1.023c-0.336-0.37-0.386-0.387-0.511-0.317 c-0.204,0.113-0.075,0.44,0,0.635c0.191,0.497,0.975,1.378,2.31,1.817c1.175,0.386,4.036,0.597,7.496-0.741 C34.424,20.229,37.45,16.059,36.561,12.574z M20.076,30.638c0.29,1.074,0.258,2.076-0.041,2.983c-0.033,0.101-0.07,0.2-0.11,0.299 c-0.04,0.098-0.083,0.196-0.129,0.292c-0.231,0.48-0.542,0.929-0.922,1.344c-1.16,1.265-2.78,1.743-3.474,1.34 c-0.75-0.435-0.374-2.218,0.97-3.64c1.446-1.529,3.527-2.512,3.527-2.512l-0.003-0.006C19.954,30.705,20.015,30.672,20.076,30.638z"/></svg>
            </div>
            <p>SASS</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64px" height="64px"><path fill="#39c1d7" d="M70,81.921H31c-6.6,0-12-5.4-12-12v-39c0-6.6,5.4-12,12-12h39c6.6,0,12,5.4,12,12v39C82,76.521,76.6,81.921,70,81.921z"/><path fill="#1f212b" d="M69.5,81.921h-39c-6.904,0-12.5-5.596-12.5-12.5v-39c0-6.904,5.596-12.5,12.5-12.5h39c6.904,0,12.5,5.596,12.5,12.5v39C82,76.325,76.404,81.921,69.5,81.921z M19,30.421v39c0,6.351,5.149,11.5,11.5,11.5h39c6.351,0,11.5-5.149,11.5-11.5v-39c0-6.351-5.149-11.5-11.5-11.5h-39C24.149,18.921,19,24.07,19,30.421z"/><path fill="#39c1d7" d="M77,47.921v18.663c0,5.685-4.652,10.337-10.337,10.337H33.337C27.652,76.921,23,72.27,23,66.584V33.258c0-5.685,4.652-10.337,10.337-10.337H67"/><path fill="#1f212b" d="M67.162 77.921H33.837C27.852 77.921 23 73.069 23 67.084V33.758c0-5.985 4.852-10.837 10.837-10.837H67.5c.276 0 .5.224.5.5s-.224.5-.5.5H33.837c-5.433 0-9.837 4.404-9.837 9.837v33.325c0 5.433 4.405 9.838 9.838 9.838h33.325c5.433 0 9.837-4.404 9.837-9.837V48.421c0-.276.224-.5.5-.5s.5.224.5.5v18.662C78 73.069 73.148 77.921 67.162 77.921zM77.5 45.5c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5S78 40.724 78 41v4C78 45.277 77.776 45.5 77.5 45.5zM77.5 39.5c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5S78 36.724 78 37v2C78 39.277 77.776 39.5 77.5 39.5z"/><path fill="#fdfcee" d="M50.878,44.852c0,1.152-0.252,2.19-0.756,3.114s-1.206,1.71-2.106,2.357c-0.9,0.648-1.962,1.146-3.186,1.494c-1.224,0.349-2.544,0.522-3.96,0.522h-1.656v9.468h-3.312V37.832h5.796c1.296,0,2.502,0.144,3.618,0.432c1.116,0.288,2.088,0.727,2.916,1.313c0.828,0.589,1.476,1.32,1.944,2.196C50.644,42.65,50.878,43.676,50.878,44.852z M47.566,44.815c0-0.792-0.156-1.458-0.468-1.998c-0.312-0.54-0.738-0.983-1.278-1.332c-0.54-0.348-1.176-0.6-1.908-0.756c-0.732-0.155-1.506-0.233-2.322-0.233h-2.376v9.18h1.764c0.959,0,1.842-0.108,2.646-0.324c0.804-0.216,1.5-0.534,2.088-0.954c0.588-0.42,1.044-0.93,1.368-1.53C47.404,46.268,47.566,45.584,47.566,44.815z"/><path fill="#1f212b" d="M39.214,62.308h-3.312c-0.276,0-0.5-0.224-0.5-0.5V37.832c0-0.276,0.224-0.5,0.5-0.5h5.796c1.333,0,2.593,0.15,3.743,0.447c1.168,0.302,2.205,0.77,3.08,1.39c0.889,0.633,1.594,1.43,2.096,2.369c0.505,0.945,0.761,2.061,0.761,3.313c0,1.231-0.275,2.36-0.817,3.354c-0.538,0.986-1.296,1.836-2.253,2.524c-0.943,0.679-2.067,1.207-3.341,1.569c-1.262,0.358-2.64,0.541-4.097,0.541h-1.156v8.968C39.714,62.084,39.49,62.308,39.214,62.308z M36.402,61.308h2.312V52.34c0-0.276,0.224-0.5,0.5-0.5h1.656c1.364,0,2.65-0.169,3.823-0.503c1.163-0.331,2.182-0.808,3.03-1.419c0.835-0.601,1.494-1.338,1.959-2.191c0.461-0.846,0.695-1.812,0.695-2.875c0-1.087-0.216-2.043-0.643-2.843c-0.428-0.802-1.032-1.482-1.792-2.024c-0.775-0.549-1.702-0.966-2.751-1.236c-1.068-0.276-2.244-0.416-3.493-0.416h-5.296V61.308z M40.978,50.176h-1.764c-0.276,0-0.5-0.224-0.5-0.5v-9.18c0-0.276,0.224-0.5,0.5-0.5h2.376c0.845,0,1.662,0.082,2.426,0.244c0.789,0.169,1.486,0.446,2.075,0.824c0.605,0.392,1.09,0.896,1.44,1.503c0.355,0.615,0.535,1.371,0.535,2.248c0,0.849-0.184,1.618-0.546,2.289c-0.359,0.665-0.87,1.237-1.518,1.7c-0.635,0.453-1.392,0.8-2.249,1.029C42.91,50.061,41.976,50.176,40.978,50.176z M39.714,49.176h1.264c0.91,0,1.757-0.104,2.517-0.308c0.741-0.198,1.389-0.494,1.927-0.878c0.523-0.373,0.933-0.831,1.219-1.36c0.283-0.523,0.426-1.134,0.426-1.814c0-0.699-0.135-1.287-0.401-1.748c-0.274-0.474-0.639-0.854-1.116-1.162c-0.486-0.312-1.072-0.544-1.741-0.687c-0.696-0.147-1.442-0.223-2.218-0.223h-1.876V49.176z"/><path fill="#fdfcee" d="M64.098,56.876c0,0.815-0.174,1.548-0.522,2.195c-0.348,0.648-0.828,1.201-1.44,1.656c-0.612,0.456-1.338,0.811-2.178,1.062c-0.84,0.252-1.752,0.378-2.736,0.378c-0.432,0-0.888-0.024-1.368-0.072c-0.48-0.049-0.96-0.12-1.44-0.216c-0.48-0.096-0.942-0.21-1.386-0.342c-0.444-0.132-0.822-0.271-1.134-0.414l0.54-2.557c0.624,0.265,1.337,0.504,2.142,0.721c0.804,0.216,1.698,0.323,2.682,0.323c1.031,0,1.901-0.186,2.61-0.558c0.708-0.372,1.062-0.966,1.062-1.782c0-0.384-0.096-0.726-0.288-1.025c-0.192-0.3-0.444-0.564-0.756-0.792c-0.312-0.229-0.679-0.438-1.098-0.631c-0.42-0.191-0.858-0.383-1.314-0.575c-0.625-0.24-1.248-0.51-1.872-0.811c-0.625-0.3-1.194-0.66-1.71-1.08c-0.517-0.419-0.936-0.905-1.26-1.458c-0.324-0.552-0.486-1.211-0.486-1.979c0-0.84,0.174-1.561,0.522-2.16c0.348-0.6,0.804-1.092,1.368-1.477c0.563-0.383,1.218-0.666,1.962-0.846c0.744-0.18,1.512-0.27,2.304-0.27c0.912,0,1.8,0.102,2.664,0.306c0.864,0.204,1.644,0.486,2.34,0.846l-0.54,2.448c-0.696-0.336-1.422-0.594-2.178-0.774c-0.756-0.18-1.518-0.27-2.286-0.27c-0.84,0-1.548,0.144-2.124,0.432c-0.576,0.288-0.864,0.816-0.864,1.584c0,0.36,0.102,0.666,0.306,0.918c0.204,0.252,0.468,0.48,0.792,0.685c0.324,0.204,0.678,0.391,1.062,0.558c0.384,0.168,0.744,0.337,1.08,0.504c0.312,0.145,0.779,0.349,1.404,0.612c0.624,0.265,1.242,0.606,1.854,1.026s1.146,0.941,1.602,1.565C63.87,55.232,64.098,55.988,64.098,56.876z"/><path fill="#1f212b" d="M57.222,62.668c-0.443,0-0.92-0.025-1.418-0.075c-0.5-0.051-1.001-0.125-1.488-0.223c-0.489-0.098-0.971-0.216-1.431-0.353c-0.461-0.137-0.865-0.285-1.201-0.439c-0.212-0.098-0.328-0.329-0.28-0.558l0.54-2.557c0.031-0.146,0.125-0.271,0.258-0.34c0.132-0.07,0.289-0.077,0.427-0.017c0.595,0.252,1.293,0.487,2.077,0.698c0.756,0.203,1.615,0.306,2.552,0.306c0.945,0,1.745-0.168,2.377-0.5c0.542-0.285,0.794-0.711,0.794-1.34c0-0.289-0.068-0.536-0.209-0.756c-0.159-0.247-0.371-0.469-0.63-0.658c-0.283-0.206-0.623-0.401-1.012-0.58c-0.415-0.188-0.849-0.378-1.3-0.568c-0.624-0.24-1.266-0.519-1.895-0.821c-0.655-0.314-1.264-0.699-1.809-1.143c-0.559-0.453-1.021-0.989-1.375-1.593c-0.368-0.627-0.555-1.378-0.555-2.232c0-0.926,0.198-1.737,0.589-2.411c0.384-0.662,0.895-1.213,1.519-1.639c0.614-0.417,1.33-0.727,2.126-0.919c1.668-0.402,3.521-0.361,5.2,0.036c0.898,0.212,1.724,0.511,2.455,0.888c0.201,0.104,0.308,0.331,0.259,0.552l-0.54,2.448c-0.033,0.149-0.132,0.275-0.27,0.343c-0.137,0.067-0.297,0.067-0.436,0c-0.66-0.318-1.359-0.566-2.077-0.738c-1.46-0.348-3.087-0.37-4.07,0.123c-0.252,0.126-0.588,0.381-0.588,1.137c0,0.244,0.063,0.441,0.195,0.604c0.168,0.209,0.394,0.402,0.67,0.576c0.304,0.191,0.639,0.367,0.995,0.521c0.393,0.172,0.76,0.345,1.103,0.515c0.296,0.138,0.759,0.339,1.376,0.6c0.654,0.277,1.308,0.64,1.942,1.075c0.657,0.45,1.236,1.017,1.723,1.683c0.518,0.711,0.78,1.573,0.78,2.563c0,0.896-0.196,1.713-0.582,2.432c-0.382,0.712-0.914,1.324-1.582,1.821c-0.657,0.489-1.442,0.873-2.333,1.14C59.219,62.535,58.25,62.668,57.222,62.668z M52.469,60.824c0.21,0.081,0.445,0.159,0.701,0.235c0.43,0.128,0.877,0.238,1.342,0.331c0.456,0.091,0.925,0.161,1.393,0.209c1.514,0.148,2.771,0.053,3.91-0.287c0.779-0.234,1.46-0.565,2.023-0.985c0.549-0.408,0.986-0.91,1.298-1.491c0.307-0.571,0.462-1.23,0.462-1.959c0-0.785-0.192-1.431-0.588-1.974c-0.419-0.574-0.917-1.062-1.48-1.448c-0.58-0.397-1.174-0.728-1.767-0.979c-0.631-0.266-1.104-0.473-1.419-0.619c-0.341-0.169-0.694-0.334-1.07-0.499c-0.401-0.174-0.781-0.374-1.128-0.593c-0.369-0.232-0.677-0.499-0.914-0.793c-0.277-0.342-0.417-0.757-0.417-1.232c0-1.207,0.62-1.771,1.141-2.031c1.205-0.604,3.059-0.603,4.749-0.201c0.583,0.14,1.155,0.325,1.707,0.554l0.323-1.464c-0.571-0.263-1.203-0.476-1.882-0.637c-1.527-0.36-3.218-0.404-4.735-0.036c-0.68,0.164-1.285,0.424-1.799,0.773c-0.499,0.34-0.908,0.781-1.216,1.313c-0.302,0.52-0.455,1.162-0.455,1.909c0,0.674,0.14,1.255,0.417,1.727c0.293,0.5,0.678,0.944,1.144,1.322c0.485,0.396,1.027,0.737,1.611,1.018c0.605,0.292,1.222,0.56,1.835,0.795c0.475,0.2,0.917,0.394,1.341,0.587c0.451,0.207,0.85,0.437,1.186,0.683c0.359,0.262,0.656,0.573,0.882,0.925c0.244,0.382,0.367,0.817,0.367,1.296c0,0.998-0.459,1.768-1.329,2.225c-0.777,0.408-1.734,0.615-2.843,0.615c-1.025,0-1.971-0.114-2.812-0.341c-0.595-0.16-1.146-0.334-1.646-0.52L52.469,60.824z"/><path fill="#1f212b" d="M70,81.921H31c-7.18,0-13-5.82-13-13v-39c0-7.18,5.82-13,13-13h39c7.18,0,13,5.82,13,13v39C83,76.101,77.18,81.921,70,81.921z M20,29.921v39c0,6.075,4.925,11,11,11h39c6.075,0,11-4.925,11-11v-39c0-6.075-4.925-11-11-11H31C24.925,18.921,20,23.846,20,29.921z"/></svg>
            </div>
            <p>Photoshop</p>
          </div>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <h3>The Redesign</h3>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <div className="image-block">
            <img className="image-solo" src="images/project-images/hies/new_hies.jpg" alt="Redesigned HIES home page"/>
            <span>New HIES</span>
          </div>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">Maintaining the HIES Inc. brand of environmental conservation and sustainability, the redesigned page includes natural green, blue & brown colors with updated high-resolution images following nature themes, and original content text trimmed for brevity. This site was created with React & Redux, React Router for URL routing, and several libraries for animations and image control.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <div className="image-block">
            <img className="image-solo" src="images/project-images/hies/original_hies.png" alt="Original HIES home page"/>
            <span>Original HIES</span>
          </div>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">The original HIES Inc. website was a static company page due for a makeover. The original page was created with older web development habits such as keyword stuffing and duplicate content, with unintuitive UX/UI design choices. The images on the page were also outdated for higher resolution monitors, and the content was plagued with an overabundance of text and disorganized pages. Generally, all things that hurt SEO.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/hies/original_hies3.png" alt="Example of original HIES page overfilled with text"/>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">With SEO optimization a priority, I made sure to include key words relating to their business, their services, environmental work in meta tags, and included clear descriptions in image alt tags and in the content itself.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/hies/hies_photoshop.jpg" alt="Creating new hero with photoshop"/>
          <img className="image" src="images/project-images/hies/hies.gif" alt="GIF demonstrating water effect from PIXI.js displacement filter"/>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">I redesigned their company logo for sharper colors, and remade their hero image for higher resolution using Adobe Photoshop. To reinforce the hero image's theme of clean water, I implemented a visually realistic water-motion effect by incorporating PIXI.js to run a displacement filter script. And yes, the site went through several stylistic choices before arriving at the current one. The CEO eventually wanted to keep their original logo.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/hies/new_hies3.png" alt="New HIES page with clean footer, with images & colors following blue & green color palette"/>
          <img className="image" src="images/project-images/hies/new_hies2.png" alt="New HIES page with categorized tiles for cleaner text."/>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">For overall design, I chose modern and minimalistic images since the main concern was to modernize their page in the first place. Just as important if not most, their home page became more business oriented by plotting out their business process, adding a "Request a Quote" section, utilized cute & playful icons, all with user-friendliness in mind.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/hies/new_hies.gif" alt="Typing animation for aesthetic appeal."/>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">HIES provides over 20 services, each one requiring some kind of documentation. To make their website more manageable, I reorganized all their services into four main categories: GIS, Consulting, Assessment, and Remediation. This redesign project ultimately became a complete overhaul of their business logistics.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">I created a services section which included cursory details and relevant images per service, organized by categories, and included a keyword search feature to help users easily search for a service. Implementing the search feature required rendering the services from an array of service objects. When a user searches, the array is filtered for an object matching the keyword, and the respective component in the object is rendered.</p>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" }>
          <img className="image-solo" src="images/project-images/hies/new_hies4.jpg" alt="Services section demonstrating search functionality."/>
        </div>

        <div className={ openDoc === 'hies' ? "project-portion":"project-portion closed" } onClick={() => handleProject("hies")}>
          <a href="#projects"><img className="return" src="images/project-images/return.png" alt="Return Arrow"/></a>
        </div>

      </div>
    </div>
  );
};

export default HiesDoc;