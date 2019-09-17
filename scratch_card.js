$(document).ready(()=>{
    const header=$("#page-name");
    const loginPageLabel="Login Page";
    const signUpPageLabel="Signup Page";
    const purchasePageLabel="Card Purchase";
    const invoiceWindow = "Invoice";
    const generatedPINPage = "Scratch Card PINS";
    const signUpLink=$("#sign-up-link");
    const signInLink=$("#sign-in-link");
    const signUpFrame=$("#signup-frame");
    const signInFrame=$("#user-login-frame");
    const purchaseFrame=$("#purchase-frame");
    const invoiceModal=$("#invoice-modal");
    const purchaseSummary=$(".purchase-summary");
    const buyHoldSection=$(".buy-hold-section");
    const buyButton=$(".buy-button");
    const holdButton=$(".hold-button");
    const cartButton=$(".cart-button");
    const priceTotalFigure=$(".price-total-figure");

    
    header.parent().css({
      "height": "50px",
      "background": "grey",
      "margin-bottom":"10px"
    });
    header.text(loginPageLabel);
    header.css({
      "color":"#EEEEEE",
      "text-align": "center",
      "vertical-align":"middle",
      "margin":"auto",
      "transform":"translate(0%,50%)"
    });
    signInLink.on("click", (e)=>{
      signUpFrame.fadeOut(1000,"swing", ()=>{
        signInFrame.fadeIn(1000);
        header.text(loginPageLabel);
      });
    });
    signUpLink.on("click", (e)=>{
      signInFrame.fadeOut(1000, "swing", ()=>{
        signUpFrame.fadeIn(1000);
        header.text(signUpPageLabel);
      });
    });

    cartButton.on("click",  ()=>{

    });

    var calc=""+((purchaseFrame.height()/2)-3*buyButton.height())+"px";
    invoiceModal.css({"height":purchaseSummary.css("height")});
    buyHoldSection.css("top", calc);

    buyButton.on("click",  ()=>{

    });
    holdButton.on("click",  ()=>{

    });

  });