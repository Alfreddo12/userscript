// Generated by CoffeeScript 1.6.3
/*
// ==UserScript==
// @name        fl.ru hider
// @namespace   fl
// @description free-lance.ru annoying shit hider + hide / mark watched projects
// @include     /^https?://www\.fl\.ru.*$/
// @exclude     /^https?://www\.fl\.ru/(?!\?page).+$/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @version     0.0.9
// @grant       GM_addStyle
// ==/UserScript==
*/


(function() {
  var hide_watched, mark_watched, option_changed, options_html, show_watched, toggle_filter, unmark_watched, watched, watched_action,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  options_html = "<div>\n    <select id='fl_ru_hider_option'>\n        <option value='hide'>Прятать просмотренные работы</option>\n        <option value='mark'>Помечать просмотренные работы</option>\n        <option value='nothing'>Ничего не делать</option>\n    </select>\n    <button id='toggle_filter'>Показать фильтр</button>\n</div>";

  watched_action = function(act) {
    var id, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = watched.length; _i < _len; _i++) {
      id = watched[_i];
      _results.push(act($("#" + id)));
    }
    return _results;
  };

  hide_watched = function() {
    return watched_action(function(e) {
      return e.hide();
    });
  };

  show_watched = function() {
    return watched_action(function(e) {
      return e.show();
    });
  };

  mark_watched = function() {
    return watched_action(function(e) {
      return e.css("background-color", "#f1f1f1");
    });
  };

  unmark_watched = function() {
    return watched_action(function(e) {
      return e.css("background-color", "");
    });
  };

  option_changed = function() {
    var action;
    action = $("#fl_ru_hider_option").val();
    localStorage.action_with_watched = action;
    switch (action) {
      case "hide":
        return hide_watched();
      case "mark":
        mark_watched();
        return show_watched();
      case "nothing":
        unmark_watched();
        return show_watched();
    }
  };

  toggle_filter = function() {
    if ($("#b_ext_filter").css('display') === 'none') {
      $("#toggle_filter").text("Спрятать фильтр");
      return $("#b_ext_filter").show();
    } else {
      $("#toggle_filter").text("Показать фильтр");
      return $("#b_ext_filter").hide();
    }
  };

  watched = [];

  $(function() {
    var div, id, last_action, w, _i, _len, _ref;
    watched = JSON.parse(localStorage.watched || "[]");
    last_action = localStorage.action_with_watched || "mark";
    $("#pay_place_top").remove();
    $("#pay_place_left").remove();
    $("#b_ext_filter").hide();
    $("li.b-menu__banner").remove();
    $(".b-layout__page").removeAttr("style");
    $("#upper").remove();
    $(".b-layout__page > .b-layout__right").removeAttr("class");
    $(".i-footer").remove();
    $(".b-banner").remove();
    $(".b-page__page").removeClass("b-page__page_padtop_90");
    $(".b-page__page").css("padding-top", "35px");
    $(".b-page__page").prepend(options_html);
    $("#fl_ru_hider_option").val(last_action);
    $("#fl_ru_hider_option").change(option_changed);
    $("#toggle_filter").on("click", toggle_filter);
    w = watched.slice(0);
    _ref = $("#projects-list > .b-post").toArray();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      div = _ref[_i];
      id = $(div).attr("id");
      if (!(__indexOf.call(w, id) >= 0)) {
        w.push(id);
      }
    }
    localStorage.watched = JSON.stringify(w.slice(-1000));
    return option_changed();
  });

}).call(this);