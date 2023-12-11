let spanTag = document.querySelector('.span-tag')
let wordArray = ["Frontend Designer", "Python Developer", "Javascript Developer", "C++ Developer", "Java Developer", "Django Developer", "PHP Developer", "Bash Script Writer"]
let wordIndex = 0;


window.addEventListener('load', ()=>{
    const iterateWord = () =>{
        clearSpan()
        let spanContent = wordArray[wordIndex]
        iterateSpan(spanContent)
        wordIndex = (wordIndex + 1) % wordArray.length;
    }

    const clearSpan= () =>{
        spanTag.textContent = ''
    }

    const iterateSpan =(spanContent)=>{
        let spanIndex = 0;
        
        let iterateTextContent = setInterval(() => {
            if (spanIndex < spanContent.length) {
                spanTag.textContent += spanContent[spanIndex]
                spanIndex++
            } else {
                clearInterval(iterateTextContent)
                setTimeout(() => {
                    clearSpan()
                    iterateWord()
                }, 1000);
            }
        }, 100);
        
    }
    iterateWord()
})