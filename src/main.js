import './style.css'
import {startAdd} from './stars'
import {mySkills} from './mySkills'
startAdd();
document.querySelector('#app').innerHTML = `

  <header class="text-gradient">
    <div class="text-xl">lesya</div>
    
      <nav class ="elements">
        <ul class="menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contacts">Contact</a></li>
            <li><button class="ResumeBtn">Resume</button></li>
        </ul>
      </nav>
  </header>


<section>
  <div class="homeSection">
    <div class="about">
      <h1>HI!</h1><span class="colorText">I'm lesya</span>
      <p class="text-xl">Creative developer crafting beautiful digital experiences with code and design.</p>
      <div class="btnNavDuv">  
        <a href="#project" class="btnNav" id="view">View Projects</a>
        <a href="#contacts" class="btnNav" id="contact">Contact Me</a>
      </div>
    </div>
    <div class="imgMe">
      <img src="https://sun9-24.userapi.com/impg/dvmRjFzaqX7MiLm5lajWKVkq9gQIU9VE5-Ga8g/R1Gv2LoOyJ4.jpg?size=1620x1617&quality=95&sign=5479fcbec0c6ed96a2cfb27f75a36635&type=album" alt="me" id="meImg">
    </div>
  </div>
</section>
  

  <main>
  <section id="project" >
  <div class="workSection">
    <h1>Featured Projects</h1>
      <p class="text-xl">A collection of my work across web and mobile development, showcasing creative solutions and technical expertise.</p>
      <!--<div class="about">
        <ul class="myWorkBtn">
          <li id="allBtn" class="btnNav"><button>All</button></li>
          <li id="contact" class="btnNav"><button>Design</button></li>
          <li id="contact" class="btnNav"><button>Node.js</button></li>
          <li id="contact" class="btnNav"><button>Company</button></li>
        </ul>
        </div>-->
        
      </div>
      <div class="workBoard">
      <h2>Figma</h2>
        <div class="works">
          <iframe src="https://embed.figma.com/proto/YYDUugeozmKwqtFx1A9qmQ/Untitled?node-id=2079-63&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2079%3A63&embed-host=share" allowfullscreen></iframe>

          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/YYDUugeozmKwqtFx1A9qmQ/Untitled?node-id=923-1646&scaling=scale-down-width&content-scaling=fixed&page-id=494%3A365&starting-point-node-id=843%3A51&embed-host=share" allowfullscreen id="novella"></iframe>
          </div>
      </div>
  </section>
  
  
  <section id="skills">
    <div class="mySkills">
    <h1>My skills</h1>
      <ul id="elementSkill">
      </ul>
    <div>
  </section>
  
  <section id="contacts">
  <h1>Contacts</h1>
  
     <div class="myContact">

      <div>
        <ul>
          <li class="mailContact">
            <div class="iconConnect">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-primary" data-lov-id="src/components/Contact.tsx:161:22" data-lov-name="item.icon" data-component-path="src/components/Contact.tsx" data-component-line="161" data-component-file="Contact.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div class="innerInfo">
              <p>MAIL</p>
              <a class="btnNav" id="view" href="mailto:nya.olesya@bk.ru" >nya.olesya@bk.ru</a>
            </div>
          </li>
          <li class="mailContact">
            <div class="iconConnect">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4 text-primary" data-lov-id="src/components/Contact.tsx:129:28" data-lov-name="option.icon" data-component-path="src/components/Contact.tsx" data-component-line="129" data-component-file="Contact.tsx" data-component-name="option.icon" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            </div>
            <div class="innerInfo">
              <p>TG</p>
              <a href="https://t.me/Shadowtav" target="_blink" class="btnNav" id="view">@Shadowtav</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>

`
mySkills();

