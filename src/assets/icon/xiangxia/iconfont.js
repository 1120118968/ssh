!function (a) {
    var e,
        n = '<svg><symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024"><path d="M511.768733 589.487815c4.173043-5.278213 6.15007-8.363482 8.677637-10.893094 79.849606-79.888492 159.791309-159.678746 239.588727-239.614309 11.828396-11.847839 25.365714-18.319228 42.275849-16.040325 18.47477 2.488681 31.322379 12.634762 38.1069 29.892821 6.692423 17.008372 3.479241 32.766264-7.623631 47.004547-2.40477 3.079128-5.321192 5.776563-8.098445 8.552793-91.454922 91.429339-182.91803 182.852538-274.392394 274.268574-25.4046 25.38618-51.420113 25.326828-76.93523-0.169869C381.428176 590.615499 289.547559 498.680647 197.522656 406.898267c-13.739932-13.70207-20.760836-29.182646-15.848966-48.687886 8.715499-34.593889 50.548256-47.517223 77.216639-23.74889 7.080256 6.306636 13.543458 13.301957 20.264533 20.007683 74.80573 74.747401 149.613506 149.489686 224.361931 224.296439 2.521426 2.521426 4.406356 5.678326 8.250918 10.721179l0 0L511.768733 589.487815 511.768733 589.487815z"  ></path></symbol></svg>',
        t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
    if (t && !a.__iconfont__svg__cssinject__) {
        a.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    !function (e) {
        if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0); else {
            var t = function () {
                document.removeEventListener("DOMContentLoaded", t, !1), e()
            };
            document.addEventListener("DOMContentLoaded", t, !1)
        } else document.attachEvent && (o = e, i = a.document, c = !1, (d = function () {
            try {
                i.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(d, 50)
            }
            n()
        })(), i.onreadystatechange = function () {
            "complete" == i.readyState && (i.onreadystatechange = null, n())
        });

        function n() {
            c || (c = !0, o())
        }

        var o, i, c, d
    }(function () {
        var e, t;
        (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
            t.firstChild ? function (e, t) {
                t.parentNode.insertBefore(e, t)
            }(e, t.firstChild) : t.appendChild(e)
        }(t, document.body))
    })
}(window);