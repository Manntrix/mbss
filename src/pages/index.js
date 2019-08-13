import { Link } from "gatsby"
import $ from 'jquery'
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import React, { Component } from 'react'

export default class index extends Component {

animation(){
  $('h1').on('click', function(){
    alert()
  })
}
  componentDidMount(){
    this.animation()
  }
  render() {
    return (
      <div>
          <SEO title="Home" />
        <main class="site-wrapper">
			<div class="content">
				<div class="slide-wrapper">
					<div class="slide-item">
						<img src={'13.jpg'} class="slide-item__image" />
					</div>
					<div class="slide-item">
						<img src={'14.jpg'} class="slide-item__image" />
					</div>
					<div class="slide-item">
						<img src={'15.jpg'} class="slide-item__image" />
					</div>		
				</div>
				<button class="scene-nav scene-nav--prev" data-nav="previous"><svg class="icon icon--arrow-nav-prev"></svg></button>
				<button class="scene-nav scene-nav--next" data-nav="next"><svg class="icon icon--arrow-nav-next"></svg></button>
			</div>
		</main>
        <Helmet>
          <link rel="stylesheet" href={'component.css'}/>
          <script src={'pixi.min.js'} />
          <script src={'TweenMax.min.js'} />
          <script src={'main5.js'} />
          <script src={'imagesloaded.pkgd.min.js'} />
          <script src={'custom.js'} />
        </Helmet>
      </div>
     
    )
  }
}

