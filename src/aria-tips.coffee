# Wrappers for AMD and CommonJS. Fallback to global scope.
((root, factory) ->

    # If AMD is used.
    if typeof define is 'function' and define.amd
        define [], factory

    # If CommonJS is used.
    else if typeof module is 'object' and module.exports
        module.exports = factory()

    # Otherwise bind to `window` object.
    else
        root.AriaTips = factory()

)(this, ->

    ###
        * Tooltips are the elements that are displayed when the mouse hovers a
        trigger.

        * Triggers are the elements that listen to mouseover events in order to
        show the tooltips.
    ###


    # Number of pixels the tooltip's arrow takes.
    ARROW_DELTA = 6


    # Unbinders are functions that unbind events on triggers. They are defined
    # when the events are bound.
    unbinders = []


    # Do all the magic needed to show the tooltips!
    bindAll = ->
        # Unbind all existing events in order to prevent listening to the same
        # event multiple times.
        unbindAll()

        # Get all tooltips in the DOM.
        tips = document.querySelectorAll '[role=tooltip]'

        for tip in tips
            # Tooltips need to be appended to body for global positioning.
            document.body.appendChild tip

            # Get all triggers in the DOM.
            triggers = document.querySelectorAll "[aria-describedby=#{tip.id}]"
            for trigger in triggers

                # Bind the mouseover/mouseout events on the trigger.
                unbinder = bindEvents.call trigger

                # Store the returned function to unbind the events if needed.
                unbinders.push unbinder


    # Remove all the magic that show the tooltips.
    unbindAll = ->
        unbinder() for unbinder in unbinders
        unbinders = []


    # Return the opposite position, given a position.
    oppositePosition = (position) ->
        switch position
            when 'top'    then 'bottom'
            when 'bottom' then 'top'
            when 'left'   then 'right'
            when 'right'  then 'left'


    # Position the tooltip to its trigger.
    # `this` must reference the tooltip.
    positionTooltip = (trigger) ->

        # Reset tooltip's direction if it has been previously overriden.
        resetTooltip.call this

        # Direction can be defined in the trigger or in the tooltip. The trigger
        # has priority.
        direction = trigger.dataset.tooltipDirection or \
                    @dataset.tooltipDirection

        # Get the trigger's center coordinates.
        boundingBox = trigger.getBoundingClientRect()
        center =
            x: 0 | boundingBox.left + (boundingBox.right - boundingBox.left) / 2
            y: 0 | boundingBox.top + (boundingBox.bottom - boundingBox.top) / 2

        # Add page offset to get the right position when the page is scrolled.
        center.x = center.x + window.pageXOffset
        center.y = center.y + window.pageYOffset

        # Initialize the tooltip positionning.
        result =
            top:    'auto'
            bottom: 'auto'
            left:   'auto'
            right:  'auto'

        # Get the direction's position value.
        position = switch direction
            when 'top'
                window.innerHeight - boundingBox.top - window.pageYOffset
            when 'bottom'
                boundingBox.bottom + window.pageYOffset
            when 'left'
                window.innerWidth - boundingBox.left - window.pageXOffset
            when 'right'
                boundingBox.right + window.pageXOffset

        # Get the opposite direction's position value.
        oppositeDirection = oppositePosition direction
        result[oppositeDirection] = "#{0 | position + ARROW_DELTA}px"

        # Set the position for the axis perpendicular to the one defined
        # by (position, oppositeDirection).
        switch direction
            when 'top', 'bottom' then result.left = "#{center.x}px"
            when 'left', 'right' then result.top = "#{center.y}px"

        # Perform the positioning by setting the tooltip's attributes.
        @style[prop] = value for prop, value of result

        # If the default tooltip's direction has been overriden by the trigger,
        # we must keep the original direction, and set the overriden direction
        # to the tooltip.
        unless direction is @dataset.tooltipDirection
            @origDirection = @dataset.tooltipDirection
            @dataset.tooltipDirection = direction


    # Reset tooltip's direction.
    # `this` must reference the tooltip.
    resetTooltip = ->
        if @origDirection
            @dataset.tooltipDirection = @origDirection
            @origDirection = null


    # If the trigger has a defined `aria-label`, the lib automatically appends
    # it in a `pre` tag.
    # `this` must reference the tooltip.
    fillTooltipLabel = (trigger) ->

        # Remove existing labels in the tooltip.
        labels = @querySelectorAll 'pre.label'
        label.parentNode.removeChild label for label in labels

        # Get label from the trigger.
        labelText = trigger.getAttribute 'aria-label'

        # If there is one, append it to the tooltip.
        if labelText
            label = document.createElement 'pre'
            label.classList.add 'label'
            label.innerHTML = "(#{labelText})"
            @appendChild label


    # Bind events on for a given trigger element.
    # `this` must reference the trigger element.
    bindEvents = ->

        # Get the related tooltip
        tooltipId = @getAttribute 'aria-describedby'
        tip = document.querySelector "##{tooltipId}"

        # Initialize timeout in the scope.
        timeout = null

        # `mouseover` event handler.
        onMouseOver = =>

            # Since the tooltip's appearance animation make the trigger lose
            # the focus, the tooltip needs to be its own trigger to prevent it
            # from "flashing". It's basically a debounce mechanism.
            tip.addEventListener 'mouseover', onMouseOver
            tip.addEventListener 'mouseout', onMouseOut

            # If the tooltip is appearing or disappearing, clear the timeout.
            if timeout
                clearTimeout timeout
                timeout = null
                tip.setAttribute 'aria-hidden', false
            else
                # Initialize the tooltip.
                fillTooltipLabel.call tip, this

                # Position the tooltip.
                positionTooltip.call tip, this

                # Mark as shown after a short duration.
                timeout = setTimeout ->
                    tip.setAttribute 'aria-hidden', false
                , 300

        # `mouseover` event handler.
        onMouseOut = ->

            # For the same reason as in `onMouseOver`, we debounce the
            # `mouseout` event handler.
            clearTimeout timeout
            timeout = setTimeout ->
                timeout = null
                tip.removeEventListener 'mouseover', onMouseOver
                tip.removeEventListener 'mouseout', onMouseOut
                tip.setAttribute 'aria-hidden', true
            , 30


        # Bind the actual events.
        @addEventListener 'mouseover', onMouseOver
        @addEventListener 'mouseout', onMouseOut

        # Since a tooltip management is scoped (there is one pair of handlers
        # for onMouseOver/onMouseOut events for each trigger), we return an
        # unbind function so it can be called later on.
        unbindEvents = =>
            tip.removeEventListener 'mouseover', onMouseOver
            tip.removeEventListener 'mouseout', onMouseOut
            @removeEventListener 'mouseover', onMouseOver
            @removeEventListener 'mouseout', onMouseOut

        return unbindEvents


    # The module's public interface.
    return {
        bind: -> bindAll()
        unbind: -> unbindAll()
    }
)
