let asteroidArray = [];
let spaceshipArray = [];
let maxAsteroids = 16;
let maxSpaceships = 2;

class Asteroid
{
  constructor()
  {
    this.x = 0;
    this.y = random(30, height-30);
    this.v = random(2,4);
    this.r = random(15,40);
  }
  update()
  {
    this.x += this.v;
    // if reset is needed: pick random diameter and reset x
    if (this.x > width + this.r)
    {
      this.r = random(15, 40);
      this.x = 0 - this.r;
    }
  }
  draw()
  {
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }
}

class Spaceship
{
  constructor(_color)
  {
    this.x = random(0,width);
    this.y = random(0,height);
    this.vx = random(1,2);
    this.vy = random(1,2);
    this.color = _color;
  }
  update()
  {
    this.x+=this.vx;
    this.y+=this.vy;

    if(this.x > width)
    {
      this.x-=width;
    }

    if(this.y > height)
    {
      this.y-=height;
    }
  }
  draw()
  {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, 50, 15);
  }
}

function setup() {
  createCanvas(800, 600);
  for(let i = 0; i < maxAsteroids; i++) {
    let anAsteroid = new Asteroid();
    asteroidArray.push(anAsteroid);
  }

  for(let i=0; i<maxSpaceships; i++)
  {
    let aSpaceship = new Spaceship("blue");
    spaceshipArray.push(aSpaceship);
  }
}

function draw() {
  background("aqua");
  fill(220, 10, 100);

  for(let i = 0; i<asteroidArray.length; i+=1)
  {
    let anAsteroid = asteroidArray[i];
    anAsteroid.update();
    anAsteroid.draw();
  }

  for(let i=0; i<spaceshipArray.length; i++)
  {
    let aSpaceship = spaceshipArray[i];
    aSpaceship.update();
    aSpaceship.draw();
  }
}
