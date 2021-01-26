function validate() {
      
    if( document.myForm.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       //alert( "Please provide your Email!" );
        var x=document.myform.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
        }
     document.myForm.EMail.focus() ;
     return false;
    
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
       document.myForm.Zip.value.length != 6 ) {
       
       alert( "Please provide a zip in the format ######." );
       document.myForm.Zip.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" ) {
       alert( "Please provide your country!" );
       return false;
    }
    return( true );
}