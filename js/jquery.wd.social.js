(function ($) {
    SocialTabsObject = function (a, b) {
        this.create(a, b)
    };
    $.extend(SocialTabsObject.prototype, {
        version: "1.6",
        create: function (b, c) {
            this.defaults = {
                widgets: "twitter,facebook,fblike,fbrec,google,rss,flickr,delicious,youtube,digg,pinterest,lastfm,dribbble,vimeo,stumbleupon,tumblr,deviantart,linkedin,instagram",
                twitter: {
                    title: "Últimos Tweets",
                    link: true,
                    follow: "Síguenos en Twitter",
                    followId: "",
                    limit: 10,
                    retweets: false,
                    replies: false,
                    thumb: false,
                    icon: "twitter.png"
                },
                facebook: {
                    title: "Facebook",
                    link: true,
                    follow: "Síguenos en Facebook",
                    limit: 10,
                    text: "contentSnippet",
                    icon: "facebook.png"
                },
                fblike: {
                    title: "",
                    link: false,
                    follow: "",
                    limit: 36,
                    stream: false,
                    header: true,
                    icon: "fblike.png"
                },
                fbrec: {
                    title: "",
                    link: false,
                    follow: "",
                    header: true,
                    icon: "fbrec.png"
                },
                google: {
                    title: "Google +1",
                    link: true,
                    follow: "Add to Circles",
                    pageId: "",
                    header: 0,
                    image_width: 75,
                    image_height: 75,
                    api_key: "AIzaSyB1UZNnscjMDjjH-pi_XbnLRld2wAqi3Ek",
                    shares: true,
                    limit: 10,
                    icon: "google.png"
                },
                youtube: {
                    title: "",
                    link: false,
                    follow: "",
                    limit: 10,
                    feed: "uploads",
                    subscribe: true,
                    icon: "youtube.png"
                },
                flickr: {
                    title: "Flickr",
                    link: true,
                    follow: "",
                    lang: "en-us",
                    limit: 20,
                    icon: "flickr.png"
                },
                delicious: {
                    title: "Delicious",
                    link: true,
                    follow: "Follow on Delicious",
                    limit: 10,
                    icon: "delicious.png"
                },
                digg: {
                    title: "Latest Diggs",
                    link: false,
                    limit: 10,
                    icon: "digg.png",
                    hdrBg: "#ececec",
                    hdrTxt: "#555",
                    tabBg: "#4684be",
                    tabTxt: "#b3daff",
                    tabOnTxt: "#d41717",
                    bdyBg: "#fff",
                    stryBrdr: "#ccc",
                    lnk: "#105cb6",
                    descTxt: "#999",
                    subHd: "#999"
                },
                pinterest: {
                    title: "Pinterest",
                    link: true,
                    follow: "Follow on Pinterest",
                    limit: 10,
                    icon: "pinterest.png"
                },
                rss: {
                    title: "Subscribe to our RSS",
                    link: true,
                    follow: "Subscribe",
                    limit: 10,
                    text: "contentSnippet",
                    icon: "rss.png"
                },
                lastfm: {
                    title: "Last.fm",
                    link: true,
                    follow: "",
                    limit: 20,
                    feed: "recenttracks",
                    icon: "lastfm.png"
                },
                dribbble: {
                    title: "Dribbble",
                    link: true,
                    follow: "Follow on Dribbble",
                    limit: 10,
                    feed: "shots",
                    icon: "dribbble.png"
                },
                vimeo: {
                    title: "Vimeo",
                    link: true,
                    follow: "Follow on Vimeo",
                    limit: 10,
                    feed: "likes",
                    thumb: "small",
                    stats: true,
                    icon: "vimeo.png"
                },
                stumbleupon: {
                    title: "Stumbleupon",
                    link: true,
                    follow: "Follow",
                    limit: 10,
                    feed: "favorites",
                    icon: "stumbleupon.png"
                },
                tumblr: {
                    title: "Tumblr",
                    link: true,
                    follow: "Follow",
                    limit: 10,
                    thumb: 250,
                    video: 250,
                    icon: "tumblr.png"
                },
                deviantart: {
                    title: "Deviantart",
                    link: true,
                    follow: "Follow",
                    limit: 10,
                    icon: "deviantart.png"
                },
                linkedin: {
                    plugins: "CompanyProfile,MemberProfile,CompanyInsider,JYMBII",
                    CompanyInsider: "innetwork,newhires,jobchanges",
                    MemberProfile: "true",
                    CompanyProfile: "true",
                    icon: "linkedin.png"
                },
                instagram: {
                    title: "Instagram",
                    limit: 10,
                    accessToken: "",
                    redirectUrl: "",
                    clientId: "",
                    thumb: "low_resolution",
                    comments: 3,
                    likes: 8,
                    icon: "instagram.png"
                },
                external: true,
                method: "slide",
                position: "fixed",
                location: "right",
                align: "top",
                offset: 10,
                speed: 600,
                loadOpen: false,
                autoClose: false,
                width: 360,
                height: 600,
                start: 0,
                controls: true,
                rotate: {
                    direction: "down",
                    delay: 6E3
                },
                wrapper: "dcsmt",
                content: "dcsmt-content",
                slider: "dcsmt-slider",
                slides: "tab-content",
                tabs: "social-tabs",
                classOpen: "dcsmt-open",
                classClose: "dcsmt-close",
                classToggle: "dcsmt-toggle",
                classSlide: "dcsmt-slide",
                active: "active",
                zopen: 1E3,
                imagePath: "images/icons/"
            };
            this.o = {};
            this.timer_on = 0;
            this.id = "dcsmt-" + $(b).index();
            this.timerId = "";
            this.o = $.extend(true, this.defaults, c);
            $(b).addClass(this.o.content).wrap('<div id="' + this.id + '" class="' + this.o.wrapper + '" />');
            var d = $("#" + this.id),
                $c = $("." + this.o.content, d),
                ca = "active";
            d.css({
                width: this.o.width + "px"
            });
            $c.append('<ul class="' + this.o.tabs + '"></ul>').append('<ul class="' + this.o.slider + '"></ul>');
            var e = this.o.tabs,
                slider = this.o.slider,
                slides = this.o.slides,
                self = this;
            path = this.o.imagePath;
            $.each(this.o.widgets.split(","), function (i, v) {
                var a = i == 0 ? "dcsmt-" + v + " first" : "dcsmt-" + v;
                $("." + e, $c).append('<li class="' + a + '"><a href="#" rel="' + i + '" title="' + v + '"><img src="' + path + self.o[v].icon + '" alt="" rel="' + v + '" /></a></li>');
                $("." + slider, $c).append('<li class="' + slides + " tab-" + v + '"><div class="tab-inner"></div></li>')
            });
            var f = $("." + this.o.slider, d),
                $s = $("." + this.o.slides, d),
                $t = $("." + this.o.tabs, d),
                $l = $("li", $t);
            if (this.o.method == "slide") {
                var g = this.o.align == "left" || this.o.align == "right" ? "align-" + this.o.align : "align-top";
                d.addClass(this.o.location).addClass(g).css({
                    position: this.o.position
                })
            } else d.addClass("static");
            hb = this.o.height - parseInt($s.css("border-top-width"), 10) - parseInt($s.css("padding-top"), 10) - parseInt($s.css("border-bottom-width"), 10) - parseInt($s.css("padding-bottom"), 10);
            wb = this.o.width - parseInt($s.css("border-right-width"), 10) - parseInt($s.css("padding-right"), 10) - parseInt($s.css("border-left-width"), 10) - parseInt($s.css("padding-left"), 10);
            $s.css({
                height: hb + "px",
                width: wb + "px"
            });
            $(".tab-inner", $s).css({
                height: hb + "px",
                width: wb + "px"
            });
            if (this.o.controls) {
                $c.append('<div class="controls"><ul><li class="close"><a href="#" class="' + this.o.classClose + ' close"></a></li><li><a href="#" class="next"></a></li><li><a href="#" class="play"></a></li><li><a href="#" class="prev"></a></li></ul></div>');
                $(".controls", $c).css({
                    width: wb + "px"
                })
            }
            if (this.o.method == "slide") this.dcslide(d, $t, $s, $l);
            else this.dcstatic(d, $t, $l); if (this.o.loadOpen == true) this.open(d);
            this.slickTabs(this.o.start, d, $t, $s);
            this.addevents(d, $t, $s, $l)
        },
        addevents: function (a, t, s, l) {
            var b = this,
                ca = this.o.active,
                cw = this.o.wrapper,
                co = this.o.classOpen,
                cc = this.o.classClose,
                ct = this.o.classToggle,
                cs = this.o.classSlide,
                m = this.o.method,
                start = this.o.start;
            $("a", l).click(function () {
                var i = parseInt($(this).attr("rel"), 10);
                if ($(this).parent().hasClass(ca)) {
                    if (m == "slide") b.close(a, l, s)
                } else {
                    if (!$("li.active", t).length && m == "slide") b.open(a);
                    b.slickTabs(i, a, t, s)
                }
                return false
            });
            /*
            a.hover(function () {
                if ($(".tab-active .stream").length) $(".controls", this).fadeIn();
                else $(".controls", this).hide()
            }, function () {
                $(".controls", this).fadeOut()
            });
            */
            $(".controls", a).delegate("a", "click", function () {
                var x = $(this).attr("class"),
                    stream = $(".tab-active .stream", a);
                switch (x) {
                case "prev":
                    b.pauseTimer();
                    ticker(stream, "prev");
                    break;
                case "next":
                    b.pauseTimer();
                    ticker(stream, "next");
                    break;
                case "play":
                    b.rotate(a);
                    $(".controls .play").removeClass("play").addClass("pause");
                    break;
                case "pause":
                    b.pauseTimer();
                    break
                }
                return false
            });
            if (this.o.method == "slide") {
                $("." + co).click(function (e) {
                    if (!a.hasClass(ca)) b.open(a);
                    var i = parseInt($(this).attr("rel"), 10) ? parseInt($(this).attr("rel"), 10) : start;
                    b.slickTabs(i, a, t, s);
                    e.preventDefault()
                });
                $("." + cc).click(function (e) {
                    if (a.hasClass(ca)) b.close(a, l, s);
                    e.preventDefault()
                });
                $("." + ct).click(function (e) {
                    if (a.hasClass(ca)) b.close(a, l, s);
                    else {
                        b.open(a);
                        var i = parseInt($(this).attr("rel"), 10) ? parseInt($(this).attr("rel"), 10) : start;
                        b.slickTabs(i, a, t, s)
                    }
                    e.preventDefault()
                })
            }
            $("." + cs).click(function (e) {
                if (m == "slide") if (!a.hasClass(ca)) b.open(a);
                var i = parseInt($(this).attr("rel"), 10) ? parseInt($(this).attr("rel"), 10) : start;
                b.slickTabs(i, a, t, s);
                e.preventDefault()
            });
            if (this.o.external) s.delegate("a", "click", function () {
                    this.target = "_blank"
                });
            if (this.o.autoClose == true) $("body").mouseup(function (e) {
                    if (a.hasClass(ca) && !$(e.target).parents().hasClass(cw)) if (!$(e.target).hasClass(co) || !$(e.target).hasClass(cs)) b.close(a, l, s)
                })
        },
        dcslide: function (a, t, s, l) {
            t.css({
                position: "absolute"
            });
            s.css({
                position: "relative"
            });
            tw = l.outerWidth(true);
            th = t.outerHeight();
            var b = {
                marginLeft: "-" + this.o.width + "px",
                top: this.o.offset + "px",
                left: 0
            };
            var c = {
                top: 0,
                right: 0,
                marginRight: "-" + tw + "px",
                width: tw + "px"
            };
            switch (this.o.location) {
            case "right":
                b = {
                    marginRight: "-" + this.o.width + "px",
                    top: this.o.offset + "px",
                    right: 0
                };
                c = {
                    top: 0,
                    left: 0,
                    marginLeft: "-" + tw + "px",
                    width: tw + "px"
                };
                break;
            case "top":
                b = {
                    marginTop: "-" + this.o.height + "px",
                    top: 0
                };
                c = {
                    bottom: 0,
                    marginBottom: "-" + th + "px"
                };
                if (this.o.align == "left") {
                    a.css({
                        left: this.o.offset + "px"
                    });
                    t.css({
                        left: 0
                    })
                } else {
                    a.css({
                        right: this.o.offset + "px"
                    });
                    t.css({
                        right: 0
                    })
                }
                break;
            case "bottom":
                b = {
                    marginBottom: "-" + this.o.height + "px",
                    bottom: 0
                };
                c = {
                    top: 0,
                    marginTop: "-" + th + "px"
                };
                if (this.o.align == "left") {
                    a.css({
                        left: this.o.offset + "px"
                    });
                    t.css({
                        left: 0
                    })
                } else {
                    a.css({
                        right: this.o.offset + "px"
                    });
                    t.css({
                        right: 0
                    })
                }
                break
            }
            a.css(b).addClass("sliding");
            t.css(c)
        },
        dcstatic: function (a, t, l) {
            th = l.outerHeight();
            a.addClass(this.o.active);
            t.css({
                height: th + "px"
            })
        },
        slickTabs: function (i, a, t, s) {
            var b = this;
            $("li", t).removeClass(this.o.active).eq(i).addClass(this.o.active);
            s.removeClass("tab-active").hide().eq(i).addClass("tab-active").show();
            if (!$("li:eq(" + i + ")", t).hasClass("loaded") && a.hasClass(this.o.active)) {
                var c = $("li:eq(" + i + ") img", t).attr("rel");
                var d = createWidget(this.id, c, this.o[c + "Id"], this.o[c], this.o.width, this.o.height);
                $("." + this.o.slides + ":eq(" + i + ") .tab-inner", a).empty().hide().append(d).fadeIn(600).addClass("loaded");
                $("li:eq(" + i + ")", t).addClass("loaded");
                if (c == "facebook" || c == "fblike" || c == "fbrec") fbLink(this.o[c + "Id"], $(".btn-type-" + c));
                else if (c == "linkedin") $.getScript("http://platform.linkedin.com/in.js?async=true", function () {
                        IN.init()
                    })
            }
            if (!a.hasClass(this.o.active) && this.o.method == "slide") $("li", t).removeClass(this.o.active);
            if (this.o.rotate.delay > 0) {
                b.pauseTimer();
                b.rotate(a);
                $(".controls .play").removeClass("play").addClass("pause")
            }
        },
        open: function (a) {
            var b = {
                marginBottom: "-=5px"
            }, p2 = {
                    marginBottom: 0
                }, self = this;
            a.css({
                zIndex: this.o.zopen
            });
            switch (this.o.location) {
            case "top":
                b = {
                    marginTop: "-=5px"
                }, p2 = {
                    marginTop: 0
                };
                break;
            case "left":
                b = {
                    marginLeft: "-=5px"
                }, p2 = {
                    marginLeft: 0
                };
                break;
            case "right":
                b = {
                    marginRight: "-=5px"
                }, p2 = {
                    marginRight: 0
                };
                break
            }
            a.animate(b, 100).animate(p2, this.o.speed).addClass(this.o.active)
        },
        close: function (a, l, s) {
            var b = this,
                ca = this.o.active;
            if (a.hasClass(ca)) {
                var p = {
                    "marginBottom": "-" + this.o.height + "px"
                };
                switch (this.o.location) {
                case "top":
                    p = {
                        "marginTop": "-" + this.o.height + "px"
                    };
                    break;
                case "left":
                    p = {
                        "marginLeft": "-" + this.o.width + "px"
                    };
                    break;
                case "right":
                    p = {
                        "marginRight": "-" + this.o.width + "px"
                    };
                    break
                }
                a.animate(p, this.o.speed, function () {
                    a.removeClass(ca);
                    l.removeClass(ca);
                    s.removeClass("tab-active")
                });
                b.pauseTimer()
            }
        },
        rotate: function (a) {
            var b = this,
                stream = $(".tab-active .stream", a),
                speed = this.o.speed,
                delay = this.o.rotate.delay,
                r = this.o.rotate.direction == "up" ? "prev" : "next";
            this.timer_on = 1;
            this.timerId = setTimeout(function () {
                ticker(stream, r, speed);
                b.rotate(a)
            }, delay)
        },
        pauseTimer: function () {
            clearTimeout(this.timerId);
            this.timer_on = 0;
            $(".controls .pause").removeClass("pause").addClass("play")
        }
    });
    $.fn.dcSocialTabs = function (a, b) {
        var d = {};
        this.each(function () {
            var s = $(this);
            d = s.data("socialtabs");
            if (!d) {
                d = new SocialTabsObject(this, a, b);
                s.data("socialtabs", d)
            }
        });
        return d
    };

    function createWidget(b, d, e, o, w, h) {
        var f = b + "-" + d,
            c = "",
            t = "",
            p = "",
            href = "",
            n = o.limit,
            stream = '<ul id="' + f + '" class="stream"></ul>',
            data, frl = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0";
        switch (d) {
        case "twitter":
            var g = e.split("/"),
                q = e.split("#"),
                replies = o.replies == true ? "&exclude_replies=false" : "&exclude_replies=true";
            var j = "&include_entities=true&include_rts=" + o.retweets + replies + "&callback=?";
            url = g.length > 1 ? "https://api.twitter.com/1/lists/statuses.json?list_id=" + g[1] + "&per_page=" + n + j : "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + g[0] + "&count=" + n + j;
            url = q.length > 1 ? "http://search.twitter.com/search.json?q=" + encodeURIComponent(q[1]) + "&rpp=" + n + "&include_entities=true&result_type=mixed" : url;
            href = "http://www.twitter.com/";
            href += g.length > 1 || q.length > 1 ? o.followId : e;
            c += stream;
            getFeed(f, d, url, data, o, e);
            break;
        case "facebook":
            c += stream;
            url = "http://www.facebook.com/feeds/page.php?id=" + e + "&format=rss20";
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent(url);
            getFeed(f, d, url, data, o, e);
            break;
        case "fblike":
            src = "http://www.facebook.com/plugins/likebox.php?id=" + e + "&width=" + w + "&connections=" + n + "&stream=" + o.stream + "&header=" + o.header + "&height=" + h;
            c += getFrame(src, w, h);
            break;
        case "fbrec":
            src = "http://www.facebook.com/plugins/recommendations.php?site=" + e + "&width=" + w + "&height=" + h + "&header=" + o.header + "&colorscheme=light&font&border_color";
            c += getFrame(src, w, h);
            break;
        case "google":
            href = "https://plus.google.com/" + e;
            if (o.header > 0) {
                var k = o.header == 1 ? 69 : 131;
                var l = o.header == 1 ? "small" : "standard";
                c += '<link href="https://plus.google.com/' + o.pageId + '" rel="publisher" /><script type="text/javascript">window.___gcfg = {lang: "en"};(function(){var po = document.createElement("script");po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po, s);})();<\/script><div class="google-page ' + l + '"><g:plus href="https://plus.google.com/' + o.pageId + '" width="' + w + '" height="' + k + '" theme="light"></g:plus></div>'
            }
            c += stream;
            url = "https://www.googleapis.com/plus/v1/people/" + e + "/activities/public";
            data = {
                key: o.api_key,
                maxResults: n,
                prettyprint: false,
                fields: "items(id,kind,object(attachments(displayName,fullImage,id,image,objectType,url),id,objectType,plusoners,replies,resharers,url),published,title,url,verb)"
            };
            getFeed(f, d, url, data, o, e);
            break;
        case "youtube":
            href = "http://www.youtube.com/user/" + e;
            if (o.subscribe) c += '<iframe src="http://www.youtube.com/subscribe_widget?p=' + e + '" class="youtube-subscribe" scrolling="no" frameBorder="0"></iframe>';
            c += stream;
            url = "http://gdata.youtube.com/feeds/base/users/" + e + "/" + o.feed + "?alt=rss&v=2&orderby=published&client=ytapi-youtube-profile";
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent(url);
            getFeed(f, d, url, data, o, e);
            break;
        case "flickr":
            href = "http://www.flickr.com/photos/" + e;
            c += stream;
            url = "http://api.flickr.com/services/feeds/photos_public.gne?id=" + e + "&lang=" + o.lang + "&format=json&jsoncallback=?";
            getFeed(f, d, url, data, o, e);
            break;
        case "delicious":
            href = "http://www.delicious.com/" + e;
            c += stream;
            url = "http://feeds.delicious.com/v2/json/" + e;
            getFeed(f, d, url, data, o, e);
            break;
        case "digg":
            href = "http://digg.com/users/" + e;
            c += '<div id="' + f + '"><a href="http://digg.com/users/' + e + '"></a></div><script type="text/javascript">(function() { var s, s1, diggWidget = {id: "' + f + '", layout: 1, colors: {hdrBg: "' + o.hdrBg + '", hdrTxt: "' + o.hdrTxt + '", tabBg: "' + o.tabBg + '", tabTxt: "' + o.tabTxt + '", tabOnTxt: "' + o.tabOnTxt + '", bdyBg: "' + o.bdyBg + '", stryBrdr: "' + o.stryBrdr + '", lnk: "' + o.lnk + '", descTxt: "' + o.descTxt + '", subHd: "' + o.subHd + '"}, title: "' + o.title + '", width: ' + w + ', requests: [{t: "' + e + '", p: {count: "' + n + '", method: "user.getDugg", username: "' + e + '"}}], hide: {}}; if (window.DiggWidget) { if (typeof DiggWidget == "function") { new DiggWidget(diggWidget); } else { DiggWidget.push(diggWidget); } } else { DiggWidget = [diggWidget]; s = document.createElement("SCRIPT"); s.type = "text/javascript"; s.async = true; s.src = "http://widgets.digg.com/widgets.js";s1= document.getElementsByTagName("SCRIPT")[0]; s1.parentNode.insertBefore(s, s1); } })();<\/script>';
            break;
        case "pinterest":
            href = "http://www.pinterest.com/" + e;
            c += stream;
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent(href + "/feed.rss");
            getFeed(f, d, url, data, o, e);
            break;
        case "rss":
            href = e;
            c += stream;
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent(href);
            getFeed(f, d, url, data, o, e);
            break;
        case "lastfm":
            href = "http://www.last.fm/user/" + e;
            c += stream;
            var m = o.feed == "lovedtracks" ? "2.0" : "1.0";
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent("http://ws.audioscrobbler.com/" + m + "/user/" + e + "/" + o.feed + ".rss");
            getFeed(f, d, url, data, o, e);
            break;
        case "dribbble":
            href = "http://www.dribbble.com/" + e;
            url = o.feed == "likes" ? "http://api.dribbble.com/players/" + e + "/shots/likes" : "http://api.dribbble.com/players/" + e + "/shots";
            c += stream;
            getFeed(f, d, url, data, o, e);
            break;
        case "vimeo":
            href = "http://www.vimeo.com/" + e;
            c += stream;
            url = "http://vimeo.com/api/v2/" + e + "/" + o.feed + ".json";
            getFeed(f, d, url, data, o, e);
            break;
        case "stumbleupon":
            href = "http://www.stumbleupon.com/stumbler/" + e;
            c += stream;
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent("http://rss.stumbleupon.com/user/" + e + "/" + o.feed);
            getFeed(f, d, url, data, o, e);
            break;
        case "tumblr":
            href = "http://" + e + ".tumblr.com";
            c += stream;
            url = "http://" + e + ".tumblr.com/api/read/json?callback=?";
            getFeed(f, d, url, data, o, e);
            break;
        case "deviantart":
            href = "http://" + e + ".deviantart.com";
            c += stream;
            url = frl + "&num=" + n + "&callback=?&q=" + encodeURIComponent("http://backend.deviantart.com/rss.xml?type=deviation&q=by%3A" + e + "+sort%3Atime+meta%3Aall");
            getFeed(f, d, url, data, o, e);
            break;
        case "linkedin":
            e = e.split(",");
            $.each(o.plugins.split(","), function (i, v) {
                if (e[i]) {
                    var a = v == "CompanyInsider" ? ' data-modules="' + o[v] + '"' : "";
                    a = v == "MemberProfile" || v == "CompanyProfile" ? ' data-related="' + o[v] + '"' : a;
                    c += getLinkedIn(e[i], v, a, w - 20)
                }
            });
            break;
        case "instagram":
            href = "#";
            c += stream;
            url = "https://api.instagram.com/v1";
            var g = e.substr(0, 1);
            var q = e.split(g);
            var r = encodeURIComponent(q[1]);
            var s = "";
            switch (g) {
            case "?":
                var p = q[1].split("/");
                s = "&lat=" + p[0] + "&lng=" + p[1] + "&distance=" + p[2];
                url += "/media/search";
                break;
            case "#":
                url += "/tags/" + r + "/media/recent";
                break;
            case "!":
                url += "/users/" + r + "/media/recent";
                break;
            case "@":
                url += "/locations/" + r + "/media/recent";
                break
            }
            if (o.accessToken == "") if (location.hash) o.accessToken = location.hash.split("=")[1];
                else location.href = "https://instagram.com/oauth/authorize/?client_id=" + o.clientId + "&redirect_uri=" + o.redirectUrl + "&response_type=token";
            url += "?access_token=" + o.accessToken + "&client_id=" + o.clientId + s;
            getFeed(f, d, url, data, o, e);
            break
        }
        if (d != "digg" && d != "linkedin") {
            if (o.follow) p = o.follow != "" ? '<a href="' + href + '" class="dcsmt-btn btn-type-' + d + '"  style="text-transform: uppercase;">' + o.follow + "</a>" : "";
            t = o.title != "" ? o.title : "";
            t = o.link ? '<a href="' + href + '" class="btn-type-' + d + '" style="text-transform: uppercase;">' + t + "</a>" : t;
            c = t != "" ? '<div class="profile"><h3>' + t + "</h3>" + p + "</div>" + c : c
        }
        return c
    }
    function getFeed(A, B, C, D, o, E) {
        var x = "#" + A,
            html = [],
            d = "";
        jQuery.ajax({
            url: C,
            data: D,
            cache: true,
            dataType: "jsonp",
            success: function (a) {
                var w = "",
                    px = $(x).width();
                switch (B) {
                case "google":
                    w = a.error ? a.error : "";
                    a = a.items;
                    break;
                case "flickr":
                    a = a.items;
                    break;
                case "instagram":
                    a = a.data;
                    break;
                case "twitter":
                    w = a.error ? a.error : "";
                    var y = E.split("#");
                    if (y.length > 1) a = a.results;
                    break;
                case "dribbble":
                    a = a.shots;
                    break;
                case "tumblr":
                    a = a.posts;
                    break;
                case "delicious":
                    break;
                case "vimeo":
                    break;
                default:
                    if (a.responseStatus == 200) a = a.responseData.feed.entries;
                    else w = a.responseDetails;
                    break
                }
                if (w == "") $.each(a, function (i, b) {
                        if (i < o.limit) {
                            d = b.publishedDate;
                            var x = '<a href="' + b.link + '" class="title">' + b.title + "</a>";
                            html.push("<li>");
                            switch (B) {
                            case "twitter":
                                d = parseTwitterDate(b.created_at);
                                var c = y.length > 1 ? b.from_user : b.user.screen_name;
                                var e = y.length > 1 ? b.profile_image_url : b.user.profile_image_url;
                                if (o.thumb == true) html.push('<a href="http://www.twitter.com/' + c + '" class="thumb"><img src="' + e + '" alt="" /></a>');
                                html.push(linkify(b.text));
                                break;
                            case "facebook":
                                html.push(x);
                                html.push(b[o.text].replace(/\/l.php/gi, "http://www.facebook.com/l.php"));
                                break;
                            case "delicious":
                                d = b.dt;
                                html.push('<a href="' + b.u + '" class="title">' + b.d + "</a>");
                                html.push('<span class="text">' + b.n + "</span>");
                                break;
                            case "rss":
                                html.push(x + b[o.text]);
                                break;
                            case "pinterest":
                                var j = $("img", b.content).attr("src") ? '<a href="' + b.link + '"><img src="' + $("img", b.content).attr("src") + '" alt="" /></a>' : "";
                                html.push(j);
                                html.push(b.contentSnippet);
                                break;
                            case "youtube":
                                html.push(x);
                                var v = [];
                                v = parseQ(b.link);
                                html.push('<a href="' + b.link + '" class="thumb"><img src="http://i.ytimg.com/vi/' + v["v"] + '/default.jpg" alt="" /></a>');
                                html.push(b.contentSnippet);
                                break;
                            case "flickr":
                                d = "";
                                html.push('<a href="' + b.link + '" class="thumb" title="' + b.title + '"><img src="' + b.media.m + '" alt="" /></a>');
                                break;
                            case "lastfm":
                                html.push('<a href="' + b.content + '" class="title">' + b.title + "</a>");
                                break;
                            case "dribbble":
                                d = b.created_at;
                                html.push('<a href="' + b.url + '" class="thumb"><img src="' + b.image_teaser_url + '" alt="' + b.title + '" />');
                                html.push('<span class="meta"><span class="views">' + num(b.views_count) + '</span><span class="likes">' + num(b.likes_count) + '</span><span class="comments">' + num(b.comments_count) + "</span></span>");
                                break;
                            case "deviantart":
                                html.push(x + b.content);
                                break;
                            case "tumblr":
                                d = b.date;
                                var x = '<a href="' + b["url-with-slug"] + '">',
                                    z = "";
                                switch (b.type) {
                                case "photo":
                                    x += b["photo-caption"] + "</a>";
                                    z += '<img src="' + b["photo-url-" + o.thumb] + '" alt="" />';
                                    break;
                                case "video":
                                    x += b["video-caption"] + "</a>";
                                    z += o.video != "400" ? b["video-player-" + o.video] : b["video-player"];
                                    break;
                                case "regular":
                                    x += b["regular-title"] + "</a>";
                                    z += b["regular-body"];
                                    break;
                                case "quote":
                                    x += b["quote-source"] + "</a>";
                                    z += b["quote-text"];
                                    break;
                                case "audio":
                                    x = b["id3-artist"] ? '<a href="' + b["url-with-slug"] + '">' + b["id3-artist"] + " - " + b["id3-album"] + "</a>" : "";
                                    x += b["id3-title"] ? '<a href="' + b["url-with-slug"] + '" class="track">' + b["id3-title"] + "</a>" : "";
                                    z += b["audio-caption"] ? b["audio-caption"] : "";
                                    z += b["audio-player"] ? b["audio-player"] : "";
                                    break;
                                case "conversation":
                                    x += b["conversation-title"] + "</a>";
                                    z += b["conversation-text"];
                                    break;
                                case "link":
                                    x = '<a href="' + b["link-url"] + '">' + b["link-text"] + "</a>";
                                    z += b["link-description"];
                                    break
                                }
                                html.push(x);
                                html.push(z);
                                break;
                            case "vimeo":
                                d = "", f = o.feed, at = b.name, tx = b.description;
                                if (f == "channels") {
                                    if (b.logo != "") html.push('<a href="' + b.url + '" class="logo"><img src="' + b.logo + '" alt="" width="' + px + '" /></a>')
                                } else if (f == "groups") html.push('<a href="' + b.url + '" class="thumb"><img src="' + b.thumbnail + '" alt="" /></a>');
                                else {
                                    var n = "thumbnail_" + o.thumb,
                                        at = b.title,
                                        tx = f != "albums" ? b.duration + " secs" : b.description;
                                    html.push('<a href="' + b.url + '" class="thumb"><img src="' + b[n] + '" alt="" /></a>')
                                }
                                html.push('<a href="' + b.url + '" class="title">' + at + "</a>");
                                html.push('<span class="text">' + tx + "</span>");
                                if (o.stats == true) {
                                    var m = "";
                                    m += f == "albums" || f == "channels" || f == "groups" ? '<span class="videos">' + num(b.total_videos) + "</span>" : "";
                                    if (f == "channels") m += '<span class="users">' + num(b.total_subscribers) + "</span>";
                                    else if (f == "groups") m += '<span class="users">' + num(b.total_members) + "</span>";
                                    else if (f != "albums") m += '<span class="likes">' + num(b.stats_number_of_likes) + '</span><span class="views">' + num(b.stats_number_of_plays) + '</span><span class="comments">' + num(b.stats_number_of_comments) + "</span>";
                                    html.push('<span class="meta">' + m + "</span>")
                                }
                                var q = b.upload_date;
                                if (f == "likes") q = b.liked_on;
                                else if (f == "albums" || f == "channels" || f == "groups") q = b.created_on;
                                html.push('<span class="date">' + q + "</span>");
                                break;
                            case "stumbleupon":
                                var r = $("img", b.content).attr("src");
                                if (r && o.feed == "favorites") html.push('<a href="' + b.link + '" class="thumb"><img src="' + r + '" alt="" /></a>');
                                html.push(x + b.contentSnippet);
                                break;
                            case "instagram":
                                d = parseInt(b.created_time * 1E3, 10);
                                html.push('<a href="' + b.link + '" class="thumb"><img src="' + b.images[o.thumb].url + '" alt="" /></a>');
                                if (b.caption != null) html.push(b.caption.text);
                                if (b.comments.count > 0 && o.comments > 0) {
                                    i = 0;
                                    html.push('<span class="meta"><span class="comments">' + num(b.comments.count) + " comments</span></span>");
                                    $.each(b.comments.data, function (i, a) {
                                        if (o.comments > i) {
                                            html.push('<span class="meta item-comments"><img src="' + a.from.profile_picture + '" />' + a.from.full_name + " - " + a.text + "</span>");
                                            i++
                                        } else return false
                                    })
                                }
                                if (b.likes.count > 0 && o.likes > 0) {
                                    i = 0;
                                    html.push('<span class="meta"><span class="likes">' + num(b.likes.count) + " likes</span></span>");
                                    html.push('<span class="meta item-likes">');
                                    $.each(b.likes.data, function (i, a) {
                                        if (o.likes > i) {
                                            html.push('<img src="' + a.profile_picture + '" />');
                                            i++
                                        } else return false
                                    });
                                    html.push("</span>")
                                }
                                break;
                            case "google":
                                var g = b.object.replies ? num(b.object.replies.totalItems) : 0,
                                    m = b.object.plusoners ? num(b.object.plusoners.totalItems) : 0,
                                    p = b.object.resharers ? num(b.object.resharers.totalItems) : 0,
                                    dl;
                                d = b.published;
                                dl = {
                                    src: "",
                                    imgLink: "",
                                    useLink: "",
                                    useTitle: ""
                                };
                                var k = b.object.attachments;
                                if (k) if (k.length) {
                                        for (var l = 0; l < k.length; l++) {
                                            var h = k[l];
                                            if (h.image) {
                                                dl.src = h.image.url;
                                                dl.imgLink = h.url;
                                                if (h.fullImage) {
                                                    dl.w = h.fullImage.width || 0;
                                                    dl.h = h.fullImage.height || 0
                                                }
                                            }
                                            if (h.objectType == "article") dl.useLink = h.url;
                                            if (h.displayName) dl.useTitle = h.displayName
                                        }
                                        if (!dl.useLink) dl.useLink = dl.imgLink;
                                        var s = o.image_height ? o.image_height : 75;
                                        var t = o.image_width ? o.image_width : 75;
                                        if (dl.src.indexOf("resize_h") >= 0) dl.src = dl.w >= dl.h ? dl.src.replace(/resize_h=\d+/i, "resize_h=" + s) : dl.src.replace(/resize_h=\d+/i, "resize_w=" + t)
                                    }
                                dl = dl;
                                html.push(dl.src ? (dl.useLink ? '<a href="' + dl.useLink + '" class="thumb">' : "") + '<img src="' + dl.src + '" />' + (dl.useLink ? "</a>" : "") : "");
                                var u = px / (dl.w / dl.h) < px / 3 ? " clear" : "";
                                html.push((dl.useLink ? '<a href="' + dl.useLink + '" class="title' + u + '">' : "") + (b.title ? b.title : dl.useTitle) + (dl.useLink ? "</a>" : ""));
                                if (o.shares) html.push('<span class="meta"><span class="plusones">+1s ' + m + '</span><span class="shares">' + p + '</span><span class="comments">' + g + "</span></span>");
                                break
                            }
                            d = d != "" ? html.push('<span class="date">' + nicetime((new Date(d)).getTime()) + "</span></li>") : ""
                        }
                    });
                else html.push('<li class="dcsmt-error">Error. ' + w + "</li>");
                $(x).html(html.join(""))
            }
        })
    }
    function getFrame(a, w, h) {
        html = '<iframe src="' + a + '" scrolling="no" frameborder="0" style="border: none; background: #fff; overflow: hidden; width: ' + w + "px; height: " + h + 'px;" allowTransparency="true"></iframe>';
        return html
    }
    function getLinkedIn(c, a, b, w) {
        c = a == "JYMBII" ? 'data-companyid="' + c + '"' : 'data-id="' + c + '"';
        out = '<script type="IN/' + a + '" data-width="' + w + '" ' + c + b + ' data-format="inline"><\/script>';
        return out
    }
    function linkify(c) {
        c = c.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function (a) {
            var b = !a.match("^https?://") ? "http://" + a : a;
            return '<a href="' + b + '">' + a + "</a>"
        });
        c = c.replace(/(^|\s)@(\w+)/g, '$1@<a href="http://www.twitter.com/#!/$2">$2</a>');
        c = c.replace(/(^|\s)#(\w+)/g, '$1#<a href="http://twitter.com/#!/search/%23$2">$2</a>');
        return c
    }
    function parseTwitterDate(a) {
        var b = $.browser.msie ? a.replace(/(\+\S+) (.*)/, "$2 $1") : a;
        return b
    }
    function nicetime(a) {
        var d = Math.round((+new Date - a) / 1E3),
            fuzzy;
        var b = new Array;
        b[0] = [60 * 60 * 24 * 365, "year"];
        b[1] = [60 * 60 * 24 * 30, "month"];
        b[2] = [60 * 60 * 24 * 7, "week"];
        b[3] = [60 * 60 * 24, "day"];
        b[4] = [60 * 60, "hr"];
        b[5] = [60, "min"];
        var i = 0;
        var j = b.length;
        for (i = 0; i < j; i++) {
            s = b[i][0];
            n = b[i][1];
            if ((xj = Math.floor(d / s)) != 0) break
        }
        fuzzy = xj == 1 ? "1 " + n : xj + " " + n + "s";
        if (i + 1 < j) {
            s2 = b[i + 1][0];
            n2 = b[i + 1][1];
            if ((xj2 = Math.floor((d - s * xj) / s2)) != 0) fuzzy += xj2 == 1 ? " + 1 " + n2 : " + " + xj2 + " " + n2 + "s"
        }
        fuzzy += " ago";
        return fuzzy
    }
    function num(a) {
        var b = a;
        if (a > 999999) b = Math.floor(a / 1E6) + "M";
        else if (a > 9999) b = Math.floor(a / 1E3) + "K";
        else if (a > 999) b = Math.floor(a / 1E3) + "," + a % 1E3;
        return b
    }
    function parseQ(a) {
        var v = [],
            hash, q = a.split("?")[1];
        if (q != undefined) {
            q = q.split("&");
            for (var i = 0; i < q.length; i++) {
                hash = q[i].split("=");
                v.push(hash[1]);
                v[hash[0]] = hash[1]
            }
        }
        return v
    }
    function ticker(s, b, a) {
        var c = $("li:last", s),
            $b = $("li:first", s),
            $gx;
        if (b == "next") {
            $gx = c.clone().hide().css({
                opacity: 0
            });
            $b.before($gx);
            c.remove();
            $gx.slideDown(a, "linear", function () {
                $(this).animate({
                    opacity: 1
                }, a)
            })
        } else {
            var d = $b.outerHeight(true);
            $gx = $b.clone();
            $b.animate({
                marginTop: -d + "px",
                opacity: 0
            }, a, "linear", function () {
                c.after($gx);
                $b.remove()
            })
        }
    }
    function fbLink(b, c) {
        var d = "";
        jQuery.ajax({
            url: "https://graph.facebook.com/" + b,
            cache: true,
            dataType: "jsonp",
            async: false,
            success: function (a) {
                c.attr("href", a.link)
            }
        })
    }
})(jQuery);