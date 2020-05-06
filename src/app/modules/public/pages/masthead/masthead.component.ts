import { Component, OnInit } from '@angular/core';

@Component({
  selector: "ws-masthead",
  template: `
    <!-- Masthead-->
    <header class="masthead">
      <div class="container h-100">
        <div
          class="row h-100 align-items-center justify-content-center text-center"
        >
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">
              Your Favorite Source of Free Bootstrap Themes
            </h1>
            <hr class="divider my-4" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 font-weight-light mb-5">
              Start Bootstrap can help you build better websites using the
              Bootstrap framework! Just download a theme and start customizing,
              no strings attached!
            </p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about"
              >Find Out More</a
            >
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      header.masthead {
        background: linear-gradient(
            to bottom,
            rgba(92, 77, 66, 0.8) 0%,
            rgba(92, 77, 66, 0.8) 100%
          ),
          url("/assets/img/bg-masthead.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
      }

      header.masthead h1 {
        font-size: 2.25rem;
      }

      @media (min-width: 992px) {
        
        header.masthead p {
          font-size: 1.15rem;
        }
        header.masthead h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 1200px) {
        header.masthead h1 {
          font-size: 3.5rem;
        }
      }
    `,
  ],
})
export class MastheadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
