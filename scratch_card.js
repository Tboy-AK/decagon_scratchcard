$(document).ready(()=>{
  alert("Welome to the MTN Scratchcard site by \nAKANJI OLUWATOBILOBA SEUN");
  
  //variables for sign-in and sign-up elements
  const header=$("#page-name");
  const loginPageLabel="Login Page";
  const signUpLink=$("#sign-up-link");
  const signInFrame=$("#user-login-frame");
  const usernameSignin=$("#sign-in-username");
  const passwordSignin=$("#sign-in-password");
  const signInBtn=$("#sign-in-btn");
  const signUpPageLabel="Signup Page";
  const signInLink=$("#sign-in-link");
  const signUpFrame=$("#signup-frame");
  const signUpUsername=$("#sign-up-username");
  const emailSignUp=$("#sign-up-email");
  const passwordSignup=$("#sign-up-password");
  const confirmPassword=$("#confirm-password");
  const signUpBtn=$("#sign-up-btn");
  
  //variables for purchase page
  const purchasePageLabel="Card Purchase";
  const purchaseFrame=$("#purchase-frame");
  const quantity200Input=$("#quantity-200 input");
  const quantity500Input=$("#quantity-500 input");
  const quantity1000Input=$("#quantity-1000 input");
  const total200Cell=$("#mult-price-200");
  const total500Cell=$("#mult-price-500");
  const total1000Cell=$("#mult-price-1000");
  
  //functions for styling
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
  //styling function for invoice
  /*var calc=""+((purchaseFrame.height()/2)-3*buyButton.height())+"px";
  invoiceModal.css({"height":purchaseSummary.css("height")});*/
  
  
  //functions for switching the sign-in sign-up links
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

  //function to login
  signInBtn.on("click", ()=>{
    if(usernameSignin.val().length===0 && passwordSignin.val().length===0){
      alert("input your\nUSERNAME and PASSWORD");
    } else if(usernameSignin.val().length!==0 && passwordSignin.val().length===0){
      alert("input your\nPASSWORD")
    } else if(usernameSignin.val().length===0 && passwordSignin.val().length!==0){
      alert("input your\nUSERNAME")
    } else{
      alert(usernameSignin.val());
      $.ajax({
        url:"http://localhost:3000/users",
        method:"GET",
        /*success:(data,staus)=>{
          alert(JSON.stringify(staus));
        }*/
        data: {"username":usernameSignin.val()},
        dataType: "json",
        success:(data,staus)=>{
          if(data!==true){alert("not true");} else{alert("true")}
          
        },
        error:()=>{
          alert("error")
        }
      });
    }
  });
  
  
  //functions for purchase
  var allPrices=[];
  quantity200Input.on("keyup",(e)=>{
    if(quantity200Input.val().length!==0){
      let amount200=parseInt(quantity200Input.val())*200;
      total200Cell.text(amount200);
      allPrices[0]=amount200;
    } else{total200Cell.text('')}
  });
  
  quantity500Input.on("keyup",(e)=>{
    if(quantity500Input.val().length!==0){
      let amount500=parseInt(quantity500Input.val())*500;
      total500Cell.text(amount500);
      allPrices[1]=amount500;
      
    } else{total500Cell.text('')}
  });
  
  quantity1000Input.on("keyup",(e)=>{
    if(quantity1000Input.val().length!==0){
      let amount1000=parseInt(quantity1000Input.val())*1000;
      total1000Cell.text(amount1000);
      allPrices[2]=amount1000;
    } else{total1000Cell.text('')}});
  
  cartButton.on("click",  ()=>{
    
  });

  
  buyHoldSection.css("top", calc);

  buyButton.on("click",  ()=>{

  });
  holdButton.on("click",  ()=>{

  });
  
  
});