<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindingtext">Data Binding Text</router-link> |
    <router-link to="/databindinginputnumber">Data Binding Number</router-link> |
    <router-link to="/databindingtextarea">Data Binding Textarea</router-link> |
    <router-link to="/databindingselect">Data Binding Select</router-link> |
    <router-link to="/databindingcheckbox">Data Binding Checkbox</router-link> |
    <router-link to="/databindingcheckbox2">Data Binding Checkbox2</router-link> |
    <router-link to="/databindingRadio">Data Binding Radio</router-link> |
    <router-link to="/databindingattribue">Data Binding Attribue</router-link> |
    <router-link to="/databindingbutton">Data Binding Button</router-link> |
    <router-link to="/databindingclass">Data Binding Class</router-link> |
    <router-link to="/databindingclass2">Data Binding Class2</router-link> |
    <router-link to="/databindingstyle">Data Binding Style</router-link> |
    <router-link to="/databindingstyle2">Data Binding Style2</router-link> |
    <router-link to="/databindingList">Data Binding List</router-link> |
    <router-link to="/databindingList2">Data Binding List2</router-link> |
    <router-link to="/renderingvif">Rendering V If</router-link> |
    <router-link to="/eventclick">Event Click</router-link> |
    <router-link to="/eventchange">Event Change</router-link> |
    <router-link to="/nestedcomponent">Nested Component</router-link> |
    <router-link to="/parentcomponent">Parent Component</router-link> |
    <router-link to="/parentcomponent2">Parent Component2</router-link> |
    <router-link to="/parentcomponent3">Parent Component3</router-link> |
    <router-link to="/parentcomponent4">Parent Component4</router-link> |
    <router-link to="/parentcomponent5">Parent Component5</router-link> |
    <router-link to="/provideinject">Provide Inject</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/calculatorcompositionapi">Calculator Composition API</router-link> |
    <router-link to="/calculatorcompositionapi2">Calculator Composition API2</router-link> |
    <router-link to="/calculatorcompositionapi3">Calculator Composition API3</router-link> |
    <router-link to="/compositionapiprovide">Composition API Provide</router-link> |
    <router-link to="/testpage">Test Page</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>