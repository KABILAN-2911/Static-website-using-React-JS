import React from "react";

const Content =() =>
{
    return(
<>
        <div class="mt-5  container w-50">
             <table class="table table-bordered text-center shadow">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gokul</td>
        <td>A N</td>
        <td>gokulnatarajmoorthy@gmail.com</td>
      </tr>
      <tr>
        <td>Irshad</td>
        <td>Raja</td>
        <td>irshadirfanaraja@gmail.com</td>
      </tr>
      <tr>
        <td>Hari</td>
        <td>Sudhan</td>
        <td>harisudhan431@gmail.com</td>
      </tr>
      <tr>
        <td>Hesventh</td>
        <td>Kumar</td>
        <td>hesventh@gmail.com</td>
      </tr>
    </tbody>
  </table>
            

        </div>

        <div class="container w-50 mt-5 border border-black bg-white p-2 rounded shadow">
        <form action="/action_page.php">
  <div class="form-group">
    <label for="email" class="fw-bold">Email address:</label>
    <input type="email" class="form-control" id="email" required/>
  </div>
  <div class="form-group">
    <label for="pwd" class="fw-bold">Password:</label>
    <input  type="password" class="form-control"  required/>
  </div>
 <div class="text-center">
 <button type="submit" class="btn btn-primary mt-3 text-center w-25">Submit</button>
 </div>

</form>
        </div>

</>

    );
}

export default Content;