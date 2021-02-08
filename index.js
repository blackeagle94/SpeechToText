const speechRecognition = window.webkitSpeechRecognition;

const recognation = new speechRecognition();

const textbox = $('#textbox');

const instructions = $('#instructions')

let content = ''

recognation.continuous = true

recognation.onstart = function() {
    instructions.text('Voice Recognation is on')
}

recognation.onspeechend = () => {
    instructions.text('No Activity')
}

recognation.onerror = () => {
    instructions.text('Try Again')
}

recognation.onresult = (e) => {
    const current = e.resultIndex

    const transcript = e.results[current][0].transcript

    content += transcript

    textbox.val(content)
}

$('#start-btn').click( function(event) {
    if(content.length) {
        content += ''
    }
    recognation.start()
})

textbox.on('input', () => {
    content = $(this).val()
})
