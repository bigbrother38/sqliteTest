// wow 
	new WOW().init();
// nav
	var burger = $('.burger');
	var mask = $('.bg-mask');
	var nav = $('.header ul');
	var navList = $('.header ul li');
	burger.click(function() {
		burger.toggleClass('active');
		mask.fadeToggle();
		nav.toggleClass('active');
	});	
	navList.click(function(){
		burger.toggleClass('active');
		mask.fadeToggle();
		nav.toggleClass('active');
		$(this).toggleClass('active').siblings().removeClass('active');
	});	

	$('#special-link').click(function(){
		$('html,body').animate({scrollTop:$('#special').offset().top-20}, 500);
	});
	$('#flow-link').click(function(){
		$('html,body').animate({scrollTop:$('#flow').offset().top-20}, 500);
	});	
	$('#share-link').click(function(){
		$('html,body').animate({scrollTop:$('#share').offset().top-20}, 500);
	});
	$('#timeline-link').click(function(){
		$('html,body').animate({scrollTop:$('#timeline').offset().top-20}, 500);
	});
	$('#cta-link').click(function(){
		$('html,body').animate({scrollTop:$('#cta').offset().top-20}, 500);
	});
		$('#esunma-link').click(function(){
			$('html,body').animate({scrollTop:$('#esunma').offset().top-100}, 500);
		});
		$('#about-link').click(function(){
			$('html,body').animate({scrollTop:$('#about').offset().top-100}, 500);
		});
		$('#life-link').click(function(){
			$('html,body').animate({scrollTop:$('#life').offset().top-100}, 500);
		});
		$('#oversea-link').click(function(){
			$('html,body').animate({scrollTop:$('#oversea').offset().top-100}, 500);
		});
		$('#join-link').click(function(){
			$('html,body').animate({scrollTop:$('#join').offset().top-50}, 500);
		});
		$('#cta-link').click(function(){
			$('html,body').animate({scrollTop:$('#cta').offset().top-90}, 500);
		});
		$('#qa-link').click(function(){
			$('html,body').animate({scrollTop:$('#qa').offset().top-100}, 500);
		});
// gotop
	var gotopBtn = $('#gotopBtn');
	var gotop = $('.gotop');
	gotop.click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			gotop.fadeIn("fast");
		} else {
			gotop.stop().fadeOut("fast");
			navList.removeClass('active');
		}
	});	


// canvas
	let resizeReset = function() {
		w = canvasBody.width = window.innerWidth;
		h = canvasBody.height = window.innerHeight;
	}
	const opts = { 
		particleColor: "rgb(255,255,255)",
		lineColor: "rgb(255,255,255)",
		particleAmount: 50,
		defaultSpeed: 1,
		variantSpeed: 1,
		defaultRadius: 2,
		variantRadius: 2,
		linkRadius: 200,
	};
	window.addEventListener("resize", function(){
		deBouncer();
	});
	let deBouncer = function() {
	    clearTimeout(tid);
	    tid = setTimeout(function() {
	        resizeReset();
	    }, delay);
	};
	let checkDistance = function(x1, y1, x2, y2){ 
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	};
	let linkPoints = function(point1, hubs){ 
		for (let i = 0; i < hubs.length; i++) {
			let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
			let opacity = 1 - distance / opts.linkRadius;
			if (opacity > 0) { 
				drawArea.lineWidth = 0.5;
				drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
				drawArea.beginPath();
				drawArea.moveTo(point1.x, point1.y);
				drawArea.lineTo(hubs[i].x, hubs[i].y);
				drawArea.closePath();
				drawArea.stroke();
			}
		}
	}
	Particle = function(xPos, yPos){ 
		this.x = Math.random() * w; 
		this.y = Math.random() * h;
		this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
		this.directionAngle = Math.floor(Math.random() * 360); 
		this.color = opts.particleColor;
		this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
		this.vector = {
			x: Math.cos(this.directionAngle) * this.speed,
			y: Math.sin(this.directionAngle) * this.speed
		};
		this.update = function(){ 
			this.border(); 
			this.x += this.vector.x; 
			this.y += this.vector.y; 
		};
		this.border = function(){ 
			if (this.x >= w || this.x <= 0) { 
				this.vector.x *= -1;
			}
			if (this.y >= h || this.y <= 0) {
				this.vector.y *= -1;
			}
			if (this.x > w) this.x = w;
			if (this.y > h) this.y = h;
			if (this.x < 0) this.x = 0;
			if (this.y < 0) this.y = 0;	
		};
		this.draw = function(){ 
			drawArea.beginPath();
			drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
			drawArea.closePath();
			drawArea.fillStyle = this.color;
			drawArea.fill();
		};
	};
	function setup(){ 
		particles = [];
		resizeReset();
		for (let i = 0; i < opts.particleAmount; i++){
			particles.push( new Particle() );
		}
		window.requestAnimationFrame(loop);
	}
	function loop(){ 
		window.requestAnimationFrame(loop);
		drawArea.clearRect(0,0,w,h);
		for (let i = 0; i < particles.length; i++){
			particles[i].update();
			particles[i].draw();
		}
		for (let i = 0; i < particles.length; i++){
			linkPoints(particles[i], particles);
		}
	}
	const canvasBody = document.getElementById("canvas"),
	drawArea = canvasBody.getContext("2d");
	let delay = 200, tid,
	rgb = opts.lineColor.match(/\d+/g);
	resizeReset();
	setup();
