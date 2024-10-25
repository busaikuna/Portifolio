const front = document.querySelector("#front")
const back = document.querySelector("#back")
const ferramentas = document.querySelector("ferramenta")

const container = document.querySelector(".container-skills")

front.addEventListener("click", ()=>{
    container.innerHTML = `<div class="card-skill" style="    box-shadow: 0 4px 15px #FF5722;">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="">
                    <h3>HTML</h3>
                </div> 
                
                <div class="card-skill" style="    box-shadow: 0 4px 15px #2196F3;">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="">
                    <h3>CSS</h3>
                </div>

                <div class="card-skill" style="    box-shadow: 0 4px 15px #F0DC4E;">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--programming-language-pack-logos-icons-1174949.png?f=webp&w=128" alt="">
                    <h3>JavaScript</h3>
                </div>

                <div class="card-skill" style="    box-shadow: 0 4px 15px #00D8FF">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="">
                    <h3>React</h3>
                </div>

                <div class="card-skill" style="    box-shadow: 0 4px 15px #FFF;">
                    <img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="">
                    <h3>Next</h3>
                </div>

                <div class="card-skill" style="    box-shadow: 0 4px 15px #854195;">
                    <img src="data:image/png;base64,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" alt="">
                    <h3>Axios</h3>
                </div>

                <div class="card-skill" style=" box-shadow: 0 4px 15px #00D8FF">
                    <img src="https://portfolio-rafael-souza.vercel.app/static/media/tailwind.e47ac876b8d4d0bba47a.png" alt="">
                    <h3>Tailwind</h3>
                </div>

                <div class="card-skill" style="    box-shadow: 0 4px 15px #854195">
                    <img src="https://portfolio-rafael-souza.vercel.app/static/media/bootstrap.caafbb5567c905e583e8.png" alt="">
                    <h3>Boostrap</h3>
                </div>`
})

back.addEventListener("click", ()=>{
    container.innerHTML = ""
});