(() => { var o, n;
    o = window.whiteboard, (n = window.io(window.location.origin)).on("connect", (function() { console.log("Connected!") })), n.on("load", (function(n) { n.forEach((function(n) { var i = n.start,
                a = n.end,
                c = n.color;
            o.draw(i, a, c, !1) })) })), n.on("draw", (function(n, i, a) { o.draw(n, i, a, !1) })), o.on("draw", (function(o, i, a) { n.emit("draw", o, i, a) })) })();