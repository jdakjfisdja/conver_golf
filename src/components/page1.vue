<template>
    <div id="app">
        <h1>Conver Golf</h1>
        <p>スタートページ
        </p>
        <router-link to= "/page2" class="to_page2_button"> ● </router-link>
    </div>
</template>

<script>
</script>

<style>
h1{
  color: #ff2222;
  font-size: 24pt
}
.to_page2_button {
  display: block;
  position: relactive;
  margin: 0 auto;
  font-size:30pt;
  width: 60px;
  height: 60px;
  color: #F00;
  border: solid 1px silver;
  background-color: rgba(100,100,100,1);
  background-image: linear-gradient(to top left, rgba(0, 0, 0, .2),
                                                    rgba(0, 0, 0, .2) 30%
                                                    rgba(0,0,0,0) );
  border-radius: 40px;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
}
.to_page2_button .fa:active{
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
}
</style>
