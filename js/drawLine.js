function Anim(opt){
				this.opt = opt;
			}
			function drawPoint(p0x, p0y, opt) { //绘制直线的线条	
			 var lw = opt.lw || 1;
			 opt.Node.beginPath(); // 开始绘制线条
			 opt.Node.moveTo(p0x-lw/2, p0y-lw/2);	
			 opt.Node.lineTo(p0x+lw/2, p0y+lw/2);	
			 opt.Node.lineWidth = lw;
			 opt.Node.strokeStyle = opt.color;	
			 opt.Node.stroke();	
			}
			
			Anim.prototype.drawLine = function(endx, endy) {
				var opt = this.opt; //设置对象的属性
				var px = opt.staX;
				var py = opt.staY;
				var step = 0;
				var point = opt.lw / 2;
				var totalStep = Math.max(Math.abs(endx-opt.staX)/point, Math.abs(endy-opt.staY)/point);
				var Time = setInterval(function() {
					/*if (Math.abs(endx-px) > point){
						if (endx > px)
							px += point;
						if (endx < px)
							px -= point;
						if (Math.abs(px - endx) < point){
							px = endx;
						}
					}
					if (Math.abs(endy-py) > point){
						if (endy > py)
							py += point;
						if (endy < py)
							py -= point;
						if (Math.abs(py - endy) < point){
							py = endy;
						}
					}*/
					var mid = step / totalStep;
					if (Math.abs(endx-px) > point){
						px = parseFloat(opt.staX) + parseFloat((endx - opt.staX) * mid);						
					}
					if (Math.abs(endy-py) > point){
						py = parseFloat(opt.staY) + parseFloat((endy - opt.staY)*mid);						
					}
					++step;
					drawPoint(px, py, opt);
					if (step == totalStep){
						clearInterval(Time);
					}
				}, opt.timing);
			}
			
			Anim.prototype.drawTwoOrderBezier = function(p1x, p1y, p2x, p2y){
				var opt = this.opt;
				var px = opt.staX;
				var py = opt.staY;
				var step = 0;
				var Time = setInterval(function(){
					px = (1 - step) * (1 - step) * opt.staX + 2 * step * (1 - step) * p1x + step * step * p2x;
					py = (1 - step) * (1 - step) * opt.staY + 2 * step * (1 - step) * p1y + step * step * p2y;
					step += 0.001;
					drawPoint(px, py, opt);
					if (step >= 1){
						clearInterval(Time);
					}
				},opt.timing);
			}
			Anim.prototype.drawThirdOrderBezier = function(p1x, p1y, p2x, p2y, p3x, p3y){
				var opt = this.opt;
				var px = opt.staX;
				var py = opt.staY;
				var step = 0;
				var Time = setInterval(function(){
					px = (1 - step) * (1 - step) * (1 - step) * opt.staX + 3 * step * (1 - step) * (1 - step) * p1x + 3 * step * step * (1 - step) * p2x + step*step*step*p3x;
					py = (1 - step) * (1 - step) * (1 - step) * opt.staY + 3 * step * (1 - step) * (1 - step) * p1y + 3 * step * step * (1 - step) * p2y + step*step*step*p3y;
					step += 0.001;
					drawPoint(px, py, opt);
					if (step >= 1){
						clearInterval(Time);
					}
				},opt.timing);
			}