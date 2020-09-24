<?php include('form_process.php'); ?>
<link rel="stylesheet" href="./form.css" type="text/css">
<div class="containerForm">  
  <form class="contact" action="<?= $_SERVER['PHP_SELF']?>" method="post">
    <h3>Send us a Message</h3>
    <h4>and get a reply within 24 hours!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" value="<?= $name ?>" tabindex="1" name="name">
      <span class="error"><?= $name_error ?></span>
    </fieldset>
    <fieldset>
      <input placeholder="*Your Email Address" type="text" name="email" value="<?= $email ?>" tabindex="2" >
      <span class="error"><?= $email_error ?></span>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="text" name="phone" value="<?= $phone ?>" tabindex="3" >
      <span class="error"><?= $phone_error ?></span>
    </fieldset>
    
      <textarea placeholder="Type your Message Here...." type="text" name="message" tabindex="5" ></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit2" data-submit="...Sending">Submit</button>
      <span class="success"><?= $success ?></span>
    </fieldset>
  </form>
 
  
</div>