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

<br />

<div id="login" class="login">
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <form on:submit={handleSubmit} class="login">
    <h1>Login</h1>
    <label for="username" />
    <input
      type="text"
      id="username"
      placeholder="Username"
      bind:value={username}
      required
    />
    <br />

    <label for="password" />
    <input
      type="password"
      id="password"
      placeholder="Password"
      bind:value={password}
      required
    />
    <br />

    <button type="submit">Login</button>
  </form>
</div>
<br />

<!--
<h2 class="login">Login with a Giant</h2>
<button onclick="loginWithGitHub()"><i class="fa fa-github"></i></button>
<button onclick="loginWithApple()"><i class="fa fa-apple"></i></button>
<button onclick="loginWithGoogle()"><i class="fa fa-google"></i></button>
-->

<style>
  label {
    display: block;
    margin-bottom: 3px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
  }

  button {
    padding: 10px 20px;
    background-color: var(--primary);
    color: var(--text);
    border: none;
    cursor: pointer;
    border-radius: 2rem;
  }

  button:hover {
    background-color: var(--secondary);
    color: var(--text-alt);
  }
</style>
