((root, factory) ->

    if typeof define is "function" and define.amd
        define [], factory
    else if typeof module is "object" and module.exports
        module.exports = factory()
    else
        root.AriaTips = factory()

)(this, ->

    arrowDelta = 6

    oppositePosition = (position) ->
        switch position
            when 'top'    then 'bottom'
            when 'bottom' then 'top'
            when 'left'   then 'right'
            when 'right'  then 'left'


    attachTooltips = ->
        tips = document.querySelectorAll '[role=tooltip]'
        for tip in tips
            document.body.appendChild tip
            controls = document.querySelectorAll "[aria-describedby=#{tip.id}]"
            bindHoverEvents.call control for control in controls


    positionTooltip = (control)->
        resetTooltip.call @

        direction = control.dataset.tooltipDirection or @dataset.tooltipDirection
        boundingBox = control.getBoundingClientRect()
        center =
            x: 0 | boundingBox.left + (boundingBox.right - boundingBox.left) / 2
            y: 0 | boundingBox.top + (boundingBox.bottom - boundingBox.top) / 2
        result =
            top:    'auto'
            bottom: 'auto'
            left:   'auto'
            right:  'auto'

        position = switch direction
            when 'top'    then window.innerHeight - boundingBox.top
            when 'bottom' then boundingBox.bottom
            when 'left'   then window.innerWidth - boundingBox.left
            when 'right'  then boundingBox.right

        result[oppositePosition(direction)] = "#{0 | position + arrowDelta}px"
        switch direction
            when 'top', 'bottom' then result.left = "#{center.x}px"
            when 'left', 'right' then result.top = "#{center.y}px"

        @style[prop] = value for prop, value of result
        unless direction is @dataset.tooltipDirection
            @origDirection = @dataset.tooltipDirection
            @dataset.tooltipDirection = direction


    resetTooltip = ->
        if @origDirection
            @dataset.tooltipDirection = @origDirection
            @origDirection = null


    fillTooltipLabel = (control) ->
        labels = @querySelectorAll 'pre.label'
        label.parentNode.removeChild label for label in labels

        labelText = control.getAttribute('aria-label');
        return unless labelText

        label = document.createElement 'pre'
        label.classList.add 'label'
        label.innerHTML = "(#{labelText})"
        @appendChild label


    bindHoverEvents = ->
        tip = document.querySelector "##{@getAttribute 'aria-describedby'}"
        timeout = null

        onMouseOver = =>
            tip.addEventListener 'mouseover', onMouseOver
            tip.addEventListener 'mouseout', onMouseOut

            if timeout
                clearTimeout timeout
                timeout = null
                tip.setAttribute 'aria-hidden', false
            else
                fillTooltipLabel.call tip, @
                positionTooltip.call tip, @
                timeout = setTimeout ->
                    tip.setAttribute 'aria-hidden', false
                , 300

        onMouseOut = ->
            clearTimeout timeout
            timeout = setTimeout ->
                timeout = null
                tip.removeEventListener 'mouseover', onMouseOver
                tip.removeEventListener 'mouseout', onMouseOut
                tip.setAttribute 'aria-hidden', true
            , 30

        @addEventListener 'mouseover', onMouseOver
        @addEventListener 'mouseout', onMouseOut

    return bind: -> attachTooltips()
)
