        const voice = document.getElementById('voice')
        const startBtn = document.getElementById('btn');
        const responseText = document.getElementById('response');

        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript.toLowerCase();
            responseText.textContent = `You said: ${spokenText}`;
            respond(spokenText);
        };
        
        

        recognition.onerror = (event) => {
            responseText.textContent = 'Error occurred in recognition: ' + event.error;
        };

        btn.onclick = () => {
            responseText.textContent = 'Listening...';
            recognition.start();
            // Start the recognition process
              startBtn.style.display = 'block'; // Hide the start button
              voice.style.display = 'block'; // Show the voice element
            
          
        }

        function respond(input) {
            const synth = window.speechSynthesis;
            let response;

            if (input.includes('hello')) {
                response = 'Hello! How can I help you today?';
            } else if (input.includes('who are you')) {
                response = 'I am your voice assistant,my name is synthraa , developed by Sanaulllah khan';
               } else if (input.includes('open youtube')) {
                response = 'opening youtube'
                window.open('https://www.youtube.com','_blank');
            } else if (input.includes('open google')) {
                response = 'opening google'
                window.open('https://www.google.com','_blank');
                }else if (input.includes('open instagram')) {
                  response = 'opening instagram'
                  window.open('https://www.instagram.com', '_blank');
                  
                }
                else if (input.includes('open facebook')) {
                  response = 'opening facebook'
                  window.open('https://www.facebook.com', '_blank');
                  
                }
                
              else {
                response=`this is what i found on internet regarding ${input}` 
                window.open(`https://www.google.com/search?q=${input}`)

              }
                  
                
            

            const utterance = new SpeechSynthesisUtterance(response);
            
            utterance.pitch = 1; // Range: 0 to 2
    utterance.volume = 2;   // Range: 0 to 1
    utterance.rate = 1;   // Range: 0.1 to 10

            
            synth.speak(utterance);
        }
    
   