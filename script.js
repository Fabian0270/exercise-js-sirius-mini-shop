
document.addEventListener("DOMContentLoaded", () => {
    // 1. Byt namn på första hoodien från Ash till Potato.
    const firstHoodieName = document.querySelector(".art-1 h3");
    if (firstHoodieName) firstHoodieName.innerText = "Potato";
  
    // 2. Byt namn på Home till Start.
    const navHome = document.querySelector("nav a:first-of-type");
    if (navHome) navHome.innerText = "Start";
  
    // 3. Byt namn på Contact till Mail Us.
    const navContact = document.querySelector("nav a:last-of-type");
    if (navContact) navContact.innerText = "Mail Us";
  
    // 4. Byt ut informationen om Sinus Hoodie - Fire.
    const fireDescription = document.querySelector(".art-2 p");
    if (fireDescription) {
      fireDescription.innerText = "This hoodie will ignite your style with unparalleled comfort!";
    }
  
    // 5. Byt bakgrundsfärg och text på en knapp.
    const firstButton = document.querySelector(".art-1 button");
    if (firstButton) {
      firstButton.style.backgroundColor = "blue";
      firstButton.innerText = "Buy Now";
    }
  
    // 6. Byt bakgrundsfärg på någon av produkterna.
    const fireArticle = document.querySelector(".art-2");
    if (fireArticle) fireArticle.style.backgroundColor = "lightgrey";
  
    // 7. Byt ut adressen på sidan.
    const address = document.querySelector("footer article:nth-of-type(2) p");
    if (address) {
      address.innerHTML = "Sinus skateboards <br> New Railsvägen 15 <br> 200 50, Skateholm";
    }
  
    // 8. Byt färg på samtliga <p>
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach((p) => {
      p.style.color = "green";
    });
  
    // 9. Ändra text på samtliga knappar till *add to cart*.
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
      button.innerText = "Add to Cart";
    });
  
    // 10.  Lägg till classen active på menyalternativet home.
    if (navHome) navHome.classList.add("active");
  
    // 11. Ta bort classen logo på logotypen.
    const logo = document.querySelector(".logo");
    if (logo) logo.classList.remove("logo");
  
    // 12. Lägg till ett nytt menyalternativ.
    const nav = document.querySelector("nav");
    if (nav) {
      nav.insertAdjacentHTML(
        "beforeend",
        '<a href="#">New Item</a>'
      );
    }
  
    // 13. Lägg till en ny produkt med följande info.
    const main = document.querySelector("main");
    if (main) {
      const newProductHTML = `
        <article class="art-4">
          <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
          <h2>Sinus Hoodie</h2>
          <h3>Forrest</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
          <button>Add to Cart</button>
        </article>`;
      main.insertAdjacentHTML("beforeend", newProductHTML);
    }
  
    // 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
    if (logo) {
      logo.addEventListener("click", () => {
        console.log("found you!");
      });
    }
  
    // 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
    const allArticles = document.querySelectorAll("article");
    allArticles.forEach((article) => {
      article.addEventListener("click", () => {
        const hoodieName = article.querySelector("h3").innerText;
        console.log(`Hi, I'm article ${hoodieName}`);
      });
    });
  });
  