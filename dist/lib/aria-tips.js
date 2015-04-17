(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    return module.exports = factory();
  } else {
    return root.AriaTips = factory();
  }
})(this, function() {

  /*
      * Tooltips are the elements that are displayed when the mouse hovers a
      trigger.
  
      * Triggers are the elements that listen to mouseover events in order to
      show the tooltips.
   */
  var ARROW_DELTA, bindAll, bindEvents, fillTooltipLabel, oppositePosition, positionTooltip, resetTooltip, unbindAll, unbinders;
  ARROW_DELTA = 6;
  unbinders = [];
  bindAll = function() {
    var tip, tips, trigger, triggers, unbinder, _i, _len, _results;
    unbindAll();
    tips = document.querySelectorAll('[role=tooltip]');
    _results = [];
    for (_i = 0, _len = tips.length; _i < _len; _i++) {
      tip = tips[_i];
      document.body.appendChild(tip);
      triggers = document.querySelectorAll("[aria-describedby=" + tip.id + "]");
      _results.push((function() {
        var _j, _len1, _results1;
        _results1 = [];
        for (_j = 0, _len1 = triggers.length; _j < _len1; _j++) {
          trigger = triggers[_j];
          unbinder = bindEvents.call(trigger);
          _results1.push(unbinders.push(unbinder));
        }
        return _results1;
      })());
    }
    return _results;
  };
  unbindAll = function() {
    var unbinder, _i, _len;
    for (_i = 0, _len = unbinders.length; _i < _len; _i++) {
      unbinder = unbinders[_i];
      unbinder();
    }
    return unbinders = [];
  };
  oppositePosition = function(position) {
    switch (position) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
    }
  };
  positionTooltip = function(trigger) {
    var boundingBox, center, direction, oppositeDirection, position, prop, result, value;
    resetTooltip.call(this);
    direction = trigger.dataset.tooltipDirection || this.dataset.tooltipDirection;
    boundingBox = trigger.getBoundingClientRect();
    center = {
      x: 0 | boundingBox.left + (boundingBox.right - boundingBox.left) / 2,
      y: 0 | boundingBox.top + (boundingBox.bottom - boundingBox.top) / 2
    };
    center.x = center.x + window.pageXOffset;
    center.y = center.y + window.pageYOffset;
    result = {
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      right: 'auto'
    };
    position = (function() {
      switch (direction) {
        case 'top':
          return window.innerHeight - boundingBox.top - window.pageYOffset;
        case 'bottom':
          return boundingBox.bottom + window.pageYOffset;
        case 'left':
          return window.innerWidth - boundingBox.left - window.pageXOffset;
        case 'right':
          return boundingBox.right + window.pageXOffset;
      }
    })();
    oppositeDirection = oppositePosition(direction);
    result[oppositeDirection] = "" + (0 | position + ARROW_DELTA) + "px";
    switch (direction) {
      case 'top':
      case 'bottom':
        result.left = "" + center.x + "px";
        break;
      case 'left':
      case 'right':
        result.top = "" + center.y + "px";
    }
    for (prop in result) {
      value = result[prop];
      this.style[prop] = value;
    }
    if (direction !== this.dataset.tooltipDirection) {
      this.origDirection = this.dataset.tooltipDirection;
      return this.dataset.tooltipDirection = direction;
    }
  };
  resetTooltip = function() {
    if (this.origDirection) {
      this.dataset.tooltipDirection = this.origDirection;
      return this.origDirection = null;
    }
  };
  fillTooltipLabel = function(trigger) {
    var label, labelText, labels, _i, _len;
    labels = this.querySelectorAll('pre.label');
    for (_i = 0, _len = labels.length; _i < _len; _i++) {
      label = labels[_i];
      label.parentNode.removeChild(label);
    }
    labelText = trigger.getAttribute('aria-label');
    if (labelText) {
      label = document.createElement('pre');
      label.classList.add('label');
      label.innerHTML = "(" + labelText + ")";
      return this.appendChild(label);
    }
  };
  bindEvents = function() {
    var onMouseOut, onMouseOver, timeout, tip, tooltipId, unbindEvents;
    tooltipId = this.getAttribute('aria-describedby');
    tip = document.querySelector("#" + tooltipId);
    timeout = null;
    onMouseOver = (function(_this) {
      return function() {
        tip.addEventListener('mouseover', onMouseOver);
        tip.addEventListener('mouseout', onMouseOut);
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
          return tip.setAttribute('aria-hidden', false);
        } else {
          fillTooltipLabel.call(tip, _this);
          positionTooltip.call(tip, _this);
          return timeout = setTimeout(function() {
            return tip.setAttribute('aria-hidden', false);
          }, 300);
        }
      };
    })(this);
    onMouseOut = function() {
      clearTimeout(timeout);
      return timeout = setTimeout(function() {
        timeout = null;
        tip.removeEventListener('mouseover', onMouseOver);
        tip.removeEventListener('mouseout', onMouseOut);
        return tip.setAttribute('aria-hidden', true);
      }, 30);
    };
    this.addEventListener('mouseover', onMouseOver);
    this.addEventListener('mouseout', onMouseOut);
    unbindEvents = (function(_this) {
      return function() {
        tip.removeEventListener('mouseover', onMouseOver);
        tip.removeEventListener('mouseout', onMouseOut);
        _this.removeEventListener('mouseover', onMouseOver);
        return _this.removeEventListener('mouseout', onMouseOut);
      };
    })(this);
    return unbindEvents;
  };
  return {
    bind: function() {
      return bindAll();
    },
    unbind: function() {
      return unbindAll();
    }
  };
});
;
//# sourceMappingURL=aria-tips.js.map