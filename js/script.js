function encriptar(){
    restaurarTextoBoton()
    let text = document.getElementById('text').value;
    let encriptado = "";

    for (let i = 0; i < text.length; i++) {
        
        if (text[i] == "a") {
            encriptado += "ai";            
        } else  if (text[i] == "e") {
            encriptado += "enter";            
        } else  if (text[i] == "i") {
            encriptado += "imea";            
        } else  if (text[i] == "o") {
            encriptado += "ober";            
        } else  if (text[i] == "u") {
            encriptado += "ufat";            
        } else {
            encriptado += text[i];
        }
       
    }
    
    let imprimir = document.getElementById("resultado")
     
    imprimir.textContent = encriptado;
}

function desencriptar(){
    restaurarTextoBoton()
    let text = document.getElementById('text').value;
    let desencriptado = "";

    for (let i = 0; i < text.length; i++) {
        
        if (text[i] == "a" && text[i+1] == "i") {
            desencriptado += "a"; 
            i += 1;           
        } else  if (text[i] == "e" && text[i+1] == "n" && text[i+2] == "t" && text[i+3] == "e" && text[i+4] == "r") {
            desencriptado += "e";            
            i += 4;
        } else  if (text[i] == "i" && text[i+1] == "m" && text[i+2] == "e" && text[i+3] == "a") {
            desencriptado += "i";        
            i += 3;    
        } else  if (text[i] == "o" && text[i+1] == "b" && text[i+2] == "e" && text[i+3] == "r") {
            desencriptado += "o";      
            i += 3;      
        } else  if (text[i] == "u" && text[i+1] == "f" && text[i+2] == "a" && text[i+3] == "t") {
            desencriptado += "u";    
            i += 3;        
        } else {
            desencriptado += text[i];
        }
       
    }
    
    let imprimir = document.getElementById("resultado")
     
    imprimir.textContent = desencriptado;
}
function copiar(){
   

const paragraph = document.getElementById('resultado');

if (paragraph) {
  const texto = paragraph.textContent;

  navigator.clipboard.writeText(texto)
    .then(() => {

        let btn = document.getElementById("btnCopy")
       btn.textContent = 'Texto copiado!';
        


    })
    .catch(err => {
      console.error('Error al intentar copiar el texto:', err);
      // Manejar errores si es necesario
    });
} else {
  console.error('No se encontró ningún elemento con el ID especificado.');
}
}

function restaurarTextoBoton() {
    let btn = document.getElementById("btnCopy")
    btn.textContent = 'Copiar Texto';
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('text');
    const notFound = document.getElementById('notFound');
    const found = document.getElementById('found');
    notFound.classList.remove('visibility');
    function verificar() {
      if (textarea.value.trim() !== '') {
        notFound.classList.add('visibility');
        found.classList.remove('visibility');
        let imprimir = document.getElementById("resultado")
     
        imprimir.textContent = "";
      } else {
        notFound.classList.remove('visibility');
        found.classList.add('visibility');
      }
    }
  
    textarea.addEventListener('input', verificar);
  });

