$(function () {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
//初始化页面新的数量
    var num = 10;
    // var ww = window.innerWidth;
    var ww = window.screen.width;
    // var wh = window.innerHeight;
    var wh = window.screen.height;

    var hearts = [];

    function init() {
        requestAnimationFrame(render);
        canvas.width = ww;
        canvas.height = wh;
        for (var i = 0; i < num; i++) {
            hearts.push(new Heart());
        }
        //      console.log(hearts)
    }
    var timeaur;
    $("body").on("mousedown", function(event) {
        var e = event || window.event;
        var x = e.clientX,
            y = e.clientY;
        timeaur = setInterval(function() {
            console.log(123123)
            hearts.push(new Heart(x, y));
            num++
        }, 100)
        $("body").on("mousemove", function(event) {

            var e = event || window.event;
            var x = e.clientX,
                y = e.clientY;
            hearts.push(new Heart(x, y));
            num++
        })
    })

    $("body").on("mouseup", function() {
        clearInterval(timeaur)
        $("body").off("mousemove")
    })

    function Heart(x, y) {
        if (x) {
            this.x = x;
            this.y = y;
        } else {
            this.x = Math.random() * ww;
            this.y = Math.random() * wh;
        }

        this.opacity = (Math.random() * 0.5) + 0.5;
        this.vel = {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4
        };
        this.targetScale = (Math.random() * 0.15) + 0.02;
        this.scale = this.targetScale * Math.random();
    }

    Heart.prototype.update = function() {
        this.x += this.vel.x;
        this.y += this.vel.y;

        this.scale += (this.targetScale - this.scale) * 0.01;
        if (this.x - this.width > ww || this.x + this.width < 0) {
            this.scale = 0;
            this.x = Math.random() * ww;
        }
        if (this.y - this.height > wh || this.y + this.height < 0) {
            this.scale = 0;
            this.y = Math.random() * wh;
        }
        this.width = 473.8 * this.scale;
        this.height = 408.6 * this.scale;
    }
    Heart.prototype.draw = function() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(heartImage, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
    }

    function render() {
        ctx.clearRect(0, 0, ww, wh);
        // ctx.globalAlpha = 1;
        // ctx.fillStyle = "rgba(255,255,255,0.3)";
        // ctx.fillRect(0, 0, ww, wh);
        for (var i = 0; i < num; i++) {
            hearts[i].update();
            hearts[i].draw();
        }
        requestAnimationFrame(render);
    }

    var heartImage = new Image();
    heartImage.onload = init();
    // heartImage.src = "data:image/svg+xml;base64," +
    //     "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NzMuOHB4IiBoZWlnaHQ9IjQwOC42cHgiIHZpZXdCb3g9IjAgMCA0NzMuOCA0MDguNiI+PHBhdGggZmlsbD0iI2QzMjkzMiIgZD0iTTQwNC42LDE2LjZDMzg1LjQsNi4xLDM2My41LDAsMzQwLDBjLTQxLjUsMC03OC41LDE4LjktMTAzLDQ4LjVDMjEyLjMsMTguOSwxNzUuMywwLDEzMy44LDAgYy0yMy4zLDAtNDUuMyw2LjEtNjQuNSwxNi42QzI3LjksMzkuNSwwLDgzLjQsMCwxMzMuOWMwLDE0LjQsMi40LDI4LjMsNi42LDQxLjJDMjkuNiwyNzguNCwyMzcsNDA4LjYsMjM3LDQwOC42IHMyMDcuMi0xMzAuMiwyMzAuMi0yMzMuNWM0LjMtMTIuOSw2LjYtMjYuOCw2LjYtNDEuMkM0NzMuOCw4My40LDQ0NS45LDM5LjYsNDA0LjYsMTYuNnoiLz48L3N2Zz4=";
    heartImage.src = "pics/snow.png";
    window.addEventListener("resize", function() {
        ww = window.innerWidth;
        wh = window.innerHeight;
    })
})