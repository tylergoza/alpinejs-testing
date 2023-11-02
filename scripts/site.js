window.addEventListener("handle_button_click", (event) => {
    let data = {}
    data.paragraph_text = event.detail.value
    let customEvent = new CustomEvent(event.detail.respond_event, {detail: data})
    event.detail.respond_target.dispatchEvent(customEvent)
})