class Ground {
    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }
this.body = Bodies.rectangle(x, y, w, h, ground_options)
World.add(world, this.body)
this.w = w
this.h = h
    }
    display() {
rect(this.body.position.x, this.body.position.y, this.w, this.h)
    }
}