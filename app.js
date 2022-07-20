function demo() 
{
        const can = document.getElementById('canvas');
        if(can.getContext)
        {
              const c = can.getContext('2d');
              can.width = innerWidth;
              can.height = innerHeight;
              // alert(c.width);
              // alert(c.height);
              class circle 
              {
                     constructor(x,y,r,color)
                     {
                            this.x = x;
                            this.y = y;
                            this.r = r;
                            this.col = color;


                     }
                     draw() 
                     {
                            c.beginPath();
                            c.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
                            // c.fillRect(this.x,this.y,this.w,this.h);
                            c.fillStyle = this.col;
                            c.fill();
                     }
              }
              let x = can.width/2;
              let y = can.height/2;
              const obj = new circle(x,y,50,'red');
              obj.draw();


             class circles
             {
                    constructor(x,y,r,color,v)
                    {
                     this.x = x;
                     this.y = y;
                     this.r = r;
                     this.col = color;
                     this.v = v;

                    }
                    draw() 
                    {
                           c.beginPath();
                           c.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
                           // c.fillRect(this.x,this.y,this.w,this.h);
                           c.fillStyle = this.col;
                           c.fill();
                    }
                    update()
                    {
                      this.draw();
                      this.x += this.v.x;
                      this.y += this.v.y;
                    }
                    
             }
            
              let xx = can.width/2;
              let yy = can.height/2;
              const one = new circles(xx,yy,20,'blue',{x:-1,y:-1});
              const two = new circles(xx,yy,20,'yellow',{x:1,y:1});
              const three = new circles(xx,yy,20,'pink',{x:-1,y:1});
              const four = new circles(xx,yy,20,'orange',{x:1,y:-1});

              const arr = [one,two,three,four];
  
             
             function a() 
             {
              requestAnimationFrame(a)
              arr.forEach((one)=>
              {
                     one.update();
              })
             }
        
              a();

        }
}