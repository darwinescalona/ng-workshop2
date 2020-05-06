import { Component, OnInit } from '@angular/core';

@Component({
  selector: "ws-portfolio",
  template: `
    <!-- Portfolio-->
    <section id="portfolio">
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"
              ><img
                class="img-fluid"
                src="assets/img/portfolio/thumbnails/1.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div></a
            >
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"
              ><img
                class="img-fluid"
                src="assets/img/portfolio/thumbnails/2.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div></a
            >
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg"
              ><img
                class="img-fluid"
                src="assets/img/portfolio/thumbnails/3.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div></a
            >
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg"
              ><img
                class="img-fluid"
                src="assets/img/portfolio/thumbnails/4.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div></a
            >
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"
              ><img
                class="img-fluid"
                src="assets/img/portfolio/thumbnails/5.jpg"
                alt=""
              />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div></a
            >
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg"
              ><img
                class="img-fluid"
                src="assets/img/portfolio/thumbnails/6.jpg"
                alt=""
              />
              <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div></a
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      #portfolio .container-fluid,
      #portfolio .container-sm,
      #portfolio .container-md,
      #portfolio .container-lg,
      #portfolio .container-xl {
        max-width: 1920px;
      }

      #portfolio .container-fluid .portfolio-box,
      #portfolio .container-sm .portfolio-box,
      #portfolio .container-md .portfolio-box,
      #portfolio .container-lg .portfolio-box,
      #portfolio .container-xl .portfolio-box {
        position: relative;
        display: block;
      }

      #portfolio .container-fluid .portfolio-box .portfolio-box-caption,
      #portfolio .container-sm .portfolio-box .portfolio-box-caption,
      #portfolio .container-md .portfolio-box .portfolio-box-caption,
      #portfolio .container-lg .portfolio-box .portfolio-box-caption,
      #portfolio .container-xl .portfolio-box .portfolio-box-caption {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;
        opacity: 0;
        color: #fff;
        background: rgba(244, 98, 58, 0.9);
        transition: opacity 0.25s ease;
        text-align: center;
      }

      #portfolio
        .container-fluid
        .portfolio-box
        .portfolio-box-caption
        .project-category,
      #portfolio
        .container-sm
        .portfolio-box
        .portfolio-box-caption
        .project-category,
      #portfolio
        .container-md
        .portfolio-box
        .portfolio-box-caption
        .project-category,
      #portfolio
        .container-lg
        .portfolio-box
        .portfolio-box-caption
        .project-category,
      #portfolio
        .container-xl
        .portfolio-box
        .portfolio-box-caption
        .project-category {
        font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
      }

      #portfolio
        .container-fluid
        .portfolio-box
        .portfolio-box-caption
        .project-name,
      #portfolio
        .container-sm
        .portfolio-box
        .portfolio-box-caption
        .project-name,
      #portfolio
        .container-md
        .portfolio-box
        .portfolio-box-caption
        .project-name,
      #portfolio
        .container-lg
        .portfolio-box
        .portfolio-box-caption
        .project-name,
      #portfolio
        .container-xl
        .portfolio-box
        .portfolio-box-caption
        .project-name {
        font-size: 1.2rem;
      }

      #portfolio .container-fluid .portfolio-box:hover .portfolio-box-caption,
      #portfolio .container-sm .portfolio-box:hover .portfolio-box-caption,
      #portfolio .container-md .portfolio-box:hover .portfolio-box-caption,
      #portfolio .container-lg .portfolio-box:hover .portfolio-box-caption,
      #portfolio .container-xl .portfolio-box:hover .portfolio-box-caption {
        opacity: 1;
      }
    `,
  ],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
