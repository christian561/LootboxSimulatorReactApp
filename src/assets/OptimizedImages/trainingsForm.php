<?php include('trainingsForm_process.php'); ?>
<link rel="stylesheet" href="./form.css" type="text/css">
<div class="containerForm"  id="trainingsForm">  

    
    <form class="contact" style="padding-top:0;" action="<?= $_SERVER['PHP_SELF']?>" method="post">
      <h3>Please enter your contact information:</h3>
      <h4>We will contact you with everything you need to know</h4>
      
        <fieldset>
        
         <div class="shortInput">   
          <label>First name:</label>
            <input placeholder="First Name" type="text" value="<?= $firstName ?>" tabindex="1" name="firstName" id="firstName" autofocus>
            <span class="error"><?= $firstName_error ?></span>

        </div>

        <div class="shortInput">
        <label>Last name:</label>

        <input placeholder="Last Name" type="text" value="<?= $lastName ?>" tabindex="1" name="lastName" id="lastName" autofocus>
        <span class="error"><?= $lastName_error ?></span>

        </div>
        </fieldset>
      

      <fieldset>
            <div  class="shortInput" >
              <label>Address:</label>
            <input placeholder="Your Address" type="text" name="address" value="<?= $address ?>"  name="address" type="text" id="address">
            <span class="error"><?= $address_error ?></span>
          </div>
            <div  class="shortInput">
              <label>City:</label>
            <input placeholder="Your City" type="text" name="city" value="<?= $city ?>" name="city" type="text" id="city">
            <span class="error"><?= $city_error ?></span>
          </div>
      </fieldset>

      <fieldset>
            <div  class="shortInput">
              <label>State:</label>
            <input placeholder="Your State" type="text" name="state" value="<?= $state ?>" name="state" type="text" id="state">
            <span class="error"><?= $state_error ?></span>
          </div>
            <div  class="shortInput">
              <label>Zip:</label>
            <input  placeholder="Your Zip Code" type="text" name="zip" value="<?= $zip ?>" name="zip" type="text" id="zip">
            <span class="error"><?= $zip_error ?></span>
          </div>
      </fieldset>
      <fieldset>  
            <div style="max-width:450px;">
              <label >Phone&nbsp;Number:</label>
            <input placeholder="Your Phone Number" name="phone" type="text" id="phone"  value="<?= $phone ?>">
            <span class="error"><?= $phone_error ?></span>
          </div>

      </fieldset>
      <fieldset>  
            <div style="max-width:450px;">
              <label>E-mail:</label>
            <input  placeholder="Your Email" type="text" name="email" value="<?= $email ?>" name="email" type="text" id="email">
            <span class="error"><?= $email_error ?></span>
          </div>
      </fieldset>
        
        
      <fieldset>    
        <label>I am interested in:
      
      
        <select name="WhichTraining">
      <option value="<?= $training ?> Creating Success FF1201">Creating Success</option> 
      <option value="<?= $training ?> Financial Recovery FF1202">Financial Recovery</option>
      <option value="<?= $training ?> Transitions FF1207">Transitions</option>
      <option value="<?= $training ?> Singles FF1209">Singles</option>
      <option value="<?= $training ?> Couples FF1203">Couples</option>
      <option value="<?= $training ?> Retirement FF1211">Retirement</option>
      <option value="<?= $training ?> Single Parents FF1204">Single Parents</option>
      <option value="<?= $training ?> Business FF1205">Business</option>
      <option value="<?= $training ?> Taxes FF1206">Taxes</option>
      <option value="<?= $training ?> Financial Parenting FF1208">Financial Parenting</option>
      <option value="<?= $training ?> Emerging Adults FF1210">Emerging Adults</option>
      <option value="<?= $training ?> Boomers FF1212">Boomers</option>
      <option value="<?= $training ?> TMM Extended TAP-001">TMM Extended</option>
      <option value="<?= $training ?> P&L Extended TAP-002">P&L Extended</option>
      <option value="<?= $training ?> Credit Card Workshop">Credit Card Workshop</option>
      <option value="<?= $training ?> Personal Money Management Workshop">Personal Money Management</option>
      <option value="<?= $training ?> Free Education Series">Free Education Series</option>
        </select> 
      </fieldset>
  
    <table width="87%" >
      
      <label  class="greenUnderline">Sign up for the next open training:</label>
        <tr valign="top">
    <td width="58%">
      <br />
      <fieldset style="
    padding-right: 20px;">
          <label style="margin-bottom: 10px;">I will be available for a training in: </label><br />
            <font size="2">
              <div id="monthContainer">
              <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Jan">&nbsp;Jan</div> 
              <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Feb">&nbsp;Feb</div> 
              <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Mar">&nbsp;Mar</div> 
              <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Apr">&nbsp;Apr</div> 
              <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> May">&nbsp;May</div> 
              <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Jun">&nbsp;Jun</div>
              
            <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Jul">&nbsp;Jul</div> 
            <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Aug">&nbsp;Aug</div> 
            <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Sep">&nbsp;Sep</div> 
            <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Oct">&nbsp;Oct</div> 
            <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Nov">&nbsp;Nov</div> 
            <div class="monthInput"><input type="radio" name="month" value="<?= $month ?> Dec">&nbsp;Dec</div>
              </div>
      </font>
      </fieldset>
    </p>
      </td>
      <td>
      
        <br />
            <label style="margin-bottom: 10px;">
      Message: </label><br />
            </font>
      </font>
      
          <textarea  cols="25" rows="4" id="brief explanation" placeholder="Please give us a brief explanation of what you hope to achieve from this class" type="text" name="explanation"></textarea>
          <br />
      <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send Me Information
      </button>
      <span class="success"><?= $success ?></span>
      <span class="error"><?= $error ?></span>
    </fieldset>
      
            
      
      </td>
        </form>
      </tr>
  </table>
    </td>
  </tr>
</table>

      </td>
                </tr>
          </table>
    </td>
      </tr>
      </table>
  </td>
    </tr>
  </table>
</div>
</div>