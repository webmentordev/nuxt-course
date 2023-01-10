<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias et quam esse nisi ad saepe at natus aspernatur laborum.
        </p>
        {{ data }}
    </div>
  </template>
  
  <script setup>
    // const { data } = await useFetch("/api/server?name=ahmer", {
    //     method: "POST",
    //     body: {
    //         age: 25
    //     }
    // });
    const { data } = await useFetch("/api/server");

  </script>
  
  <style scoped>
      h2{
          margin-bottom: 20px;
          font-size: 36px;
      }
      p{
          margin: 20px 0px;
      }
  </style>