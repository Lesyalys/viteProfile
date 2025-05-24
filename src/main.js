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
      <img src="https://i.pinimg.com/736x/46/ec/ef/46ecef536dcb54829e5fb54598d2dfcf.jpg">
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
      <div id="sendMessage"></div>
      <div id="contactIcons">
        <h2>Contact Information</h2>
        <div class="mailContact">
        <div id="mailIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-primary" data-lov-id="src/components/Contact.tsx:161:22" data-lov-name="item.icon" data-component-path="src/components/Contact.tsx" data-component-line="161" data-component-file="Contact.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
        <div class="innerInfo">
          <p>mail</p>
          <p><a href="mailto:nya.olesya@bk.ru">nya.olesya@bk.ru</a></p>
        </div>
        </div>
        
      </div>
     <div>
  </section>
</main>

<footer>dsa</footer>
`
mySkills();

