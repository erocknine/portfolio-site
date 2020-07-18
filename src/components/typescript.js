import { useEffect } from 'react'

//const instance = useRef(null)
//<div ref={instance}>{useScript(instance)}</div>

const useScript = (ref) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.setAttribute('type', 'text/javascript');
    script.innerHTML = `
    let loopNum = 0;
    let txt = '';
    let isDeleting = false;

    const type = (toType, element, pause) => {
      const i = loopNum % toType.length;
      const fullTxt = toType[i];
    
      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }
    
      element.innerText = txt;

      let delta = 200 - Math.random() * 100;
    
      if (isDeleting) { delta /= 2; }
    
      if (!isDeleting && txt === fullTxt) {
        delta = pause;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        type(["Imagine", "Design", "Create"], element, 1000);
      }, delta);
    };
    
    const element = document.querySelector('.image-desc-text');
    type(["Imagine", "Design", "Create"], element, 1000)
    `

    script.async = true;

    ref.current.appendChild(script);

  }, [ref])
}

export default useScript;