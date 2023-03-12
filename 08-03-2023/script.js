let p = document.querySelector("p");
let body = document.querySelector("body");

setTimeout(() => {
  p.innerText = "10";
  setTimeout(() => {
    p.innerText = "9";
    setTimeout(() => {
      p.innerText = "8";
      setTimeout(() => {
        p.innerText = "7";
        setTimeout(() => {
          p.innerText = "6";
          setTimeout(() => {
            p.innerText = "5";
            setTimeout(() => {
              p.innerText = "4";
              setTimeout(() => {
                p.innerText = "3";
                setTimeout(() => {
                  p.innerText = "2";
                  setTimeout(() => {
                    p.innerText = "1";
                    setTimeout(() => {
                      p.innerText = "Happy Independence Day!🎉";
                      p.style.color = "beige";
                      body.style.background = "grey";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
