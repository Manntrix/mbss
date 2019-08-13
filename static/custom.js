
			
			var spriteImages = document.querySelectorAll( '.slide-item__image' );
			var spriteImagesSrc = [];
			var texts = [];

			for ( var i = 0; i < spriteImages.length; i++ ) {
				var img = spriteImages[i];
				// Set the texts you want to display to each slide 
				// in a sibling element of your image and edit accordingly
				if ( img.nextElementSibling ) {
					texts.push(img.nextElementSibling.innerHTML);
				} else {
					texts.push('');
				}
				spriteImagesSrc.push( img.getAttribute('src' ) );
			}
      
			var initCanvasSlideshow = new CanvasSlideshow({
				sprites: spriteImagesSrc,
				displacementImage: 'clouds.jpg',
				autoPlay: true,
				autoPlaySpeed: [4, 3],
				displaceScale: [5000, 10000],
				interactive: true,
				interactionEvent: 'click', // 'click', 'hover', 'both' 
				displaceAutoFit: false,
				dispatchPointerOver: true // restarts pointerover event after click 
			});