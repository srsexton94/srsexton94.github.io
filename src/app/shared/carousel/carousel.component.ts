import { Component } from '@angular/core'

@Component({
  selector: 'carousel',
  styleUrls: ['./carousel.component.scss'],
  template: ` 
    <div class="carousel">
      <button class="carousel-control left">Previous</button>
      <div class="inner-carousel">
        <div class="slides">
          <div class="slide">
            <img src="https://images.unsplash.com/photo-1415931633537-351070d20b81?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225" alt="First Image">
            <div class="caption-container">
              <div class="caption">
                <h3>First Image</h3>
                <p>image description here here here</p>
              </div>
            </div>
          </div>
          <div class="slide">
            <img src="https://images.unsplash.com/reserve/lNlimzQRqm3emNrRnv1w_IMG_7726.JPG?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225" alt="Second Image">
            <div class="caption-container">
              <div class="caption">
                <h3>Second Image</h3>
                <p>image description here here here</p>
              </div>
            </div>
          </div> 
          <div class="slide active">
            <img src="https://images.unsplash.com/photo-1449445121243-085ef669b29b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225" alt="Third Image">
            <div class="caption-container">
              <div class="caption">
                <h3>Third Image</h3>
                <p>image description here here here</p>
              </div>
            </div>
          </div>   
          <div class="slide">
            <img src="https://images.unsplash.com/photo-1449208233734-dcf88e8e352c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225" alt="Fourth Image">
            <div class="caption-container">
              <div class="caption">
                <h3>Fourth Image</h3>
                <p>image description here here here</p>
              </div>
            </div>
          </div>
          <div class="slide">
            <img src="https://images.unsplash.com/photo-1448818583842-3353f177e9b4?crop=entropy&dpr=2&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1225" alt="Fifth Image">
            <div class="caption-container">
              <div class="caption">
                <h3>Fifth Image</h3>
                <p>image description here here here</p>
              </div>
            </div>
          </div>
        </div>
        <div class="indicators" role="radio-group">
          <input class="indicator" type="radio" name="indicator" id="indicator1" value="1" checked>
          <input class="indicator" type="radio" name="indicator" id="indicator2" value="2">
          <input class="indicator" type="radio" name="indicator" id="indicator3" value="3">
          <input class="indicator" type="radio" name="indicator" id="indicator4" value="4">
          <input class="indicator" type="radio" name="indicator" id="indicator5" value="5">
        </div>
      </div>
      <button class="carousel-control right">Next</button>
    </div>
  `
})
export class CarouselComponent {
  // slides object with...
  //// img path
  //// img alt
  //// header text
  //// body text
  //// "active" bool
}
