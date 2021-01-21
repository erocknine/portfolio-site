import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function RegexBlog() {
  return (
    <div className="blog-page regex">
      <h1 className="blog-header one">SO YOU WANNA USE REGEX, DO YA?</h1>
      <p className="blog-text">March 18, 2020 | 10 min</p>
      <div className="blog-links">
        <AnchorLink offset={() => 104} href="#methods">Methods</AnchorLink>
        <AnchorLink offset={() => 104} href="#matching">Matching</AnchorLink>
        <AnchorLink offset={() => 104} href="#flags">Flags</AnchorLink>
      </div>

      <p className="blog-text">Intermediate guide for familiarizing RegEx in Ruby and JavaScript. Not for the weak-willed.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/js_code.jpg" alt="Javascript Code" />
      </div>

      <p className="blog-text">If you ever find yourself as a developer one day, astonished because you were clearly working as a line cook the night before, but woke up and found yourself with a linux laptop covered in stickers from various meetups, tech companies and languages, then congratulations! You’re probably getting paid more, but you might have to start dealing with string data.</p>
      <p className="blog-text">It could be user logins, passwords, or verifying emails. Whenever you’re parsing data and require code to match a specific structure or syntax, you will find RegEx to be tear-jerkingly efficient and invaluable.</p>

      <div className="blog-text quote">
        <p>“There is no feeling as profound as witnessing the versatility of RegEx extracting coherent data from the horrible mess of human error.”
        </p>
        <p>— Socrates(probably), 425 BC.</p>
      </div>

      <p className="blog-text">So what is RegEx?</p>
      <p className="blog-text">RegEx stands for regular expressions, and allows a developer to match or remove specific characters, character sequences, or patterns in any given string. Anything that can be typed can be targeted by specific methods utilizing RegEx, allowing you to manipulate the result for God knows what.</p>
      <p className="blog-text">Why write this? Because I saw an oversaturated market of RegEx articles on the internet and thought, “Me too! I want in!”</p>
      <p className="blog-text">Why learn it? Because other people are gonna think you’re really rad, and it’s super cool hacker deal stuff. At least my mom thinks so.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/regex/simpsons.gif" alt="Homer from Simpsons yelling NERD" />
      </div>

      <p className="blog-text code p">string.match(/[^a-zA-Z0–9]|\w+/igm)</p>

      <p className="blog-text">This is an example of the method <span className="blog-text code span">match</span> utilizing RegEx on <span className="blog-text code span">string</span>. RegEx is qualified by the forward slashes <span className="blog-text code span">/</span> at each end of the RegEx pattern inside the parentheses, like so,<span className="blog-text code span">(/regex/)</span>. In this example, the RegEx pattern is:</p>

      <p className="blog-text code p">/[^a-zA-Z0–9]|\w+/igm</p>

      <p className="blog-text">If you’ve never seen it before, RegEx will look like a barf of code, or as someone I know has said, “Looks like someone had a stroke while writing that.”</p>
      <p className="blog-text">I promise this line of code will be child’s play by the time you finish reading this.</p>
      
      <div className="blog-text quote">
        <p>“So you wanna be a pro at RegEx, kid, well, woop-de-doo!”
        </p>
        <p>— Philoctetes(maybe?), Hercules, 1997</p>
      </div>

      <h2 id="methods" className="blog-header two">
        Methods
      </h2>

      <p className="blog-text">In JavaScript and Ruby, these are the main methods to fulfill most purposes:</p>

      <p className="blog-text bullet"><span className="blog-text code span">.match(/regex/)</span> — will capture the first matching instance of your RegEx pattern and return only that in an array. Utilizing a global <span className="blog-text code span">g</span> flag will return every match instance of a string within an array, <span className="blog-text code span">.match(/regex/g)</span>. Sadly, <span className="blog-text code span">g</span> does not exist in Ruby.</p>

      <p className="blog-text bullet"><span className="blog-text code span">.scan(/regex/)</span> — will go through the entire string returning every instance of a RegEx match in an array. Since <span className="blog-text code span">g</span> doesn’t work in Ruby, this method will accomplish the same task as <span className="blog-text code span">.match(/regex/g)</span>. Similarly, since <span className="blog-text code span">scan()</span> does not exist in JavaScript, JavaScript can utilize <span className="blog-text code span">match(/regex/g)</span>.</p>

      <p className="blog-text bullet"><span className="blog-text code span">.gsub(/regex/, “”)</span> / <span className="blog-text code span">.sub(/regex/, “”)</span> in Ruby | <span className="blog-text code span">.replace(/regex/, “”)</span> in JavaScript — will take anything your RegEx targets, replace it with whatever characters you place in the quotations, and return a new string. <span className="blog-text code span">gsub</span> will replace all matches of your RegEx, equivalent to <span className="blog-text code span">replace</span> with a <span className="blog-text code span">g</span> flag, while <span className="blog-text code span">sub</span> will only replace the first match.</p>

      <p className="blog-text bullet"><span className="blog-text code span">.split(/regex/)</span> — will separate the string by whatever the RegEx is targeting, and return an array of different elements separated by the match.</p>

      <p className="blog-text bullet"><span className="blog-text code span">.grep(/regex/)</span> — will take an array of elements and return a new array filled with elements matching your RegEx. <span className="blog-text code span">grep</span> exists in jQuery, but not JavaScript.</p>

      <div className="blog-text code block">
        <p>mystery_men = ["Captain Amazing", "Bowler", "Blue Raja", "Shoveler", "Furious", "Sphinx", "Spleen"]</p>
        <p>mystery_men.grep(/Sp/) => ["Sphinx", "Spleen"]</p>
        <p>All examples will be using Ruby methods and syntax
        For JavaScript, substitute .gsub(/regex/) for .replace(/regex/g), and .scan(/regex/) for .match(/regex/g)</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">/regex/.test(“string”)</span> — this exists in JavaScript but not Ruby, and will allow you to test if your RegEx matches anything in <span className="blog-text code span">("string")</span>. If so, it will return true, otherwise false.</p>

      <p className="blog-text">What is important to remember is some of these methods are for strings, and others return values in an array. If you ever need to use more than one method, REMEMBER the result of the first method might need to be in a string for the next method. Otherwise, you will receive an undefined method error.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/regex/doge.jpg" alt="Homer from Simpsons yelling NERD" />
      </div>

      <h2 id="matching" className="blog-header two">
        Matching — Character classes, Quanitifiers, Anchors
      </h2>
      
      <p className="blog-text">RegEx has a bunch of default character classes meant to represent any type of character or pattern you would possibly need to match. Matching goes left to right, because index[0] of a string or array starts from the left.</p>

      <p className="blog-text">Before I drop this knowledge on you, check out this site to test your pro RegExes → <a href="https://regex101.com" target="_blank" rel="noopener noreferrer">regex101.com</a></p>

      <p className="blog-text">Here are some basics to fuel that explosive desire for RegEx matching you are definitely feeling right now:</p>

      <p className="blog-text bullet"><span className="blog-text code span">\d</span> for digits (aka numbers), <span className="blog-text code span">\D</span> for non digits (aka not numbers)</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"Spaceballs 1987".match(/\d+/) => ["1987"]</p>
        <p>"Spaceballs 1987".match(/\D+/) => ["Spaceballs "]</p>
        <p>+ is a quantifier signaling your RegEx to extend its match to every consecutive character of that same type until hitting a pattern break. It will then return the match as a single instance</p>
        <p>Otherwise, "Spaceballs 1987".match(/\d/) => ["1"]</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">\w</span> for any alphanumeric character (aka letters & numbers), <span className="blog-text code span">\W</span> for non alphanumeric characters (aka not letters & definitely not numbers)</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"1-800-MATTRESS".scan(/\w+/) => ["1", "800", "MATTRESS"]</p>
        <p className="blog-text code nospace">"1-800-MATTRESS".gsub(/\W/, "") => "1800MATTRESS"</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">\s</span> for spaces, <span className="blog-text code span">\S</span> for everything non spaces</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"742 Evergreen Terrace".gsub(/\s/, "+") => "742+Evergreen+Terrace"</p>
        <p className="blog-text code nospace">"742 Evergreen Terrace".scan(/\S+/) => ["742", "Evergreen", "Terrace"]</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">+</span> and <span className="blog-text code span">*</span> is a quantifier from one to infinity, and zero to infinity, respectively. The match of the preceding character will extend its capture until it reaches the end of its pattern match, and will return that capture as one instance. Because * captures quantities of zero, the moment it is called, will capture an instance in addition to every occurrence of a non match in empty strings.</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"C00l".scan(/\d/) => ["0", "0"]</p>
        <p className="blog-text code nospace">"C00l".scan(/\d+/) => ["00"]</p>
        <p className="blog-text code nospace">"C00l".gsub(/\d/, "O") => ["COOl"]</p>
        <p className="blog-text code nospace">"C00l".gsub(/\d+/, "O") => ["COl"]</p>
        <p className="blog-text code nospace">"C00l".scan(/\d*/) => ["", "00", "", ""]</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">{`{#}`}</span> is another quantifier used in a RegEx that matches the preceding character repeated to the number(#) specified. You can provide a range with <span className="blog-text code span">{`{#,#}`}</span> and it will capture everything inclusively.</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"a aa aaa aAaA AAaaa".scan(/a{3}/i) => [“aaa”, “aAa”, “AAa”]</p>
        <p className="blog-text code nospace">"a aa aaa aAaA AAaaa".scan(/a{`3,5`}/i) => [“aaa”, “aAaA”, “AAaaa”]</p>
        <p className="blog-text code nospace">"a aa aaa aAaA AAaaa".scan(/a{`3,5`}/) => ["aaa", "aaa"]</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">.</span> will match any character except line breaks. <span className="blog-text code span">.+</span> will match the entire string as a single instance.</p>

      <p className="blog-text bullet"><span className="blog-text code span">^</span> and <span className="blog-text code span">$</span> are anchors. <span className="blog-text code span">^</span> represents the placement just before the first character of the string, and <span className="blog-text code span">$</span> represents the placement immediately after the last character of the string.</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"That is such a Scorpio thing".match(/^\w+/) => ["That"]</p>
        <p className="blog-text code nospace">"That is such a Scorpio thing".match(/\w+$/) => ["thing"]</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">|</span> called an alternate is considered an ‘or’ in RegEx documentation, but should be thought of as ‘and/or’. It will match the pattern on either side of the pipe if there is a viable match. Incredibly important if there are multiple patterns you are specifically matching for.</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">"Jude Law is 47 years old".scan(/^\w+ \w+|\d+/)=> ["Jude Law", "47"]</p>
        <p>"Jude Law is 47 years old".scan(/^\w+ \w+\d+/)=> []</p>
        <p>Without the |, the RegEx is essentially searching for the first two complete alphanumerics separated by a space, followed by a complete number, in that exact sequence. That is why nothing matches. With the |, the RegEx is searching for the first two complete alphanumerics separated by a space, AND a complete number</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">\</span> is the character for escape. If you ever need to match a <span className="blog-text code span">.</span> or <span className="blog-text code span">/</span> (because this signals the end of a RegEx), or any lone character that is a character matching class, you will need backslash<span className="blog-text code span">\</span> to escape it. You’ll even need a backslash to escape itself!</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">mean_gurls = "She.doesn't+even$go^here\".gsub(/\.|\+|\$|\^|\\/, " ")</p>
        <p>=> "She doesn't even go here "</p>
        <p>mean_gurls.sub(/ $/, "!") => "She doesn't even go here!"</p>
      </div>

      <h2 id="flags" className="blog-header two">Flags</h2>

      <p className="blog-text">Languages supporting RegEx also have access to flags, which are appended after the closing forward slash of a RegEx, <span className="blog-text code span">(/regex/flag)</span>. These affect the entire RegEx pattern to match a specific way. There are a number of flags, but <span className="blog-text code span">g</span>, <span className="blog-text code span">i</span>, and <span className="blog-text code span">m</span> are the most useful for basic RegExing needs.</p>

      <p className="blog-text bullet"><span className="blog-text code span">g</span> forces the method to match the RegEx pattern as many times as it occurs within the string. This flag does not exist in Ruby.</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">“pika pi, pikachu”.match(/pika/) => ["pika"]</p>
        <p className="blog-text code nospace">“pika pi, pikachu”.match(/pika/) => ["pika"]</p>
      </div>

      <p className="blog-text bullet"><span className="blog-text code span">m</span> allows anchors<span className="blog-text code span">^</span> and <span className="blog-text code span">$</span> to apply to multiple lines specifically for multi-line strings. By default, anchors will not pass a line break <span className="blog-text code span">\n</span>, but m will allow <span className="blog-text code span">^</span> to place immediately after a line break <span className="blog-text code span">\n</span>, and <span className="blog-text code span">$</span> will place immediately before <span className="blog-text code span">\n</span>.</p>

      <p className="blog-text">Understood so far? You a pro yet?</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/regex/scientist.png" alt="When you do a regex expression correctly first try without using google for help. You know, I'm something of a scientist myself." />
      </div>

      <p className="blog-text">Now, returning to this:</p>

      <p className="blog-text code p">string.match(/[^a-zA-Z0–9]|\w+/igm)</p>

      <p className="blog-text"><span className="blog-text code span">/[^a-zA-Z0–9]/</span> alone will highlight all special characters from a string. If you ever needed only letters or numbers from any garbled mess of input, this will target everything that isn’t a letter or a number, and depending on your method, will allow you to remove them. Also, any characters within the brackets <span className="blog-text code span">[]</span> will be matched as individual characters, ignoring its sequence.</p>

      <p className="blog-text">The <span className="blog-text code span">^</span> within <span className="blog-text code span">[]</span> brackets represents a ‘not’ for everything following, meaning this RegEx will find all characters that are NOT the ones that come after the <span className="blog-text code span">^</span>.</p>

      <p className="blog-text">{`// `}<span className="blog-text code span">/[^]/</span> only works in JavaScript. It will match any character at the start of the string, because if something is not nothing, it is something. Very philosophical.</p>

      <p className="blog-text">So in <span className="blog-text code span">[^a-zA-Z0–9]</span>, anything within the entire string that isn’t in the alphabet a-z, or capitalized A-Z, or a number 0–9, will be selected. That’s right, you can use ranges.</p>

      <p className="blog-text">If someone enters their email, but majorly messes it up, like really grinds their face on the keyboard as though THEY were writing RegEx, <span className="blog-text code span">c#hu!&nkylo/ver53@aol(.)com</span>, then calling <span className="blog-text code span">.gsub(/[^a-zA-Z0-9.@]/, “”)</span> will return <span className="blog-text code span">“chunkylover53@aol.com”</span>.</p>

      <p className="blog-text">Here is an example of a RegEx utilizing a range to filter titles from a multi-line string in JavaScript.</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">let moves =</p>
        <p className="blog-text code nospace">`Back to the Future</p>
        <p className="blog-text code nospace">Aliens 2</p>
        <p className="blog-text code nospace">Speed</p>
        <p className="blog-text code nospace">Harry Potter and the Sorcerer's Stone</p>
        <p>Zoolander`</p>

        <p className="blog-text code nospace">movies.match(/^[a-r].+/igm) </p>
        <p>=> ["Back to the Future", "Aliens 2", "Harry Potter and the Sorcerer's Stone"]</p>

        <p>{`//`}The m flag allows the RegEx anchor ^ to place at the beginning of each line, where it then matches the first letter of all titles that fit in the range a to r. The i flag allows the match to ignore case sensitivity.</p>

        <p>From the matching titles fitting the a to r range, the . which matches any character type except line breaks, pairs with quantifier + to extend its capture through the rest of the characters in the title as a single instance, but always stopping at the line break.</p>

        <p>The g flag is required to force .match() to return all potential matches. Without it, .match() would have returned the first matching title, "Back to the Future".</p>
      </div>

      <p className="blog-text">Now, where were we?</p>

      <p className="blog-text code p">string.match(/[^a-zA-Z0–9]|\w+/igm)</p>

      <p className="blog-text">If you’ve followed this far, you should know by now realize that our RegEx <span className="blog-text code span">(/[^a-zA-Z0–9]|\w+/igm)</span> is actually targeting all special characters as well as all alphanumeric characters, since the <span className="blog-text code span">[^a-zA-Z0–9]</span> is equivalent to <span className="blog-text code span">[^\w+]</span>, which is then negated by <span className="blog-text code span">\w+</span></p>

      <p className="blog-text">Which means this RegEx isn’t very useful at all. Now you know better.</p>

      <p className="blog-text">One last thing.</p>

      <p className="blog-text code p">"live love life".scan(/[l(iv|ov|if)e]+/) => ["live", "love", "life"]</p>

      <p className="blog-text">Didn't think I was spiritual, right? Well, I have my days.</p>
    </div>
  )
}