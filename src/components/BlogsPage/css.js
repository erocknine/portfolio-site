import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function RegexBlog() {
  return (
    <div className="blog-page css">
      <h1 className="blog-header one">Don't sleep on CSS</h1>
      <p className="blog-text">April 9, 2020 | 9 min</p>

      <div className="blog-links">
        <AnchorLink offset={() => 104} href="#navbar">{`/*NavBar*/`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#linear">{`/*Linear-Gradient Header*/`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#resources">{`/*Resources*/`}</AnchorLink>
      </div>

      <p className="blog-text">A dissertation on CSS philosophy and application that would make God cry.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/css_art.png" alt="Popsicle made with CSS" />
      </div>

      <p className="blog-text">There’s a lot of resources out there for anyone trying to get in the fast pass lane for webpage design. There’s Bootstrap which is a CSS framework that utilizes Javascript, Material Design by Google, Material Kit which is a UI kit for Bootstrap, Materialize which is a framework based off of Material Design and-</p>

      <p className="blog-text">Actually, never mind the list; it gets redundant. Point is, a lot of people starting out on webpage design skip CSS because they believe all they can make are web pages that look like Windows 95 OS. But fear no more!</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/old_amazon.png" alt="Old Amazon web page" />
      </div>

      <p className="blog-text">I mean, gross, amirite? Get this 90's whackness outta here.</p>

      <p className="blog-text">CSS means cascading style sheets, in other words, the way you organize your HTML is crucial to making CSS work effectively. Everything you apply to the top level will cascade down to the inner elements.</p>

      <p className="blog-text">If you’re painting something, first you need to set the tone for the canvas. That’s simply applying CSS to the <span className="blog-text code span">{`<body>`}</span> with fonts, margins, or background. Then you draw the shape of the tree, which is <span className="blog-text code span">{`<div id=“tree”>`}</span>. Imagine inside that <span className="blog-text code span">{`<div id=“tree”>`}</span> are two child elements, the greenery of the tree top that is <span className="blog-text code span">{`<ul id=“tree-crown”>`}</span>, and the tree trunk that is <span className="blog-text code span">{`<main id=“tree-trunk”>`}</span>. The sizes and shapes of both child elements are initially determined by <span className="blog-text code span">{`<div id=“tree”>`}</span>. If you color the entire top section of the tree to green with #tree-crown <span className="blog-text code span">{`{color: green}`}</span>, the branches, or child elements <span className="blog-text code span">{`<li class=“branch”>`}</span>, will also be green. That is, unless you color each branch specifically with .branch <span className="blog-text code span">{`{color: brown}`}</span>.</p>

      <p className="blog-text">CSS follows the same structure as painting, and can accomplish great things if you coordinate well with HTML. You will need to use ‘id’ and ‘class’ effectively, you are going to need containers for everything, and you will need to be familiar with CSS selectors.</p>

      <p className="blog-text">Let’s get to it.</p>

      <h2 id="navbar" className="blog-header two">{`/*NavBar*/`}</h2>

      <p className="blog-text">For this blog post, I made a shell webpage based on a concept of a website called “The Hub”. Take a look.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/hub_navbar.gif" alt="Demonstrating interactive navbar" />
      </div>

      <p className="blog-text">This navbar is pure CSS and HTML. No Javascript required, not even browser rendering engine CSS properties. All this navbar requires is clean organization of HTML elements, and an understanding of how to establish CSS properties.</p>

      <p className="blog-text">First, we need to set some ground rules. <span className="blog-text code span">:root</span> is a pseudo selector that targets the most dominating element in the HTML, the very root of the document itself, as though we painted the entire canvas a base color. Whatever we put in here will apply to everything unless we specify differently later. In this case, I am setting the font-size and font-family.</p>

      <p className="blog-text">This font is also a google font, so be sure to add the embed link of the font you like in the head of the HTML, where you link the CSS.</p>

      <p className="blog-text"><strong>REM</strong></p>

      <p className="blog-text">Since our navbar is going to be on the left side with a minimal width of <span className="blog-text code span">5rem</span>, we will set the margin-left and padding of our main to <span className="blog-text code span">5rem</span> and <span className="blog-text code span">1rem</span>, respectively. A rem is a unit based on the font-size set in our root, which is currently <span className="blog-text code span">16px</span>. So <span className="blog-text code span">5rem</span> is essentially <span className="blog-text code span">80px</span>. Setting the font-size in root and using rem everywhere else in our CSS allows us to scale all of our CSS according to our base font-size. If we ever needed to resize or rescale our entire page, all we have to do is change the font-size in our root instead of each value in our CSS individually.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/nav_css.png" alt="Navbar CSS" />
      </div>

      <p className="blog-text">Next, we make the width of the navbar <span className="blog-text code span">5rem</span>, set its <span className="blog-text code span">position: fixed</span> and set the height to <span className="blog-text code span">100vh</span>. <span className="blog-text code span">position:fixed</span> keeps the navbar in its place even if you scroll, while <span className="blog-text code span">100vh</span> always keeps the navbar’s height the length of the viewport. <span className="blog-text code span">vh</span> stands for view height, which corresponds to a percent of what is currently viewable within the browser, and not the element. That way, if you stretch the browser, the navbar will always maintain that percent of height, in this case, 100%.</p>

      <p className="blog-text"><strong>FLEXBOX</strong></p>

      <p className="blog-text">In the .navbar-ul, we create a flexbox, one of the most convenient and powerful CSS features available. It allows us to organize the properties of the child elements relative to the parent, which is where <span className="blog-text code span">display: flex</span> is set on. Right now, since flex is set on our <span className="blog-text code span">ul</span>, the container for all our individual <span className="blog-text code span">li</span> icons, flexbox will space out every <span className="blog-text code span">li</span> element left to right. Adding <span className="blog-text code span">flex-direction: column</span> forces the <span className="blog-text code span">li</span> to arrange vertically, top to bottom. Some other common properties to set for flexbox are <span className="blog-text code span">justify-content</span> which will determine the space between each child element and its position within the parent, <span className="blog-text code span">align-items</span> which is the same as justify but vertically (reversed if flex-direction is set to column), and <span className="blog-text code span">flex</span> on the children, short for <span className="blog-text code span">flex-grow</span>, which will determine the size of the children relative to one another within the parent.</p>

      <p className="blog-text"> Flexbox removes the need for manually setting the position of elements, and only requires attention of the parent.</p>

      <p className="blog-text"><strong>SVG</strong></p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/svg.png" alt="SVG Code" />
      </div>

      <p className="blog-text">From the opening svg tag to the closing svg tag is everything needed to render an icon</p>

      <p className="blog-text">Now, we can start adding SVG icons to all of our <span className="blog-text code span">li</span>. SVG is a vector graphic format, which uses code to describe lines, curves, shapes, and colors to draw a picture. This code can be created by people, and its value lies in its ability to be compatible with nearly all web based languages and technologies.</p>

      <p className="blog-text">All you have to do is download the SVG, and the single piece of code that exists in the file with <span className="blog-text code span">{`<svg>`}</span> tags is what the browser needs to draw the icon.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/nav_css_svg.png" alt="CSS code for SVG" />
      </div>

      <p className="blog-text">Since each of these icons is supposed to represent a link to another page, like chat or calendar, we include the SVG within the <span className="blog-text code span">{`<a class="nav-tab">`}</span> anchor tags, which is within the <span className="blog-text code span">li</span>. Then we apply colors to the anchor tags, and create <span className="blog-text code span">.nav-tab:hover</span> which will change the color of the icon when we hover over the tab. The <span className="blog-text code span">transition: 600ms</span> sets the speed of the color change.</p>


      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/nav_css_svg2.png" alt="CSS code setting display to none." />
      </div>

      <p className="blog-text">The tab-text display will be set to none, so it remains invisible until we hover over it. So what’s next? We set a hover to the navbar itself, which will change the width to <span className="blog-text code span">16rem</span>, and the display of the tab-text to block, or inline-block which also works.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/navbar.png" alt="Completed navbar." />
      </div>

      <p className="blog-text">And there you have it, a fully functioning navbar and header with just HTML and CSS.</p>

      <h2 id="linear" className="blog-header two">{`/*Linear-Gradient Header*/`}</h2>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/gradient_header.gif" alt="Demonstrating linear-gradient header." />
      </div>

      <p className="blog-text">To apply a linear-gradient to the text, we can’t just apply <span className="blog-text code span">#header {`{color: linear-gradient(#some color, #some other color)}`}</span>. This requires a bit of finessing, and the help of the browser’s rendering engine features.</p>

      <p className="blog-text">Not to get too much into it, different browsers use different engines which have their own specific prefixes to access CSS pseudo elements to customize certain things. Chrome and Safari use Webkit engine which uses -webkit CSS prefix, and Firefox uses Gecko engine, which uses -moz.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/clip_css.png" alt="CSS for add webkit-background-clip." />
      </div>

      <p className="blog-text">-webkit-background-clip: text; is crucial here, and will only render in Chrome and Safari</p>

      <p className="blog-text">Since we can’t apply a linear-gradient directly to the text, what we have to do is apply the linear-gradient as the background color of the text characters, and then apply <span className="blog-text code span">color: transparent</span> to the text itself.</p>

      <p className="blog-text">First, we set the background of the header text, in this case has a class of <span className="blog-text code span">.clip</span>, to the linear-gradient. You can use a linear-gradient generator like https://cssgradient.io/, to really customize your colors.</p>

      <p className="blog-text">Then, we set <span className="blog-text code span">background-size: cover</span>; which will cover the width of the element’s content, which is “The Hub”.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/gradient_css2.png" alt="Linear gradient covering the width of the text." />
      </div>

      <p className="blog-text">Then we apply <span className="blog-text code span">-webkit-background-clip: text</span>, which makes our linear-gradient only take up the space of our text. I repeat, this will make the linear-gradient colors take up the exact space of the text, so it will be nearly invisible because the color of the text itself stands in front of it.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/gradient_css3.png" alt="The area of the header is black because the text is black." />
      </div>

      <p className="blog-text">Then, we apply <span className="blog-text code span">color:transparent</span> to the text, which will allow our background linear-gradient to be visible.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/gradient_css4.png" alt="Linear gradient showing through the area of the text letters" />
      </div>

      <p className="blog-text">Then I top it off with an animation that applies a <span className="blog-text code span">filter: hue-rotate(180deg)</span> infinitely on a loop when the cursor hovers over the header, with the selector <span className="blog-text code span">.clip:hover</span>.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/gradient_css5.png" alt="CSS for setting a hover on header to change hue." />
      </div>

      <p className="blog-text">Easy!</p>

      <h2 id="resources" className="blog-header two">{`/*Resources*/`}</h2>

      <p className="blog-text">I cannibalized multiple resources to create this page so please give them attention!</p>

      <p className="blog-text bullet"><strong>Fireship</strong> Animated Navbar, <a href="https://www.youtube.com/watch?v=biOMz4puGt8">www.youtube.com/watch?v=biOMz4puGt8</a></p>
      <p className="blog-text bullet"><strong>Dev Ed</strong> 10 CSS tricks, <a href="https://www.youtube.com/watch?v=CxC925yUxSI">www.youtube.com/watch?v=CxC925yUxSI</a></p>
      <p className="blog-text bullet"><strong>RaddytheBrand</strong> 7 CSS tricks, <a href="https://www.youtube.com/watch?v=6K351_3z7rk">www.youtube.com/watch?v=6K351_3z7rk</a></p>
      <p className="blog-text bullet">Free SVG, <a href="https://fontawesome.com/">fontawesome.com/</a></p>
      <p className="blog-text bullet">Linear-gradient generator, <a href="https://cssgradient.io/">cssgradient.io</a></p>

      <p className="blog-text">Also, CSS prefixes for every notable browser rendering engine:</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/css/browser_engine.png" alt="CSS browser rendering engine prefixes." />
      </div>

    </div>
  )
}