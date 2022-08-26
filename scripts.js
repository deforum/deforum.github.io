/**
 * Web JS perlin noise created thanks to Adrian's soapbox c# implementation
 * https://flafla2.github.io/2014/08/09/perlinnoise.html
 * Eev's article is also really great to understand Ken Perlin’s paper
 * https://eev.ee/blog/2016/05/29/perlin-noise/
 */

var perlin = (function(){

	var permutation;
	var canvas;
	var context;
	var width;
	var height;
	var repeat;
	var p;
	var size;
	var amp;
	var frequence;
	var persistence;
	var octaves;


	return {

		init : function(){

			this.permutation = [ 151,160,137,91,90,15,                 // Hash lookup table as defined by Ken Perlin.  This is a randomly
				131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,    // arranged array of all numbers from 0-255 inclusive.
				190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
				88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
				77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
				102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
				135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
				5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
				223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
				129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
				251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
				49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
				138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
			];

			this.size = 0.006;
			this.repeat = -1;
			this.p = [];
			for(var x=0; x < 512; x++){
				this.p[x] = this.permutation[x%256];
			}
			
			this.canvas = document.getElementById("canvas")
			this.context = this.canvas.getContext("2d");
			this.width = this.canvas.width = window.innerWidth;
			this.height = this.canvas.height = window.innerHeight;
			this.amp = 1.0;
			this.frequency = 1.0;
			this.persistence = 0.1;
			this.octaves = 1;
		},

		fade : function(t){
			return t * t * t * (t * (t * 6 - 15) + 10); // 6t^5 - 15t^4 + 10t^3
		},

		inc : function(num){
			num++;
			if(this.repeat > 0) num %= repeat;

			return num;
		},

		lerp : function(a, b, x){
			return a + x * (b - a);
		},
		
		perlinOctaves : function(x, y, z){					
			
			var total = 0.0;
			var frequency = this.frequency;
			var amplitude = this.amp;
			var maxValue = 0.0;
			
			for(var i = 0; i < this.octaves; i++){
				total += this.perlin(x * frequency, y * frequency, z * frequency) * amplitude;
				maxValue += amplitude;
				
				amplitude *= this.persistence;
				frequency *= 2;
			}
			
			return total/maxValue;
			
		},

		perlin : function(x, y, z){
			
			if(this.repeat > 0){
				x = x % repeat;
				y = y % repeat;
				z = z % repeat;
			}
			

			var xi = (x | 0) & 255;
			var yi = (y | 0) & 255;
			var zi = (z | 0) & 255;
			//console.log("xi, yi, zi : " + xi + ", " + yi + ", " + zi);

			var xf = x - (x | 0);
			var yf = y - (y | 0);
			var zf = z - (z | 0);

			var u = this.fade(xf);
			var v = this.fade(yf);
			var w = this.fade(zf);

			var aaa, aba, aab, abb, baa, bba, bab, bbb;
			aaa = this.p[this.p[this.p[    xi ]+    yi ]+    zi ];
			aba = this.p[this.p[this.p[    xi ]+this.inc(yi)]+    zi ];
			aab = this.p[this.p[this.p[    xi ]+    yi ]+this.inc(zi)];
			abb = this.p[this.p[this.p[    xi ]+this.inc(yi)]+this.inc(zi)];
			baa = this.p[this.p[this.p[this.inc(xi)]+    yi ]+    zi ];
			bba = this.p[this.p[this.p[this.inc(xi)]+this.inc(yi)]+    zi ];
			bab = this.p[this.p[this.p[this.inc(xi)]+    yi ]+this.inc(zi)];
			bbb = this.p[this.p[this.p[this.inc(xi)]+this.inc(yi)]+this.inc(zi)];
			

			var x1, x2, y1, y2;
			x1 = this.lerp( this.grad(aaa, xf, yf, zf),
				this.grad(baa, xf - 1, yf, zf),
				u);
			x2 = this.lerp( this.grad(aba, xf, yf - 1, zf),
				this.grad(bba, xf - 1, yf - 1, zf),
				u);

			y1 = this.lerp(x1, x2, v);

			x1 = this.lerp( this.grad(aab, xf, yf, zf - 1),
				this.grad(bab, xf - 1, yf, zf - 1),
				u);
			x2 = this.lerp( this.grad(abb, xf, yf - 1, zf - 1),
				this.grad(bbb, xf - 1, yf - 1, zf - 1),
				u);

			y2 = this.lerp(x1, x2, v);
			

			return (this.lerp(y1, y2, w) + 1) / 2;



		},

		grad : function(hash, x, y, z){
			var h = hash & 15;									// Take the hashed value and take the first 4 bits of it (15 == 0b1111)
			var u = h < 8 /* 0b1000 */ ? x : y;				// If the most significant bit (MSB) of the hash is 0 then set u = x.  Otherwise y.
			
			var v;											// In Ken Perlin's original implementation this was another conditional operator (?:).  I
																// expanded it for readability.
			
			if(h < 4 /* 0b0100 */)								// If the first and second significant bits are 0 set v = y
				v = y;
			else if(h == 12 /* 0b1100 */ || h == 14 /* 0b1110*/)// If the first and second significant bits are 1 set v = x
				v = x;
			else 												// If the first and second significant bits are not equal (0/1, 1/0) set v = z
				v = z;
			
			return ((h&1) == 0 ? u : -u)+((h&2) == 0 ? v : -v); // Use the last 2 bits to decide if u and v are positive or negative.  Then return their addition.	
		},
		
		draw : function(){
			
			console.log("OCT/PER/FREQ/AMP : " + this.octaves + " / " + this.persistence + " / " + this.frequency + " / " + this.amp);
			
			var imageData = this.context.createImageData(this.width, this.height);
			var index;
			var value;
			for(var x = 0; x < imageData.width; x++){
				for(var y = 0; y < imageData.height; y++){
					index = (x + y * imageData.width) * 4;
					value = perlin.perlinOctaves(x*this.size, y*this.size, 0) * 255;
					imageData.data[index+0] = value;
					imageData.data[index+1] = value;
					imageData.data[index+2] = value;
					imageData.data[index+3] = 255;
				}
			}

			this.context.putImageData(imageData, 0, 0); // at coords 0,0
			
		}

	};


})();

// event.type must be keypress
function getChar(event) {
  if (event.which == null) {
    return String.fromCharCode(event.keyCode) // IE
  } else if (event.which!=0 && event.charCode!=0) {
    return String.fromCharCode(event.which)   // the rest
  } else {
    return null // special key
  }
}


window.onload = function() {
	
	


	perlin.init();
	
	document.onkeypress = function(event) {
		var char = getChar(event || window.event)

		if (!char) return // special key
 
	  
		switch(char){
		case 'f':
			perlin.frequency += 0.1;
			break;
		case 'F':
			perlin.frequency -= 0.1;
			break;
		case 'o':
			perlin.octaves++;
			break;
		case 'O':
			perlin.octaves--;
			break;
		case 'p':
			perlin.persistence += 0.05;
			break;
		case 'P':
			perlin.persistence -= 0.05;
			break;
		case 'a':
			perlin.amp += 0.05;
			break;
		case 'A':
			perlin.amp -= 0.05;
			break;
		}
		perlin.draw();

	  return false

	}
	
	perlin.draw();
	

	

};