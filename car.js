AFRAME.registerComponent("move",{
    schema:{rotationspeed:{type:"number",default:0}},
    tick:function(){
        this.data.rotationspeed = this.data.rotationspeed+0.01;
        var rot = this.el.getAttribute('position');
        rot.z = this.data.rotationspeed;
        this.el.setAttribute("position",{x:rot.x,y:rot.y,z:rot.z})
    }

})
