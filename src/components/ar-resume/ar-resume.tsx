import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "ar-resume",
  styleUrl: "ar-resume.scss",
  shadow: true
})
export class Arresume {
  @Prop() showDownloadLink: boolean = false;

  calcYearsSince(date: string) {
    const birthday = new Date(date);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <article class="resume">
        {this.showDownloadLink ? (
          <div class="download-pdf screen-only">
            <a href="https://drive.google.com/file/d/1jkqAoSFzj6GVlaT9NgQB69WCeZDkm5UR/view?usp=drive_link">
              Download as PDF
            </a>
          </div>
        ) : (
          <div class="download-pdf screen-only">
            <a href="https://github.com/ahmad-ruslandia/resume/raw/main/Ahmad%20Ruslandia%20Papua.pdf">
              Download as PDF
            </a>
          </div>
          )}
        <section class="name-and-contact">
          <div>
            <h1>Ahmad Ruslandia Papua</h1>
          </div>
          <ul>
            <li class="location">
              <svg-icon name="location"></svg-icon>
              <span>Makassar, Indonesia</span>
            </li>
            <li class="email">
              <svg-icon name="email"></svg-icon>
              <a href="mailto:ruslandiaamin@gmail.com">ruslandiaamin@gmail.com</a>
            </li>
            <li class="languages">
              <svg-icon name="languages"></svg-icon>
              <span>English, Bahasa Indonesia</span>
            </li>
            <li class="website">
              <svg-icon name="website"></svg-icon>
              <a href="https://linktr.ee/ahmadruslandia" target="_blank">
              linktr.ee/ahmadruslandia
              </a>
            </li>
          </ul>
        </section>
        <section class="photo">
          <img
            class="avatar"
            src="https://res.cloudinary.com/ddam8j6bz/image/upload/v1707197691/jfpsh44u8usnfydpy9lq.jpg"
          />
        </section>
        <section class="about">
          <p class="section-title">About</p>
          <p>
          Innovative Web and Mobile Developer in building impactful and user-friendly websites and applications. Specializes in front-end technologies and passionate about modern web standards.
          </p>
        </section>
        <section class="work">
          <p class="section-title">Professional Experience</p>

          <div class="experiences-container">
            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">
                    Sandvik
                  </span>
                </div>
                <small>IT Support | <svg-icon name="location" small={true}></svg-icon> Mimika Regency, Indonesia | June 2023 - August 2023</small>
              </div>
              <p>Have Completed Internship at Multinational Company engaged in Technology for Mining and Construction Sector</p>
              <ul>
                <li>
                Assisted in the deployment and maintenance of IT infrastructure, ensuring optimal performance.
                </li>
                <li>
                  Responded to help desk tickets, resolving issues related to hardware, software, and network connectivity.
                </li>
                <li>
                Install, configure, and troubleshoot computer systems, networks, and peripherals.
                </li>
                <li>
                Completed the final project for managing asset into a customized solution using bootsrap and codeigniter framework.
                </li>
              </ul>
            </div>

            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">ABP Incubator</span>
                </div>
                <small>Apprentice | <svg-icon name="location" small={true}></svg-icon> Yogyakarta, Indonesia | November 2018 - January 2019</small>
              </div>
              <p>Have Completed PRAKERIN at ABP Incubator in 2019</p>
              <ul>
                <li>
                Conducted regular meetings with stakeholders to understand their business needs and them into detailed requirements for development teams.
                </li>
                <li>
                Collaborated with IT teams to ensure the successful implementation of technology solutions in line with business objectives.
                </li>
                <li>
                Assisted in the preparation of business cases, feasibility studies, and project plans for new initiatives
                </li>         
              </ul>
            </div>

            
          </div>
        </section>
        <section class="education">
          <p class="section-title">Education</p>
          <span>
            An Undergraduate {" "}
            <u>Computer Science</u> Student at{" "}
            <i>Universitas Muslim Indonesia</i>, 2020.
          </span>
        </section>
        <section class="skills">
          <p class="section-title">Skills</p>
          <ul>
            <li>
              Web Development
              <div class="tags-container">
                <span class="tag">React JS</span>
                <span class="tag">Next JS</span>
                <span class="tag">Vue JS</span>
                <span class="tag">Angular</span>
                <span class="tag">Bootstrap</span>
                <span class="tag">CodeIgniter</span>
              </div>
            </li>
            <br></br>
            <li>
              Mobile Development
              <div class="tags-container">
                <span class="tag">Flutter</span>
                <span class="tag">.Net MAUI</span>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
}
