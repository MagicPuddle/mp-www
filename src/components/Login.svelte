<script>
  let username = "";
  let password = "";
  let error = "";

  async function handleSubmit() {
    // You can add your authentication logic here.
    // Send a POST request to your backend with the entered username and password.
    // Handle the response accordingly.

    // For demonstration purposes, let's assume successful login here.
    if (username === "demo" && password === "password") {
      error = "";
      // Redirect the user or perform other actions upon successful login.
    } else {
      error = "Invalid username or password";
    }
  }
</script>

<div id="login" class="login">
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <form on:submit={handleSubmit} class="login">
    <label for="username" />
    <input
      type="text"
      id="username"
      placeholder="Username"
      bind:value={username}
      required
    />
    <label for="password" />
    <input
      type="password"
      id="password"
      placeholder="Password"
      bind:value={password}
      required
    />
    <button type="submit">Login</button>
  </form>
  <p>Create an account? <a href="register">Sign Up</a></p>
  <p>Forgot password? <a href="reset-passwd">Reset It</a></p>
</div>

<!--
<h2 class="login">SSO Login</h2>
<button class="onclick" onclick="loginWithGitHub()"><i class="fa-regular fa-github"></i></button>
<button class="onclick" onclick="loginWithApple()"><i class="fa-regular fa-apple"></i></button>
<button class="onclick" onclick="loginWithGoogle()"><i class="fa-regular fa-google"></i></button>
-->
<style>

</style>
