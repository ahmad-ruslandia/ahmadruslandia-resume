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
            <a href="https://github.com/ahmad-ruslandia/resume/raw/main/Ahmad%20Ruslandia%20Papua.pdf">
              Download as PDF
            </a>
          </div>
        ) : (
          ''
          )}
        <section class="name-and-contact">
          <div>
            <h1>Ahmad Ruslandia Papua</h1>
          </div>
          <ul>
            <li class="location">
              <svg-icon name="location"></svg-icon>
              <span>Location</span>
            </li>
            <li class="email">
              <svg-icon name="email"></svg-icon>
              <a href="mailto:ruslandiaamin@gmail.com">youremail@example.com</a>
            </li>
            <li class="languages">
              <svg-icon name="languages"></svg-icon>
              <span>Language</span>
            </li>
            <li class="website">
              <svg-icon name="website"></svg-icon>
              <a href="https://www.example.com/" target="_blank">
              www.example.com
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
                  <span class="company-name">Example 1</span>
                </div>
                <small>Position | Location | Year of Experience</small>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <ul>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ul>
            </div>

            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">Example 2</span>
                </div>
                <small>Position | Location | Year of Experience</small>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <ul>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <i>Example University</i>, 2020.
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
          </ul>
        </section>
      </article>
    );
  }
}
