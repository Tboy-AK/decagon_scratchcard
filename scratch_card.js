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
  const cartBtn=$(".cart-button");
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
  invoiceModal.css({"height":purchaseSummary.css("height")});
  
  buyHoldSection.css("top", calc);
  */
  
  
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
        data: {"username":usernameSignin.val()},
        dataType: "json",
        success:(data,status)=>{
          let stringUsername=JSON.stringify(data);
          alert(data.length);
          if(data.length!==0){
            data.forEach((e)=>{
            if (e.password===passwordSignin.val()) {
              alert("correct username and password")
            } else{
              alert("wrong PASSWORD")}})
          } else{
            alert("wrong USERNAME")
          }
        },
        error:()=>{
          alert("error")
        }
      });
    }
  });
  
  
  //function for sign up
  let signUpName=signUpUsername.val();
  let signUpEmail=emailSignUp.val();
  let signUpPass=passwordSignup.val();
  let signUpConfirm=confirmPassword.val();
  signUpBtn.on("click", ()=>{
    if(signUpEmail.length===0){
      alert("input email");
      emailSignUp.attr("placeholder","e.g: decadev@decagon.com");
    } else if(signUpPass.length===0){
      alert("input password");
    } else if(signUpConfirm.length===0){
      alert("confirm password");
    } else {
      if(signUpPass===signUpConfirm){
        let user={
          "username": signUpUsername,
          "email": signUpEmail,
          "phone_number": "+234",
          "rank": "Client",
          "password": signUpConfirm
        };
        $.ajax({
          url:"http://localhost:3000/users",
          method:"POST",
          data:JSON.stringify(user),
          dataType:"json",
          success:(data,status)=>{
            alert("sucessful sign up")
          }
          
        });
      }
    }
  });
  
  //functions for purchase
  let allPrices=[];
  let pins200=[];
  let pins500=[];
  let pins1000=[];
  let per200="";
  let per500="";
  let per1000="";
  
  //generate pins for 200
  let cart1;
  quantity200Input.on("keyup",(e)=>{
    if(quantity200Input.val().length!==0 && quantity200Input.val()!=="0"){
      let quantity200=parseInt(quantity200Input.val());
      let amount200=quantity200*200;
      total200Cell.text(amount200);
      allPrices[0]=amount200;
      for(let i=0;i<quantity200;i++){
        for(let j=0;j<17;j++){
          if(j===0){
            per200+=2;
          } else if(j===5){
            per200+=2;
          } else if(j===12){
            per200+=2;
          } else{
            per200+=Math.floor(Math.random()*10);
          }
        }
        if(!pins200.includes(per200)){
           pins200.push(per200);
        }
        per200="";
      }
      cart1={"id": 1, "price": "200", "cards": pins200};
    } else{total200Cell.text('')}
  });
  
  //generate pins for 500
  let cart2;
  quantity500Input.on("keyup",(e)=>{
    if(quantity500Input.val().length!==0 && quantity500Input.val()!=="0"){
      let quantity500=parseInt(quantity500Input.val());
      let amount500=quantity500*500;
      total500Cell.text(amount500);
      allPrices[1]=amount500;
      for(let i=0;i<quantity500;i++){
        for(let j=0;j<17;j++){
          if(j===0){
            per500+=5;
          } else if(j===5){
            per500+=5;
          } else if(j===12){
            per500+=5;
          } else{
             per500+=Math.floor(Math.random()*10);
          }
        }   
        if(!pins500.includes(per500)){
           pins500.push(per500);
        }
        per500="";
      }
      cart2={"id": 2, "price": "500", "cards": pins500};
    } else{total500Cell.text('')}
  });
  
  //generate pins for 1000
  let cart3;
  quantity1000Input.on("keyup",(e)=>{
    if(quantity1000Input.val().length!==0 && quantity1000Input.val()!=="0"){
      let quantity1000=parseInt(quantity1000Input.val());
      let amount1000=quantity1000*1000;
      total1000Cell.text(amount1000);
      allPrices[2]=amount1000;
      for(let i=0;i<quantity1000;i++){
        for(let j=0;j<17;j++){
          if(j===0){
            per1000+=3;
          } else if(j===5){
            per1000+=3;
          } else if(j===12){
            per1000+=3;
          } else{
            per1000+=Math.floor(Math.random()*10);
          }
        }
        if(!pins1000.includes(per1000)){
           pins1000.push(per1000);
        }
        per1000="";
      }
      cart3={"id": 3, "price": "1000", "cards": pins1000};
    } else{total1000Cell.text('')}
  });
  
  //contents to be added to cart in the database
  /*let carts=[
    {"id": 1, "price": "200", "cards": pins200},
    {"id": 2, "price": "500", "cards": pins500},
    {"id": 3, "price": "1000", "cards": pins1000}
  ];*/
  
  let scratchcardCart;
  let allscratchcards=[];
  cartBtn.on("click",  ()=>{
    if(quantity200Input.val().length!==0 && quantity200Input.val()!=="0" && quantity500Input.val().length!==0 && quantity500Input.val()!=="0" && quantity1000Input.val().length!==0 && quantity1000Input.val()!=="0"){
      //scratchcardCart=JSON.stringify(carts);
      for(let i=0;i<pins200.length;i++){
        $.ajax({
          url:"http://localhost:3000/card_history",
          method:"POST",
          data:{
            "id":i+1,
            "200":pins200[i]
          },
          dataType:"json",
          success:(data,status)=>{
            if(i===pins200.length-1){
              allscratchcards.push(pins200);
              alert("done with N200");
            }
          },
          error:()=>{}
        });
      }
      for(let i=0;i<pins500.length;i++){
        $.ajax({
          url:"http://localhost:3000/card_history",
          method:"POST",
          data:{
            "id":pins200.length+i+1,
            "500":pins500[i]},
          dataType:"json",
          success:(data,status)=>{
            if(i===pins500.length-1){
              allscratchcards.push(pins500);
              alert("done with N500");
            }
          },
          error:()=>{}
        });
      }
      for(let i=0;i<pins1000.length;i++){
        $.ajax({
          url:"http://localhost:3000/card_history",
          method:"POST",
          data:{
            "id":pins500.length+i+1,
            "1000":pins1000[i]},
          dataType:"json",
          success:(data,status)=>{
            if(i===pins1000.length-1){
              allscratchcards.push(pins1000);
              alert("done with N1000");
            }
          },
          error:()=>{}
        });
      }
    }
  });
  

  buyButton.on("click",  ()=>{

  });
  holdButton.on("click",  ()=>{

  });
  
  
});