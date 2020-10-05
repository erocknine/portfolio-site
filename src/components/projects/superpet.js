import React from 'react'

const SuperpetDoc = (props) => {
  const { openDoc, handleProject } = props;

  return (
    <div className={openDoc === "superpet" ? `projects-document superpet`: "projects-document"}>
      <div id="superpet" className="project-title">
        <p>Technical</p>
        <h1>Super Pet Bros. Unleashed</h1>
        <p className="text">March 2020</p>
        <p className="text">If you've ever had a friend who claimed their pet is better than yours, then have no fear because Super Pet Bros. is here! In this game, users can create a profile for their pet, set personality type, stats and moves, and battle other users' pets in pokemon-style gameplay</p>
      </div>

      <div className="project-content">

        <div className="project-skills">
          <div className="project-skill">
            <div className="profile-skill-icon">
              <img className="image-icon" src="images/project-images/superpet/javascript.png" alt="PIXI.js logo" />
            </div>
            <p>JavaScript</p>
          </div>

          <div className="project-skill">
            <div className="profile-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48px" height="48px"><path fill="#ed7899" d="M38.25,3C55,4,59,5,57,19S35.902,54.35,14,58c0,0-14.972,3-9.986-27L38.25,3z"/><path fill="#f98cb3" d="M3 31L3 45 8.922 36.721zM8.922 37.061L14 57 22.312 34.312zM23 34L42 42 36 22zM33 4L40 9 46 3 33 3zM37 22L40 9 58 15z"/><path fill="#ed7899" d="M41.638,43.89C42.855,42.531,56.046,27.677,57,21l-1,35l-33,1l18.437-12.932 C41.512,44.016,41.577,43.958,41.638,43.89z"/><path fill="#e0678f" d="M43 43L55.5 55.5 21 58z"/><path fill="#ed7899" d="M4.541,28.096l4.347-7.608c0.176-0.309,0.393-0.593,0.645-0.844l9.985-9.985 c0.304-0.304,0.655-0.557,1.04-0.749l9.38-4.69c1.284-0.642,2.813-0.547,4.008,0.249l4.067,2.711 c1.501,1.001,2.147,2.882,1.576,4.593l-3.149,9.447c-0.222,0.665-0.614,1.259-1.137,1.725L23.059,33.828 c-0.509,0.452-1.125,0.767-1.79,0.915l-10.003,2.223c-1.49,0.331-3.038-0.214-3.991-1.406l-2.384-2.98 C3.865,31.298,3.727,29.521,4.541,28.096z"/><path fill="#8d6c9f" d="M38.192,25.812c-0.156-0.53-0.713-0.835-1.241-0.678c-0.53,0.155-0.833,0.711-0.678,1.241 l0.744,2.539c0.128,0.436,0.526,0.719,0.959,0.719c0.093,0,0.188-0.013,0.282-0.041c0.53-0.155,0.833-0.711,0.678-1.241 L38.192,25.812z"/><path fill="#8d6c9f" d="M58.815,11.967c-0.043-0.366-0.095-0.727-0.165-1.077c-0.01,0-0.01-0.01,0-0.02 c-0.21-1.01-0.52-1.95-0.93-2.81c-0.5-1.04-1.15-1.98-1.96-2.79c-2.13-2.13-5.11-3.21-8.86-3.21c-0.25,0-13.16,0-13.16,0 c-1.13,0-2.25,0.28-3.25,0.8c0,0-0.82,0.38-1,0.47l-9.38,4.69c-0.48,0.24-0.92,0.55-1.3,0.93l-9.98,9.99 c-0.32,0.31-0.59,0.67-0.81,1.05l-4.99,8.82c-0.65,1.09-1,2.33-1,3.6l0.068,13.503c-0.048,0.832-0.05,1.639,0.012,2.417 c0.03,0.41,0.08,0.82,0.13,1.22c0.17,1.07,0.45,2.06,0.83,2.98c0.12,0.28,0.25,0.55,0.39,0.82c0.47,0.9,1.06,1.72,1.78,2.44 c0.264,0.264,0.541,0.511,0.83,0.742c0.169,0.135,0.351,0.252,0.528,0.376c0.126,0.088,0.245,0.184,0.375,0.266 c0.257,0.163,0.528,0.307,0.802,0.448c0.059,0.03,0.114,0.067,0.174,0.096c0.32,0.157,0.653,0.297,0.995,0.425 c0.018,0.007,0.035,0.016,0.054,0.023c1.45,0.535,3.098,0.811,4.931,0.827h0c0.009,0.001,0.016,0.005,0.025,0.005 C13.97,59,13.985,59,14,59c0.007,0,0.012-0.003,0.019-0.003c0.028,0,0.053,0.003,0.081,0.003c0.37,0,0.74-0.01,1.11-0.04 c0.46-0.02,0.92-0.06,1.39-0.11c0,0,0.01,0,0.02,0l38.88-1.94c1.04-0.05,1.86-0.88,1.9-1.92l1.49-38.7 c0.01-0.07,0.08-1.97,0.08-2.14C58.97,13.392,58.908,12.67,58.815,11.967z M43.67,4.06l-0.3,0.33l-3.31,3.543 c-0.371-0.616-0.865-1.165-1.49-1.583l-0.66-0.44l-2.02-1.34h-0.01l-0.76-0.51H43.67z M5.18,29.11c0.05-0.18,0.13-0.35,0.23-0.52 l4.35-7.61c0.13-0.23,0.29-0.44,0.48-0.63l9.98-9.98c0.23-0.23,0.5-0.42,0.78-0.57l9.38-4.69c0.15-0.07,0.3-0.13,0.46-0.18 c0.29-0.09,0.59-0.13,0.88-0.13c0.59,0,1.17,0.17,1.67,0.5l0.36,0.24l1.93,1.29l1.78,1.18c1.12,0.75,1.61,2.17,1.18,3.45 l-3.15,9.44c-0.17,0.5-0.46,0.95-0.85,1.3L22.39,33.08c-0.38,0.34-0.84,0.58-1.34,0.69l-10,2.22c-1.13,0.25-2.27-0.16-2.99-1.05 l-0.58-0.73l-1.33-1.66l-0.01-0.01l-0.47-0.59c-0.44-0.54-0.66-1.2-0.66-1.87C5.01,29.75,5.06,29.43,5.18,29.11z M10.267,56.472 c-0.084-0.025-0.17-0.048-0.252-0.075c-0.176-0.058-0.345-0.124-0.514-0.19c-0.118-0.047-0.237-0.093-0.352-0.144 c-0.145-0.064-0.286-0.132-0.425-0.202c-0.134-0.068-0.264-0.139-0.393-0.213c-0.117-0.067-0.234-0.135-0.347-0.207 c-0.151-0.097-0.296-0.201-0.439-0.306c-0.085-0.062-0.172-0.122-0.255-0.187c-0.223-0.178-0.438-0.366-0.641-0.567 C4.57,52.29,3.73,49.21,4,45.55l3.53-5.3c0.31-0.46,0.19-1.08-0.27-1.38c-0.46-0.31-1.08-0.19-1.39,0.27l-0.92,1.37v0.02L4.03,41.9 v-8.81c0.02,0.04,0.05,0.07,0.08,0.11l1.07,1.33l1.31,1.65c0.01,0.02,0.03,0.04,0.04,0.05c0.416,0.506,0.914,0.908,1.46,1.209 c-0.003,0.09,4.719,19.494,4.719,19.494C11.833,56.856,11.021,56.699,10.267,56.472z M16.25,56.87l-0.16,0.01 c-0.085,0.009-0.162,0.015-0.244,0.023c-0.062,0.005-0.126,0.011-0.187,0.015c-0.079,0.008-0.156,0.012-0.235,0.019l4.04-11.741 c0.18-0.522-0.098-1.091-0.621-1.271c-0.522-0.181-1.092,0.098-1.271,0.621l-3.41,9.911l-4.019-16.41 c0.079,0.004,0.157,0.013,0.237,0.013c0.37,0,0.74-0.04,1.1-0.12l10.01-2.22c0.218-0.05,0.431-0.115,0.64-0.192l19.355,7.186 c0.048,0.018,0.099,0.016,0.148,0.027C33.417,50.776,23.95,56.029,16.25,56.87z M55.4,54.91l-30.12,1.51 c6.12-2.59,12.56-7.03,18.32-12.79c6.02-6.02,10.45-12.65,12.96-18.82L55.4,54.91z M56.87,16.77 c-0.984,7.291-6.025,16.545-14.067,24.797c-0.005-0.024-0.004-0.048-0.011-0.072l-2.549-8.69c-0.156-0.53-0.712-0.837-1.241-0.678 c-0.53,0.155-0.834,0.711-0.678,1.241l1.988,6.778l-16.12-5.985L35.97,23.69c0.182-0.162,0.348-0.34,0.503-0.526l20.401-6.74 c0.004,0.027,0,0.059,0.005,0.085L56.87,16.77z M37.684,20.658l2.856-8.568c0.229-0.686,0.284-1.393,0.213-2.082l5.407,1.912 c0.11,0.04,0.22,0.06,0.33,0.06c0.41,0,0.8-0.26,0.95-0.67c0.18-0.52-0.09-1.09-0.61-1.27l-4.51-1.6l4.07-4.37 c0.17-0.01,0.34-0.01,0.51-0.01c3.2,0,5.7,0.88,7.45,2.62c0.23,0.23,0.44,0.47,0.64,0.73c1.331,1.718,1.989,4.065,1.969,6.881 L37.684,20.658z"/><path fill="#8d6c9f" d="M53.15 12.274l-2.447-.867c-.52-.184-1.092.088-1.277.609-.184.521.088 1.092.609 1.277l2.447.867c.11.039.223.058.334.058.412 0 .797-.256.943-.667C53.943 13.031 53.67 12.459 53.15 12.274zM51.561 54.475c.256 0 .512-.098.707-.293l1.415-1.415c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.415 1.415c-.391.391-.391 1.023 0 1.414C51.049 54.377 51.305 54.475 51.561 54.475zM48.025 50.939c.256 0 .512-.098.707-.293l1.415-1.415c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.415 1.415c-.391.391-.391 1.023 0 1.414C47.513 50.842 47.769 50.939 48.025 50.939zM43.783 47.111c.195.195.451.293.707.293s.512-.098.707-.293l1.414-1.414c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.414 1.414C43.392 46.087 43.392 46.72 43.783 47.111z"/></svg>
            </div>
            <p>Ruby & Rails</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fff" d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"/><path fill="#0277bd" d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"/><path fill="#0277bd" d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"/><path fill="#0277bd" d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"/></svg>
            </div>
            <p>PostgreSQL</p>
          </div>

          <div className="project-skill">
            <div className="project-skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48px" height="48px"><path fill="#7bbeeb" d="M5.015,7.244l5.466,45.246c0.194,1.603,1.337,2.935,2.9,3.379l17.535,4.977 c0.709,0.201,1.46,0.206,2.172,0.013l18.442-4.996c1.614-0.437,2.789-1.817,2.955-3.471l4.549-45.187C59.153,6.024,58.22,5,57.025,5 H7.019C5.809,5,4.87,6.051,5.015,7.244z"/><path fill="#ace3ff" d="M57.025,5H32v56c0.366,0.002,0.732-0.045,1.088-0.141l18.442-4.996 c1.614-0.437,2.789-1.817,2.955-3.471l4.549-45.187C59.153,6.024,58.22,5,57.025,5z"/><path fill="#8d6c9f" d="M32.025,62c-0.465,0-0.931-0.064-1.383-0.192l-17.535-4.977c-1.955-0.555-3.376-2.211-3.62-4.221 L4.021,7.364c-0.103-0.85,0.165-1.705,0.733-2.347C5.328,4.371,6.153,4,7.02,4h50.006c0.854,0,1.672,0.362,2.244,0.995 c0.567,0.628,0.845,1.47,0.76,2.311L55.48,52.493c-0.208,2.052-1.69,3.794-3.69,4.334l-18.44,4.996 C32.916,61.941,32.471,62,32.025,62z M7.02,6C6.721,6,6.448,6.122,6.252,6.344C6.06,6.561,5.973,6.838,6.008,7.124l0,0l5.466,45.246 c0.146,1.207,1.002,2.203,2.18,2.537l17.536,4.977c0.535,0.151,1.1,0.155,1.637,0.01l18.441-4.996 c1.205-0.326,2.099-1.373,2.223-2.605l4.549-45.188c0.028-0.283-0.062-0.556-0.253-0.769C57.59,6.119,57.319,6,57.025,6H7.02z"/><path fill="#8d6c9f" d="M7 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C8 11.553 7.553 12 7 12zM12 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C13 11.553 12.553 12 12 12zM17 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C18 11.553 17.553 12 17 12zM22 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C23 11.553 22.553 12 22 12zM27 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C28 11.553 27.553 12 27 12zM32 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C33 11.553 32.553 12 32 12zM37 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C38 11.553 37.553 12 37 12zM42 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C43 11.553 42.553 12 42 12zM47 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C48 11.553 47.553 12 47 12zM52 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C53 11.553 52.553 12 52 12zM57 12c-.553 0-1-.447-1-1V9c0-.553.447-1 1-1s1 .447 1 1v2C58 11.553 57.553 12 57 12zM39.999 54.806c-.44 0-.844-.293-.964-.738-.145-.533.17-1.082.703-1.227l2-.542c.534-.146 1.083.17 1.227.703.145.533-.17 1.082-.703 1.227l-2 .542C40.174 54.795 40.086 54.806 39.999 54.806zM32.024 57.003l-5.298-1.504c-.531-.15-.84-.704-.688-1.235.15-.531.701-.842 1.235-.688l4.763 1.352 3.702-1.002c.534-.148 1.083.17 1.227.703.145.533-.17 1.083-.703 1.227L32.024 57.003z"/><path fill="#fff8f8" d="M15.5 30l1.238 2.262L19 33.5l-2.262 1.238L15.5 37l-1.238-2.262L12 33.5l2.262-1.238L15.5 30zM47.502 47l.876 1.61L50 49.502l-1.622.876L47.502 52l-.892-1.622L45 49.502l1.61-.892L47.502 47zM52.504 23l.531.962L54 24.498l-.966.529L52.504 26l-.538-.973L51 24.498l.966-.536L52.504 23z"/><path fill="#faefde" d="M47.018,17H17c-0.614,0-1.083,0.548-0.987,1.155L16.776,23h24.598l-0.709,6H25v6h14.956l-0.901,7.625 l-6.961,2.122l-6.147-2.082l-0.444-2.821C25.426,39.358,25.007,39,24.515,39h-4.049c-0.614,0-1.083,0.549-0.988,1.156l1.014,6.439 c0.057,0.362,0.31,0.663,0.658,0.78l10.553,3.574C31.804,50.983,31.908,51,32.013,51c0.095,0,0.19-0.014,0.282-0.042l11.643-3.548 c0.374-0.114,0.646-0.439,0.691-0.827l2.891-24.465l0.475-4.019C48.064,17.514,47.607,17,47.018,17z"/><path fill="#8d6c9f" d="M32.014,52c-0.211,0-0.421-0.034-0.624-0.102l-10.56-3.576c-0.701-0.236-1.209-0.838-1.325-1.57 l-1.015-6.441c-0.091-0.578,0.075-1.165,0.455-1.61c0.381-0.445,0.935-0.7,1.521-0.7h4.05c0.991,0,1.822,0.711,1.976,1.69 l0.35,2.222l5.27,1.784l6.029-1.837L38.831,36H25c-0.553,0-1-0.447-1-1v-6c0-0.553,0.447-1,1-1h14.776l0.473-4H16.775 c-0.492,0-0.911-0.358-0.988-0.845l-0.763-4.846c-0.091-0.577,0.075-1.164,0.455-1.609C15.86,16.255,16.414,16,17,16h30.019 c0.566,0,1.106,0.243,1.483,0.666c0.375,0.423,0.553,0.988,0.486,1.551l-3.365,28.482c-0.093,0.782-0.639,1.437-1.393,1.666 l-11.643,3.55C32.402,51.972,32.209,52,32.014,52z M20.466,40l1.015,6.439l10.543,3.563l11.623-3.55L47,18H17l0.63,4h23.744 c0.286,0,0.558,0.122,0.747,0.336c0.19,0.213,0.279,0.498,0.246,0.781l-0.709,6C41.599,29.621,41.172,30,40.665,30H26v4h13.956 c0.285,0,0.558,0.122,0.747,0.336c0.19,0.213,0.279,0.498,0.246,0.781l-0.9,7.625c-0.047,0.395-0.322,0.724-0.701,0.839 l-6.961,2.122c-0.201,0.062-0.415,0.059-0.612-0.009l-6.147-2.082c-0.353-0.119-0.609-0.424-0.668-0.792L24.515,40H20.466z"/></svg>
            </div>
            <p>CSS</p>
          </div>

        </div>

        <div className={ openDoc === 'superpet' ? "project-portion":"project-portion closed" }>
          <img className="image-solo" src="images/project-images/superpet/superpet02.png" alt="Super pet battle"/>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <h3>The Application</h3>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">Super Pet Bros. Unleashed is a JavaScript web game with a battle system reminiscent of Pokemon, except the Pokemon are pets that users can create. This was a collaborative team project with our front-end built using vanilla JavaScript and back-end using Rails & PostgreSQL.</p>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion":"project-portion closed" }>
          <img className="image" src="images/project-images/superpet/superpet_sketch.png" alt="Wireframe sketch of Super pet page layouts"/>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion":"project-portion closed" }>
          <p className="p-solo">Just like Pokemon, our pets had stats for Attack, Defense, and Speed, along with personality types that affected these stats. Personality wasn't a necessary feature, in fact it wasn't even an element in our back-end Pet model, but I knew users would enjoy a familiar connection with their pet avatar especially if they were creating it after their actual pet. For the moves, we made sure to brainstorm the cutest move names to avoid any implications of dog fighting.</p>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <h3>C is for CREATE</h3>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <p>The Create page included form inputs for name, avatar image, personality, stat point allotment and move selection. The stat adjustments included specific logic to control the number of points a user can allot with restricted min & max numbers of each stat for game balancing. </p>
          <img className="image" src="images/project-images/superpet/superpet04.png" alt="Final create page"/>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <p>Initially, I underestimated the logic required for selecting and limiting a specific number of objects from a checkbox list. Ideally, a user has to select 4 moves from the checkbox list, no more and no less. As soon as 4 are selected, the other checkboxes have to be disabled, and if one is unchecked, they all must be re-enabled. What seemed to require simple JavaScript logic turned into a nightmare of an algorithm, and I had to rewrite the code three times before finally coming upon a solution that worked.</p>
          <img className="image" src="images/project-images/superpet/superpet_code.png" alt="Javascript code for checkbox selection" />
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <img className="image" src="images/project-images/superpet/superpet03.png" alt="Players can battle celebrity pets like Undead Grumpy Cat"/>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <p className="p-solo">We seeded the database with a number of internet pet celebrities for the players to fight. After finishing the Create page however, we realized the game wasn't just a pet battling game. In its state, the game allowed users to create avatars for not only pets, but for anything. You could create a Taco, upload an image of a Taco, choose attack moves and fight a dish of Jambalaya. Our game went off a tangent, and the result was brilliant!</p>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <h3>Battle Experience</h3>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion" : "project-portion closed" }>
          <img className="image" src="images/project-images/superpet/superpet_battle.gif" alt="GIF demonstrating gameplay"/>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion-stack":"project-portion closed" }>
          <p className="p-solo">Here, Hosico battles an arch nemesis, the beef soft-shell taco. To make things more interesting, I added randomized backgrounds and side effects to our attack scripts.</p>
          <p className="p-solo">Whenever an attack occurred, a sound effect would play and an img div containing an effect GIF would appear in a randomized location centered on the enemy's avatar image. I included all kinds of effect GIFs, from simple "Kapow!" text to my favorite attack animations from other games.</p>
          <p className="p-solo">The sound in my opinion, was one of the greatest features of the battle system. Implementing sound effects required writing a simple class utilizing JavaScript's Audio constructor. Besides playing attack sounds, I included background music from Street Fighter & Final Fantasy. This audio player function not only played a song automatically upon entering a battle, but allowed full functionality for the player to pause, play, and skip songs.</p>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion":"project-portion closed" }>
          <img className="image-solo" src="images/project-images/superpet/superpet05.png" alt="Victory in battle!"/>
        </div>

        <div className={ openDoc === 'superpet' ? "project-portion":"project-portion closed" } onClick={() => handleProject("superpet")}>
          <a href="#projects"><img className="return" src="images/project-images/return.png" alt="Return Arrow"/></a>
        </div>

      </div>
    </div>
  );
};

export default SuperpetDoc;